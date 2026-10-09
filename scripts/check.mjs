import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';

const root=process.cwd();
const files=(await readdir(root)).filter(f=>f.endsWith('.html'));
const failures=[];
let checkedLinks=0;
const exists=async path=>{try{return (await stat(path)).isFile();}catch{return false;}};
for(const file of files){
  const html=await readFile(file,'utf8');
  if(!/<meta name="robots" content="noindex/.test(html))failures.push(`${file}: no noindex directive`);
  if(!/<meta name="viewport"/.test(html))failures.push(`${file}: no viewport`);
  if((html.match(/<h1\b/g)||[]).length!==1)failures.push(`${file}: expected one h1`);
  if(!/<html lang=/.test(html)||!/<title>.+?<\/title>/.test(html))failures.push(`${file}: language/title missing`);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  if(new Set(ids).size!==ids.length)failures.push(`${file}: duplicate ids`);
  for(const m of html.matchAll(/<(?:a|img|script|link|iframe)\b[^>]*?\b(?:href|src)="([^"]+)"/g)){
    const ref=m[1];
    if(/^(https?:|mailto:|tel:|data:)/.test(ref))continue;
    let [target,fragment]=ref.split('#');
    target=target.split('?')[0].replace(/^\/obiren-solicitors-preview\//,'');
    const path=target?resolve(dirname(resolve(root,file)),target):resolve(root,file);
    checkedLinks++;
    if(!(await exists(path))){failures.push(`${file}: missing ${ref}`);continue;}
    if(fragment&&path.endsWith('.html')){
      const content=await readFile(path,'utf8');
      if(!content.includes(`id="${fragment}"`))failures.push(`${file}: missing anchor ${ref}`);
    }
  }
  for(const m of html.matchAll(/<img\b[^>]*>/g)){
    if(!/\balt=/.test(m[0])||!/\bwidth=/.test(m[0])||!/\bheight=/.test(m[0]))failures.push(`${file}: image alt/dimensions missing`);
  }
}
const weights={};
for(const file of ['index.html','styles.css','app.js','assets/original-mark.png','assets/four.webp','assets/property1.webp'])weights[file]=(await stat(file)).size;
const firstView=['index.html','styles.css','app.js','assets/original-mark.png','assets/four.webp'].reduce((n,f)=>n+weights[f],0);
const contrast=(a,b)=>{
  const lum=hex=>{const rgb=hex.match(/../g).map(x=>parseInt(x,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
  const l=[lum(a),lum(b)].sort((x,y)=>y-x);return +((l[0]+.05)/(l[1]+.05)).toFixed(2);
};
const contrastRatios={inkOnPaper:contrast('202628','f8f9f9'),mutedOnPaper:contrast('586267','f8f9f9'),whiteOnCopper:contrast('ffffff','a64016'),copperOnPaper:contrast('a64016','f8f9f9')};
if(Object.values(contrastRatios).some(r=>r<4.5))failures.push('Text token contrast below 4.5:1');
const result={pages:files.length,checkedLocalReferences:checkedLinks,weightsBytes:weights,initialHomeBytesUncompressed:firstView,fullHomeBytesUncompressed:firstView+weights['assets/property1.webp'],contrastRatios,failures};
console.log(JSON.stringify(result,null,2));
if(failures.length)process.exitCode=1;
