/* Beauty Room mobile loader: STLuxe-aligned final client polish. */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const base=document.createElement('script');
  base.src='mobile-beautyroom-base.js?v=20260917-finalbase';
  base.async=false;
  base.onload=()=>{
    const style=document.createElement('style');
    style.id='beautyroom-final-client-polish';
    style.textContent=`
    @media(max-width:767px){
      /* HERO: current STLuxe geometry, Beauty Room colors only. */
      #stluxe-tanem-v13 .tn13-hero{height:744px!important;min-height:744px!important;padding:0!important;background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 90%,#f7f2eb 100%)!important;position:relative!important;overflow:hidden!important}
      .tn22-media{top:52px!important;height:372px!important}
      .tn22-card{top:343px!important;bottom:0!important;height:auto!important;display:block!important;padding:20px 20px 24px!important;border-radius:13px 13px 0 0!important}
      .tn22-cta{width:min(100%,330px)!important;height:50px!important;margin:18px auto 0!important;border-radius:8px!important;background:#715b53!important;color:#fff!important;transition:transform .14s ease,background .14s ease!important}
      .tn22-cta:active{transform:translateY(1px) scale(.992)!important;background:#654f48!important}
      .tn22-worklink{width:min(100%,330px)!important;height:48px!important;margin:10px auto 0!important;border-radius:8px!important;border:1px solid rgba(113,91,83,.38)!important;background:#efe7e1!important;color:#2f2926!important;transition:transform .14s ease,background .14s ease,color .14s ease!important}
      .tn22-worklink:active{transform:translateY(2px) scale(.988)!important;background:#715b53!important;color:#fff!important;border-color:#715b53!important}

      /* SERVICES: same dark block, with proper edge spacing for category chips. */
      #tn13Services{background:#242424!important;color:#f3f3f3!important;border-color:rgba(255,255,255,.08)!important}
      #tn13Services .tn22-kicker{color:#bdbdbd!important}
      #tn13Services h2,#tn13Services .tn31-service-name{color:#f5f5f5!important}
      #tn13Services .tn31-cats-wrap{margin:25px -25px 0!important}
      #tn13Services .tn31-cats{padding:0 25px 11px!important;scroll-padding-inline:25px!important;box-sizing:border-box!important}
      #tn13Services .tn31-cat{border-color:rgba(255,255,255,.20)!important;color:#d2d2d2!important;background:rgba(255,255,255,.03)!important}
      #tn13Services .tn31-cat.active{background:#e7e7e7!important;border-color:#e7e7e7!important;color:#202020!important}
      #tn13Services .tn31-service-list{border-color:rgba(255,255,255,.16)!important}
      #tn13Services .tn31-service-row{border-color:rgba(255,255,255,.14)!important}
      #tn13Services .tn31-service-detail{color:#bdbdbd!important}
      #tn13Services .tn31-service-book{color:#e0e0e0!important}
      #tn13Services .tn31-service-more{border-color:rgba(255,255,255,.24)!important;background:rgba(255,255,255,.04)!important;color:#f2f2f2!important}
      #tn13Services .tn31-service-more span:last-child{color:#d3d3d3!important}

      /* TEAM: current STLuxe structure, dark background matching services. */
      #tn13Team{margin:0!important;padding:0!important;background:#242424!important;color:#f5f5f5!important}
      #tn13Team .tn22-team{padding:42px 28px 38px!important;overflow:hidden!important}
      #tn13Team .tn22-kicker{color:#bdbdbd!important}
      #tn13Team h2{font-size:40px!important;color:#f5f5f5!important}
      #tn13Team .tn22-team-grid{display:flex!important;grid-template-columns:none!important;gap:14px!important;margin:30px 0 0!important;padding:0 0 8px!important;overflow-x:auto!important;overflow-y:hidden!important;overscroll-behavior-inline:contain!important;-webkit-overflow-scrolling:touch!important;scroll-snap-type:x proximity!important;scrollbar-width:none!important}
      #tn13Team .tn22-master-card{flex:0 0 136px!important;width:auto!important;min-width:136px!important;scroll-snap-align:start!important;border:0!important;background:none!important;padding:0!important;text-align:center!important;color:#f5f5f5!important}
      #tn13Team .tn22-master-circle{width:100%!important;aspect-ratio:1/1!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:linear-gradient(145deg,#4a4542,#34302e)!important;overflow:hidden!important;color:#d8d0ca!important;border:1px solid rgba(255,255,255,.08)!important}
      #tn13Team .tn22-master-name{display:block!important;margin-top:11px!important;font:500 20px/1 'Cormorant Garamond',Georgia,serif!important;color:#f5f5f5!important;white-space:normal!important}
      #tn13Team .tn22-master-role{display:block!important;margin-top:5px!important;font:400 10px/1.3 'Manrope',Arial,sans-serif!important;color:#bdb5b0!important}
      #tn13Team .tn42-team-hint{display:block!important;margin-top:8px!important;text-align:right!important;color:#b7afa9!important;font:500 9px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important}

      /* REVIEWS: exact current STLuxe structure and sizing. */
      #tn13Reviews{margin:0!important;padding:0!important;background:#e9e2da!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07)!important;border-bottom:1px solid rgba(62,51,44,.07)!important}
      #tn13Reviews .tn30-reviews{padding:44px 0 46px!important}
      #tn13Reviews .tn30-reviews>.tn22-kicker,#tn13Reviews .tn30-reviews>h2{margin-left:24px!important;margin-right:24px!important}
      #tn13Reviews .tn30-reviews .tn22-kicker{color:#746c66!important}
      #tn13Reviews .tn30-reviews h2{margin-top:16px!important;font:500 46px/.96 'Cormorant Garamond',Georgia,serif!important;letter-spacing:-.03em!important;color:#171513!important}
      #tn13Reviews .tn30-score{text-align:center!important;margin-top:43px!important}
      #tn13Reviews .tn30-score strong{display:block!important;font:500 84px/.82 'Cormorant Garamond',Georgia,serif!important;color:#171513!important}
      #tn13Reviews .tn30-stars{margin-top:20px!important;color:#b78d4f!important;font-size:27px!important;letter-spacing:6px!important}
      #tn13Reviews .tn30-count{margin-top:14px!important;font:400 13px/1 'Manrope',Arial,sans-serif!important;color:#716862!important}
      #tn13Reviews .tn30-review-stage{display:grid!important;gap:12px!important;margin:37px 0 0!important;overflow:hidden!important;touch-action:pan-y!important;cursor:grab!important;user-select:none!important}
      #tn13Reviews .tn30-lane{width:100%!important;overflow:hidden!important}
      #tn13Reviews .tn30-track{display:flex!important;width:100%!important;gap:12px!important;will-change:transform!important}
      #tn13Reviews .tn30-review-card{flex:0 0 calc(100% - 52px)!important;box-sizing:border-box!important;height:auto!important;min-height:154px!important;padding:16px 17px 17px!important;border:1px solid rgba(66,55,49,.15)!important;border-radius:13px!important;background:rgba(255,255,255,.34)!important;text-decoration:none!important;color:#171513!important;overflow:visible!important}
      #tn13Reviews .tn30-review-head{display:grid!important;grid-template-columns:45px minmax(0,1fr)!important;gap:12px!important;align-items:center!important}
      #tn13Reviews .tn30-review-avatar{width:43px!important;height:43px!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:#d7cec6!important;border:1px solid rgba(66,55,49,.1)!important;font:500 22px/1 'Cormorant Garamond',Georgia,serif!important;color:#514943!important}
      #tn13Reviews .tn30-review-name{display:block!important;font:600 19px/1 'Cormorant Garamond',Georgia,serif!important;color:#2a2522!important}
      #tn13Reviews .tn30-review-meta{display:block!important;margin-top:5px!important;font:500 9px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important;color:#8a817a!important}
      #tn13Reviews .tn30-review-card p{margin:14px 0 0!important;font:400 12.5px/1.5 'Manrope',Arial,sans-serif!important;color:#4f4843!important;display:block!important;-webkit-line-clamp:unset!important;-webkit-box-orient:initial!important;overflow:visible!important}
      #tn13Reviews .tn30-review-open{display:block!important;margin-top:11px!important;font:500 9.5px/1 'Manrope',Arial,sans-serif!important;color:#655b54!important}
      #tn13Reviews .tn30-review-all{display:flex!important;align-items:center!important;justify-content:center!important;margin:28px 22px 0!important;height:46px!important;border:1px solid rgba(66,55,49,.18)!important;border-radius:7px!important;color:#2f2a26!important;text-decoration:none!important;font:500 10.5px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.15em!important;text-transform:uppercase!important;background:rgba(255,255,255,.18)!important}

      /* Preserve the approved Beauty Room contact block; only the TANEM footer is copied exactly from STLuxe. */
      #tn13Visit .tn22-footer{margin:28px -24px 0!important;height:76px!important;background:#171513!important;color:#fff!important;display:flex!important;align-items:center!important;justify-content:space-between!important;padding:0 24px!important;text-decoration:none!important;border:0!important}
      #tn13Visit .tn22-footer strong{font:500 23px/1 'Cormorant Garamond',Georgia,serif!important;color:#fff!important}
      #tn13Visit .tn22-footer span{max-width:185px!important;text-align:right!important;font:400 10px/1.35 'Manrope',Arial,sans-serif!important;color:#d6cec8!important}
    }
    `;
    document.head.appendChild(style);

    /* All external destinations open separately from the site. */
    document.querySelectorAll('#stluxe-tanem-v13 a[href]').forEach(a=>{
      const href=(a.getAttribute('href')||'').trim();
      if(/^(https?:|viber:)/i.test(href)){
        a.setAttribute('target','_blank');
        a.setAttribute('rel','noopener');
      }
    });
  };
  base.onerror=()=>console.error('Beauty Room mobile base failed to load');
  document.head.appendChild(base);
})();
