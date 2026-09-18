/* Beauty Room media assets integration — 2026-09-18 */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const INTRO_SRC='intro-logo.webp';
  const BRAND_SRC='header-logo.webp';
  const ABOUT_SRC='about-salon.webp';
  const VIDEO_SRC='hero-video-optimized.mp4';

  function ensureStyle(){
    if(document.getElementById('beautyroom-media-assets-v1')) return;
    const style=document.createElement('style');
    style.id='beautyroom-media-assets-v1';
    style.textContent=`
      @media(max-width:767px){
        /* Intro splash: real salon logo/image, then a soft blur-away reveal. */
        #stluxe-tanem-v13 #tn13Intro.br-media-intro{
          display:grid!important;
          position:fixed!important;
          z-index:9999!important;
          inset:0!important;
          place-items:center!important;
          background:#f8f4ee!important;
          opacity:1!important;
          visibility:visible!important;
          pointer-events:auto!important;
          animation:brIntroSafetyExit 1.65s cubic-bezier(.22,.72,.28,1) forwards!important;
          transition:opacity .85s ease,filter .85s cubic-bezier(.22,.72,.28,1),transform .85s cubic-bezier(.22,.72,.28,1)!important;
          filter:blur(0)!important;
          transform:scale(1)!important;
          overflow:hidden!important;
        }
        @keyframes brIntroSafetyExit{
          0%,48%{opacity:1;filter:blur(0);transform:scale(1);visibility:visible;pointer-events:auto}
          100%{opacity:0;filter:blur(18px);transform:scale(1.055);visibility:hidden;pointer-events:none}
        }
        #stluxe-tanem-v13 #tn13Intro.br-media-intro.br-intro-out{
          opacity:0!important;
          filter:blur(18px)!important;
          transform:scale(1.055)!important;
          pointer-events:none!important;
        }
        #stluxe-tanem-v13 #tn13Intro.br-media-intro.br-intro-hidden{
          display:none!important;
          visibility:hidden!important;
        }
        #stluxe-tanem-v13 #tn13Intro .br-intro-image{
          display:block!important;
          width:min(50vw,220px)!important;
          max-width:220px!important;
          max-height:38svh!important;
          height:auto!important;
          object-fit:contain!important;
          opacity:1!important;
          transform:none!important;
          user-select:none!important;
          -webkit-user-drag:none!important;
        }

        /* Top-left text is replaced by the supplied logo asset. */
        #stluxe-tanem-v13 .tn22-brand.br-logo-brand{
          display:flex!important;
          align-items:center!important;
          justify-content:flex-start!important;
          height:52px!important;
          width:auto!important;
          max-width:250px!important;
          overflow:visible!important;
        }
        #stluxe-tanem-v13 .tn22-brand.br-logo-brand img{
          display:block!important;
          width:auto!important;
          height:64px!important;
          max-width:235px!important;
          object-fit:contain!important;
          object-position:left center!important;
          filter:none!important;
        }

        /* Hero video occupies exactly the old image area and keeps the soft lower blend. */
        #stluxe-tanem-v13 .tn22-media.br-video-media{
          position:absolute!important;
          overflow:hidden!important;
          background:#eee!important;
        }
        #stluxe-tanem-v13 .tn22-media.br-video-media .br-hero-video{
          position:absolute!important;
          inset:0!important;
          width:100%!important;
          height:100%!important;
          display:block!important;
          object-fit:cover!important;
          object-position:center center!important;
          border:0!important;
          margin:0!important;
          padding:0!important;
          background:#eee!important;
          pointer-events:none!important;
        }
        #stluxe-tanem-v13 .tn22-media.br-video-media:after{
          content:''!important;
          position:absolute!important;
          z-index:2!important;
          left:0!important;
          right:0!important;
          bottom:0!important;
          height:120px!important;
          background:linear-gradient(180deg,rgba(248,244,238,0) 0%,rgba(248,244,238,.32) 44%,#f8f4ee 96%)!important;
          pointer-events:none!important;
        }

        /* About card photo from the supplied asset. */
        #stluxe-tanem-v13 #tn38About .tn42-photo img.br-about-image{
          width:100%!important;
          height:100%!important;
          object-fit:cover!important;
          object-position:center center!important;
          display:block!important;
          filter:none!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function applyIntro(root){
    const intro=root.querySelector('#tn13Intro');
    if(!intro || intro.dataset.brMediaReady==='1') return;
    intro.dataset.brMediaReady='1';
    intro.className='tn13-intro br-media-intro';
    intro.innerHTML='<img class="br-intro-image" src="'+INTRO_SRC+'" alt="Beauty Room by Esmeralda" decoding="async" fetchpriority="high">';

    let finished=false;
    const finishIntro=()=>{
      if(finished) return;
      finished=true;
      intro.classList.add('br-intro-out','br-intro-hidden');
      intro.setAttribute('aria-hidden','true');
      if(intro.parentNode) intro.parentNode.removeChild(intro);
    };

    /*
      Do not lock document scrolling here. Older Safari versions can suspend the
      first animation frame while restoring a tab, leaving the splash and the
      overflow lock in place forever. CSS closes the splash independently; the
      timers and lifecycle listeners below are redundant safety exits.
    */
    window.setTimeout(()=>intro.classList.add('br-intro-out'),780);
    window.setTimeout(finishIntro,1680);
    intro.addEventListener('animationend',finishIntro,{once:true});
    window.addEventListener('pageshow',()=>window.setTimeout(finishIntro,1680),{once:true});
    document.addEventListener('visibilitychange',()=>{
      if(!document.hidden) window.setTimeout(finishIntro,120);
    },{once:true});
  }

  function applyBrand(root){
    const brand=root.querySelector('.tn22-brand');
    if(!brand || brand.dataset.brLogoReady==='1') return;
    brand.dataset.brLogoReady='1';
    brand.classList.add('br-logo-brand');
    brand.setAttribute('aria-label','Beauty Room by Esmeralda');
    brand.innerHTML='<img src="'+BRAND_SRC+'" alt="Beauty Room by Esmeralda" decoding="async">';
  }

  function applyHeroVideo(root){
    const media=root.querySelector('.tn22-media');
    if(!media || media.dataset.brVideoReady==='1') return;
    media.dataset.brVideoReady='1';
    media.classList.add('br-video-media');
    media.setAttribute('aria-label','Видео Beauty Room by Esmeralda');
    media.innerHTML='<video class="br-hero-video" muted loop playsinline webkit-playsinline preload="none" poster="interior_reception_02.webp"></video>';
    const video=media.querySelector('video');
    if(video){
      video.muted=true;
      video.defaultMuted=true;
      let started=false;
      const tryPlay=()=>{const p=video.play();if(p&&typeof p.catch==='function')p.catch(()=>{});};
      const startVideo=()=>{
        if(started)return;
        started=true;
        video.src=VIDEO_SRC;
        video.preload='metadata';
        video.load();
        if(video.readyState>=2) tryPlay();
        else video.addEventListener('canplay',tryPlay,{once:true});
      };
      const queueVideo=()=>{
        if('requestIdleCallback' in window) window.requestIdleCallback(startVideo,{timeout:2600});
        else window.setTimeout(startVideo,2200);
      };
      window.setTimeout(queueVideo,1700);
      document.addEventListener('visibilitychange',()=>{if(!document.hidden){startVideo();tryPlay();}});
    }
  }

  function applyAbout(root){
    const img=root.querySelector('#tn38About .tn42-photo img');
    if(!img || img.dataset.brAboutReady==='1') return;
    img.dataset.brAboutReady='1';
    img.classList.add('br-about-image');
    img.src=ABOUT_SRC;
    img.alt='Beauty Room by Esmeralda';
    img.loading='lazy';
  }


  function removeDropText(scope){
    const root=scope||document.body;
    if(!root) return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      const value=node.nodeValue||'';
      if(/drop\s*n/i.test(value)){
        node.nodeValue=value.replace(/drop\s*n(?:\s+drop\s*n)?/gi,'').trim();
      }
    });
  }

  function openExternalLinks(root){
    root.querySelectorAll('a[href]').forEach(a=>{
      const href=(a.getAttribute('href')||'').trim();
      if(/^https?:\/\//i.test(href)){
        if(a.target!=='_blank') a.target='_blank';
        if(a.rel!=='noopener noreferrer') a.rel='noopener noreferrer';
      }
    });
  }

  function apply(){
    ensureStyle();
    const root=document.getElementById('stluxe-tanem-v13');
    if(!root) return false;
    applyIntro(root);
    applyBrand(root);
    applyHeroVideo(root);
    applyAbout(root);
    removeDropText(root);
    openExternalLinks(root);
    if(!root.dataset.brDropObserver){
      root.dataset.brDropObserver='1';
      new MutationObserver(()=>removeDropText(root)).observe(root,{childList:true,subtree:true,characterData:true});
    }
    return true;
  }

  let attempts=0;
  const timer=setInterval(()=>{
    attempts+=1;
    if(apply() || attempts>100) clearInterval(timer);
  },80);
  apply();
})();
