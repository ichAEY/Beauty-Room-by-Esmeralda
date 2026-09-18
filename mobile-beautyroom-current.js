/* Beauty Room mobile loader: targeted final polish. */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const base=document.createElement('script');
  base.src='mobile-beautyroom-base.js?v=20260918-overlay-v1';
  base.async=false;
  base.onload=()=>{
    const style=document.createElement('style');
    style.id='beautyroom-final-client-polish';
    style.textContent=`
    @media(max-width:767px){
      /* HERO — preserve approved layout; remove only rejected copy. */
      #stluxe-tanem-v13 .tn13-hero{height:744px!important;min-height:744px!important;max-height:none!important;padding:0!important;background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 90%,#f7f2eb 100%)!important;position:relative!important;overflow:hidden!important}
      .tn22-media{position:absolute!important;top:52px!important;left:50%!important;right:auto!important;width:100vw!important;height:372px!important;min-height:0!important;transform:translateX(-50%)!important;overflow:hidden!important;padding:0!important;margin:0!important;border:0!important}
      .tn22-media .tn22-slide,.tn22-media img{inset:0!important;width:100%!important;height:100%!important;margin:0!important;padding:0!important;display:block!important}
      .tn22-media img{object-fit:cover!important}
      .tn22-card{position:absolute!important;z-index:8!important;top:343px!important;left:15px!important;right:15px!important;bottom:0!important;height:auto!important;display:block!important;padding:20px 20px 24px!important;border-radius:13px 13px 0 0!important;text-align:center!important}
      .tn22-title{margin:0!important;font:500 49px/.88 'Cormorant Garamond',Georgia,serif!important;letter-spacing:.18em!important;text-indent:.18em!important;text-transform:uppercase!important}
      .tn22-sub{margin:12px 0 17px!important;font:500 10.5px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.38em!important;text-indent:.38em!important;text-transform:uppercase!important;color:#635d58!important}
      .tn22-copy{display:none!important}
      .tn37-hero-info{width:min(100%,330px)!important;margin:37px auto 0!important;display:grid!important;grid-template-columns:1fr 1px 1.18fr!important;align-items:center!important;gap:12px!important;text-align:left!important}
      .tn37-info-divider{width:1px!important;height:42px!important}
      .tn37-info{grid-template-columns:40px minmax(0,1fr)!important;gap:9px!important}
      .tn37-info-icon{width:40px!important;height:40px!important}
      .tn37-info-copy{font:400 10.5px/1.28 'Manrope',Arial,sans-serif!important}
      .tn37-info-copy strong{font:500 11.5px/1.1 'Manrope',Arial,sans-serif!important}
      .tn22-cta{display:flex!important;width:min(100%,330px)!important;height:50px!important;margin:18px auto 0!important;align-items:center!important;justify-content:center!important;gap:12px!important;border:0!important;border-radius:8px!important;background:#715b53!important;color:#fff!important;font:500 14px/1 'Manrope',Arial,sans-serif!important;transition:transform .14s ease,background .14s ease!important}
      .tn22-cta:active{transform:translateY(1px) scale(.992)!important;background:#654f48!important}
      .tn22-worklink{display:flex!important;width:min(100%,330px)!important;height:48px!important;margin:10px auto 0!important;align-items:center!important;justify-content:center!important;gap:11px!important;border-radius:8px!important;border:1px solid rgba(113,91,83,.38)!important;background:#efe7e1!important;color:#2f2926!important;text-decoration:none!important;font:500 13px/1 'Manrope',Arial,sans-serif!important;transition:transform .14s ease,background .14s ease,color .14s ease!important}
      .tn22-worklink:active{transform:translateY(2px) scale(.988)!important;background:#715b53!important;color:#fff!important;border-color:#715b53!important}

      /* PORTFOLIO — approved compact distance below hero. */
      #tn13Portfolio{min-height:824px!important}
      #tn13Portfolio .tn22-port{padding-top:22px!important}

      /* SERVICES — categories live inside exactly the same 25px content line as service rows. */
      #tn13Services{background:#242424!important;color:#f3f3f3!important;border-color:rgba(255,255,255,.08)!important}
      #tn13Services .tn22-kicker{color:#bdbdbd!important}
      #tn13Services h2,#tn13Services .tn31-service-name{color:#f5f5f5!important}
      #tn13Services .tn31-cats-wrap{position:relative!important;margin:25px -25px 0!important;overflow:hidden!important}
      #tn13Services .tn31-cats{display:flex!important;align-items:center!important;gap:8px!important;overflow-x:auto!important;overscroll-behavior-inline:contain!important;-webkit-overflow-scrolling:touch!important;padding:0 0 11px!important;scroll-padding-left:36px!important;scroll-padding-right:25px!important;box-sizing:border-box!important}
      #tn13Services .tn31-cats:before,#tn13Services .tn31-cats:after{content:''!important;display:block!important;height:1px!important;pointer-events:none!important}#tn13Services .tn31-cats:before{flex:0 0 36px!important;width:36px!important}#tn13Services .tn31-cats:after{flex:0 0 25px!important;width:25px!important}
      #tn13Services .tn31-cat{border-color:rgba(255,255,255,.20)!important;color:#d2d2d2!important;background:rgba(255,255,255,.03)!important}
      #tn13Services .tn31-cat.active{background:#f7f2eb!important;border-color:#f7f2eb!important;color:#2f2926!important}
      #tn13Services .tn31-service-list{border-color:rgba(255,255,255,.16)!important}
      #tn13Services .tn31-service-row{border-color:rgba(255,255,255,.14)!important}
      #tn13Services .tn31-service-detail{color:#bdbdbd!important}
      #tn13Services .tn31-service-book{color:#e0e0e0!important}
      #tn13Services .tn31-service-more{border-color:rgba(255,255,255,.24)!important;background:rgba(255,255,255,.04)!important;color:#f2f2f2!important}
      #tn13Services .tn31-service-more span:last-child{color:#d3d3d3!important}

      /* ABOUT — keep salon name serif, supporting copy modern; facts a brighter warm tone. */
      #tn38About .tn42-card{background:#e7ded5!important;border-color:rgba(66,55,49,.14)!important}
      #tn38About .tn42-body{background:#e7ded5!important}
      #tn38About .tn42-lead{font:400 27px/1.08 'Cormorant Garamond',Georgia,serif!important}
      #tn38About .br-about-brand{display:block!important;font:400 27px/1.08 'Cormorant Garamond',Georgia,serif!important;letter-spacing:-.032em!important;color:#1d1a18!important}
      #tn38About .br-about-kind{display:block!important;margin-top:9px!important;font:500 12px/1.35 'Manrope',Arial,sans-serif!important;letter-spacing:.015em!important;color:#665c56!important}
      #tn38About .tn42-copy{font:400 12.8px/1.62 'Manrope',Arial,sans-serif!important;color:#58504a!important}
      #tn38About .tn42-fact{background:#f1e8df!important;border-color:rgba(64,52,45,.10)!important;box-shadow:none!important}

      /* TEAM — keep approved dark block and three masters. */
      #tn13Team{margin:0!important;padding:0!important;background:#242424!important;color:#f5f5f5!important}
      #tn13Team .tn22-team{padding:42px 28px 38px!important;overflow:hidden!important}
      #tn13Team .tn22-kicker{color:#bdbdbd!important}
      #tn13Team h2{font-size:40px!important;color:#f5f5f5!important}
      #tn13Team .tn22-team-grid{display:flex!important;grid-template-columns:none!important;gap:14px!important;margin:30px 0 0!important;padding:0 0 8px!important;overflow-x:auto!important;overflow-y:hidden!important;overscroll-behavior-x:contain!important;overscroll-behavior-y:auto!important;touch-action:pan-x pan-y!important;-webkit-overflow-scrolling:touch!important;scroll-snap-type:x proximity!important;scrollbar-width:none!important}
      #tn13Team .tn22-master-card{flex:0 0 136px!important;width:auto!important;min-width:136px!important;scroll-snap-align:start!important;border:0!important;background:none!important;padding:0!important;text-align:center!important;color:#f5f5f5!important;touch-action:manipulation!important}
      #tn13Team .tn22-master-circle{width:100%!important;aspect-ratio:1/1!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:linear-gradient(145deg,#4a4542,#34302e)!important;overflow:hidden!important;color:#d8d0ca!important;border:1px solid rgba(255,255,255,.08)!important}
      #tn13Team .tn22-master-name{display:block!important;margin-top:11px!important;font:500 20px/1 'Cormorant Garamond',Georgia,serif!important;color:#f5f5f5!important;white-space:normal!important}
      #tn13Team .tn22-master-role{display:block!important;margin-top:5px!important;font:400 10px/1.3 'Manrope',Arial,sans-serif!important;color:#bdb5b0!important}
      #tn13Team .tn42-team-hint{display:block!important;margin-top:8px!important;text-align:right!important;color:#b7afa9!important;font:500 9px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important}

      /* REVIEWS — one infinite carousel; every slide = exactly three stacked reviews. */
      #tn13Reviews{margin:0!important;padding:0!important;background:#e9e2da!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07)!important;border-bottom:1px solid rgba(62,51,44,.07)!important}
      #tn13Reviews .br-reviews{padding:44px 0 46px!important}
      #tn13Reviews .br-reviews>.tn22-kicker,#tn13Reviews .br-reviews>h2{margin-left:24px!important;margin-right:24px!important}
      #tn13Reviews .br-reviews .tn22-kicker{color:#746c66!important}
      #tn13Reviews .br-reviews h2{margin:16px 24px 0!important;font:500 46px/.96 'Cormorant Garamond',Georgia,serif!important;letter-spacing:-.03em!important;color:#171513!important}
      #tn13Reviews .br-score{text-align:center!important;margin-top:43px!important}
      #tn13Reviews .br-score strong{display:block!important;font:500 84px/.82 'Cormorant Garamond',Georgia,serif!important;color:#171513!important}
      #tn13Reviews .br-stars{margin-top:20px!important;color:#b78d4f!important;font-size:27px!important;letter-spacing:6px!important}
      #tn13Reviews .br-count{margin-top:14px!important;font:400 13px/1 'Manrope',Arial,sans-serif!important;color:#716862!important}
      #tn13Reviews .br-review-viewport{margin-top:37px!important;overflow:hidden!important;touch-action:pan-y!important;user-select:none!important;cursor:grab!important}
      #tn13Reviews .br-review-viewport.dragging{cursor:grabbing!important}
      #tn13Reviews .br-review-track{display:flex!important;align-items:stretch!important;gap:12px!important;width:max-content!important;will-change:transform!important}
      #tn13Reviews .br-review-page{flex:0 0 calc(100vw - 52px)!important;width:calc(100vw - 52px)!important;box-sizing:border-box!important;display:grid!important;gap:12px!important}
      #tn13Reviews .br-review-card{box-sizing:border-box!important;height:184px!important;min-height:184px!important;padding:16px 17px 17px!important;border:1px solid rgba(66,55,49,.15)!important;border-radius:13px!important;background:rgba(255,255,255,.34)!important;text-decoration:none!important;color:#171513!important;overflow:hidden!important}
      #tn13Reviews .br-review-head{display:grid!important;grid-template-columns:45px minmax(0,1fr)!important;gap:12px!important;align-items:center!important}
      #tn13Reviews .br-review-avatar{width:43px!important;height:43px!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:#d7cec6!important;border:1px solid rgba(66,55,49,.1)!important;font:500 22px/1 'Cormorant Garamond',Georgia,serif!important;color:#514943!important}
      #tn13Reviews .br-review-name{display:block!important;font:600 19px/1 'Cormorant Garamond',Georgia,serif!important;color:#2a2522!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
      #tn13Reviews .br-review-meta{display:flex!important;align-items:center!important;gap:7px!important;margin-top:5px!important;font:500 9px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important;color:#8a817a!important}
      #tn13Reviews .br-review-meta-stars{color:#b78d4f!important;letter-spacing:1px!important;font-size:10px!important}
      #tn13Reviews .br-review-card p{margin:14px 0 0!important;font:400 12.5px/1.5 'Manrope',Arial,sans-serif!important;color:#4f4843!important;display:-webkit-box!important;-webkit-box-orient:vertical!important;-webkit-line-clamp:4!important;overflow:hidden!important}
      #tn13Reviews .br-review-open{display:block!important;margin-top:10px!important;font:500 9.5px/1 'Manrope',Arial,sans-serif!important;color:#655b54!important}
      #tn13Reviews .br-review-all{display:flex!important;align-items:center!important;justify-content:center!important;margin:28px 22px 0!important;height:46px!important;border:1px solid rgba(66,55,49,.18)!important;border-radius:7px!important;color:#2f2a26!important;text-decoration:none!important;font:500 10.5px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.15em!important;text-transform:uppercase!important;background:rgba(255,255,255,.18)!important}

      /* CONTACTS + TANEM. */
      #tn13Visit{background:#2f2926!important}
      #tn13Visit .tn22-contact[href^="tel:"] strong{font:400 15.5px/1.2 'Manrope',Arial,sans-serif!important;letter-spacing:.01em!important}
      #tn13Visit .tn22-footer{margin:28px -24px 0!important;height:88px!important;min-height:88px!important;background:#11100f!important;color:#fff!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:8px!important;padding:10px 24px 12px!important;text-decoration:none!important;border:0!important}
      #tn13Visit .br-tanem-mark{width:30px!important;height:30px!important;border:1px solid rgba(255,255,255,.42)!important;border-radius:8px!important;display:grid!important;place-items:center!important;font:500 21px/1 'Cormorant Garamond',Georgia,serif!important;color:#fff!important}
      #tn13Visit .br-tanem-copy{display:block!important;max-width:none!important;text-align:center!important;font:400 10px/1.2 'Manrope',Arial,sans-serif!important;color:#cfc8c4!important}
      #tn13Visit .br-tanem-copy strong{display:inline!important;font:500 15px/1 'Cormorant Garamond',Georgia,serif!important;color:#fff!important}
    }
    `;
    document.head.appendChild(style);

    /* Remove only the client-rejected descriptive sentence. */
    const heroCopy=document.querySelector('#stluxe-tanem-v13 .tn22-copy');
    if(heroCopy) heroCopy.remove();

    /* Update only About copy/typography. */
    const aboutLead=document.querySelector('#stluxe-tanem-v13 #tn38About .tn42-lead');
    if(aboutLead){
      aboutLead.innerHTML='<span class="br-about-brand">Beauty Room by Esmeralda</span><span class="br-about-kind">Салон красоты в Ереване</span>';
    }
    const aboutCopy=document.querySelector('#stluxe-tanem-v13 #tn38About .tn42-copy');
    if(aboutCopy){
      aboutCopy.textContent='Здесь можно спокойно выбрать нужные процедуры и доверить уход мастерам разных направлений. Мы ценим аккуратную работу, комфорт и внимательное отношение к каждому гостю.';
    }

    /* Remove any stale STLuxe/Estel Lux wording from master sheets, including content rendered later. */
    const salonNamePattern=/(STLuxe|ST\s*Luxe|ST\s*Lux|Estel\s*Lux|Эстел\s*Люкс)/gi;
    const replaceSalonText=root=>{
      if(!root) return;
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
      const nodes=[];
      while(walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node=>{
        if(salonNamePattern.test(node.nodeValue||'')){
          salonNamePattern.lastIndex=0;
          node.nodeValue=(node.nodeValue||'').replace(salonNamePattern,'Beauty Room by Esmeralda');
        }else{
          salonNamePattern.lastIndex=0;
        }
      });
    };
    const appRoot=document.querySelector('#stluxe-tanem-v13');
    replaceSalonText(appRoot);
    if(appRoot && 'MutationObserver' in window){
      new MutationObserver(records=>{
        records.forEach(record=>{
          record.addedNodes.forEach(node=>{
            if(node.nodeType===Node.TEXT_NODE){
              salonNamePattern.lastIndex=0;
              if(salonNamePattern.test(node.nodeValue||'')){
                salonNamePattern.lastIndex=0;
                node.nodeValue=(node.nodeValue||'').replace(salonNamePattern,'Beauty Room by Esmeralda');
              }
            }else if(node.nodeType===Node.ELEMENT_NODE){
              replaceSalonText(node);
            }
          });
        });
      }).observe(appRoot,{childList:true,subtree:true});
    }

    /* Rebuild only reviews: 3 stacked cards per slide, centered with neighbor edges visible. */
    const reviewsRoot=document.querySelector('#stluxe-tanem-v13 #tn13Reviews');
    if(reviewsRoot){
      const REVIEW_URL='https://www.google.com/maps/place/Beauty+Room+by+Esmeralda/@40.1673067,44.5124793,17z/';
      const reviewData=[
        ['Aurélie Vagharchak','Excellent service! The team is truly professional and welcoming. I had such a nice and peaceful time. Highly recommended for a high-quality manicure and pedicure'],
        ['Nathalie Nalbandian','Visited Esmeralda to get my nails done for a wedding in Armenia. I found her on Yandex maps as a visitor from America. She did a wonderful job with the Russian gel manicure and pedicure. Cute little beauty salon. I recommend!'],
        ['Анастасия Франкони','Супер уютный небольшой салон. Сделали прекрасный маникюр (гель-лак) и педикюр. В процессе поняла, что хочу еще и брови, мастер нашла время, чтобы все сразу успеть! Все качественно и красиво!'],
        ['Shushan Abrahamyan','Great atmosphere and a very cozy salon. The staff are professional, friendly, and attentive. I was very satisfied with the service and would definitely recommend this salon'],
        ['Leyla Medetova','В восторге от обслуживания и сервиса 🔥 Особенно от хозяйки, приятная женщина и профессионал своего дела! Записывалась на маникюр и педикюр, очень качественно! 10 из 10. Рекомендую.'],
        ['DE GUZMAN, RICA MAE S.','Highly recommended! The nail technician was gentle, detailed, and really knew what she was doing. The salon was clean and relaxing too. I love my beautiful nails now😍🫶🏻'],
        ['Lilith Gulanyan','Очень довольна обслуживанием, теплый прием, лучшие топ мастера 👍 вкусное угощение ..кофе'],
        ['Ксения Курбатова','Делала маникюр и педикюр. Всё очень понравилось. Уютно, чисто, мастер просто супер. Спасибо'],
        ['Anne Madsen','Мы с подругой сделали стрижку, маникюр и педикюр, и очень довольны результатом. Персонал сделал все возможное, чтобы мы чувствовали себя желанными гостями и создал уютную атмосферу.']
      ];
      const initial=name=>([...String(name).trim()][0]||'B').toUpperCase();
      const card=r=>`<a class="br-review-card" href="${REVIEW_URL}" target="_blank" rel="noopener"><div class="br-review-head"><span class="br-review-avatar">${initial(r[0])}</span><span><strong class="br-review-name">${r[0]}</strong><span class="br-review-meta"><span>Google Maps</span><span class="br-review-meta-stars">★★★★★</span></span></span></div><p>${r[1]}</p><span class="br-review-open">Подробнее →</span></a>`;
      const groups=[];
      for(let i=0;i<reviewData.length;i+=3) groups.push(reviewData.slice(i,i+3));
      const page=g=>`<div class="br-review-page">${g.map(card).join('')}</div>`;
      const loop=[groups[groups.length-1],...groups,groups[0]];
      reviewsRoot.innerHTML=`<div class="br-reviews"><p class="tn22-kicker">Отзывы</p><h2>Что говорят о нас</h2><div class="br-score"><strong>5,0</strong><div class="br-stars">★★★★★</div><div class="br-count">30 отзывов · Google Maps</div></div><div class="br-review-viewport"><div class="br-review-track">${loop.map(page).join('')}</div></div><a class="br-review-all" href="${REVIEW_URL}" target="_blank" rel="noopener">Смотреть все отзывы →</a></div>`;

      const viewport=reviewsRoot.querySelector('.br-review-viewport');
      const track=reviewsRoot.querySelector('.br-review-track');
      let pageIndex=1,startX=0,startY=0,dx=0,dragging=false,moved=false,autoTimer=0,gestureAxis=null,capturedPointer=null;
      const total=groups.length;
      const gap=12;
      const metrics=()=>{
        const page=track.querySelector('.br-review-page');
        const width=page?page.getBoundingClientRect().width:Math.max(0,window.innerWidth-52);
        return {width,step:width+gap,edge:Math.max(0,(viewport.clientWidth-width)/2)};
      };
      const paint=(animate=true,drag=0)=>{
        const {step,edge}=metrics();
        track.style.transition=animate?'transform 650ms cubic-bezier(.22,.66,.24,1)':'none';
        track.style.transform=`translate3d(${edge-pageIndex*step+drag}px,0,0)`;
      };
      const schedule=()=>{
        clearTimeout(autoTimer);
        autoTimer=setTimeout(()=>{
          pageIndex+=1;
          paint(true);
        },4200);
      };
      const normalize=()=>{
        if(pageIndex===0){
          pageIndex=total;
          paint(false);
        }else if(pageIndex===total+1){
          pageIndex=1;
          paint(false);
        }
      };
      track.addEventListener('transitionend',()=>{
        normalize();
        schedule();
      });
      viewport.addEventListener('pointerdown',e=>{
        clearTimeout(autoTimer);
        dragging=true;
        moved=false;
        gestureAxis=null;
        capturedPointer=null;
        dx=0;
        startX=e.clientX;
        startY=e.clientY;
      });
      viewport.addEventListener('pointermove',e=>{
        if(!dragging)return;
        const x=e.clientX-startX,y=e.clientY-startY;
        if(!gestureAxis){
          if(Math.max(Math.abs(x),Math.abs(y))<7)return;
          if(Math.abs(y)>Math.abs(x)){
            gestureAxis='vertical';
            dragging=false;
            viewport.classList.remove('dragging');
            schedule();
            return;
          }
          gestureAxis='horizontal';
          viewport.classList.add('dragging');
          capturedPointer=e.pointerId;
          try{viewport.setPointerCapture(e.pointerId)}catch(_){}
        }
        if(gestureAxis!=='horizontal')return;
        moved=true;
        dx=x;
        paint(false,dx);
      });
      const endDrag=e=>{
        if(!dragging)return;
        dragging=false;
        viewport.classList.remove('dragging');
        if(capturedPointer!==null){try{viewport.releasePointerCapture(capturedPointer)}catch(_){}}
        capturedPointer=null;
        gestureAxis=null;
        const {step}=metrics();
        if(moved&&Math.abs(dx)>Math.min(70,step*.16)) pageIndex+=dx<0?1:-1;
        pageIndex=Math.max(0,Math.min(total+1,pageIndex));
        dx=0;
        paint(true);
        if(!moved)schedule();
      };
      viewport.addEventListener('pointerup',endDrag);
      viewport.addEventListener('pointercancel',endDrag);
      viewport.addEventListener('click',e=>{
        if(moved){e.preventDefault();e.stopPropagation();moved=false}
      },true);
      window.addEventListener('resize',()=>paint(false),{passive:true});
      paint(false);
      schedule();
    }

    /* Replace only the TANEM footer content with the compact badge. */
    const tanemFooter=document.querySelector('#stluxe-tanem-v13 #tn13Visit .tn22-footer');
    if(tanemFooter){
      tanemFooter.innerHTML='<span class="br-tanem-mark">T</span><span class="br-tanem-copy">Создано в <strong>TANEM.ru</strong></span>';
    }

    /* Make browser/system chrome dark whenever the contacts section is visible. */
    let themeMeta=document.querySelector('meta[name="theme-color"]');
    if(!themeMeta){
      themeMeta=document.createElement('meta');
      themeMeta.name='theme-color';
      document.head.appendChild(themeMeta);
    }
    let appleStatus=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if(!appleStatus){
      appleStatus=document.createElement('meta');
      appleStatus.name='apple-mobile-web-app-status-bar-style';
      document.head.appendChild(appleStatus);
    }
    const lightTheme='#f8f4ee',darkTheme='#11100f';
    const visit=document.querySelector('#stluxe-tanem-v13 #tn13Visit');
    const applySystemTheme=dark=>{
      themeMeta.setAttribute('content',dark?darkTheme:lightTheme);
      appleStatus.setAttribute('content',dark?'black-translucent':'default');
      document.documentElement.style.backgroundColor=dark?darkTheme:lightTheme;
      document.body.style.backgroundColor=dark?darkTheme:lightTheme;
    };
    const syncSystemTheme=()=>{
      if(!visit){applySystemTheme(false);return}
      const rect=visit.getBoundingClientRect();
      applySystemTheme(rect.top<window.innerHeight && rect.bottom>0);
    };
    syncSystemTheme();
    window.addEventListener('scroll',syncSystemTheme,{passive:true});
    window.addEventListener('resize',syncSystemTheme,{passive:true});
    window.addEventListener('orientationchange',syncSystemTheme,{passive:true});

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
