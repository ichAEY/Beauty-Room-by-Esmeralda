/* Beauty Room mobile loader: preserved base + final client polish. */
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
      /* HERO — same visual design as before, standard button sizes; only vertical geometry adapts to viewport. */
      #stluxe-tanem-v13 .tn13-hero{height:100svh!important;min-height:640px!important;max-height:none!important}
      .tn22-media{height:calc(100svh - 372px)!important;min-height:268px!important}
      .tn22-card{top:calc(100svh - 401px)!important;bottom:0!important;display:block!important;padding:20px 20px 24px!important}
      .tn22-cta{width:min(100%,330px)!important;height:50px!important;margin:18px auto 0!important}
      .tn22-worklink{width:min(100%,330px)!important;height:48px!important;margin:10px auto 0!important}
      #tn13Portfolio .tn22-port{padding-top:58px!important}

      /* GALLERY BUTTON — visually below the photo, centered; hidden inside gallery-viewer. */
      .tn22-view-gallery{left:50%!important;bottom:-88px!important;transform:translateX(-50%)!important;height:42px!important;padding:0 19px!important;border:1px solid rgba(255,255,255,.26)!important;border-radius:999px!important;background:rgba(255,255,255,.10)!important;color:#fff!important;backdrop-filter:blur(12px)!important;box-shadow:none!important}
      .tn22-viewer:not([data-source="portfolio"]) .tn22-view-gallery{display:none!important}

      /* SERVICES — neutral dark instead of coffee/beige; equal edge spacing in horizontal categories. */
      #tn13Services{background:#242424!important;color:#f3f3f3!important;border-color:rgba(255,255,255,.08)!important}
      #tn13Services .tn22-kicker{color:#bdbdbd!important}
      #tn13Services h2,#tn13Services .tn31-service-name{color:#f5f5f5!important}
      #tn13Services .tn31-cats{padding-left:25px!important;padding-right:25px!important;scroll-padding-inline:25px!important;box-sizing:border-box!important}
      #tn13Services .tn31-cat{border-color:rgba(255,255,255,.20)!important;color:#d2d2d2!important;background:rgba(255,255,255,.03)!important}
      #tn13Services .tn31-cat.active{background:#e7e7e7!important;border-color:#e7e7e7!important;color:#202020!important}
      #tn13Services .tn31-service-list{border-color:rgba(255,255,255,.16)!important}
      #tn13Services .tn31-service-row{border-color:rgba(255,255,255,.14)!important}
      #tn13Services .tn31-service-detail{color:#bdbdbd!important}
      #tn13Services .tn31-service-book{color:#e0e0e0!important}
      #tn13Services .tn31-service-more{border-color:rgba(255,255,255,.24)!important;background:rgba(255,255,255,.04)!important;color:#f2f2f2!important}
      #tn13Services .tn31-service-more span:last-child{color:#d3d3d3!important}

      /* TEAM — restore the previous STLuxe-style block. Three masters remain. */
      #tn13Team{background:#f3ece6!important;color:#171513!important}
      #tn13Team .tn22-kicker{color:#6f665f!important}
      #tn13Team h2{color:#171513!important}
      #tn13Team .tn22-team-grid{display:flex!important;grid-template-columns:none!important;gap:14px!important;margin:30px 0 0!important;padding:0 0 8px!important;overflow-x:auto!important;overflow-y:hidden!important;scroll-snap-type:x proximity!important}
      #tn13Team .tn22-master-card{flex:0 0 136px!important;width:auto!important;min-width:136px!important;color:#171513!important;text-align:center!important}
      #tn13Team .tn22-master-circle{background:linear-gradient(145deg,#e9e3dc,#d7cec6)!important;color:#9b9088!important;border:0!important}
      #tn13Team .tn22-master-name{display:block!important;margin-top:11px!important;color:#171513!important;font:500 20px/1 'Cormorant Garamond',Georgia,serif!important;white-space:normal!important}
      #tn13Team .tn22-master-role{display:block!important;margin-top:5px!important;color:#827871!important;font:400 10px/1.3 'Manrope',Arial,sans-serif!important}
      #tn13Team .tn42-team-hint{display:block!important;margin-top:8px!important;color:#8a7f78!important}

      /* REVIEWS — exact STLuxe lane structure, fixed equal geometry so long texts do not break it. */
      #tn13Reviews .tn30-review-stage{display:grid!important;gap:12px!important;margin-top:37px!important;overflow:hidden!important}
      #tn13Reviews .tn30-lane{width:100%!important;overflow:hidden!important}
      #tn13Reviews .tn30-track{display:flex!important;width:100%!important;gap:12px!important;will-change:transform!important}
      #tn13Reviews .tn30-review-card{flex:0 0 calc(100% - 52px)!important;height:184px!important;min-height:184px!important;padding:16px 17px 17px!important;overflow:hidden!important;border-radius:13px!important}
      #tn13Reviews .tn30-review-card p{margin:14px 0 0!important;display:-webkit-box!important;-webkit-box-orient:vertical!important;-webkit-line-clamp:4!important;overflow:hidden!important}
      #tn13Reviews .tn30-review-open{margin-top:10px!important}

      /* ABOUT — separate card/facts from the page background, avoid one flat white tone. */
      #tn38About{background:#f5f0ea!important}
      #tn38About .tn42-card{background:#e7dfd7!important;border-color:rgba(66,55,49,.12)!important}
      #tn38About .tn42-body{background:#e7dfd7!important}
      #tn38About .tn42-fact{background:#dcd4cd!important;color:#39332f!important;border:1px solid rgba(66,55,49,.06)!important}

      /* CONTACTS — clearer information, centered generic icons, cleaner status, neutral dark tone. */
      #tn13Visit{background:#242424!important;color:#f5f5f5!important;border-radius:0!important}
      #tn13Visit .tn22-kicker{color:#bdbdbd!important}
      #tn13Visit h2{color:#f5f5f5!important}
      #tn13Visit .tn22-status{min-height:34px!important;padding:8px 12px!important;border-radius:999px!important;border:1px solid rgba(255,255,255,.17)!important;background:rgba(255,255,255,.07)!important;font:600 10px/1 'Manrope',Arial,sans-serif!important}
      #tn13Visit .tn22-status.open{background:#2e4133!important;border-color:#4d6752!important;color:#a9d5b0!important}
      #tn13Visit .tn22-status.closed{background:#493336!important;border-color:#65474b!important;color:#d59a9f!important}
      #tn13Visit .tn22-contact{min-height:66px!important;grid-template-columns:42px minmax(0,1fr)!important;gap:12px!important;padding:11px 13px!important;background:rgba(255,255,255,.065)!important;border-color:rgba(255,255,255,.14)!important;color:#f5f5f5!important}
      #tn13Visit .tn22-contact-icon{width:38px!important;height:38px!important;display:grid!important;place-items:center!important;justify-self:center!important;border-radius:50%!important;background:rgba(255,255,255,.08)!important;border:1px solid rgba(255,255,255,.09)!important}
      #tn13Visit .tn22-contact-icon svg{width:20px!important;height:20px!important;stroke:#ededed!important}
      #tn13Visit .tn22-contact strong{font:500 16.5px/1.16 'Cormorant Garamond',Georgia,serif!important;color:#f5f5f5!important}
      #tn13Visit .tn22-contact:nth-child(2) strong{font:400 15px/1.2 'Manrope',Arial,sans-serif!important;letter-spacing:.015em!important}
      #tn13Visit .tn22-contact>span:last-child>span{margin-top:5px!important;font-size:10.5px!important;line-height:1.35!important;color:#c8c8c8!important}
      #tn13Visit .tn22-mapwrap{background:#363636!important}
      #tn13Visit .tn22-call{border-color:rgba(255,255,255,.22)!important;color:#f5f5f5!important}
      #tn13Visit .tn22-route{background:#f0f0f0!important;color:#252525!important}

      /* TANEM badge/footer — restore the original STLuxe proportions. */
      #tn13Visit .tn22-footer{margin:28px -24px 0!important;height:76px!important;background:#171513!important;color:#fff!important;display:flex!important;align-items:center!important;justify-content:space-between!important;padding:0 24px!important;text-decoration:none!important;border-top:1px solid rgba(255,255,255,.06)!important}
      #tn13Visit .tn22-footer strong{font:500 23px/1 'Cormorant Garamond',Georgia,serif!important;color:#fff!important}
      #tn13Visit .tn22-footer span{max-width:185px!important;text-align:right!important;font:400 10px/1.35 'Manrope',Arial,sans-serif!important;color:#d6cec8!important}
    }
    @media(max-width:767px) and (max-height:639px){
      #stluxe-tanem-v13 .tn13-hero{height:640px!important;min-height:640px!important}
      .tn22-media{height:268px!important}
      .tn22-card{top:239px!important}
    }
    `;
    document.head.appendChild(style);
  };
  base.onerror=()=>console.error('Beauty Room mobile base failed to load');
  document.head.appendChild(base);
})();
