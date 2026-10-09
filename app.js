document.documentElement.classList.add('js-ready');
const menuButton=document.querySelector('[data-menu]');
const nav=document.querySelector('#main-navigation');
function closeMenu(){if(!menuButton||!nav)return;nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu';}
menuButton?.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')!=='true';
  nav.classList.toggle('is-open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'Close':'Menu';
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton?.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
nav?.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
const mobileQuery=window.matchMedia('(max-width: 760px)');
mobileQuery.addEventListener('change',closeMenu);
const form=document.querySelector('#enquiry-form');
if(form){
  form.closest('[data-draft]').hidden=false;
  const status=document.querySelector('#form-status');
  const draftLink=document.querySelector('#draft-link');
  for(const field of [form.elements.name,form.elements.message]){
    field.addEventListener('input',()=>field.setCustomValidity(field.value.trim()?'':'Please complete this field.'));
  }
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const name=String(data.get('name')||'').trim();
    const email=String(data.get('email')||'').trim();
    const phone=String(data.get('phone')||'').trim();
    const topic=String(data.get('topic')||'General enquiry');
    const message=String(data.get('message')||'').trim();
    if(!name||!message){status.hidden=false;status.querySelector('p').textContent='Please include your name and a short message.';draftLink.hidden=true;return;}
    const body=`Name: ${name}\nEmail: ${email}\nPhone: ${phone||'Not supplied'}\nMatter: ${topic}\n\n${message}`;
    const subject=topic==='General enquiry'?topic:topic+' enquiry';
    draftLink.href=`mailto:info@obriensolicitors.com?subject=${encodeURIComponent(subject+' — '+name)}&body=${encodeURIComponent(body)}`;
    draftLink.hidden=false;status.hidden=false;status.querySelector('p').textContent='Your draft is ready. Nothing has been sent. Open it in your email app, review it and send it yourself.';
    status.focus({preventScroll:true});
  });
  form.addEventListener('input',()=>{status.hidden=true;draftLink.removeAttribute('href');});
}
