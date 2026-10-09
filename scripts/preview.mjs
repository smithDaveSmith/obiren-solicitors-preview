import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=process.cwd();
const args=process.argv.slice(2);
const port=Number(args[args.indexOf('--port')+1])||4173;
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8','.json':'application/json'};
createServer(async(req,res)=>{
  try{
    const url=new URL(req.url,'http://localhost');
    let path=resolve(root,'.'+decodeURIComponent(url.pathname));
    if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403).end();return;}
    if((await stat(path)).isDirectory())path=resolve(path,'index.html');
    res.writeHead(200,{'Content-Type':mime[extname(path)]||'application/octet-stream','Cache-Control':'no-store'});
    res.end(await readFile(path));
  }catch{res.writeHead(404,{'Content-Type':'text/plain'}).end('Not found');}
}).listen(port,'0.0.0.0',()=>console.log(`Preview ready on port ${port}`));
