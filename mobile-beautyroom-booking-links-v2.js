/* Beauty Room booking/link polish — 2026-09-18 */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const VIBER_URL='https://viber.click/+37493873617?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAxMjE3OTgxNjQ0ODc5NjI4AAGnKgcjy-6HhcuLc_MuDkJ97YUYwrc_aajRFuRtDzdWgQ9tZd4mBP4_GHBup2k_aem_GiL4aRD9GtOMin9rQKGYYw';

  function ensureStyle(){
    if(document.getElementById('beautyroom-booking-links-v2')) return;
    const style=document.createElement('style');
    style.id='beautyroom-booking-links-v2';
    style.textContent=`
      @media(max-width:767px){
        /* Booking sheet: smooth entrance from the bottom, not a sudden appear. */
        #stluxe-tanem-v13 #tn13BookSheet{
          display:flex!important;
          align-items:flex-end!important;
          background:rgba(37,29,26,.34)!important;
          opacity:0!important;
          visibility:hidden!important;
          pointer-events:none!important;
          transition:opacity .28s ease,visibility .28s ease!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet.open{
          opacity:1!important;
          visibility:visible!important;
          pointer-events:auto!important;
          z-index:700!important;
          overscroll-behavior:contain!important;
          touch-action:none!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet.open .tn13-panel{
          touch-action:pan-y!important;
        }
        #stluxe-tanem-v13 #tn13Gallery.open{
          z-index:700!important;
          overscroll-behavior:contain!important;
          touch-action:pan-y!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet .tn13-panel{
          transform:translate3d(0,104%,0)!important;
          transition:transform .42s cubic-bezier(.22,.76,.26,1)!important;
          will-change:transform!important;
          background:#f8f4ee!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet.open .tn13-panel{
          transform:translate3d(0,0,0)!important;
        }

        /* Phone/Viber choices: oval, filled beige, no decorative looping animation. */
        #stluxe-tanem-v13 #tn13BookSheet .tn50-book-options{
          gap:10px!important;
          margin-top:20px!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet .tn50-book-option{
          min-height:60px!important;
          border:1px solid rgba(92,72,62,.13)!important;
          border-radius:999px!important;
          padding:9px 15px!important;
          background:#e6d9cf!important;
          color:#2c2521!important;
          box-shadow:none!important;
          animation:none!important;
          transition:transform .12s ease,background .12s ease,border-color .12s ease!important;
          -webkit-tap-highlight-color:transparent!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet .tn50-book-option:active{
          transform:translateY(2px) scale(.985)!important;
          background:#d7c6b9!important;
          border-color:rgba(92,72,62,.22)!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet .tn50-book-icon{
          border-radius:50%!important;
          background:#f4ece6!important;
          color:#6f574d!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet .tn50-book-icon.phone,
        #stluxe-tanem-v13 #tn13BookSheet .tn50-book-icon.viber-generic{
          background:#f4ece6!important;
          color:#6f574d!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet .tn50-book-arrow{
          color:#725d54!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet .tn13-close{
          animation:none!important;
          transition:transform .12s ease,background .12s ease!important;
          -webkit-tap-highlight-color:transparent!important;
        }
        #stluxe-tanem-v13 #tn13BookSheet .tn13-close:active{
          transform:scale(.92)!important;
          background:#dfd1c7!important;
        }

        /* Booking buttons use only a clean press response. */
        #stluxe-tanem-v13 [data-book],
        #stluxe-tanem-v13 .tn22-call,
        #stluxe-tanem-v13 .tn22-route{
          -webkit-tap-highlight-color:transparent!important;
        }
        #stluxe-tanem-v13 [data-book]:active,
        #stluxe-tanem-v13 .tn22-call:active,
        #stluxe-tanem-v13 .tn22-route:active{
          transform:translateY(2px) scale(.985)!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function forceExternalLinks(scope){
    (scope||document).querySelectorAll('a[href]').forEach(a=>{
      const raw=(a.getAttribute('href')||'').trim();
      const label=(a.textContent||'').trim().toLowerCase();

      if(/^viber:/i.test(raw) || label.includes('viber')){
        if(raw!==VIBER_URL) a.setAttribute('href',VIBER_URL);
      }

      const href=(a.getAttribute('href')||'').trim();
      if(/^https?:\/\//i.test(href)){
        if(a.getAttribute('target')!=='_blank') a.setAttribute('target','_blank');
        if(a.getAttribute('rel')!=='noopener noreferrer') a.setAttribute('rel','noopener noreferrer');
      }
    });
  }

  function patchBooking(root){
    const sheet=root.querySelector('#tn13BookSheet');
    if(!sheet) return false;

    const panel=sheet.querySelector('.tn13-panel');
    if(panel){
      panel.querySelectorAll('.br-book-phone-art').forEach(el=>el.remove());
    }

    const phoneOption=[...sheet.querySelectorAll('.tn50-book-option')].find(a=>(a.textContent||'').toLowerCase().includes('телефон'));
    if(phoneOption){
      const phoneIcon=phoneOption.querySelector('.tn50-book-icon');
      if(phoneIcon && phoneIcon.dataset.brPhoneReady!=='1'){
        phoneIcon.dataset.brPhoneReady='1';
        phoneIcon.classList.add('phone');
        phoneIcon.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z"/></svg>';
      }
    }

    sheet.querySelectorAll('.tn50-book-option').forEach(a=>{
      const label=(a.textContent||'').toLowerCase();
      if(label.includes('viber')){
        if(a.getAttribute('href')!==VIBER_URL) a.setAttribute('href',VIBER_URL);
        if(a.getAttribute('target')!=='_blank') a.setAttribute('target','_blank');
        if(a.getAttribute('rel')!=='noopener noreferrer') a.setAttribute('rel','noopener noreferrer');
      }
    });

    return true;
  }


  let pageLocked=false;
  let lockedScrollY=0;

  function setPageLock(shouldLock){
    if(shouldLock && !pageLocked){
      pageLocked=true;
      lockedScrollY=window.scrollY||window.pageYOffset||0;
      document.documentElement.style.overflow='hidden';
      document.body.style.position='fixed';
      document.body.style.top='-'+lockedScrollY+'px';
      document.body.style.left='0';
      document.body.style.right='0';
      document.body.style.width='100%';
      document.body.style.overflow='hidden';
      document.body.style.touchAction='none';
      return;
    }
    if(!shouldLock && pageLocked){
      pageLocked=false;
      document.documentElement.style.overflow='';
      document.body.style.position='';
      document.body.style.top='';
      document.body.style.left='';
      document.body.style.right='';
      document.body.style.width='';
      document.body.style.overflow='';
      document.body.style.touchAction='';
      window.scrollTo(0,lockedScrollY);
    }
  }

  function syncPageLock(root){
    if(!root) return;
    const active=!!root.querySelector('#tn13BookSheet.open,#tn13Gallery.open,#tn13MasterSheet.open,.tn22-viewer.open');
    setPageLock(active);
  }

  function apply(){
    ensureStyle();
    forceExternalLinks(document);

    const root=document.getElementById('stluxe-tanem-v13');
    if(!root) return false;

    patchBooking(root);
    forceExternalLinks(root);
    syncPageLock(root);

    if(!root.dataset.brExternalObserver){
      root.dataset.brExternalObserver='1';
      const observer=new MutationObserver(()=>syncPageLock(root));
      observer.observe(root,{subtree:true,attributes:true,attributeFilter:['class']});
    }
    return true;
  }

  let attempts=0;
  const timer=setInterval(()=>{
    attempts+=1;
    if(apply() || attempts>80) clearInterval(timer);
  },100);
  apply();
})();
