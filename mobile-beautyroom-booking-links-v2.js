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

        /* Small phone illustration in the booking card. */
        #stluxe-tanem-v13 .br-book-phone-art{
          width:88px!important;
          height:118px!important;
          margin:0 auto 14px!important;
          border-radius:24px!important;
          display:grid!important;
          place-items:center!important;
          background:linear-gradient(145deg,#eadfd5,#d8c8bb)!important;
          box-shadow:0 12px 28px rgba(77,59,50,.10)!important;
        }
        #stluxe-tanem-v13 .br-book-phone-art svg{
          width:58px!important;
          height:86px!important;
          display:block!important;
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
        a.setAttribute('href',VIBER_URL);
      }

      const href=(a.getAttribute('href')||'').trim();
      if(/^https?:\/\//i.test(href)){
        a.setAttribute('target','_blank');
        a.setAttribute('rel','noopener noreferrer');
      }
    });
  }

  function patchBooking(root){
    const sheet=root.querySelector('#tn13BookSheet');
    if(!sheet) return false;

    const panel=sheet.querySelector('.tn13-panel');
    if(panel && !panel.querySelector('.br-book-phone-art')){
      const art=document.createElement('div');
      art.className='br-book-phone-art';
      art.setAttribute('aria-hidden','true');
      art.innerHTML=`
        <svg viewBox="0 0 64 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="3" width="44" height="86" rx="12" fill="#F8F3EF" stroke="#8A6E62" stroke-width="1.6"/>
          <rect x="15" y="11" width="34" height="61" rx="7" fill="#E8D9CE"/>
          <circle cx="32" cy="80" r="3" fill="#8A6E62"/>
          <path d="M23 34.5C26 29.5 29.5 27 32 27C34.5 27 38 29.5 41 34.5" stroke="#8A6E62" stroke-width="1.7" stroke-linecap="round"/>
          <path d="M22 43H42" stroke="#8A6E62" stroke-width="1.7" stroke-linecap="round"/>
          <text x="32" y="55" text-anchor="middle" font-family="Georgia, serif" font-size="8" fill="#6E554B">BEAUTY</text>
          <text x="32" y="63" text-anchor="middle" font-family="Georgia, serif" font-size="8" fill="#6E554B">ROOM</text>
        </svg>`;
      const kicker=panel.querySelector('.tn13-kicker');
      if(kicker) kicker.insertAdjacentElement('afterend',art);
      else panel.prepend(art);
    }

    sheet.querySelectorAll('.tn50-book-option').forEach(a=>{
      const label=(a.textContent||'').toLowerCase();
      if(label.includes('viber')){
        a.href=VIBER_URL;
        a.target='_blank';
        a.rel='noopener noreferrer';
      }
    });

    return true;
  }

  function apply(){
    ensureStyle();
    forceExternalLinks(document);

    const root=document.getElementById('stluxe-tanem-v13');
    if(!root) return false;

    patchBooking(root);
    forceExternalLinks(root);

    if(!root.dataset.brExternalObserver){
      root.dataset.brExternalObserver='1';
      const observer=new MutationObserver(()=>{
        patchBooking(root);
        forceExternalLinks(root);
      });
      observer.observe(root,{childList:true,subtree:true,attributes:true,attributeFilter:['href']});
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