/* Beauty Room current mobile bundle. Structural modules consolidated 2026-08-31. */

(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const PHONE='+37493873617';
  const WHATSAPP_URL='viber://chat?number=%2B37493873617';
  const YANDEX='https://www.google.com/maps/place/Beauty+Room+by+Esmeralda/@40.1673067,44.5124793,17z/';
  const YANDEX_REVIEWS='https://www.google.com/maps/place/Beauty+Room+by+Esmeralda/@40.1673067,44.5124793,17z/';
  const ADDRESS='Zavarian St 1/5, Yerevan';
  const RATING='5,0';
  const RATINGS_COUNT=19;

  const services=[
    ['nails','Педикюр','Записаться'],
    ['brows','Процедуры для бровей','Записаться'],
    ['hair','Свадебные прически','Записаться'],
    ['brows','Тридинг бровей','Записаться'],
    ['depilation','Удаление волос нитью','Записаться'],
    ['hair','Укладка волос','Записаться'],
    ['other','Прокалывание ушей','Записаться'],
    ['depilation','Шугаринг','Записаться'],
    ['hair','Стрижка волос','Записаться'],
    ['depilation','Электроэпиляция игловая','Записаться'],
    ['hair','Окрашивание волос','Записаться'],
    ['hair','Уход за волосами восстановление повреждённых волос','Записаться'],
    ['hair','Спа процедура для волос','Записаться'],
    ['nails','Наращивание ногтей','Записаться'],
    ['nails','Маникюр + покрытие гельлак','Записаться'],
    ['nails','Маникюр + покрытие лак','Записаться'],
    ['nails','Парафинотерапия для рук','Записаться'],
    ['face','Карбокси терапия','Записаться'],
    ['face','Ультразвуковая чистка лица','Записаться'],
    ['depilation','Восковая эпиляция','Записаться'],
    ['brows','Коррекция формы бровей','Записаться'],
    ['hair','Косы','Записаться'],
    ['brows','Ламинирование бровей','Записаться'],
    ['brows','Ламинирование ресниц','Записаться'],
    ['makeup','Макияж','Записаться'],
    ['nails','Маникюр','Записаться'],
    ['massage','Массаж','Записаться'],
    ['hair','Мытье головы шампунем и кондиционирование','Записаться'],
    ['hair','Наращивание волос','Записаться'],
    ['brows','Наращивание ресниц','Записаться']
  ];

  const works=[
    {src:'interior_reception_02.webp',cat:'salon',alt:'Интерьер Beauty Room by Esmeralda'},
    {src:'manicure_french_soft_pink_design_04.webp',cat:'nails',alt:'Маникюр Beauty Room by Esmeralda'},
    {src:'manicure_burgundy_long_glitter_09.webp',cat:'nails',alt:'Маникюр Beauty Room by Esmeralda'},
    {src:'hair_layered_brunette_02.webp',cat:'hair',alt:'Работа с волосами Beauty Room by Esmeralda'},
    {src:'hair_blonde_layers_03.webp',cat:'hair',alt:'Работа с волосами Beauty Room by Esmeralda'},
    {src:'makeup_evening_01.webp',cat:'makeup',alt:'Макияж Beauty Room by Esmeralda'}
  ];

  // Только короткие фрагменты отзывов, ранее подтверждённых по карточке Beauty Room в Google Maps.
  const reviews=[
    {name:'Aurélie Vagharchak',text:'Excellent service! The team is truly professional and welcoming. I had such a nice and peaceful time. Highly recommended for a high-quality manicure and pedicure'},
    {name:'Nathalie Nalbandian',text:'Visited Esmeralda to get my nails done for a wedding in Armenia. I found her on Yandex maps as a visitor from America. She did a wonderful job with the Russian gel manicure and pedicure. Cute little beauty salon. I recommend!'},
    {name:'Анастасия Франкони',text:'Супер уютный небольшой салон. Сделали прекрасный маникюр (гель-лак) и педикюр. В процессе поняла, что хочу еще и брови, мастер нашла время, чтобы все сразу успеть! Все качественно и красиво! Стоимость приятная. К сожалению поздно узнала, что в салоне работает массажист-врач. В следующий раз обязательно и на массаж запишусь. Определённо рекомендую к визиту, но записывайтесь хотя бы за день.'},
    {name:'Shushan Abrahamyan',text:'Great atmosphere and a very cozy salon. The staff are professional, friendly, and attentive. I was very satisfied with the service and would definitely recommend this salon'},
    {name:'Leyla Medetova',text:'В восторге от обслуживания и сервиса 🔥 Особенно от хозяйки, приятная женщина и профессионал своего дела! Записывалась на маникюр и педикюр, очень качественно! 10 из 10. Рекомендую. Цены тоже удивили, в соотношении цены и качества! Внутри салона атмосферно, чисто и уютно🤍 желаю салону процветания и успехов!'},
    {name:'DE GUZMAN, RICA MAE S.',text:'Highly recommended! The nail technician was gentle, detailed, and really knew what she was doing. The salon was clean and relaxing too. I love my beautiful nails now😍🫶🏻'},
    {name:'Lilith Gulanyan',text:'Очень довольна обслуживанием, теплый прием, лучшие топ мастера 👍 вкусное угощение ..кофе'},
    {name:'Ксения Курбатова',text:'Делала маникюр и педикюр. Всё очень понравилось. Уютно, чисто, мастер просто супер. Спасибо'},
    {name:'Anne Madsen',text:'Мы с подругой сделали стрижку, маникюр и педикюр, и очень довольны результатом. Персонал сделал все возможное, чтобы мы чувствовали себя желанными гостями, был невероятно дружелюбен и создал уютную атмосферу. Несмотря на то, что мы не говорим по-армянски, и общение было ограничено, нам было очень приятно там находиться. Если мы когда-нибудь снова приедем в Ереван, обязательно вернемся в этот салон🌸 Большое спасибо!!'}
  ];

  const masters=[
  {id:'nails',name:'Nail-мастер',category:'Маникюр · педикюр',initial:'N',about:'',cats:['nails']},
  {id:'hair',name:'Парикмахер',category:'Волосы · укладки',initial:'В',about:'',cats:['hair']},
  {id:'cosmetology',name:'Косметолог',category:'Косметология',initial:'К',about:'',cats:['face']}
];

  const font=document.createElement('link');
  font.rel='stylesheet';
  font.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap';
  document.head.appendChild(font);

  const css=document.createElement('style');
  css.id='stluxe-tanem-v13-style';
  css.textContent=`
  @media(max-width:767px){
    html,body{margin:0!important;padding:0!important;min-height:100%!important;background:#f6f1eb!important;color:#2f2926!important;overflow-x:hidden!important;-webkit-font-smoothing:antialiased!important;scrollbar-width:none}
    html::-webkit-scrollbar,body::-webkit-scrollbar{display:none}
    body>*:not(#stluxe-tanem-v13):not(script):not(style):not(link){display:none!important}
    #stluxe-tanem-v13{--ink:#2f2926;--soft:#6e625c;--paper:#f6f1eb;--paper2:#fbf8f4;--taupe:#8b7167;--taupe-dark:#715b53;--line:rgba(65,52,47,.13);display:block;width:100%;min-height:100dvh;overflow:clip;background:var(--paper);color:var(--ink);font-family:"Manrope",Arial,sans-serif;font-weight:400}
    #stluxe-tanem-v13 *{box-sizing:border-box}
    #stluxe-tanem-v13 button,#stluxe-tanem-v13 a{font:inherit;-webkit-tap-highlight-color:transparent;color:inherit}
    #stluxe-tanem-v13 button{cursor:pointer}
    .tn13-shell{width:min(100%,520px);margin:0 auto;padding-inline:clamp(16px,4.8vw,24px)}
    .tn13-kicker{margin:0;color:#9b7d72;font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}
    .tn13-display{font-family:"Cormorant Garamond",Georgia,serif}

    .tn13-intro{position:fixed;z-index:500;inset:0;display:grid;place-items:center;background:radial-gradient(circle at 50% 42%,rgba(222,203,193,.38),transparent 37%),#f8f4ef;animation:tn13Intro 1.55s cubic-bezier(.22,.78,.25,1) both;pointer-events:none}
    .tn13-intro-inner{text-align:center;color:#493c37;transform:translateY(-2vh)}
    .tn13-intro-name{font:500 clamp(54px,16vw,72px)/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.045em}
    .tn13-intro-line{width:76px;height:1px;background:rgba(116,90,80,.48);margin:13px auto 10px}
    .tn13-intro-small{color:#927b72;font-size:9px;font-weight:600;letter-spacing:.24em;text-transform:uppercase}
    @keyframes tn13Intro{0%,72%{opacity:1}100%{opacity:0;visibility:hidden}}

    .tn13-hero{height:100svh;min-height:640px;background:#f8f4ee;overflow:hidden}
    .tn13-hero .tn13-shell{height:100%;display:flex;flex-direction:column;padding-bottom:max(12px,env(safe-area-inset-bottom))}
    .tn13-topbar{position:relative;z-index:40;display:flex;min-height:56px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)}
    .tn13-brand{font:600 clamp(25px,7vw,31px)/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em;text-decoration:none}
    .tn13-menu-wrap{position:relative}
    .tn13-menu-btn{width:44px;height:44px;border:1px solid rgba(76,59,52,.1);border-radius:50%;background:rgba(255,255,255,.42);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0;backdrop-filter:blur(10px)}
    .tn13-menu-btn span{display:block;width:19px;height:1.5px;border-radius:999px;background:currentColor;transition:.24s ease}
    .tn13-menu-btn.open span:first-child{transform:translateY(6.5px) rotate(45deg)}.tn13-menu-btn.open span:nth-child(2){opacity:0}.tn13-menu-btn.open span:last-child{transform:translateY(-6.5px) rotate(-45deg)}
    .tn13-menu{position:absolute;z-index:60;top:calc(100% + 7px);right:0;width:min(74vw,270px);padding:8px 12px;border:1px solid rgba(75,56,49,.12);border-radius:18px;background:rgba(250,246,242,.97);box-shadow:0 20px 48px rgba(58,42,36,.16);backdrop-filter:blur(20px);display:none}
    .tn13-menu.open{display:grid;animation:tn13Menu .25s ease both}@keyframes tn13Menu{from{opacity:0;transform:translateY(-7px) scale(.97)}to{opacity:1;transform:none}}
    .tn13-menu a{display:flex;min-height:43px;align-items:center;gap:13px;border-bottom:1px solid rgba(75,56,49,.09);font:600 15px/1 "Cormorant Garamond",Georgia,serif;text-decoration:none}.tn13-menu a:last-child{border-bottom:0}.tn13-menu a span{color:#a48a80;font:600 8px/1 "Manrope",Arial,sans-serif;letter-spacing:.12em}

    .tn13-hero-content{padding:clamp(22px,4svh,36px) 0 0;flex:0 0 auto}
    .tn13-ticker{overflow:hidden;color:#9b7d72;mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}
    .tn13-ticker-track{display:flex;width:max-content;animation:tn13Ticker 24s linear infinite}.tn13-ticker-track span{padding-right:30px;font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap}@keyframes tn13Ticker{to{transform:translateX(-50%)}}
    .tn13-hero h1{max-width:390px;margin:17px 0 10px;font:500 clamp(45px,14.3vw,59px)/.89 "Cormorant Garamond",Georgia,serif;letter-spacing:-.045em}.tn13-hero h1 em{color:#8f7167;font-weight:500}
    .tn13-hero-copy{max-width:370px;margin:0;color:var(--soft);font-size:clamp(12px,3.45vw,13.5px);line-height:1.5}

    .tn13-visual{position:relative;flex:1 1 270px;min-height:255px;max-height:325px;margin:10px -5px 9px;overflow:visible}
    .tn13-visual-main{position:absolute;inset:3% 9% 3% 3%;border-radius:28px;overflow:hidden;background:#e8dfd7;box-shadow:0 18px 50px rgba(84,62,52,.11)}
    .tn13-visual-main img{width:100%;height:100%;object-fit:cover;display:block}
    .tn13-visual-small{position:absolute;right:0;bottom:7%;width:37%;height:44%;border:7px solid #f8f4ee;border-radius:24px;overflow:hidden;background:#ddd;box-shadow:0 12px 34px rgba(73,53,46,.15)}.tn13-visual-small img{width:100%;height:100%;object-fit:cover}
    .tn13-visual-label{position:absolute;left:5%;bottom:7%;z-index:2;padding:7px 11px;border-radius:999px;background:rgba(248,244,238,.88);backdrop-filter:blur(10px);font-size:9px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#765f57}

    .tn13-hero-bottom{flex:0 0 auto;margin-top:auto}
    .tn13-hero-actions{display:flex;align-items:center;gap:14px;margin:0 0 12px}
    .tn13-main-cta{display:inline-flex;min-height:46px;align-items:center;justify-content:center;border-radius:999px;background:var(--taupe-dark);color:#fff!important;padding:0 20px;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:.02em;border:0}
    .tn13-quiet-link{font-size:11px;color:#7b6b64;text-decoration:none;border-bottom:1px solid rgba(83,67,60,.28);padding-bottom:3px}
    .tn13-stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);padding-top:11px}.tn13-stat{display:grid;gap:2px}.tn13-stat strong{font:500 22px/1 "Cormorant Garamond",Georgia,serif}.tn13-stat span{font-size:9px;color:#8b7b74;text-transform:uppercase;letter-spacing:.1em}

    .tn13-section{padding:58px 0 62px}.tn13-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:22px}.tn13-section-head h2{margin:5px 0 0;font:500 clamp(38px,11vw,48px)/.93 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em}.tn13-section-note{max-width:145px;margin:0;color:#8a7b74;font-size:10px;line-height:1.45;text-align:right}
    .tn13-reveal{opacity:0;transform:translateY(18px);transition:opacity .75s ease,transform .75s cubic-bezier(.22,.78,.25,1)}.tn13-reveal.visible{opacity:1;transform:none}

    .tn13-portfolio{background:#f6f1eb}
    .tn13-feature{margin:0 -7px;display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 7px}.tn13-feature::-webkit-scrollbar{display:none}.tn13-feature button{flex:0 0 86%;height:64vw;max-height:340px;border:0;padding:0;border-radius:24px;overflow:hidden;background:#e7ddd5;scroll-snap-align:center}.tn13-feature img{width:100%;height:100%;object-fit:cover}
    .tn13-work-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-top:16px}.tn13-work-grid button{border:0;padding:0;aspect-ratio:1/1.18;border-radius:16px;overflow:hidden;background:#e5ddd7}.tn13-work-grid img{width:100%;height:100%;object-fit:cover}
    .tn13-gallery-btn{width:100%;margin-top:13px;min-height:48px;border:1px solid var(--line);border-radius:999px;background:transparent;display:flex;align-items:center;justify-content:space-between;padding:0 17px;font-size:12px;font-weight:600;color:#66564f}

    .tn13-services{background:#2f2926;color:#f7f2ec}.tn13-services .tn13-kicker{color:#c8aa9e}.tn13-services .tn13-section-note{color:#b9a9a2}.tn13-services .tn13-section-head{margin-bottom:28px}
    .tn13-tabs{display:flex;gap:8px;overflow-x:auto;margin:0 -24px 11px;padding:0 24px;scrollbar-width:none}.tn13-tabs::-webkit-scrollbar{display:none}.tn13-tab{border:1px solid rgba(255,255,255,.18);border-radius:999px;background:transparent;color:#d8cec8!important;padding:9px 13px;white-space:nowrap;font-size:11px}.tn13-tab.active{background:#f1e7df;color:#392f2b!important;border-color:#f1e7df}
    .tn13-service-list{border-top:1px solid rgba(255,255,255,.16)}.tn13-service-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:center;padding:17px 0;border-bottom:1px solid rgba(255,255,255,.14)}.tn13-service-name strong{display:block;font-size:13px;font-weight:500;line-height:1.35}.tn13-service-name small{display:none}.tn13-service-action{text-align:right}.tn13-service-action b{display:block;font:500 17px/1 "Cormorant Garamond",Georgia,serif}.tn13-service-action button{border:0;background:transparent;color:#d8b7aa!important;padding:6px 0 0;font-size:10.5px;border-bottom:1px solid rgba(216,183,170,.38)}
    .tn13-more{margin-top:17px;border:0;background:transparent;color:#d6c8c1!important;font-size:11px;padding:0;text-decoration:underline;text-underline-offset:5px}

    .tn13-team{background:#f3ece6}.tn13-team-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.tn13-master{position:relative;border:1px solid rgba(74,57,49,.1);background:rgba(255,255,255,.45);border-radius:24px;padding:16px;text-align:left;min-height:186px;overflow:hidden}.tn13-master-monogram{width:72px;height:72px;border-radius:50%;display:grid;place-items:center;background:#e2d6cf;color:#725d55;font:500 32px/1 "Cormorant Garamond",Georgia,serif;margin-bottom:22px}.tn13-master strong{display:block;font:500 25px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em}.tn13-master span{display:block;margin-top:5px;color:#83736c;font-size:10.5px;line-height:1.35}.tn13-master-arrow{position:absolute;right:15px;top:15px;font-size:18px;color:#8f776e}

    .tn13-reviews{background:#fbf8f4}.tn13-review-summary{display:flex;align-items:end;justify-content:space-between;text-decoration:none;border-bottom:1px solid var(--line);padding:0 0 18px;margin-bottom:21px}.tn13-review-summary strong{font:500 64px/.8 "Cormorant Garamond",Georgia,serif;letter-spacing:-.05em}.tn13-review-summary span{text-align:right;color:#8c766e;font-size:10px;line-height:1.7;letter-spacing:.08em;text-transform:uppercase}.tn13-review-viewport{overflow:hidden;margin:0 -24px}.tn13-review-track{display:flex;width:max-content;gap:10px;padding:0 24px;animation:tn13Reviews 125s linear infinite}.tn13-review-track.paused{animation-play-state:paused}@keyframes tn13Reviews{to{transform:translateX(-50%)}}
    .tn13-review-card{width:286px;min-height:178px;border:1px solid rgba(74,57,49,.1);border-radius:22px;background:#f5eee8;padding:18px;text-decoration:none}.tn13-review-stars{color:#9a796c;font-size:11px;letter-spacing:2px}.tn13-review-card blockquote{margin:17px 0 18px;font:500 22px/1.05 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em}.tn13-review-card small{color:#8b7b74;font-size:9.5px}

    .tn13-final{background:#8b7167;color:#fff;padding:62px 0 54px}.tn13-final .tn13-kicker{color:#ead8d0}.tn13-final h2{margin:8px 0 14px;font:500 clamp(42px,12vw,53px)/.9 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em}.tn13-final h2 em{color:#ead9d1;font-weight:500}.tn13-final-copy{margin:0 0 25px;max-width:370px;color:#ede2dd;font-size:12px;line-height:1.55}
    .tn13-final-actions{display:grid;gap:9px}.tn13-final-cta{height:52px;border:0;border-radius:999px;background:#f8f1eb;color:#503f39!important;display:flex;align-items:center;justify-content:space-between;padding:0 18px;text-decoration:none;font-size:12px;font-weight:600}.tn13-final-secondary-row{display:grid;grid-template-columns:1fr 1fr;gap:9px}.tn13-final-secondary{height:48px;border:1px solid rgba(255,255,255,.27);border-radius:999px;display:flex;align-items:center;justify-content:center;gap:7px;text-decoration:none;color:#fff!important;font-size:11px}.tn13-final-secondary svg{width:16px;height:16px;flex:0 0 auto}.tn13-final-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,.22)}.tn13-final-facts strong{display:block;font:500 20px/1 "Cormorant Garamond",Georgia,serif}.tn13-final-facts small{display:block;margin-top:4px;color:#eadad3;font-size:8.5px;text-transform:uppercase;letter-spacing:.08em}
    .tn13-map{width:100%;height:210px;border:0;border-radius:22px;margin:23px 0 0;background:#ddd;filter:saturate(.6) contrast(.95)}
    .tn13-footer{background:#2f2926;color:#d8ccc6;padding:28px 0 36px;text-align:center;font-size:10px;letter-spacing:.08em;text-transform:uppercase}.tn13-footer strong{display:block;color:#fff;font:500 25px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em;text-transform:none;margin-bottom:7px}

    .tn13-sticky{position:fixed;z-index:180;left:14px;right:14px;bottom:calc(10px + env(safe-area-inset-bottom));display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 7px 7px 15px;border:1px solid rgba(71,55,48,.12);border-radius:999px;background:rgba(248,244,239,.93);box-shadow:0 12px 38px rgba(56,40,34,.15);backdrop-filter:blur(18px);transform:translateY(150%);transition:transform .3s ease}.tn13-sticky.show{transform:none}.tn13-sticky span{font-size:10px;color:#81716a}.tn13-sticky strong{display:block;color:#3d332f;font-size:11px;font-weight:600}.tn13-sticky button{height:42px;border:0;border-radius:999px;background:#715b53;color:#fff!important;padding:0 18px;font-size:11px;font-weight:600}

    .tn13-overlay,.tn13-sheet{position:fixed;z-index:350;inset:0;display:none}.tn13-overlay.open{display:block;background:#f8f4ef;overflow:auto}.tn13-gallery-head{position:sticky;top:0;z-index:5;background:rgba(248,244,239,.94);backdrop-filter:blur(18px);padding:17px 20px 15px;border-bottom:1px solid var(--line)}.tn13-back{width:42px;height:42px;border:0;border-radius:50%;background:rgba(255,255,255,.5);font-size:20px}.tn13-gallery-title{font:500 39px/.95 "Cormorant Garamond",Georgia,serif;margin:17px 0 3px}.tn13-gallery-sub{font-size:10px;color:#907a71;letter-spacing:.12em;text-transform:uppercase}.tn13-gallery-tabs{display:flex;gap:8px;overflow:auto;padding:16px 20px;scrollbar-width:none}.tn13-gallery-tabs button{border:1px solid var(--line);border-radius:999px;background:transparent;padding:9px 13px;font-size:11px}.tn13-gallery-tabs button.active{background:#715b53;color:#fff!important}.tn13-gallery-list{display:grid;gap:12px;padding:0 20px 30px}.tn13-gallery-list img{width:100%;border-radius:20px;display:block}
    .tn13-sheet.open{display:flex;align-items:flex-end;background:rgba(37,29,26,.35)}.tn13-panel{width:100%;max-height:92vh;overflow:auto;background:#f8f4ef;border-radius:29px 29px 0 0;padding:26px 20px calc(26px + env(safe-area-inset-bottom));position:relative}.tn13-close{position:absolute;right:16px;top:16px;width:40px;height:40px;border:0;border-radius:50%;background:#eee4dd;font-size:20px}.tn13-master-hero{padding:20px 0 24px}.tn13-master-big{width:120px;height:120px;border-radius:50%;display:grid;place-items:center;background:#e3d7cf;color:#725d55;font:500 48px/1 "Cormorant Garamond",Georgia,serif}.tn13-master-title{font:500 42px/.95 "Cormorant Garamond",Georgia,serif;margin:19px 0 4px}.tn13-master-sub{color:#8a7770;font-size:11px}.tn13-master-about{padding:20px 0;border-top:1px solid var(--line);font-size:12px;line-height:1.58;color:#5f514b}.tn13-master-services{border-top:1px solid var(--line)}.tn13-master-service{display:flex;justify-content:space-between;gap:15px;padding:14px 0;border-bottom:1px solid var(--line);font-size:11px}.tn13-master-service b{font-weight:500}.tn13-master-service span{color:#8a7770}.tn13-sheet-cta{width:100%;height:50px;border:0;border-radius:999px;background:#715b53;color:#fff!important;margin-top:20px;font-size:12px;font-weight:600}
    #tn13BookSheet .tn13-panel{background:#fff}.tn50-book-title{margin:17px 50px 0 0;font:500 38px/.95 "Cormorant Garamond",Georgia,serif;letter-spacing:-.025em}.tn50-book-copy{margin:12px 42px 0 0;color:#736861;font-size:11.5px;line-height:1.5}.tn50-book-options{display:grid;gap:8px;margin-top:22px}.tn50-book-option{width:100%;min-height:62px;border:1px solid rgba(66,52,45,.12);border-radius:14px;padding:9px 12px;display:grid;grid-template-columns:38px minmax(0,1fr) auto;align-items:center;gap:11px;background:#fff;color:#211d1a!important;text-align:left;text-decoration:none!important}.tn50-book-option.is-pending{cursor:default;opacity:1}.tn50-book-icon{width:38px;height:38px;border-radius:12px;display:grid;place-items:center}.tn50-book-icon svg{width:21px;height:21px}.tn50-book-icon.phone{background:#f0edeb;color:#211d1a}.tn50-book-icon.whatsapp{background:#e9f7f0;color:#128c7e}.tn50-book-icon.max{background:#efebff;color:#471aff}.tn50-book-option strong{display:block;font:500 14px/1.2 "Manrope",Arial,sans-serif}.tn50-book-arrow{color:#9b8e86;font-size:17px}
  }
  @media(min-width:768px){#stluxe-tanem-v13{display:none!important}}
  `;
  document.head.appendChild(css);

  const root=document.createElement('div');
  root.id='stluxe-tanem-v13';

  const serviceTabs=[['all','Все'],['nails','Ногти'],['hair','Волосы'],['brows','Брови и ресницы'],['face','Косметология'],['depilation','Эпиляция'],['makeup','Макияж'],['massage','Массаж'],['other','Другое']];
  const galleryTabs=[['all','Все'],['salon','Салон'],['nails','Ногти'],['hair','Волосы'],['makeup','Макияж']];

  root.innerHTML=`
    <div class="tn13-intro" id="tn13Intro"><div class="tn13-intro-inner"><div class="tn13-intro-name">Beauty Room</div><div class="tn13-intro-line"></div><div class="tn13-intro-small">beauty salon · TANEM</div></div></div>

    <header class="tn13-hero" id="tn13Top">
      <div class="tn13-shell">
        <div class="tn13-topbar">
          <a class="tn13-brand" href="#tn13Top">Beauty Room</a>
          <div class="tn13-menu-wrap">
            <button class="tn13-menu-btn" id="tn13MenuBtn" type="button" aria-label="Открыть меню"><span></span><span></span><span></span></button>
            <nav class="tn13-menu" id="tn13Menu">
              <a href="#tn13Portfolio"><span>01</span>Портфолио</a>
              <a href="#tn13Services"><span>02</span>Услуги</a>
              <a href="#tn13Team"><span>03</span>Команда</a>
              <a href="#tn13Reviews"><span>04</span>Отзывы</a>
              <a href="#tn13Visit"><span>05</span>Визит и запись</a>
            </nav>
          </div>
        </div>

        <div class="tn13-hero-content">
          <div class="tn13-ticker"><div class="tn13-ticker-track"><span>Салон красоты · Ереван · рейтинг 5,0 · ногти · волосы · косметология</span><span>Салон красоты · Ереван · рейтинг 5,0 · ногти · волосы · косметология</span></div></div>
          <h1>Салон красоты <em>Beauty Room</em></h1>
          <p class="tn13-hero-copy">Маникюр, волосы, брови, макияж и другие направления — в одном пространстве в Ереване.</p>
        </div>

        <div class="tn13-visual" aria-label="Интерьер и работы Beauty Room">
          <button class="tn13-visual-main" type="button" data-gallery="salon"></button>
          <button class="tn13-visual-small" type="button" data-gallery="nails"></button>
          <div class="tn13-visual-label">Ереван · Zavarian St 1/5</div>
        </div>

        <div class="tn13-hero-bottom">
          <div class="tn13-hero-actions"><button class="tn13-main-cta" type="button" data-book>Записаться&nbsp; →</button><a class="tn13-quiet-link" href="#tn13Portfolio">Смотреть работы ↓</a></div>
          <div class="tn13-stats"><div class="tn13-stat"><strong>${RATING}</strong><span>рейтинг</span></div><div class="tn13-stat"><strong>${RATINGS_COUNT}</strong><span>оценок</span></div><div class="tn13-stat"><strong>${services.length}</strong><span>услуг</span></div></div>
        </div>
      </div>
    </header>

    <section class="tn13-section tn13-portfolio" id="tn13Portfolio">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Портфолио</p><h2>Пространство<br>и работы</h2></div><p class="tn13-section-note">Реальные фотографии из карточки Beauty Room</p></div>
      </div>
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-feature">${works.slice(0,2).map(w=>`<button type="button" data-gallery="${w.cat}"><img loading="lazy" decoding="async" src="${w.src}" alt="${w.alt}"></button>`).join('')}</div>
        <div class="tn13-work-grid">${works.slice(2,5).map(w=>`<button type="button" data-gallery="${w.cat}"><img loading="lazy" decoding="async" src="${w.src}" alt="${w.alt}"></button>`).join('')}</div>
        <button class="tn13-gallery-btn" type="button" data-gallery="all"><span>Открыть всю галерею</span><span>→</span></button>
      </div>
    </section>

    <section class="tn13-section tn13-services" id="tn13Services">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Услуги</p><h2>Выберите<br>услугу</h2></div></div>
        <div class="tn13-tabs" id="tn13ServiceTabs">${serviceTabs.map((t,i)=>`<button class="tn13-tab ${i===0?'active':''}" data-service-cat="${t[0]}" type="button">${t[1]}</button>`).join('')}</div>
        <div class="tn13-service-list" id="tn13ServiceList"></div>
        <button class="tn13-more" id="tn13More" type="button">Показать ещё услуги</button>
      </div>
    </section>

    <section class="tn13-section tn13-team" id="tn13Team">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Команда</p><h2>Мастера<br>Beauty Room</h2></div><p class="tn13-section-note">Персональные страницы специалистов</p></div>
        <div class="tn13-team-grid">${masters.map(m=>`<button class="tn13-master" type="button" data-master="${m.id}"><span class="tn13-master-arrow">↗</span><div class="tn13-master-monogram">${m.initial}</div><strong>${m.name}</strong><span>${m.category}</span></button>`).join('')}</div>
      </div>
    </section>

    <section class="tn13-section tn13-reviews" id="tn13Reviews">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Отзывы</p><h2>Что говорят<br>клиенты</h2></div></div>
        <a class="tn13-review-summary" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><strong>${RATING}</strong><span>★★★★★<br>Google Maps →</span></a>
      </div>
      <div class="tn13-review-viewport" id="tn13ReviewViewport"><div class="tn13-review-track" id="tn13ReviewTrack">${reviews.concat(reviews).map(r=>`<a class="tn13-review-card" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><div class="tn13-review-stars">★★★★★</div><blockquote>«${r.text}»</blockquote><small>${r.name} · Google Maps</small></a>`).join('')}</div></div>
    </section>

    <section class="tn13-final" id="tn13Visit">
      <div class="tn13-shell tn13-reveal">
        <p class="tn13-kicker">Визит и запись</p>
        <h2>Выберите удобный<br><em>способ записи</em></h2>
        <p class="tn13-final-copy">Beauty Room by Esmeralda находится в Ереване, Zavarian St 1/5. Салон работает ежедневно с 09:00 до 20:00.</p>
        <div class="tn13-final-actions">
          <button class="tn13-final-cta" type="button" data-book><span>Записаться в Beauty Room</span><span>→</span></button>
          <div class="tn13-final-secondary-row"><a class="tn13-final-secondary" href="${WHATSAPP_URL}" target="_blank" rel="noopener"><svg class="tn50-brand-svg" aria-hidden="true"><use href="#stl-icon-whatsapp"/></svg>Viber</a><a class="tn13-final-secondary" href="tel:${PHONE}"><svg aria-hidden="true"><use href="#stl-icon-phone"/></svg>Позвонить</a><a class="tn13-final-secondary" href="${YANDEX}" target="_blank" rel="noopener">Google Maps</a></div>
        </div>
        <iframe class="tn13-map" loading="lazy" src="https://www.google.com/maps?q=40.1673067,44.5124793&z=16&output=embed" title="Карта Beauty Room"></iframe>
        <div class="tn13-final-facts"><span><strong>09–20</strong><small>ежедневно</small></span><span><strong>5,0</strong><small>рейтинг</small></span><span><strong>30</strong><small>услуг</small></span></div>
      </div>
    </section>

    <footer class="tn13-footer"><div class="tn13-shell"><strong>Beauty Room</strong>Цифровой офис TANEM.RU</div></footer>

    <div class="tn13-sticky" id="tn13Sticky"><span>Доступно <strong>${services.length} услуг</strong></span><button type="button" data-book>Записаться</button></div>

    <div class="tn13-overlay" id="tn13Gallery"><div class="tn13-gallery-head"><button class="tn13-back" id="tn13GalleryClose" type="button">←</button><div class="tn13-gallery-title">Галерея Beauty Room</div><div class="tn13-gallery-sub">Салон · ногти · волосы · макияж</div></div><div class="tn13-gallery-tabs" id="tn13GalleryTabs"></div><div class="tn13-gallery-list" id="tn13GalleryList"></div></div>

    <div class="tn13-sheet" id="tn13MasterSheet"><div class="tn13-panel"><button class="tn13-close" id="tn13MasterClose" type="button">×</button><div id="tn13MasterBody"></div></div></div>
    <div class="tn13-sheet" id="tn13BookSheet" role="dialog" aria-modal="true" aria-labelledby="tn50BookTitle"><div class="tn13-panel"><button class="tn13-close" id="tn13BookClose" type="button" aria-label="Закрыть">×</button><p class="tn13-kicker">Запись</p><h2 class="tn50-book-title" id="tn50BookTitle">Как вам удобнее записаться?</h2><p class="tn50-book-copy">Выберите удобный способ связи.</p><div class="tn50-book-options"><a class="tn50-book-option" href="tel:${PHONE}"><span class="tn50-book-icon phone"><svg aria-hidden="true"><use href="#stl-icon-phone"/></svg></span><span><strong>Телефон</strong></span><span class="tn50-book-arrow">→</span></a><a class="tn50-book-option" href="${WHATSAPP_URL}"><span class="tn50-book-icon viber-generic"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5h14v10H9l-4 3v-13Z"/></svg></span><span><strong>Viber</strong></span><span class="tn50-book-arrow">→</span></a></div></div></div>
  `;
  document.body.appendChild(root);

  const $=(s,c=root)=>c.querySelector(s);const $$=(s,c=root)=>Array.from(c.querySelectorAll(s));

  const menuBtn=$('#tn13MenuBtn'),menu=$('#tn13Menu');
  menuBtn.addEventListener('click',()=>{menuBtn.classList.toggle('open');menu.classList.toggle('open')});
  $$('#tn13Menu a').forEach(a=>a.addEventListener('click',()=>{menuBtn.classList.remove('open');menu.classList.remove('open')}));
  document.addEventListener('pointerdown',e=>{if(!e.target.closest('.tn13-menu-wrap')){menuBtn.classList.remove('open');menu.classList.remove('open')}});

  let serviceCat='all',expanded=false;
  function renderServices(){const all=services.filter(s=>serviceCat==='all'||s[0]===serviceCat);const shown=expanded?all:all.slice(0,6);$('#tn13ServiceList').innerHTML=shown.map(s=>`<article class="tn13-service-row"><div class="tn13-service-name"><strong>${s[1]}</strong></div><div class="tn13-service-action"><button type="button" data-book>Записаться →</button></div></article>`).join('');const more=$('#tn13More');more.style.display=all.length>6?'block':'none';more.textContent=expanded?'Свернуть услуги':'Показать ещё '+Math.max(0,all.length-6)+' услуг';bindBook();}
  renderServices();
  $$('#tn13ServiceTabs [data-service-cat]').forEach(b=>b.addEventListener('click',()=>{serviceCat=b.dataset.serviceCat;expanded=false;$$('#tn13ServiceTabs .tn13-tab').forEach(x=>x.classList.toggle('active',x===b));renderServices()}));
  $('#tn13More').addEventListener('click',()=>{expanded=!expanded;renderServices()});

  let galleryCat='all';
  function renderGalleryTabs(){ $('#tn13GalleryTabs').innerHTML=galleryTabs.map(t=>`<button type="button" data-gallery-tab="${t[0]}" class="${galleryCat===t[0]?'active':''}">${t[1]}</button>`).join('');$$('#tn13GalleryTabs button').forEach(b=>b.addEventListener('click',()=>{galleryCat=b.dataset.galleryTab;renderGalleryTabs();renderGalleryList()})); }
  function renderGalleryList(){const arr=works.filter(w=>galleryCat==='all'||w.cat===galleryCat);$('#tn13GalleryList').innerHTML=arr.map(w=>`<img loading="lazy" decoding="async" src="${w.src}" alt="${w.alt}">`).join('')}
  function openGallery(cat){galleryCat=galleryTabs.some(t=>t[0]===cat)?cat:'all';renderGalleryTabs();renderGalleryList();$('#tn13Gallery').classList.add('open');document.body.style.overflow='hidden'}
  $$('[data-gallery]').forEach(b=>b.addEventListener('click',()=>openGallery(b.dataset.gallery)));
  $('#tn13GalleryClose').addEventListener('click',()=>{$('#tn13Gallery').classList.remove('open');document.body.style.overflow=''});

  function openMaster(id){const m=masters.find(x=>x.id===id);if(!m)return;const ms=services.filter(s=>m.cats.includes(s[0]));$('#tn13MasterBody').innerHTML=`<div class="tn13-master-hero"><div class="tn13-master-big">${m.initial}</div><div class="tn13-master-title">${m.name}</div><div class="tn13-master-sub">Мастер · ${m.category}</div></div><div class="tn13-master-about">${m.about}</div><div class="tn13-master-services">${ms.length?ms.slice(0,6).map(s=>`<div class="tn13-master-service"><b>${s[1]}</b><span>${s[2]}</span></div>`).join(''):'<div class="tn13-master-about">Персональные услуги будут добавлены после подтверждения салоном.</div>'}</div><button class="tn13-sheet-cta" type="button" data-book>Записаться</button>`;$('#tn13MasterSheet').classList.add('open');document.body.style.overflow='hidden';bindBook();}
  $$('[data-master]').forEach(b=>b.addEventListener('click',()=>openMaster(b.dataset.master)));
  $('#tn13MasterClose').addEventListener('click',()=>{$('#tn13MasterSheet').classList.remove('open');document.body.style.overflow=''});

  function openBook(){ $('#tn13BookSheet').classList.add('open');document.body.style.overflow='hidden'; }
  function bindBook(){ $$('[data-book]').forEach(b=>{if(b.dataset.bound)return;b.dataset.bound='1';b.addEventListener('click',openBook)}); }
  bindBook();
  $('#tn13BookClose').addEventListener('click',()=>{$('#tn13BookSheet').classList.remove('open');document.body.style.overflow=''});
  $$('.tn13-sheet').forEach(s=>s.addEventListener('click',e=>{if(e.target===s){s.classList.remove('open');document.body.style.overflow=''}}));

  const reviewTrack=$('#tn13ReviewTrack'),reviewViewport=$('#tn13ReviewViewport');let resume;
  reviewViewport.addEventListener('pointerdown',()=>{clearTimeout(resume);reviewTrack.classList.add('paused')},{passive:true});
  const resumeReviews=()=>{clearTimeout(resume);resume=setTimeout(()=>reviewTrack.classList.remove('paused'),500)};
  reviewViewport.addEventListener('pointerup',resumeReviews,{passive:true});reviewViewport.addEventListener('pointercancel',resumeReviews,{passive:true});

  const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -8% 0px'});$$('.tn13-reveal').forEach(el=>reveal.observe(el));

  const sticky=$('#tn13Sticky'),hero=$('#tn13Top'),final=$('#tn13Visit');let raf=0;
  function scrollState(){raf=0;const heroDone=hero.getBoundingClientRect().bottom<=0;const finalNear=final.getBoundingClientRect().top<=window.innerHeight+70;sticky.classList.toggle('show',heroDone&&!finalNear)}
  window.addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(scrollState)},{passive:true});scrollState();

  document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#tn13Gallery').classList.remove('open');$('#tn13MasterSheet').classList.remove('open');$('#tn13BookSheet').classList.remove('open');document.body.style.overflow=''}});
})();

(function(){
'use strict';
const STLUXE_V23_REFINED=true;
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const root=document.getElementById('stluxe-tanem-v13'); if(!root)return;
const YANDEX='https://www.google.com/maps/place/Beauty+Room+by+Esmeralda/@40.1673067,44.5124793,17z/';
const YANDEX_RU='https://www.google.com/maps/place/Beauty+Room+by+Esmeralda/@40.1673067,44.5124793,17z/';
const YANDEX_REVIEWS='https://www.google.com/maps/place/Beauty+Room+by+Esmeralda/@40.1673067,44.5124793,17z/';
const ROUTE='https://www.google.com/maps/place/Beauty+Room+by+Esmeralda/@40.1673067,44.5124793,17z/';
const PHONE='+37493873617';
const WHATSAPP_URL='viber://chat?number=%2B37493873617';

const SERVICES=[
{cat:'Маникюр',title:'Педикюр',price:'',desc:''},
{cat:'Брови и ресницы',title:'Процедуры для бровей',price:'',desc:''},
{cat:'Волосы',title:'Свадебные прически',price:'',desc:''},
{cat:'Брови и ресницы',title:'Тридинг бровей',price:'',desc:''},
{cat:'Эпиляция',title:'Удаление волос нитью',price:'',desc:''},
{cat:'Волосы',title:'Укладка волос',price:'',desc:''},
{cat:'Другое',title:'Прокалывание ушей',price:'',desc:''},
{cat:'Эпиляция',title:'Шугаринг',price:'',desc:''},
{cat:'Волосы',title:'Стрижка волос',price:'',desc:''},
{cat:'Эпиляция',title:'Электроэпиляция игловая',price:'',desc:''},
{cat:'Волосы',title:'Окрашивание волос',price:'',desc:''},
{cat:'Волосы',title:'Уход за волосами восстановление повреждённых волос',price:'',desc:''},
{cat:'Волосы',title:'Спа процедура для волос',price:'',desc:''},
{cat:'Маникюр',title:'Наращивание ногтей',price:'',desc:''},
{cat:'Маникюр',title:'Маникюр + покрытие гельлак',price:'',desc:''},
{cat:'Маникюр',title:'Маникюр + покрытие лак',price:'',desc:''},
{cat:'Маникюр',title:'Парафинотерапия для рук',price:'',desc:''},
{cat:'Косметология',title:'Карбокси терапия',price:'',desc:''},
{cat:'Косметология',title:'Ультразвуковая чистка лица',price:'',desc:''},
{cat:'Эпиляция',title:'Восковая эпиляция',price:'',desc:''},
{cat:'Брови и ресницы',title:'Коррекция формы бровей',price:'',desc:''},
{cat:'Волосы',title:'Косы',price:'',desc:''},
{cat:'Брови и ресницы',title:'Ламинирование бровей',price:'',desc:''},
{cat:'Брови и ресницы',title:'Ламинирование ресниц',price:'',desc:''},
{cat:'Макияж',title:'Макияж',price:'',desc:''},
{cat:'Маникюр',title:'Маникюр',price:'',desc:''},
{cat:'Массаж',title:'Массаж',price:'',desc:''},
{cat:'Волосы',title:'Мытье головы шампунем и кондиционирование',price:'',desc:''},
{cat:'Волосы',title:'Наращивание волос',price:'',desc:''},
{cat:'Брови и ресницы',title:'Наращивание ресниц',price:'',desc:''},
];
const GALLERY={
'Салон':[
 {src:'interior_reception_02.webp',alt:'Интерьер Beauty Room by Esmeralda'}
],
'Ногти':[
 {src:'manicure_french_soft_pink_design_04.webp',alt:'Маникюр Beauty Room by Esmeralda'},
 {src:'manicure_burgundy_long_glitter_09.webp',alt:'Маникюр Beauty Room by Esmeralda'},
 {src:'manicure_nude_almond_02.webp',alt:'Маникюр Beauty Room by Esmeralda'},
 {src:'manicure_white_almond_03.webp',alt:'Маникюр Beauty Room by Esmeralda'},
 {src:'manicure_black_short_06.webp',alt:'Маникюр Beauty Room by Esmeralda'},
 {src:'manicure_pastel_pink_square_10.webp',alt:'Маникюр Beauty Room by Esmeralda'},
 {src:'manicure_burgundy_short_05.webp',alt:'Маникюр Beauty Room by Esmeralda'},
 {src:'manicure_nude_short_01.webp',alt:'Маникюр Beauty Room by Esmeralda'},
 {src:'manicure_white_square_08.webp',alt:'Маникюр Beauty Room by Esmeralda'},
 {src:'manicure_burgundy_almond_matte_gloss_07.webp',alt:'Маникюр Beauty Room by Esmeralda'}
],
'Волосы':[
 {src:'hair_layered_brunette_02.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
 {src:'hair_blonde_layers_03.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
 {src:'hair_long_waves_05.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
 {src:'hair_braids_box_04.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
 {src:'hair_sleek_straight_01.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
 {src:'hair_braid_girl_06.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
 {src:'hair_blonde_waves_01.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
 {src:'hair_ponytail_waves_07.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
 {src:'kids_hairstyle_ponytail_01.webp',alt:'Работа с волосами Beauty Room by Esmeralda'}
],
'Макияж':[
 {src:'makeup_evening_01.webp',alt:'Макияж Beauty Room by Esmeralda'},
 {src:'makeup_soft_pink_02.webp',alt:'Макияж Beauty Room by Esmeralda'},
 {src:'makeup_glow_03.webp',alt:'Макияж Beauty Room by Esmeralda'}
]
};
const PORTFOLIO=[
 {src:'manicure_french_soft_pink_design_04.webp',alt:'Работа Beauty Room by Esmeralda'},
 {src:'hair_layered_brunette_02.webp',alt:'Работа Beauty Room by Esmeralda'},
 {src:'makeup_evening_01.webp',alt:'Работа Beauty Room by Esmeralda'},
 {src:'manicure_burgundy_long_glitter_09.webp',alt:'Работа Beauty Room by Esmeralda'},
 {src:'hair_blonde_layers_03.webp',alt:'Работа Beauty Room by Esmeralda'},
 {src:'makeup_soft_pink_02.webp',alt:'Работа Beauty Room by Esmeralda'},
 {src:'manicure_nude_almond_02.webp',alt:'Работа Beauty Room by Esmeralda'}
];
const REVIEW_DATA=[
['Aurélie Vagharchak','Excellent service! The team is truly professional and welcoming. I had such a nice and peaceful time. Highly recommended for a high-quality manicure and pedicure'],
['Nathalie Nalbandian','Visited Esmeralda to get my nails done for a wedding in Armenia. I found her on Yandex maps as a visitor from America. She did a wonderful job with the Russian gel manicure and pedicure. Cute little beauty salon. I recommend!'],
['Анастасия Франкони','Супер уютный небольшой салон. Сделали прекрасный маникюр (гель-лак) и педикюр. В процессе поняла, что хочу еще и брови, мастер нашла время, чтобы все сразу успеть! Все качественно и красиво! Стоимость приятная. К сожалению поздно узнала, что в салоне работает массажист-врач. В следующий раз обязательно и на массаж запишусь. Определённо рекомендую к визиту, но записывайтесь хотя бы за день.'],
['Shushan Abrahamyan','Great atmosphere and a very cozy salon. The staff are professional, friendly, and attentive. I was very satisfied with the service and would definitely recommend this salon'],
['Leyla Medetova','В восторге от обслуживания и сервиса 🔥 Особенно от хозяйки, приятная женщина и профессионал своего дела! Записывалась на маникюр и педикюр, очень качественно! 10 из 10. Рекомендую. Цены тоже удивили, в соотношении цены и качества! Внутри салона атмосферно, чисто и уютно🤍 желаю салону процветания и успехов!'],
['DE GUZMAN, RICA MAE S.','Highly recommended! The nail technician was gentle, detailed, and really knew what she was doing. The salon was clean and relaxing too. I love my beautiful nails now😍🫶🏻'],
['Lilith Gulanyan','Очень довольна обслуживанием, теплый прием, лучшие топ мастера 👍 вкусное угощение ..кофе'],
['Ксения Курбатова','Делала маникюр и педикюр. Всё очень понравилось. Уютно, чисто, мастер просто супер. Спасибо'],
['Anne Madsen','Мы с подругой сделали стрижку, маникюр и педикюр, и очень довольны результатом. Персонал сделал все возможное, чтобы мы чувствовали себя желанными гостями, был невероятно дружелюбен и создал уютную атмосферу. Несмотря на то, что мы не говорим по-армянски, и общение было ограничено, нам было очень приятно там находиться. Если мы когда-нибудь снова приедем в Ереван, обязательно вернемся в этот салон🌸 Большое спасибо!!']
];
const MASTERS=[
{id:'nails',name:'Nail-мастер',role:'Маникюр · педикюр',about:'',cats:['Маникюр'],work:['manicure_french_soft_pink_design_04.webp','manicure_burgundy_long_glitter_09.webp','manicure_nude_almond_02.webp'],reviewNames:[]},
{id:'hair',name:'Парикмахер',role:'Волосы · укладки',about:'',cats:['Волосы'],work:['hair_layered_brunette_02.webp','hair_blonde_layers_03.webp','hair_long_waves_05.webp'],reviewNames:[]},
{id:'cosmetology',name:'Косметолог',role:'Косметология',about:'',cats:['Косметология'],work:[],reviewNames:[]}
];
const MASTER_AVATAR='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="11" fill="currentColor"></circle><path d="M12 56c2.7-11.4 10-17 20-17s17.3 5.6 20 17" fill="currentColor"></path></svg>';

const css=document.createElement('style'); css.id='stluxe-final-v22-style'; css.textContent=`
@media(max-width:767px){
#tn13Intro{display:none!important} #stluxe-tanem-v13{background:#f6f0e9!important;color:#181512!important}
#stluxe-tanem-v13 .tn13-hero{height:744px!important;min-height:744px!important;padding:0!important;background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 90%,#f7f2eb 100%)!important;position:relative!important;overflow:hidden!important}#stluxe-tanem-v13>.tn13-footer{display:none!important}
.tn22-top{position:absolute;z-index:30;top:0;left:0;right:0;height:52px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;background:#f8f4ee}
.tn22-brand{font:500 24px/1 'Cormorant Garamond',Georgia,serif!important;letter-spacing:.02em;text-decoration:none!important;color:#171513!important}
.tn22-menu{width:32px;height:32px;border:0;background:none;padding:0;display:grid;align-content:center;justify-items:end;gap:5px}.tn22-menu i{display:block;width:23px;height:1px;background:#1b1816}.tn22-menu i:nth-child(2){width:17px}.tn22-navpop{position:absolute;z-index:60;top:46px;right:12px;width:196px;padding:7px 12px;border:1px solid rgba(70,55,48,.12);border-radius:15px;background:rgba(250,247,242,.98);box-shadow:0 16px 40px rgba(45,34,29,.16);backdrop-filter:blur(18px);display:none}.tn22-navpop.open{display:grid}.tn22-navpop a{min-height:40px;display:flex;align-items:center;border-bottom:1px solid rgba(70,55,48,.08);font:500 14px/1 'Cormorant Garamond',Georgia,serif;color:#211d1a!important;text-decoration:none}.tn22-navpop a:last-child{border-bottom:0}
.tn22-media{position:absolute;top:52px;left:0;right:0;height:372px;overflow:hidden;background:#eee;border:0;padding:0;touch-action:pan-y}.tn22-slide{position:absolute;inset:0;opacity:0;transition:opacity .7s ease}.tn22-slide.active{opacity:1}.tn22-slide img{width:100%;height:100%;object-fit:cover;filter:none!important;pointer-events:none;-webkit-user-drag:none;user-select:none}.tn22-media:after{content:'';position:absolute;inset:auto 0 0;height:120px;background:linear-gradient(180deg,rgba(248,244,238,0),#f8f4ee 96%);pointer-events:none}.tn22-dots{position:absolute;z-index:3;left:50%;bottom:20px;transform:translateX(-50%);display:flex;gap:6px}.tn22-dots i{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.65);box-shadow:0 0 0 1px rgba(0,0,0,.08)}.tn22-dots i.active{width:18px;border-radius:999px;background:#fff}
.tn22-card{position:absolute;z-index:8;top:343px;left:15px;right:15px;bottom:0;height:auto;padding:20px 20px 24px;border-radius:13px 13px 0 0;background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 80%,#f7f2eb 100%);box-shadow:0 -2px 18px rgba(47,37,31,.09),0 -1px 4px rgba(47,37,31,.05);text-align:center}.tn22-card:after{content:'';position:absolute;z-index:0;left:-15px;right:-15px;bottom:-1px;height:62px;background:linear-gradient(180deg,rgba(247,242,235,0) 0%,rgba(247,242,235,.5) 48%,#f7f2eb 92%);pointer-events:none}.tn22-card>*{position:relative;z-index:1}.tn22-title{margin:0;font:500 49px/.88 'Cormorant Garamond',Georgia,serif;letter-spacing:.18em;text-indent:.18em;text-transform:uppercase}.tn22-sub{margin:12px 0 17px;font:500 10.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.38em;text-indent:.38em;text-transform:uppercase;color:#635d58}.tn22-orn{display:flex;align-items:center;justify-content:center;gap:8px;margin:15px auto 14px;color:#bda388}.tn22-orn:before,.tn22-orn:after{content:'';width:45px;height:1px;background:#bfa589}.tn22-copy{margin:0 auto;width:270px;max-width:100%;font:400 14px/1.38 'Manrope',Arial,sans-serif;color:#33302d}.tn37-hero-info{width:min(100%,330px);margin:18px auto 0;display:grid;grid-template-columns:1fr 1px 1.18fr;align-items:center;gap:12px;text-align:left}.tn37-info-divider{width:1px;height:42px;background:rgba(62,51,44,.13)}.tn37-info{display:grid;grid-template-columns:40px minmax(0,1fr);align-items:center;gap:9px;min-width:0}.tn37-info-icon{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.52);border:1px solid rgba(62,51,44,.09);box-shadow:0 5px 14px rgba(47,37,31,.05)}.tn37-info-icon svg{width:21px;height:21px;fill:none;stroke:#171513;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.tn37-info-copy{font:400 10.5px/1.28 'Manrope',Arial,sans-serif;color:#282420}.tn37-info-copy strong{display:block;margin-bottom:3px;font:500 11.5px/1.1 'Manrope',Arial,sans-serif;color:#3f8750}.tn37-location .tn37-info-copy strong{color:#282420;font-weight:500}.tn22-cta{display:flex;width:min(100%,330px);height:50px;margin:18px auto 0;align-items:center;justify-content:center;gap:12px;border:0;border-radius:8px;background:#111;color:#fff!important;font:500 14px/1 'Manrope',Arial,sans-serif}.tn22-cta svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}.tn22-worklink{display:flex;width:min(100%,330px);height:48px;margin:10px auto 0;align-items:center;justify-content:center;gap:11px;border:1px solid rgba(157,126,93,.5);border-radius:8px;background:rgba(255,255,255,.12);color:#25211f!important;text-decoration:none!important;font:500 13px/1 'Manrope',Arial,sans-serif}.tn22-worklink svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}

.tn23-section-nav{position:fixed;z-index:70;top:0;left:0;right:0;width:100%;height:48px;display:flex;align-items:stretch;overflow-x:auto;scrollbar-width:none;background:rgba(249,245,239,.96);border-bottom:1px solid rgba(61,49,43,.12);box-shadow:0 8px 26px rgba(48,36,30,.07);backdrop-filter:blur(18px);transform:translateY(-110%);opacity:0;pointer-events:none;transition:transform .28s cubic-bezier(.22,.78,.25,1),opacity .2s ease;will-change:transform,opacity;scroll-behavior:smooth}.tn23-section-nav.visible{transform:translateY(0);opacity:1;pointer-events:auto}.tn23-section-nav::-webkit-scrollbar{display:none}.tn23-section-nav button{position:relative;flex:0 0 auto;min-width:82px;padding:0 11px;border:0;background:transparent;color:#7b746f;font:500 11px/1 'Avenir Next',Avenir,-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;letter-spacing:.012em;white-space:nowrap}.tn23-section-nav button.active{color:#171513;font-weight:600}.tn23-section-nav button.active:after{content:'';position:absolute;left:12px;right:12px;bottom:-1px;height:3px;border-radius:3px 3px 0 0;background:#171513}

#tn13Portfolio{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;min-height:860px!important}.tn22-port{padding:22px 24px 34px}.tn22-kicker{margin:0;font:500 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.31em;text-transform:uppercase;color:#6f665f}.tn22-port h2,.tn22-services h2,.tn22-team h2,.tn22-reviews h2,.tn22-visit h2{margin:16px 0 0;font:500 44px/.95 'Cormorant Garamond',Georgia,serif;letter-spacing:-.03em}.tn22-port-grid{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:150px;gap:6px;margin-top:27px}.tn22-photo{border:0;padding:0;border-radius:10px;overflow:hidden;background:#ddd}.tn22-photo img{width:100%;height:100%;object-fit:cover;filter:none!important}.tn22-photo:nth-child(1){grid-row:span 2}.tn22-port-all{width:100%;height:48px;margin-top:18px;border:1px solid rgba(64,52,46,.18);border-radius:10px;background:transparent;color:#1a1715;font:500 13px/1 'Manrope',Arial,sans-serif;display:flex;align-items:center;justify-content:center;gap:12px}

#tn13Services{margin:0!important;padding:0!important;background:#e9e2da!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07);border-bottom:1px solid rgba(62,51,44,.07)}.tn31-services{padding:43px 25px 40px}.tn31-services .tn22-kicker{color:#746c66}.tn31-services h2{margin:17px 0 0;font:500 50px/.92 'Cormorant Garamond',Georgia,serif;letter-spacing:-.035em;color:#171513;white-space:nowrap}.tn31-cats-wrap{position:relative;margin:25px -25px 0}.tn31-cats{display:flex;align-items:center;gap:8px;overflow-x:auto;overscroll-behavior-inline:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:0 25px 11px}.tn31-cats::-webkit-scrollbar{display:none}.tn31-cat{position:relative;flex:0 0 auto;height:35px;padding:0 15px;border:1px solid rgba(67,57,51,.18);border-radius:999px;background:transparent;color:#655d57;font:500 10.5px/1 'Manrope',Arial,sans-serif;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease}.tn31-cat.active{background:#171513!important;color:#fff!important;border-color:#171513!important}.tn31-service-list{margin-top:18px;border-top:1px solid rgba(55,47,42,.18)}.tn31-service-row{min-height:84px;display:grid;grid-template-columns:minmax(0,1fr) 108px;gap:16px;align-items:center;border-bottom:1px solid rgba(55,47,42,.18)}.tn31-service-copy{min-width:0;padding:13px 0}.tn31-service-name{font:600 18px/1.15 'Cormorant Garamond',Georgia,serif;color:#171513;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.tn31-service-detail{display:block;margin-top:5px;font:400 9.5px/1.35 'Manrope',Arial,sans-serif;color:#81766f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tn31-service-side{text-align:right;align-self:center}.tn31-service-price{font:500 20px/1 'Cormorant Garamond',Georgia,serif;letter-spacing:.005em;color:#171513;white-space:nowrap}.tn31-service-book{display:inline-block;margin-top:8px;padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important;color:#655d57!important;font:500 9.5px/1 'Manrope',Arial,sans-serif!important;white-space:nowrap;text-decoration:none!important}.tn31-service-more{width:100%;height:48px;margin-top:22px;padding:0!important;border:1px solid #bbaea5!important;border-radius:7px!important;background:rgba(255,255,255,.18)!important;color:#342f2b!important;display:flex;align-items:center;justify-content:center;gap:9px;box-shadow:none!important;font:500 12px/1 'Manrope',Arial,sans-serif!important}.tn31-service-more span:last-child{font-size:17px;line-height:1;color:#82756c}.tn31-service-more[hidden]{display:none!important}@media(max-width:370px){.tn31-services{padding-left:20px;padding-right:20px}.tn31-cats-wrap{margin-left:-20px;margin-right:-20px}.tn31-cats{padding-left:20px;padding-right:20px}.tn31-service-row{grid-template-columns:minmax(0,1fr) 100px;gap:12px}.tn31-services h2{font-size:46px}.tn31-service-name{font-size:17px}.tn31-service-price{font-size:19px}}

#tn13Team{margin:0!important;padding:0!important;background:#f6f1e9!important;color:#171513!important}.tn22-team{padding:42px 28px 38px;overflow:hidden}.tn22-team h2{font-size:40px}.tn22-team-grid{display:flex;gap:14px;margin:30px 0 0;padding:0 0 8px;overflow-x:auto;overscroll-behavior-inline:contain;-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity;scrollbar-width:none;scroll-padding:0}.tn22-team-grid::-webkit-scrollbar{display:none}.tn22-master-card{flex:0 0 136px;scroll-snap-align:start;border:0;background:none;padding:0;text-align:center;color:#171513}.tn22-master-circle{width:100%;aspect-ratio:1/1;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#e9e3dc,#d7cec6);overflow:hidden;color:#9b9088}.tn22-master-circle svg{width:62px;height:62px}.tn22-master-name{display:block;margin-top:11px;font:500 20px/1 'Cormorant Garamond',Georgia,serif}.tn22-master-role{display:block;margin-top:5px;font:400 10px/1.3 'Manrope',Arial,sans-serif;color:#827871}.tn22-team-all{display:none!important}.tn42-team-hint{margin-top:8px;text-align:right;font:500 9px/1 'Manrope',Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8a7f78}.tn42-team-hint span{display:inline-block;margin-left:5px;font-size:14px;vertical-align:-1px}

#tn13Reviews{margin:0!important;padding:0!important;background:#e9e2da!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07);border-bottom:1px solid rgba(62,51,44,.07)}.tn30-reviews{padding:44px 0 46px}.tn30-reviews>.tn22-kicker,.tn30-reviews>h2{margin-left:24px;margin-right:24px}.tn30-reviews .tn22-kicker{color:#746c66}.tn30-reviews h2{margin-top:16px;font:500 46px/.96 'Cormorant Garamond',Georgia,serif;letter-spacing:-.03em;color:#171513}.tn30-score{text-align:center;margin-top:43px}.tn30-score strong{display:block;font:500 84px/.82 'Cormorant Garamond',Georgia,serif;color:#171513}.tn30-stars{margin-top:20px;color:#b78d4f;font-size:27px;letter-spacing:6px}.tn30-count{margin-top:14px;font:400 13px/1 'Manrope',Arial,sans-serif;color:#716862}.tn30-review-stage{display:grid;gap:12px;margin:37px 0 0;overflow:hidden;touch-action:pan-y;cursor:grab;user-select:none}.tn30-review-stage.dragging{cursor:grabbing}.tn30-lane{width:100%;overflow:hidden}.tn30-track{display:flex;width:100%;gap:12px;will-change:transform}.tn30-review-card{flex:0 0 calc(100% - 52px);box-sizing:border-box;min-height:154px;padding:16px 17px 17px;border:1px solid rgba(66,55,49,.15);border-radius:13px;background:rgba(255,255,255,.34);text-decoration:none!important;color:#171513!important}.tn30-review-head{display:grid;grid-template-columns:45px minmax(0,1fr);gap:12px;align-items:center}.tn30-review-avatar{width:43px;height:43px;border-radius:50%;display:grid;place-items:center;background:#d7cec6;border:1px solid rgba(66,55,49,.1);font:500 22px/1 'Cormorant Garamond',Georgia,serif;color:#514943}.tn30-review-name{display:block;font:600 19px/1 'Cormorant Garamond',Georgia,serif;color:#2a2522}.tn30-review-meta{display:block;margin-top:5px;font:500 9px/1 'Manrope',Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8a817a}.tn30-review-card p{margin:14px 0 0;font:400 12.5px/1.5 'Manrope',Arial,sans-serif;color:#4f4843}.tn30-review-open{display:block;margin-top:11px;font:500 9.5px/1 'Manrope',Arial,sans-serif;color:#655b54}.tn30-review-all{display:flex;align-items:center;justify-content:center;margin:28px 22px 0;height:46px;border:1px solid rgba(66,55,49,.18);border-radius:7px;color:#2f2a26!important;text-decoration:none!important;font:500 10.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.15em;text-transform:uppercase;background:rgba(255,255,255,.18)}

#tn13Visit{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;border-radius:34px 34px 0 0!important;overflow:hidden!important}.tn22-visit{padding:40px 24px 0}.tn22-visit-head{display:flex;align-items:center;justify-content:space-between;gap:10px}.tn22-status{display:inline-flex;align-items:center;gap:7px;padding:8px 10px;border:1px solid #b8b0aa;border-radius:999px;font:600 10px/1 'Manrope',Arial,sans-serif}.tn22-status svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.tn22-status.open{background:#e7f4e6;color:#3a7440}.tn22-status.closed{background:#fff0df;color:#a46020}.tn22-visit h2{font-size:46px}.tn22-contact-grid{display:grid;gap:9px;margin-top:28px}.tn22-contact{display:grid;grid-template-columns:38px minmax(0,1fr);gap:11px;align-items:center;min-height:62px;padding:10px 12px;border:1px solid rgba(63,50,44,.12);border-radius:12px;background:rgba(255,255,255,.55);text-decoration:none!important;color:#1e1a17!important}.tn22-contact svg{width:20px;height:20px;fill:none;stroke:#8d7e74;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.tn22-contact strong{display:block;font:500 15px/1.15 'Cormorant Garamond',Georgia,serif;color:#171513!important}.tn22-contact span{display:block;margin-top:4px;font:400 9.5px/1.3 'Manrope',Arial,sans-serif;color:#837971}.tn22-mapwrap{position:relative;height:168px;margin-top:15px;border-radius:13px;overflow:hidden;background:#e7e1da}.tn22-mapwrap iframe{width:100%;height:100%;border:0;filter:grayscale(.35) saturate(.75);opacity:0;transition:opacity .25s ease}.tn22-mapwrap.loaded iframe{opacity:1}.tn22-map-skeleton{position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(110deg,#e8e1da 10%,#f3eee8 35%,#e8e1da 60%);background-size:220% 100%;animation:tn22Map 1.4s linear infinite;color:#8f837b;font:500 10px/1 'Manrope',Arial,sans-serif}@keyframes tn22Map{to{background-position:-220% 0}}.tn22-mapwrap.loaded .tn22-map-skeleton{display:none}.tn22-visit-actions{display:grid;grid-template-columns:1fr 1.2fr;gap:9px;margin-top:14px}.tn22-visit-btn{height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;text-decoration:none!important;font:500 13px/1 'Manrope',Arial,sans-serif}.tn22-call{border:1px solid rgba(52,43,38,.18);color:#1e1a17!important;background:transparent}.tn22-route{background:#151311;color:#fff!important}.tn22-footer{margin:28px -24px 0;height:76px;background:#171513;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 24px;text-decoration:none!important}.tn22-footer strong{font:500 23px/1 'Cormorant Garamond',Georgia,serif;color:#fff!important}.tn22-footer span{max-width:185px;text-align:right;font:400 10px/1.35 'Manrope',Arial,sans-serif;color:#d6cec8}
.tn22-contact>.tn50-book-icon{display:grid!important;margin:0!important;font:inherit!important}.tn22-contact>.tn50-book-icon svg{width:21px!important;height:21px!important}.tn22-contact>.tn50-book-icon.phone svg{stroke:currentColor!important}.tn50-brand-svg{fill:currentColor!important;stroke:none!important}.tn22-contact.is-pending{width:100%;cursor:default;text-align:left;font:inherit;opacity:1}

#tn13Sticky{width:min(calc(100% - 20px),500px)!important;min-height:62px!important;padding:8px 8px 8px 15px!important;border-radius:18px!important;border:1px solid rgba(61,49,43,.12)!important;background:rgba(249,245,239,.96)!important;box-shadow:0 14px 40px rgba(48,36,30,.16)!important;backdrop-filter:blur(18px)!important;align-items:center!important}#tn13Sticky span{font:500 12px/1.12 'Manrope',Arial,sans-serif!important;color:#6f635c!important;white-space:nowrap}#tn13Sticky strong{display:block;margin:0;font:600 14px/1 'Manrope',Arial,sans-serif!important;color:#191613!important;white-space:nowrap}#tn13Sticky button{position:relative;overflow:hidden;height:46px!important;min-width:142px!important;border-radius:999px!important;background:#171513!important;color:#fff!important;padding:0 24px!important;font:600 12px/1 'Manrope',Arial,sans-serif!important}#tn13Sticky button:after{content:'';position:absolute;inset:-30% auto -30% -30%;width:34%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);transform:skewX(-20deg);animation:tn22Shine 3.2s ease-in-out infinite}@keyframes tn22Shine{0%,65%{left:-40%}100%{left:130%}}

#tn13Gallery{z-index:120!important;background:#f7f2eb!important;color:#171513!important;padding:0!important;overflow:auto!important}.tn22-gallery{min-height:100dvh;padding:24px 18px 40px}.tn22-gallery-top{display:grid;grid-template-columns:44px 1fr 44px;align-items:center}.tn22-gallery-back{width:40px;height:40px;border:0;background:none;font-size:28px}.tn22-gallery-title{text-align:center}.tn22-gallery-title strong{display:block;font:500 42px/.9 'Cormorant Garamond',Georgia,serif}.tn22-gallery-title span{display:block;margin-top:8px;font:500 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.34em;color:#7e746d}.tn22-gallery-tabs{display:flex;gap:0;margin-top:26px;border:1px solid rgba(55,44,39,.12);border-radius:14px;overflow-x:auto;scrollbar-width:none}.tn22-gallery-tabs::-webkit-scrollbar{display:none}.tn22-gallery-tab{flex:0 0 auto;height:43px;padding:0 18px;border:0;background:transparent;font:500 11px/1 'Manrope',Arial,sans-serif;color:#6f655f}.tn22-gallery-tab.active{background:#171513;color:#fff!important}.tn22-gallery-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:18px}.tn22-gallery-grid.salon{grid-template-columns:1fr 1fr}.tn22-gallery-tile{border:0;padding:0;overflow:hidden;border-radius:11px;background:#ddd;aspect-ratio:1/1}.tn22-gallery-grid.salon .tn22-gallery-tile{aspect-ratio:1/1}.tn23-gallery-empty{grid-column:1/-1;padding:54px 10px;text-align:center;color:#847a73;font:400 13px/1.5 'Manrope',Arial,sans-serif}.tn22-gallery-tile img{width:100%;height:100%;object-fit:cover;filter:none!important}
.tn22-viewer{position:fixed;z-index:180;inset:0;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(27,20,20,.9);backdrop-filter:blur(9px);touch-action:none;overscroll-behavior:contain}.tn22-viewer.open{display:flex}.tn22-viewer-frame{position:relative;width:min(100%,520px);height:min(72dvh,640px);background:transparent;overflow:visible;touch-action:none}.tn42-viewer-canvas{position:absolute;inset:0;overflow:hidden;border-radius:14px;background:#151312;touch-action:none;box-shadow:0 18px 54px rgba(0,0,0,.28)}.tn23-viewer-hint{position:absolute;z-index:4;top:-42px;left:0;color:rgba(255,255,255,.65);font:400 10px/1 'Manrope',Arial,sans-serif}.tn22-viewer-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#151312;transform:translate3d(0,0,0) scale(1);transform-origin:center center;will-change:transform;-webkit-user-drag:none;user-select:none}.tn22-viewer-top{position:absolute;z-index:5;top:-52px;left:0;right:0;display:flex;justify-content:flex-end}.tn22-viewer-actions{display:flex}.tn22-vbtn{width:42px;height:42px;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(255,255,255,.08);color:#fff!important;font-size:22px}.tn22-navbtn{position:absolute;z-index:5;top:50%;transform:translateY(-50%);width:30px;height:52px;border:0;background:transparent;color:#fff!important;font-size:35px;line-height:1}.tn22-prev{left:-5px}.tn22-next{right:-5px}.tn22-navbtn[hidden]{display:none!important}.tn23-viewer-foot{position:absolute;z-index:5;left:0;right:0;bottom:-34px;display:flex;align-items:center;justify-content:space-between;color:rgba(255,255,255,.68);font:400 10px/1 'Manrope',Arial,sans-serif}.tn22-viewer-count{font:500 10px/1 'Manrope',Arial,sans-serif;color:#fff}
.tn22-team-sheet{position:fixed;z-index:140;inset:0;display:none;align-items:flex-end;background:rgba(30,25,22,.35);backdrop-filter:blur(4px)}.tn22-team-sheet.open{display:flex}.tn22-team-panel{width:100%;max-height:82dvh;overflow:auto;border-radius:26px 26px 0 0;background:#f8f4ee;padding:18px 20px 30px;animation:tn22Sheet .28s ease}@keyframes tn22Sheet{from{transform:translateY(100%)}to{transform:none}}.tn22-handle{width:38px;height:4px;border-radius:999px;background:#c9bdb5;margin:0 auto 18px}.tn22-team-panel h3{margin:0;font:500 36px/1 'Cormorant Garamond',Georgia,serif}.tn22-team-list{display:grid;gap:9px;margin-top:19px}.tn22-team-row{display:grid;grid-template-columns:54px minmax(0,1fr) 30px;align-items:center;gap:12px;min-height:72px;padding:8px 10px;border:1px solid rgba(58,46,40,.1);border-radius:14px;background:#fff;border-width:1px}.tn22-team-mini{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#d9d0c8;font:500 26px/1 'Cormorant Garamond',Georgia,serif}.tn22-team-row strong{display:block;font:500 18px/1 'Cormorant Garamond',Georgia,serif}.tn22-team-row span{display:block;margin-top:5px;font:400 10px/1 'Manrope',Arial,sans-serif;color:#80766f}
.tn22-master-page{position:fixed;z-index:150;inset:0;display:none;overflow:auto;background:#f8f4ee;color:#171513}.tn22-master-page.open{display:block}.tn22-master-shell{padding:18px 20px 100px}.tn22-master-top{display:flex;align-items:center;justify-content:space-between}.tn22-back{width:40px;height:40px;border:0;background:none;font-size:27px}.tn42-master-spacer{width:40px;height:40px;display:block}.tn22-master-brand{font:500 16px/1 'Manrope',Arial,sans-serif;letter-spacing:.34em}.tn22-profile{text-align:center;margin-top:12px}.tn22-profile-circle{width:142px;height:142px;margin:auto;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 45% 35%,#e4ddd5,#cfc5bc 60%,#b8aaa0)}.tn22-profile-circle{color:#9b9088}.tn22-profile-circle svg{width:72px;height:72px}.tn22-profile h1{margin:14px 0 0;font:500 45px/.95 'Cormorant Garamond',Georgia,serif}.tn22-profile-role{margin-top:7px;font:400 14px/1 'Manrope',Arial,sans-serif;color:#837970}.tn22-salon-rating{margin-top:9px;font:600 12px/1 'Manrope',Arial,sans-serif;color:#504841}.tn22-salon-rating b{color:#e2ad3e}.tn22-master-about{max-width:340px;margin:14px auto 0;font:400 12.5px/1.55 'Manrope',Arial,sans-serif;color:#3d3834}.tn22-master-tabs{display:flex;margin:22px -2px 0;overflow-x:auto;gap:7px;scrollbar-width:none}.tn22-master-tabs button{flex:1 0 auto;height:42px;padding:0 16px;border:1px solid rgba(61,49,43,.12);border-radius:999px;background:transparent;font:500 11px/1 'Manrope',Arial,sans-serif}.tn22-master-tabs button.active{background:#171513;color:#fff!important}.tn22-master-content{margin-top:20px}.tn22-master-content h3{margin:0 0 13px;font:500 30px/1 'Cormorant Garamond',Georgia,serif}.tn22-master-service{display:flex;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid rgba(61,49,43,.1)}.tn22-master-service b{font:500 14px/1.3 'Manrope',Arial,sans-serif}.tn22-master-service span{font:500 14px/1 'Cormorant Garamond',Georgia,serif;white-space:nowrap}.tn22-master-works{display:grid;grid-template-columns:1fr 1fr;gap:7px}.tn22-master-works img{width:100%;aspect-ratio:1.25/1;object-fit:cover;border-radius:10px}.tn22-master-review{padding:14px;border:1px solid rgba(61,49,43,.1);border-radius:12px;margin-bottom:8px;background:#fff}.tn22-master-review strong{font:500 16px/1 'Cormorant Garamond',Georgia,serif}.tn22-master-review p{margin:7px 0 0;font:400 11px/1.5 'Manrope',Arial,sans-serif;color:#514a45}.tn22-master-book{position:fixed;z-index:2;left:20px;right:20px;bottom:max(14px,env(safe-area-inset-bottom));height:52px;border:0;border-radius:14px;background:#171513;color:#fff!important;font:600 13px/1 'Manrope',Arial,sans-serif;box-shadow:0 12px 34px rgba(0,0,0,.16)}
}
`;
document.head.appendChild(css);

const requestedFixStyle=document.createElement('style');
requestedFixStyle.id='beautyroom-requested-mobile-fixes';
requestedFixStyle.textContent=`
@media(max-width:767px){
  #stluxe-tanem-v13 .tn13-hero{height:100svh!important;min-height:0!important;max-height:none!important}
  .tn22-card{display:flex!important;flex-direction:column!important;padding-bottom:max(14px,env(safe-area-inset-bottom))!important}
  .tn22-cta{margin-top:auto!important}
  .tn22-worklink{margin-top:10px!important}
  #tn13Portfolio .tn22-port{padding-top:58px!important}

  .tn22-view-gallery{position:absolute;z-index:7;left:50%;bottom:14px;transform:translateX(-50%);height:42px;padding:0 18px;border:1px solid rgba(255,255,255,.34);border-radius:999px;background:rgba(22,18,16,.74);backdrop-filter:blur(12px);color:#fff!important;font:600 11px/1 'Manrope',Arial,sans-serif;white-space:nowrap;box-shadow:0 10px 30px rgba(0,0,0,.22)}
  .tn22-viewer:not([data-source="portfolio"]) .tn22-view-gallery{display:none!important}

  #tn13Services{background:#2f2926!important;color:#f7f3f0!important;border-color:rgba(255,255,255,.08)!important}
  #tn13Services .tn22-kicker{color:#b8ada7!important}
  #tn13Services h2,#tn13Services .tn31-service-name{color:#f7f3f0!important}
  #tn13Services .tn31-cats{color:#f7f3f0!important}
  #tn13Services .tn31-cat{border-color:rgba(255,255,255,.18)!important;color:#cfc5bf!important}
  #tn13Services .tn31-cat.active{background:#8b7167!important;border-color:#8b7167!important;color:#fff!important}
  #tn13Services .tn31-service-list{border-color:rgba(255,255,255,.16)!important}
  #tn13Services .tn31-service-row{border-color:rgba(255,255,255,.14)!important}
  #tn13Services .tn31-service-detail{color:#b9ada7!important}
  #tn13Services .tn31-service-book{color:#d8b7aa!important}
  #tn13Services .tn31-service-more{border-color:rgba(255,255,255,.22)!important;background:rgba(255,255,255,.06)!important;color:#f4eeea!important}
  #tn13Services .tn31-service-more span:last-child{color:#d2c7c0!important}

  #tn13Team{background:#2f2926!important;color:#f7f3f0!important}
  #tn13Team .tn22-kicker,#tn13Team .tn42-team-hint{color:#b8ada7!important}
  #tn13Team h2{color:#f7f3f0!important}
  #tn13Team .tn22-team-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:12px!important;overflow:visible!important;padding-bottom:0!important}
  #tn13Team .tn22-master-card{width:auto!important;min-width:0!important;flex:none!important;color:#f7f3f0!important}
  #tn13Team .tn22-master-circle{background:linear-gradient(145deg,#806b61,#5b4a43)!important;color:#e6d8d0!important;border:1px solid rgba(255,255,255,.1)!important}
  #tn13Team .tn22-master-name{color:#f7f3f0!important;font-size:17px!important;white-space:nowrap!important}
  #tn13Team .tn22-master-role{display:none!important}
  #tn13Team .tn42-team-hint{display:none!important}

  #tn13Reviews .tn30-review-stage{gap:12px!important}
  #tn13Reviews .tn30-review-card{height:184px!important;min-height:184px!important;overflow:hidden!important}
  #tn13Reviews .tn30-review-card p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden}

  #tn13Visit{background:#2f2926!important;color:#f7f3f0!important;border-radius:0!important}
  #tn13Visit .tn22-kicker{color:#b8ada7!important}
  #tn13Visit h2{color:#f7f3f0!important}
  #tn13Visit .tn22-status{min-height:34px!important;padding:8px 11px!important;border:1px solid rgba(255,255,255,.16)!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;color:#f7f3f0!important;background:rgba(255,255,255,.06)!important}
  #tn13Visit .tn22-status svg{width:14px!important;height:14px!important;stroke:currentColor!important}
  #tn13Visit .tn22-status.open{background:#2e4133!important;border-color:#4d6752!important;color:#a9d5b0!important}
  #tn13Visit .tn22-status.closed{background:#493336!important;border-color:#65474b!important;color:#d59a9f!important}
  #tn13Visit .tn22-contact{grid-template-columns:42px minmax(0,1fr)!important;gap:11px!important;background:rgba(255,255,255,.06)!important;border-color:rgba(255,255,255,.13)!important;color:#f7f3f0!important}
  #tn13Visit .tn22-contact-icon{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;justify-self:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
  #tn13Visit .tn22-contact-icon svg{width:20px!important;height:20px!important;fill:none!important;stroke:#f0e8e3!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important}
  #tn13Visit .tn22-contact strong{color:#f7f3f0!important}
  #tn13Visit .tn22-contact>span:last-child>span{color:#c7bbb4!important}
  #tn13Visit .tn22-mapwrap{background:#423a36!important}
  #tn13Visit .tn22-call{border-color:rgba(255,255,255,.22)!important;color:#f7f3f0!important}
  #tn13Visit .tn22-route{background:#f4ede8!important;color:#2b2522!important}
  #tn13Visit .tn22-footer{background:#171513!important}

  .tn50-book-icon.viber-generic{background:#f1edf7!important;color:#67507f!important}
}
@media(max-width:767px) and (max-height:720px){
  .tn22-media{height:330px!important}
  .tn22-card{top:304px!important;padding-top:14px!important}
  .tn22-title{font-size:43px!important}
  .tn22-sub{margin:8px 0 10px!important}
  .tn22-copy{font-size:12.5px!important;line-height:1.32!important}
  .tn37-hero-info{margin-top:11px!important}
  .tn22-cta{height:44px!important}
  .tn22-worklink{height:42px!important;margin-top:8px!important}
}
`;
document.head.appendChild(requestedFixStyle);

const $=s=>root.querySelector(s); const $$=s=>[...root.querySelectorAll(s)];
const book=()=>{const s=$('#tn13BookSheet');if(s){s.classList.add('open');document.body.style.overflow='hidden'}};

// HERO
const hero=$('#tn13Top');
hero.innerHTML=`<div class="tn22-top"><a class="tn22-brand" href="#tn13Top">Beauty Room</a><button class="tn22-menu" type="button" aria-label="Меню"><i></i><i></i><i></i></button></div><button class="tn22-media" type="button" aria-label="Открыть галерею салона"><span class="tn22-slide active"></span><span class="tn22-slide"></span><span class="tn22-dots"><i class="active"></i><i></i></span></button><div class="tn22-card"><h1 class="tn22-title">Beauty Room</h1><div class="tn22-sub">Салон красоты</div><p class="tn22-copy">Салон красоты в самом сердце Еревана.</p><div class="tn37-hero-info"><div class="tn37-info"><span class="tn37-info-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.2 2"></path></svg></span><span class="tn37-info-copy tn50-hero-status"><strong class="tn50-hero-status-main">Проверяем</strong><span class="tn50-hero-status-sub">режим работы</span></span></div><span class="tn37-info-divider" aria-hidden="true"></span><div class="tn37-info tn37-location"><span class="tn37-info-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5.2-7 10-7 10s-7-4.8-7-10a7 7 0 1 1 14 0Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg></span><span class="tn37-info-copy"><strong>Ереван,</strong>Zavarian St 1/5</span></div></div><button class="tn22-cta" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2.2"></rect><path d="M8 3.5v4M16 3.5v4M4 9.5h16M8 13h.01M12 13h.01M16 13h.01M8 16h.01M12 16h.01"></path></svg><span>Записаться</span></button><a class="tn22-worklink" href="#tn13Portfolio"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 .9 3.1L16 7l-3.1.9L12 11l-.9-3.1L8 7l3.1-.9L12 3ZM6 13l.7 2.3L9 16l-2.3.7L6 19l-.7-2.3L3 16l2.3-.7L6 13ZM17.5 12l.8 2.7 2.7.8-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z"></path></svg><span>Смотреть работы</span></a></div>`;
hero.querySelector('.tn22-cta').addEventListener('click',book);
const menuButton=hero.querySelector('.tn22-menu');
const navPop=document.createElement('nav');navPop.className='tn22-navpop';navPop.innerHTML='<a href="#tn13Portfolio">Портфолио</a><a href="#tn13Services">Услуги</a><a href="#tn38About">О салоне</a><a href="#tn13Team">Команда</a><a href="#tn13Reviews">Отзывы</a><a href="#tn13Visit">Контакты</a>';hero.querySelector('.tn22-top').appendChild(navPop);menuButton.addEventListener('click',e=>{e.stopPropagation();navPop.classList.toggle('open')});navPop.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navPop.classList.remove('open')));document.addEventListener('pointerdown',e=>{if(!e.target.closest('.tn22-top'))navPop.classList.remove('open')});
let slide=0; const slides=[...hero.querySelectorAll('.tn22-slide')],dots=[...hero.querySelectorAll('.tn22-dots i')];
function setHeroSlide(i){slide=(i+slides.length)%slides.length;slides.forEach((x,j)=>x.classList.toggle('active',j===slide));dots.forEach((x,j)=>x.classList.toggle('active',j===slide));}
const heroMedia=hero.querySelector('.tn22-media');let heroStartX=0,heroMoved=false,heroPointer=null;
heroMedia.querySelectorAll('img').forEach(img=>img.draggable=false);
heroMedia.addEventListener('pointerdown',e=>{heroStartX=e.clientX;heroMoved=false;heroPointer=e.pointerId;try{heroMedia.setPointerCapture(e.pointerId)}catch(_){}});
heroMedia.addEventListener('pointermove',e=>{if(heroPointer!==null&&Math.abs(e.clientX-heroStartX)>12)heroMoved=true});
const finishHeroGesture=e=>{if(heroPointer===null)return;const dx=e.clientX-heroStartX;try{heroMedia.releasePointerCapture(heroPointer)}catch(_){}heroPointer=null;if(Math.abs(dx)>42){setHeroSlide(slide+(dx<0?1:-1));return}if(!heroMoved)openGallery('Салон')};
heroMedia.addEventListener('pointerup',finishHeroGesture);heroMedia.addEventListener('pointercancel',()=>{heroPointer=null;heroMoved=false});

// VIEWER
const viewer=document.createElement('div');viewer.className='tn22-viewer';viewer.innerHTML=`<div class="tn22-viewer-frame"><div class="tn23-viewer-hint">Разведите двумя пальцами, чтобы увеличить</div><div class="tn22-viewer-top"><div class="tn22-viewer-actions"><button class="tn22-vbtn tn22-view-close" type="button" aria-label="Закрыть">×</button></div></div><div class="tn42-viewer-canvas"><img class="tn22-viewer-img" alt=""></div><button class="tn22-navbtn tn22-prev" type="button">‹</button><button class="tn22-navbtn tn22-next" type="button">›</button><div class="tn23-viewer-foot"><span class="tn23-viewer-label">Фото Beauty Room</span><span class="tn22-viewer-count">01 / 01</span></div><button class="tn22-view-gallery" type="button">Открыть галерею</button></div>`;root.appendChild(viewer);
let viewerItems=[],viewerIndex=0; const vFrame=viewer.querySelector('.tn22-viewer-frame'),vCanvas=viewer.querySelector('.tn42-viewer-canvas'),vImg=viewer.querySelector('.tn22-viewer-img'),vCount=viewer.querySelector('.tn22-viewer-count'),vPrev=viewer.querySelector('.tn22-prev'),vNext=viewer.querySelector('.tn22-next');
let sx=0,sy=0,viewerScale=1,viewerX=0,viewerY=0,pinchStart=0,pinchBaseScale=1,panStartX=0,panStartY=0,gestureHadPinch=false;
const pinchDist=e=>Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
function clampViewerPan(){if(viewerScale<=1){viewerX=0;viewerY=0;return}const maxX=(viewerScale-1)*vCanvas.clientWidth*.5,maxY=(viewerScale-1)*vCanvas.clientHeight*.5;viewerX=Math.max(-maxX,Math.min(maxX,viewerX));viewerY=Math.max(-maxY,Math.min(maxY,viewerY))}
function applyViewerTransform(){clampViewerPan();vImg.style.transform=`translate3d(${viewerX}px,${viewerY}px,0) scale(${viewerScale})`}
function resetViewerTransform(){viewerScale=1;viewerX=0;viewerY=0;pinchStart=0;pinchBaseScale=1;applyViewerTransform()}
function paintViewer(){const it=viewerItems[viewerIndex];if(!it)return;vImg.src=it.src;vImg.alt=it.alt||'';vCount.textContent=`${String(viewerIndex+1).padStart(2,'0')} из ${String(viewerItems.length).padStart(2,'0')}`;resetViewerTransform();vPrev.hidden=viewerItems.length<2;vNext.hidden=viewerItems.length<2;}
function openViewer(items,index=0,source='gallery'){viewerItems=Array.isArray(items)?items:[];if(!viewerItems.length)return;viewer.dataset.source=source;viewerIndex=Math.max(0,Math.min(index,viewerItems.length-1));paintViewer();viewer.classList.add('open');document.body.style.overflow='hidden'}
function closeViewer(){viewer.classList.remove('open');resetViewerTransform();if(!$('#tn13Gallery').classList.contains('open')&&!masterPage.classList.contains('open'))document.body.style.overflow=''}
vPrev.onclick=()=>{viewerIndex=(viewerIndex-1+viewerItems.length)%viewerItems.length;paintViewer()};vNext.onclick=()=>{viewerIndex=(viewerIndex+1)%viewerItems.length;paintViewer()};viewer.querySelector('.tn22-view-close').onclick=closeViewer;viewer.querySelector('.tn22-view-gallery').onclick=()=>{closeViewer();openGallery('Ногти')};viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});
vCanvas.addEventListener('touchstart',e=>{if(e.touches.length===2){e.preventDefault();gestureHadPinch=true;pinchStart=pinchDist(e);pinchBaseScale=viewerScale}else if(e.touches.length===1){sx=e.touches[0].clientX;sy=e.touches[0].clientY;panStartX=viewerX;panStartY=viewerY}},{passive:false});
vCanvas.addEventListener('touchmove',e=>{if(e.touches.length===2&&pinchStart){e.preventDefault();viewerScale=Math.max(1,Math.min(4,pinchBaseScale*(pinchDist(e)/pinchStart)));if(viewerScale<=1.01){viewerScale=1;viewerX=0;viewerY=0}applyViewerTransform()}else if(e.touches.length===1&&viewerScale>1){e.preventDefault();viewerX=panStartX+(e.touches[0].clientX-sx);viewerY=panStartY+(e.touches[0].clientY-sy);applyViewerTransform()}},{passive:false});
vCanvas.addEventListener('touchend',e=>{if(e.touches.length<2)pinchStart=0;if(e.touches.length===0){if(!gestureHadPinch&&viewerScale===1&&viewerItems.length>1&&e.changedTouches.length){const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.15)(dx<0?vNext:vPrev).click()}gestureHadPinch=false;if(viewerScale<=1.01)resetViewerTransform()}},{passive:false});

// GALLERY
const gallery=$('#tn13Gallery');let galleryCat='Салон';
function renderGallery(){const items=GALLERY[galleryCat]||[];gallery.innerHTML=`<div class="tn22-gallery"><div class="tn22-gallery-top"><button class="tn22-gallery-back" type="button">←</button><div class="tn22-gallery-title"><strong>Галерея</strong><span>Beauty Room</span></div><div></div></div><div class="tn22-gallery-tabs">${Object.keys(GALLERY).map(c=>`<button class="tn22-gallery-tab${c===galleryCat?' active':''}" type="button" data-gcat="${c}">${c}</button>`).join('')}</div><div class="tn22-gallery-grid${galleryCat==='Салон'?' salon':''}">${items.length?items.map((x,i)=>`<button class="tn22-gallery-tile" type="button" data-gi="${i}"><img loading="lazy" decoding="async" src="${x.src}" alt="${x.alt}"></button>`).join(''):'<div class="tn23-gallery-empty">Фото ресниц пока не добавлены</div>'}</div></div>`;gallery.querySelector('.tn22-gallery-back').onclick=closeGallery;gallery.querySelectorAll('[data-gcat]').forEach(b=>b.onclick=()=>{galleryCat=b.dataset.gcat;renderGallery()});gallery.querySelectorAll('[data-gi]').forEach(b=>b.onclick=()=>openViewer(items,+b.dataset.gi));}
function openGallery(cat='Салон'){galleryCat=Object.prototype.hasOwnProperty.call(GALLERY,cat)?cat:'Салон';renderGallery();gallery.classList.add('open');document.body.style.overflow='hidden'}function closeGallery(){gallery.classList.remove('open');document.body.style.overflow=''}

const sectionIds=['tn13Portfolio','tn13Services','tn13Team','tn13Reviews','tn13Visit'];const sectionNav=document.createElement('nav');sectionNav.className='tn23-section-nav';sectionNav.setAttribute('aria-hidden','true');sectionNav.innerHTML=[['tn13Portfolio','Портфолио'],['tn13Services','Услуги'],['tn13Team','Команда'],['tn13Reviews','Отзывы'],['tn13Visit','Визит']].map((x,i)=>`<button type="button" data-section="${x[0]}" class="${i===0?'active':''}">${x[1]}</button>`).join('');hero.insertAdjacentElement('afterend',sectionNav);
let activeSection='tn13Portfolio',navRaf=0,navTargetLock=null,navUnlockTimer=0;
function revealActiveNavButton(btn){const navRect=sectionNav.getBoundingClientRect(),btnRect=btn.getBoundingClientRect(),pad=10;let delta=0;if(btnRect.right>navRect.right-pad)delta=btnRect.right-(navRect.right-pad);else if(btnRect.left<navRect.left+pad)delta=btnRect.left-(navRect.left+pad);if(Math.abs(delta)>1)sectionNav.scrollBy({left:delta,behavior:'smooth'})}
function setActiveSection(id){if(!id)return;activeSection=id;const btn=sectionNav.querySelector(`[data-section="${id}"]`);if(!btn)return;sectionNav.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===btn));revealActiveNavButton(btn)}
function scrollSectionFromNav(id){clearTimeout(navUnlockTimer);if(id==='tn13Portfolio'){navTargetLock=null;setActiveSection('tn13Portfolio');const top=Math.max(0,window.scrollY+hero.getBoundingClientRect().top);window.scrollTo({top,behavior:'smooth'});return}const el=document.getElementById(id);if(!el)return;navTargetLock=id;setActiveSection(id);const top=Math.max(0,window.scrollY+el.getBoundingClientRect().top-sectionNav.offsetHeight+1);window.scrollTo({top,behavior:'smooth'});navUnlockTimer=setTimeout(()=>{navTargetLock=null;updateSectionNav()},900)}
sectionNav.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>scrollSectionFromNav(b.dataset.section));
function updateSectionNav(){navRaf=0;const heroPassed=hero.getBoundingClientRect().bottom<=0;sectionNav.classList.toggle('visible',heroPassed);sectionNav.setAttribute('aria-hidden',heroPassed?'false':'true');if(!heroPassed){navTargetLock=null;clearTimeout(navUnlockTimer);if(activeSection!=='tn13Portfolio')setActiveSection('tn13Portfolio');return}if(navTargetLock){if(activeSection!==navTargetLock)setActiveSection(navTargetLock);return}const line=sectionNav.getBoundingClientRect().bottom+3;let chosen=sectionIds[0];for(const id of sectionIds){const el=document.getElementById(id);if(!el)continue;const r=el.getBoundingClientRect();if(r.top<=line&&r.bottom>line){chosen=id;break}if(r.top<=line)chosen=id}if(chosen!==activeSection)setActiveSection(chosen)}
window.addEventListener('scroll',()=>{if(!navRaf)navRaf=requestAnimationFrame(updateSectionNav)},{passive:true});window.addEventListener('resize',updateSectionNav,{passive:true});requestAnimationFrame(updateSectionNav);

// PORTFOLIO
const port=$('#tn13Portfolio');port.innerHTML=`<div class="tn22-port"><p class="tn22-kicker">Портфолио</p><h2>Наши работы</h2><div class="tn22-port-grid">${PORTFOLIO.map((x,i)=>`<button class="tn22-photo" type="button" data-pi="${i}"><img loading="lazy" decoding="async" src="${x.src}" alt="${x.alt}"></button>`).join('')}</div><button class="tn22-port-all" type="button">Смотреть все работы <span>→</span></button></div>`;port.querySelectorAll('[data-pi]').forEach(b=>b.onclick=()=>openViewer(PORTFOLIO,+b.dataset.pi,'portfolio'));port.querySelector('.tn22-port-all').onclick=()=>openGallery('Ногти');

// SERVICES
const serv=$('#tn13Services');let serviceCat='Маникюр',servicesExpanded=false;
const SERVICE_CATS=['Маникюр',...[...new Set(SERVICES.map(s=>s.cat))].filter(c=>c!=='Маникюр')];
serv.innerHTML=`<div class="tn31-services"><p class="tn22-kicker">Услуги</p><h2>Наши услуги</h2><div class="tn31-cats-wrap"><div class="tn31-cats"></div></div><div class="tn31-service-list"></div><button class="tn31-service-more" type="button"><span class="tn31-more-text"></span><span aria-hidden="true">↓</span></button></div>`;
const scats=serv.querySelector('.tn31-cats'),slist=serv.querySelector('.tn31-service-list'),sMore=serv.querySelector('.tn31-service-more');
function splitServiceTitle(raw){const parts=String(raw).split(' — ');const main=parts.shift()||raw;let detail=parts.join(' — ');if(!detail&&main.length>48){const m=main.match(/^(.*?)(\s\([^)]{5,}\)|\sBrazilian Blowout)$/i);if(m)return {main:m[1],detail:m[2].trim()}}return {main,detail}}
function serviceLine(s){const t=splitServiceTitle(s.title);return `<div class="tn31-service-row"><div class="tn31-service-copy"><div class="tn31-service-name">${t.main}</div>${t.detail?`<span class="tn31-service-detail">${t.detail}</span>`:''}</div><div class="tn31-service-side"><button class="tn31-service-book" type="button" data-book-service>Записаться →</button></div></div>`}
function serviceWord(n){const n10=n%10,n100=n%100;if(n10===1&&n100!==11)return 'услугу';if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';return 'услуг'}
function revealCat(btn){const left=btn.offsetLeft-22,right=left+btn.offsetWidth+44;if(left<scats.scrollLeft)scats.scrollTo({left:Math.max(0,left),behavior:'smooth'});else if(right>scats.scrollLeft+scats.clientWidth)scats.scrollTo({left:right-scats.clientWidth,behavior:'smooth'})}
function renderServices(){scats.innerHTML=SERVICE_CATS.map(c=>`<button class="tn31-cat${c===serviceCat?' active':''}" type="button" data-scat="${c}">${c}</button>`).join('');scats.querySelectorAll('[data-scat]').forEach(b=>b.onclick=()=>{serviceCat=b.dataset.scat;servicesExpanded=false;renderServices();requestAnimationFrame(()=>revealCat(scats.querySelector(`[data-scat="${serviceCat}"]`)))});const arr=SERVICES.filter(s=>s.cat===serviceCat),shown=servicesExpanded?arr:arr.slice(0,7),remaining=Math.max(0,arr.length-7);slist.innerHTML=shown.map(serviceLine).join('');slist.querySelectorAll('[data-book-service]').forEach(b=>b.onclick=book);sMore.hidden=arr.length<=7;sMore.querySelector('.tn31-more-text').textContent=servicesExpanded?'Свернуть':`Показать ещё ${remaining} ${serviceWord(remaining)}`;sMore.querySelector('span:last-child').textContent=servicesExpanded?'↑':'↓'}
sMore.onclick=()=>{servicesExpanded=!servicesExpanded;renderServices()};renderServices();

// TEAM + TEAM SHEET
const team=$('#tn13Team');team.innerHTML=`<div class="tn22-team"><p class="tn22-kicker">Наша команда</p><h2>Мастера своего дела</h2><div class="tn22-team-grid">${MASTERS.map(m=>`<button class="tn22-master-card" type="button" data-mid="${m.id}"><span class="tn22-master-circle">${MASTER_AVATAR}</span><strong class="tn22-master-name">${m.name}</strong><span class="tn22-master-role">${m.role}</span></button>`).join('')}</div><div class="tn42-team-hint">Листайте <span>→</span></div></div>`;
const teamSheet=document.createElement('div');teamSheet.className='tn22-team-sheet';root.appendChild(teamSheet);

// MASTER PAGE
const masterPage=document.createElement('div');masterPage.className='tn22-master-page';masterPage.innerHTML=`<div class="tn22-master-shell"><div class="tn22-master-top"><button class="tn22-back" type="button">←</button><div class="tn22-master-brand">STLUXE</div><span class="tn42-master-spacer" aria-hidden="true"></span></div><div class="tn22-master-body"></div></div><button class="tn22-master-book" type="button">Записаться онлайн</button>`;root.appendChild(masterPage);masterPage.querySelector('.tn22-back').onclick=()=>{masterPage.classList.remove('open');document.body.style.overflow=''};masterPage.querySelector('.tn22-master-book').onclick=book;let currentMaster=null,currentMasterTab='Профиль';
function masterReviews(m){return REVIEW_DATA.filter(r=>m.reviewNames.includes(r[0]));}
function renderMasterTab(){const body=masterPage.querySelector('.tn22-master-content');if(!body||!currentMaster)return;if(currentMasterTab==='Профиль'){body.innerHTML=`<h3>О мастере</h3><p class="tn22-master-about" style="text-align:left;margin:0">${currentMaster.about}</p>`}else if(currentMasterTab==='Услуги'){const arr=SERVICES.filter(s=>currentMaster.cats.includes(s.cat)).slice(0,8);body.innerHTML=`<h3>Услуги</h3>${arr.length?arr.map(s=>`<div class="tn22-master-service"><b>${s.title}</b><span>Записаться</span></div>`).join(''):'<p class="tn22-master-about" style="text-align:left;margin:0">Пока нет данных об услугах.</p>'}`}else if(currentMasterTab==='Портфолио'){body.innerHTML=`<h3>Портфолио</h3><div class="tn22-master-works">${currentMaster.work.length?currentMaster.work.map(src=>`<img loading="lazy" decoding="async" src="${src}" alt="Работа ${currentMaster.name}">`).join(''):'<p class="tn22-master-about" style="grid-column:1/-1;text-align:left;margin:0">Пока нет фото.</p>'}</div>`}else{const rs=masterReviews(currentMaster);body.innerHTML=`<h3>Отзывы</h3>${rs.length?rs.map(r=>`<div class="tn22-master-review"><strong>${r[0]}</strong><p>${r[1]}</p></div>`).join(''):'<p class="tn22-master-about" style="text-align:left;margin:0">Пока нет отзывов.</p>'}`}}
function openMaster(id){currentMaster=MASTERS.find(m=>m.id===id);if(!currentMaster)return;currentMasterTab='Профиль';const b=masterPage.querySelector('.tn22-master-body');b.innerHTML=`<div class="tn22-profile"><div class="tn22-profile-circle">${MASTER_AVATAR}</div><h1>${currentMaster.name}</h1><div class="tn22-profile-role">${currentMaster.role}</div><div class="tn22-salon-rating"><b>★</b> 5,0 <span>рейтинг салона</span></div></div><div class="tn22-master-tabs">${['Профиль','Услуги','Портфолио','Отзывы'].map(t=>`<button class="${t==='Профиль'?'active':''}" type="button" data-mtab="${t}">${t}</button>`).join('')}</div><div class="tn22-master-content"></div>`;b.querySelectorAll('[data-mtab]').forEach(x=>x.onclick=()=>{currentMasterTab=x.dataset.mtab;b.querySelectorAll('[data-mtab]').forEach(y=>y.classList.toggle('active',y===x));renderMasterTab()});renderMasterTab();teamSheet.classList.remove('open');masterPage.classList.add('open');document.body.style.overflow='hidden'}
team.querySelectorAll('[data-mid]').forEach(b=>b.onclick=()=>openMaster(b.dataset.mid));teamSheet.querySelectorAll('[data-sheet-mid]').forEach(b=>b.onclick=()=>openMaster(b.dataset.sheetMid));

// REVIEWS
const reviews=$('#tn13Reviews');
const REAL_REVIEW_DATA=[
['Aurélie Vagharchak','Excellent service! The team is truly professional and welcoming. I had such a nice and peaceful time. Highly recommended for a high-quality manicure and pedicure'],
['Nathalie Nalbandian','Visited Esmeralda to get my nails done for a wedding in Armenia. I found her on Yandex maps as a visitor from America. She did a wonderful job with the Russian gel manicure and pedicure. Cute little beauty salon. I recommend!'],
['Анастасия Франкони','Супер уютный небольшой салон. Сделали прекрасный маникюр (гель-лак) и педикюр. В процессе поняла, что хочу еще и брови, мастер нашла время, чтобы все сразу успеть! Все качественно и красиво! Стоимость приятная. К сожалению поздно узнала, что в салоне работает массажист-врач. В следующий раз обязательно и на массаж запишусь. Определённо рекомендую к визиту, но записывайтесь хотя бы за день.'],
['Shushan Abrahamyan','Great atmosphere and a very cozy salon. The staff are professional, friendly, and attentive. I was very satisfied with the service and would definitely recommend this salon'],
['Leyla Medetova','В восторге от обслуживания и сервиса 🔥 Особенно от хозяйки, приятная женщина и профессионал своего дела! Записывалась на маникюр и педикюр, очень качественно! 10 из 10. Рекомендую. Цены тоже удивили, в соотношении цены и качества! Внутри салона атмосферно, чисто и уютно🤍 желаю салону процветания и успехов!'],
['DE GUZMAN, RICA MAE S.','Highly recommended! The nail technician was gentle, detailed, and really knew what she was doing. The salon was clean and relaxing too. I love my beautiful nails now😍🫶🏻'],
['Lilith Gulanyan','Очень довольна обслуживанием, теплый прием, лучшие топ мастера 👍 вкусное угощение ..кофе'],
['Ксения Курбатова','Делала маникюр и педикюр. Всё очень понравилось. Уютно, чисто, мастер просто супер. Спасибо'],
['Anne Madsen','Мы с подругой сделали стрижку, маникюр и педикюр, и очень довольны результатом. Персонал сделал все возможное, чтобы мы чувствовали себя желанными гостями, был невероятно дружелюбен и создал уютную атмосферу. Несмотря на то, что мы не говорим по-армянски, и общение было ограничено, нам было очень приятно там находиться. Если мы когда-нибудь снова приедем в Ереван, обязательно вернемся в этот салон🌸 Большое спасибо!!']
];
const reviewInitial=n=>([...String(n).trim()][0]||'S').toUpperCase();
const reviewHref=r=>`${YANDEX_REVIEWS}#:~:text=${encodeURIComponent(r[1])}`;
const reviewCard=r=>`<a class="tn30-review-card" href="${reviewHref(r)}" target="_blank" rel="noopener"><div class="tn30-review-head"><span class="tn30-review-avatar">${reviewInitial(r[0])}</span><span><strong class="tn30-review-name">${r[0]}</strong><span class="tn30-review-meta">Google Maps</span></span></div><p>${r[1]}</p><span class="tn30-review-open">Подробнее →</span></a>`;
const reviewLanes=[0,1,2].map(row=>REAL_REVIEW_DATA.filter((_,i)=>i%3===row));
reviews.innerHTML=`<div class="tn30-reviews"><p class="tn22-kicker">Отзывы</p><h2>Что говорят о нас</h2><div class="tn30-score"><strong>5,0</strong><div class="tn30-stars">★★★★★</div><div class="tn30-count">19 отзывов · Google Maps</div></div><div class="tn30-review-stage">${reviewLanes.map((lane,i)=>{const loop=[lane[lane.length-1],...lane,lane[0]];return `<div class="tn30-lane" data-lane="${i}"><div class="tn30-track">${loop.map(reviewCard).join('')}</div></div>`}).join('')}</div><a class="tn30-review-all" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">Смотреть все отзывы →</a></div>`;
const reviewStage=reviews.querySelector('.tn30-review-stage'),reviewTracks=[...reviews.querySelectorAll('.tn30-track')];
let reviewIndex=1,reviewPauseTimer=0,reviewMotionTimer=0,reviewDragging=false,reviewMoved=false,reviewSuppressClick=false,reviewStartX=0,reviewStartY=0,reviewDx=0;
const reviewGap=12,reviewDuration=780,reviewGroupCount=Math.max(1,...reviewLanes.map(l=>l.length));
function reviewMetrics(){const lane=reviews.querySelector('.tn30-lane'),card=reviews.querySelector('.tn30-review-card');const width=card?card.getBoundingClientRect().width:0;return {step:width+reviewGap,edge:lane?Math.max(0,(lane.clientWidth-width)/2):26}}
function paintReviewTracks(animated,drag=0){const {step,edge}=reviewMetrics();reviewTracks.forEach(t=>{t.style.transition=animated?`transform ${reviewDuration}ms cubic-bezier(.22,.66,.24,1)`:'none';t.style.transform=`translate3d(${edge-reviewIndex*step+drag}px,0,0)`})}
function scheduleReviews(){clearTimeout(reviewPauseTimer);reviewPauseTimer=setTimeout(()=>moveReviews(reviewIndex+1),4000)}
function normalizeReviewIndex(){if(reviewIndex===0){reviewIndex=reviewGroupCount;paintReviewTracks(false)}else if(reviewIndex===reviewGroupCount+1){reviewIndex=1;paintReviewTracks(false)}}
function moveReviews(next){clearTimeout(reviewPauseTimer);clearTimeout(reviewMotionTimer);reviewIndex=Math.max(0,Math.min(reviewGroupCount+1,next));paintReviewTracks(true);reviewMotionTimer=setTimeout(()=>{normalizeReviewIndex();scheduleReviews()},reviewDuration+40)}
requestAnimationFrame(()=>{paintReviewTracks(false);scheduleReviews()});
window.addEventListener('resize',()=>paintReviewTracks(false),{passive:true});
reviewStage.addEventListener('pointerdown',e=>{clearTimeout(reviewPauseTimer);clearTimeout(reviewMotionTimer);reviewDragging=true;reviewMoved=false;reviewDx=0;reviewStartX=e.clientX;reviewStartY=e.clientY;reviewStage.classList.add('dragging');paintReviewTracks(false);try{reviewStage.setPointerCapture(e.pointerId)}catch(_){}});
reviewStage.addEventListener('pointermove',e=>{if(!reviewDragging)return;const dx=e.clientX-reviewStartX,dy=e.clientY-reviewStartY;if(!reviewMoved&&Math.abs(dx)<6)return;if(!reviewMoved&&Math.abs(dy)>Math.abs(dx))return;reviewMoved=true;reviewDx=dx;paintReviewTracks(false,reviewDx)});
function finishReviewDrag(e){if(!reviewDragging)return;reviewDragging=false;reviewStage.classList.remove('dragging');try{reviewStage.releasePointerCapture(e.pointerId)}catch(_){}const {step}=reviewMetrics();if(reviewMoved&&Math.abs(reviewDx)>Math.min(70,step*.16))reviewIndex+=reviewDx<0?1:-1;reviewIndex=Math.max(0,Math.min(reviewGroupCount+1,reviewIndex));reviewSuppressClick=reviewMoved;reviewDx=0;paintReviewTracks(true);clearTimeout(reviewMotionTimer);reviewMotionTimer=setTimeout(()=>{normalizeReviewIndex();scheduleReviews()},reviewDuration+40)}
reviewStage.addEventListener('pointerup',finishReviewDrag);reviewStage.addEventListener('pointercancel',finishReviewDrag);reviewStage.addEventListener('click',e=>{if(reviewSuppressClick){e.preventDefault();e.stopPropagation();reviewSuppressClick=false}},true);

// VISIT
const visit=$('#tn13Visit');
const iconPin=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/></svg></span>`;
const iconPhone=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z"/></svg></span>`;
const iconMessage=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5h14v10H9l-4 3v-13Z"/></svg></span>`;
const iconClock=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 1.8"/></svg></span>`;
const statusClock=`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 1.8"/></svg>`;
visit.innerHTML=`<div class="tn22-visit"><div class="tn22-visit-head"><p class="tn22-kicker">Контакты</p><span class="tn22-status" id="tn22Status">${statusClock}<span class="tn22-status-text"></span></span></div><h2>Ждём вас</h2><div class="tn22-contact-grid"><a class="tn22-contact" href="${YANDEX_RU}" target="_blank" rel="noopener">${iconPin}<span><strong>Ереван, Zavarian St 1/5</strong><span>Открыть в Google Maps</span></span></a><a class="tn22-contact" href="tel:${PHONE}">${iconPhone}<span><strong>+374 93 873617</strong><span>Нажмите, чтобы позвонить</span></span></a><a class="tn22-contact" href="${WHATSAPP_URL}">${iconMessage}<span><strong>Viber</strong><span>Написать в салон</span></span></a><div class="tn22-contact">${iconClock}<span><strong>Ежедневно 09:00–20:00</strong><span>Без выходных</span></span></div></div><div class="tn22-mapwrap"><div class="tn22-map-skeleton">Загружаем карту…</div><iframe title="Карта Beauty Room" loading="eager" src="https://www.google.com/maps?q=40.1673067,44.5124793&z=16&output=embed"></iframe></div><div class="tn22-visit-actions"><a class="tn22-visit-btn tn22-call" href="tel:${PHONE}">Позвонить</a><a class="tn22-visit-btn tn22-route" href="${ROUTE}" target="_blank" rel="noopener">Построить маршрут</a></div><a class="tn22-footer" href="https://tanem.ru/" target="_blank" rel="noopener"><strong>TANEM.ru</strong><span>Цифровой офис для салонов красоты</span></a></div>`;
const map=visit.querySelector('.tn22-mapwrap'),iframe=map.querySelector('iframe');iframe.addEventListener('load',()=>map.classList.add('loaded'));setTimeout(()=>map.classList.add('loaded'),5000);
function status(){const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Yerevan',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());const get=t=>parts.find(x=>x.type===t)?.value||'';const mins=(+get('hour'))*60+(+get('minute'));const open=mins>=540&&mins<1200;const el=visit.querySelector('#tn22Status'),txt=el.querySelector('.tn22-status-text');txt.textContent=open?'Открыто до 20:00':'Закрыто до 09:00';el.className='tn22-status '+(open?'open':'closed');const hs=hero.querySelector('.tn50-hero-status');if(hs){const main=hs.querySelector('.tn50-hero-status-main'),sub=hs.querySelector('.tn50-hero-status-sub');main.textContent=open?'Открыто':'Закрыто';sub.textContent=open?'до 20:00':'до 09:00';hs.classList.toggle('open',open);hs.classList.toggle('closed',!open)}}status();setInterval(status,60000);

// STICKY
const sticky=$('#tn13Sticky');if(sticky){sticky.innerHTML=`<strong>Доступно ${SERVICES.length} услуг</strong><button type="button">Записаться</button>`;sticky.querySelector('button').onclick=book}

// keyboard / old overlays
const oldMaster=$('#tn13MasterSheet');if(oldMaster)oldMaster.style.display='none';document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(viewer.classList.contains('open'))closeViewer();else if(masterPage.classList.contains('open')){masterPage.classList.remove('open');document.body.style.overflow=''}else if(teamSheet.classList.contains('open')){teamSheet.classList.remove('open');document.body.style.overflow=''}else if(gallery.classList.contains('open'))closeGallery()});
})();

(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const root=document.getElementById('stluxe-tanem-v13');
if(!root||document.getElementById('tn38About'))return;
const services=root.querySelector('#tn13Services');
if(!services)return;

const style=document.createElement('style');
style.id='tn42-about-style';
style.textContent=`
#tn38About{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;overflow:hidden!important}
.tn42-about{padding:40px 18px 58px}
.tn42-kicker{margin:0 3px 18px;font:600 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#88786e}
.tn42-card{max-width:500px;margin:0 auto;border:1px solid rgba(66,55,49,.11);border-radius:27px;overflow:hidden;background:#eee7df;box-shadow:0 14px 34px rgba(47,37,31,.08)}
.tn42-photo{position:relative;height:238px;background:#171513;overflow:hidden}
.tn42-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center center;filter:none!important}
.tn42-rating{position:absolute;left:12px;bottom:12px;height:32px;padding:0 10px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(18,17,16,.72);backdrop-filter:blur(10px);display:flex;align-items:center;gap:6px;color:#fff;box-shadow:0 5px 14px rgba(0,0,0,.13)}
.tn42-rating-star{font-size:11px;line-height:1;color:#d6ad6b}
.tn42-rating strong{font:600 13px/1 'Manrope',Arial,sans-serif;color:#fff}
.tn42-rating span{font:500 7.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.035em;color:rgba(255,255,255,.7)}
.tn42-body{padding:24px 18px 18px}
.tn42-lead{margin:0;font:400 27px/1.08 'Cormorant Garamond',Georgia,serif;letter-spacing:-.032em;color:#1d1a18}
.tn42-copy{margin:17px 0 0;font:400 12.8px/1.62 'Manrope',Arial,sans-serif;color:#58504a}
.tn42-facts{display:grid;gap:8px;margin-top:22px}
.tn42-fact{min-height:54px;display:flex;align-items:center;padding:0 15px;border:1px solid rgba(64,52,45,.09);border-radius:14px;background:rgba(255,255,255,.78);box-shadow:0 4px 12px rgba(50,39,32,.035);font:500 12.5px/1.3 'Manrope',Arial,sans-serif;color:#292521}
@media(max-width:370px){.tn42-about{padding-left:14px;padding-right:14px}.tn42-photo{height:218px}.tn42-body{padding-left:16px;padding-right:16px}.tn42-lead{font-size:25px}.tn42-copy{font-size:12.3px}}
`;
document.head.appendChild(style);

const about=document.createElement('section');
about.id='tn38About';
about.innerHTML=`<div class="tn42-about"><p class="tn42-kicker">О нас</p><div class="tn42-card"><div class="tn42-photo"><img src="interior_reception_02.webp" alt="Beauty Room" loading="lazy"><div class="tn42-rating"><span class="tn42-rating-star">★</span><strong>5,0</strong><span>рейтинг салона</span></div></div><div class="tn42-body"><p class="tn42-lead">Beauty Room by Esmeralda — салон красоты в Ереване.</p><p class="tn42-copy">Маникюр, волосы, брови и ресницы, макияж, косметология, эпиляция и массаж — в одном пространстве.</p><div class="tn42-facts"><div class="tn42-fact">Мастера разных направлений</div><div class="tn42-fact">Комфортная атмосфера</div><div class="tn42-fact">Индивидуальный подход</div></div></div></div></div>`;
services.insertAdjacentElement('afterend',about);
})();
