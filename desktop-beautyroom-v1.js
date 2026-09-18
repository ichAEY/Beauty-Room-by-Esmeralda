/* Esmeralda desktop — STLuxe reference build. Mobile bundle is intentionally untouched. */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(min-width:768px)').matches) return;

  const PHONE='+37493873617';
  const ADDRESS='Ереван, Zavarian St 1/5';
  const YANDEX_RU='https://www.google.com/maps/place/Beauty+Room+by+Esmeralda/@40.1673067,44.5124793,17z/';
  const ROUTE=YANDEX_RU;
  const WHATSAPP_URL='viber://chat?number=%2B37493873617';
  const YANDEX_REVIEWS=YANDEX_RU;
  const DESKTOP_REAL_REVIEWS=[
    ['Aurélie Vagharchak','Excellent service! The team is truly professional and welcoming. I had such a nice and peaceful time. Highly recommended for a high-quality manicure and pedicure'],
    ['Nathalie Nalbandian','Visited Esmeralda to get my nails done for a wedding in Armenia. She did a wonderful job with the Russian gel manicure and pedicure. Cute little beauty salon. I recommend!'],
    ['Анастасия Франкони','Супер уютный небольшой салон. Сделали прекрасный маникюр и педикюр. Всё качественно и красиво. Определённо рекомендую к визиту.'],
    ['Shushan Abrahamyan','Great atmosphere and a very cozy salon. The staff are professional, friendly, and attentive. I was very satisfied with the service.'],
    ['Leyla Medetova','В восторге от обслуживания и сервиса. Внутри салона атмосферно, чисто и уютно. Рекомендую.'],
    ['DE GUZMAN, RICA MAE S.','Highly recommended! The nail technician was gentle, detailed, and really knew what she was doing. The salon was clean and relaxing too.'],
    ['Lilith Gulanyan','Очень довольна обслуживанием, теплый прием, лучшие топ мастера.'],
    ['Ксения Курбатова','Делала маникюр и педикюр. Всё очень понравилось. Уютно, чисто, мастер просто супер. Спасибо'],
    ['Anne Madsen','Мы с подругой сделали стрижку, маникюр и педикюр и очень довольны результатом. Персонал был невероятно дружелюбен и создал уютную атмосферу.']
  ];
  const PORTFOLIO=[
    {src:'manicure_french_soft_pink_design_04.webp',alt:'Маникюр Beauty Room by Esmeralda'},
    {src:'hair_layered_brunette_02.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
    {src:'makeup_evening_01.webp',alt:'Макияж Beauty Room by Esmeralda'},
    {src:'manicure_burgundy_long_glitter_09.webp',alt:'Маникюр Beauty Room by Esmeralda'},
    {src:'hair_blonde_layers_03.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},
    {src:'makeup_soft_pink_02.webp',alt:'Макияж Beauty Room by Esmeralda'},
    {src:'manicure_nude_almond_02.webp',alt:'Маникюр Beauty Room by Esmeralda'}
  ];
  const DESKTOP_GALLERY_GROUPS={
    'Салон':[{src:'interior_reception_02.webp',alt:'Интерьер Beauty Room by Esmeralda'},{src:'about-salon.webp',alt:'Beauty Room by Esmeralda'}],
    'Ногти':[
      {src:'manicure_french_soft_pink_design_04.webp',alt:'Маникюр Beauty Room by Esmeralda'},{src:'manicure_burgundy_long_glitter_09.webp',alt:'Маникюр Beauty Room by Esmeralda'},{src:'manicure_nude_almond_02.webp',alt:'Маникюр Beauty Room by Esmeralda'},{src:'manicure_white_almond_03.webp',alt:'Маникюр Beauty Room by Esmeralda'},{src:'manicure_black_short_06.webp',alt:'Маникюр Beauty Room by Esmeralda'},{src:'manicure_pastel_pink_square_10.webp',alt:'Маникюр Beauty Room by Esmeralda'},{src:'manicure_burgundy_short_05.webp',alt:'Маникюр Beauty Room by Esmeralda'},{src:'manicure_nude_short_01.webp',alt:'Маникюр Beauty Room by Esmeralda'},{src:'manicure_white_square_08.webp',alt:'Маникюр Beauty Room by Esmeralda'}],
    'Волосы':[
      {src:'hair_layered_brunette_02.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},{src:'hair_blonde_layers_03.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},{src:'hair_long_waves_05.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},{src:'hair_braids_box_04.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},{src:'hair_sleek_straight_01.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},{src:'hair_braid_girl_06.webp',alt:'Работа с волосами Beauty Room by Esmeralda'},{src:'hair_blonde_waves_01.webp',alt:'Работа с волосами Beauty Room by Esmeralda'}],
    'Макияж':[{src:'makeup_evening_01.webp',alt:'Макияж Beauty Room by Esmeralda'},{src:'makeup_soft_pink_02.webp',alt:'Макияж Beauty Room by Esmeralda'},{src:'makeup_glow_03.webp',alt:'Макияж Beauty Room by Esmeralda'}]
  };
  const DESKTOP_GALLERY=Object.values(DESKTOP_GALLERY_GROUPS).flat().map(x=>x.src);
  const PRICE_PAGES=['manicure_french_soft_pink_design_04.webp','hair_layered_brunette_02.webp','makeup_evening_01.webp'];
  const SERVICE_PRICE_PAGE={'Маникюр':0,'Волосы':1,'Макияж':2};
  const SERVICE_DATA={
    'Маникюр':[['Педикюр','','',[],''],['Наращивание ногтей','','',[],''],['Маникюр + покрытие гель-лак','','',[],''],['Маникюр + покрытие лак','','',[],''],['Парафинотерапия для рук','','',[],''],['Маникюр','','',[],'']],
    'Волосы':[['Свадебные прически','','',[],''],['Укладка волос','','',[],''],['Стрижка волос','','',[],''],['Окрашивание волос','','',[],''],['Уход за волосами','','',[],''],['Спа-процедура для волос','','',[],''],['Косы','','',[],''],['Наращивание волос','','',[],'']],
    'Брови и ресницы':[['Процедуры для бровей','','',[],''],['Тридинг бровей','','',[],''],['Коррекция формы бровей','','',[],''],['Ламинирование бровей','','',[],''],['Ламинирование ресниц','','',[],''],['Наращивание ресниц','','',[],'']],
    'Косметология':[['Карбокси-терапия','','',[],''],['Ультразвуковая чистка лица','','',[],'']],
    'Эпиляция':[['Удаление волос нитью','','',[],''],['Шугаринг','','',[],''],['Электроэпиляция игловая','','',[],''],['Восковая эпиляция','','',[],'']],
    'Макияж':[['Макияж','','',[],'']],
    'Массаж':[['Массаж','','',[],'']],
    'Другое':[['Прокалывание ушей','','',[],'']]
  };
  const SERVICE_CATEGORIES=Object.keys(SERVICE_DATA);
  const TEAM_MASTERS=[{id:'nails',name:'Nail-мастер',role:'Маникюр · педикюр'},{id:'hair',name:'Парикмахер',role:'Волосы · укладки'},{id:'cosmetology',name:'Косметолог',role:'Косметология'}];
  const TEAM_AVATAR='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="11" fill="currentColor"></circle><path d="M12 56c2.7-11.4 10-17 20-17s17.3 5.6 20 17" fill="currentColor"></path></svg>';

  const font=document.createElement('link');
  font.rel='stylesheet';
  font.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap';
  document.head.appendChild(font);

  const css=document.createElement('style');
  css.id='esmeralda-desktop-v1-style';
  css.textContent=`
    @media(min-width:768px){
      html,body{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;overflow-x:hidden}
      body>main.shell,body>.booking-island{display:none!important}
      body>.desktop{display:none!important}

      #esmeralda-desktop-v1{
        --purple:#715b53;
        --purple2:#8b7167;
        --ink:#17171a;
        --muted:#6d6b73;
        --line:#ecebee;
        display:block;
        width:100%;
        min-height:100vh;
        background:#fff;
        color:var(--ink);
        font-family:"Manrope",Arial,sans-serif;
        -webkit-font-smoothing:antialiased;
      }
      #esmeralda-desktop-v1 *{box-sizing:border-box}
      #esmeralda-desktop-v1 a,#esmeralda-desktop-v1 button{font:inherit;color:inherit}
      #esmeralda-desktop-v1 a{text-decoration:none}
      #esmeralda-desktop-v1 button{cursor:pointer}

      .std-header{
        height:98px;
        width:100%;
        display:flex;
        align-items:center;
        position:relative;
        z-index:20;
        padding:0 46px;
        border-bottom:0;
        background:
          radial-gradient(380px 160px at 12% 0%,rgba(143,85,181,.12),transparent 72%),
          linear-gradient(180deg,#2a2630 0%,#28242d 100%);
      }
      .std-nav{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        display:flex;
        align-items:center;
        gap:38px;
        white-space:nowrap;
      }
      .std-nav a{
        font-size:16px;
        font-weight:600;
        line-height:1;
        color:#f7f3f8!important;
        text-shadow:0 1px 10px rgba(0,0,0,.18);
        transition:opacity .18s ease;
      }
      .std-nav a:hover{opacity:.55}
      .std-phone{
        margin-left:auto;
        width:auto;
        height:54px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:12px;
        border-radius:0;
        background:transparent;
        color:#fff!important;
        box-shadow:none;
        font-size:21px;
        font-weight:800;
        letter-spacing:.01em;
        text-shadow:none;
      }
      .std-phone svg{width:23px;height:23px;flex:0 0 23px}

      .std-hero{
        display:grid;
        grid-template-columns:50% 50%;
        height:calc(100svh - 81px);
        min-height:690px;
        margin:-17px 0 0;
        background:#242424;
      }
      .std-hero-copy{
        min-width:0;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:0 34px 40px;
        background:
          radial-gradient(520px 360px at 8% 86%,rgba(111,61,130,.15),transparent 72%),
          radial-gradient(520px 360px at 98% 10%,rgba(143,85,181,.20),transparent 68%),
          linear-gradient(180deg,#27232b 0%,#242424 100%);
      }
      .std-copy-inner{
        width:min(100%,520px);
        transform:translateY(-4px);
        text-align:center;
      }
      .std-logo{
        margin:0;
        font-family:"Cormorant Garamond",Georgia,serif;
        font-size:78px;
        line-height:.88;
        font-weight:500;
        letter-spacing:.18em;
        text-indent:.18em;
        text-transform:uppercase;
        text-align:center;
        color:#f7f3f8;
      }
      .std-logo-sub{
        margin:15px 0 45px;
        font-family:"Manrope",Arial,sans-serif;
        font-size:13px;
        line-height:1;
        font-weight:500;
        letter-spacing:.38em;
        text-indent:.38em;
        text-align:center;
        color:#b9b2bd;
        text-transform:uppercase;
        white-space:nowrap;
      }
      .std-tagline{
        margin:0 0 42px;
        max-width:500px;
        font-family:"Manrope",Arial,sans-serif;
        font-size:27px;
        line-height:1.38;
        font-weight:400;
        letter-spacing:0;
        color:#f1edf3;
        text-align:center;
        margin-left:auto;
        margin-right:auto;
      }

      .std-meta{
        display:grid;
        grid-template-columns:1fr 1px 1.33fr;
        gap:24px;
        align-items:center;
        justify-content:center;
        margin-bottom:40px;
      }
      .std-meta-divider{width:1px;height:65px;background:rgba(255,255,255,.15)}
      .std-meta-item{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:15px;
        min-width:0;
      }
      .std-meta-icon{
        width:64px;
        height:64px;
        flex:0 0 64px;
        display:grid;
        place-items:center;
        border:1px solid rgba(255,255,255,.18);
        border-radius:50%;
        background:rgba(255,255,255,.045);
        color:#f7f3f8;
      }
      .std-meta-icon svg{width:28px;height:28px}
      .std-meta-text{
        min-width:0;
        font-size:17px;
        line-height:1.45;
        letter-spacing:-.025em;
        color:#ddd6e0;
        text-align:center;
      }
      .std-status-main{display:block;color:#a45e64;font-weight:500}
      .std-status-sub{display:block;color:#d3ccd6}
      .std-address{display:block;color:#eee9f0}

      .std-actions{display:grid;gap:20px}
      .std-btn{
        width:100%;
        height:73px;
        border-radius:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:22px;
        font-size:27px;
        font-weight:700;
        border:1px solid rgba(255,255,255,.20);
        background:rgba(255,255,255,.035);
        color:#f7f3f8;
        transition:transform .15s ease,box-shadow .15s ease,opacity .15s ease;
      }
      .std-btn:not(.std-btn-primary){color:#fff!important}
      .std-sparkles{color:#fff!important}
      .std-btn:hover{transform:translateY(-1px)}
      .std-btn:active{transform:translateY(0)}
      .std-btn-primary{
        position:relative;
        overflow:hidden;
        border-color:transparent;
        color:#fff!important;
        background:linear-gradient(105deg,#5e2f70 0%,#715b53 55%,#5e2f70 100%);
        box-shadow:0 5px 16px rgba(86,16,105,.12);
      }
      .std-btn-primary:after{
        content:'';
        position:absolute;
        top:-35%;
        bottom:-35%;
        left:-34%;
        width:24%;
        pointer-events:none;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.34),transparent);
        transform:skewX(-22deg);
        animation:stdBookShine 4.2s ease-in-out infinite;
      }
      @keyframes stdBookShine{
        0%,68%{left:-34%}
        100%{left:132%}
      }
      @media(prefers-reduced-motion:reduce){.std-btn-primary:after{animation:none!important}}
      .std-btn-primary:hover{box-shadow:0 8px 20px rgba(86,16,105,.18)}
      .std-btn svg{width:28px;height:28px;flex:0 0 28px}
      .std-sparkles{
        width:29px;height:29px;position:relative;display:inline-grid;place-items:center;font-size:29px;line-height:1
      }

      .std-hero-photo{
        position:relative;
        min-width:0;
        height:100%;
        margin:0;
        overflow:hidden;
        background:#eee;
      }
      .std-hero-photo img{
        width:100%;
        height:100%;
        object-fit:cover;
        object-position:center center;
        display:block;
      }

      .std-portfolio{
        position:relative;
        overflow:hidden;
        min-height:auto;
        padding:46px 42px 46px;
        background:
          radial-gradient(520px 360px at -7% 108%,rgba(139,92,184,.115) 0%,rgba(139,92,184,.072) 30%,rgba(139,92,184,.028) 52%,transparent 74%),
          radial-gradient(520px 350px at 107% -8%,rgba(139,92,184,.105) 0%,rgba(139,92,184,.064) 30%,rgba(139,92,184,.024) 52%,transparent 74%),
          radial-gradient(900px 460px at 50% 50%,rgba(255,255,255,.52),transparent 78%),
          #fbfbfb;
        color:#17171a;
      }
      .std-portfolio:before,
      .std-portfolio:after{
        content:'';
        position:absolute;
        pointer-events:none;
        border-radius:50%;
        z-index:0;
        filter:blur(28px);
      }
      .std-portfolio:before{
        width:560px;
        height:420px;
        left:-210px;
        bottom:-165px;
        background:radial-gradient(circle,rgba(141,88,188,.22) 0%,rgba(141,88,188,.12) 38%,rgba(141,88,188,.04) 62%,transparent 78%);
      }
      .std-portfolio:after{
        width:560px;
        height:420px;
        right:-210px;
        top:-165px;
        background:radial-gradient(circle,rgba(141,88,188,.20) 0%,rgba(141,88,188,.11) 38%,rgba(141,88,188,.035) 62%,transparent 78%);
      }
      .std-portfolio-inner{
        position:relative;
        z-index:1;
        width:min(100%,1452px);
        max-width:none;
        margin:0 auto;
      }
      .std-portfolio-head{
        width:auto;
        margin:0;
        padding:0;
        text-align:center;
      }
      .std-portfolio-kicker{
        margin:0;
        font:600 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.31em;
        text-transform:uppercase;
        color:#66636a;
      }
      .std-portfolio-title{
        margin:20px 0 0;
        font:500 76px/.92 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.045em;
        color:#171518;
      }
      .std-portfolio-copy{
        width:min(100%,760px);
        max-width:760px;
        margin:20px auto 0;
        font:400 17px/1.45 "Manrope",Arial,sans-serif;
        color:#77747b;
        white-space:normal;
        text-align:center;
      }
      .std-portfolio-grid{
        display:grid;
        grid-template-columns:330px repeat(3,minmax(0,1fr));
        grid-template-rows:276px 304px;
        gap:12px;
        margin-top:28px;
        padding:0;
      }
      .std-work{
        border:0;
        padding:0;
        border-radius:13px;
        overflow:hidden;
        background:#e7e4e8;
        box-shadow:none;
      }
      .std-work:first-child{grid-row:1 / span 2}
      .std-work img{
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
        transition:transform .35s cubic-bezier(.2,.7,.2,1);
      }
      .std-work:hover img{transform:scale(1.018)}
      .std-portfolio-more{
        width:516px;
        max-width:calc(100% - 84px);
        height:76px;
        margin:42px auto 0;
        padding:0 28px;
        border:1px solid #d8cbe8;
        border-radius:13px;
        background:linear-gradient(180deg,#f6f0fc 0%,#efe5fa 100%);
        color:#2a2530;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:18px;
        font:500 18px/1 "Manrope",Arial,sans-serif;
        position:static;
        left:auto;
        box-shadow:0 8px 22px rgba(120,84,156,.08);
        transition:background .18s ease,transform .18s ease,box-shadow .18s ease;
      }
      .std-portfolio-more:hover{
        background:linear-gradient(180deg,#f8f3fd 0%,#f2e8fb 100%);
        transform:translateY(-1px);
        box-shadow:0 10px 26px rgba(120,84,156,.12);
      }

      .std-services{
        position:relative;
        overflow:hidden;
        min-height:900px;
        padding:54px 72px 58px;
        background:
          radial-gradient(420px 310px at 108% 8%,rgba(139,113,103,.17),transparent 67%),
          radial-gradient(300px 230px at -14% 88%,rgba(113,91,83,.10),transparent 72%),
          #242424;
        color:#f7f3f8;
      }
      .std-services-inner{
        width:min(100%,1215px);
        margin:0 auto;
        display:grid;
        grid-template-columns:minmax(0,.98fr) 1px minmax(0,1.12fr);
        gap:58px;
        align-items:start;
      }
      .std-services-divider{
        width:1px;
        min-height:770px;
        background:rgba(255,255,255,.16);
      }
      .std-services-left{min-width:0}
      .std-services-right{
        min-width:0;
        overflow:hidden;
      }
      .std-services-kicker{
        margin:0;
        font:600 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.31em;
        text-transform:uppercase;
        color:#bcb5c0;
      }
      .std-services-title{
        margin:17px 0 36px;
        font:500 67px/.92 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.035em;
        color:#fff;
      }
      .std-price-wrap{
        width:min(100%,530px);
      }
      .std-price-card{
        position:relative;
        width:100%;
        height:auto;
        border-radius:9px;
        overflow:hidden;
        background:#f0ece7;
        box-shadow:0 18px 50px rgba(0,0,0,.17);
      }
      .std-price-card img{
        width:100%;
        height:auto;
        display:block;
        object-fit:contain;
        background:#f4f0ea;
      }
      .std-price-count{
        position:absolute;
        top:14px;
        right:17px;
        z-index:2;
        padding:4px 8px;
        border-radius:999px;
        background:rgba(248,245,240,.82);
        color:#57515c;
        font:600 10px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.08em;
        backdrop-filter:blur(8px);
      }
      .std-price-arrow{
        position:absolute;
        z-index:3;
        top:50%;
        transform:translateY(-50%);
        width:44px;
        height:64px;
        border:0;
        background:transparent;
        color:#17151a!important;
        font:300 47px/1 Arial,sans-serif!important;
        text-shadow:0 1px 8px rgba(255,255,255,.55);
      }
      .std-price-prev{left:0}
      .std-price-next{right:0}
      .std-price-dots{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:11px;
        margin-top:23px;
      }
      .std-price-dot{
        width:10px;
        height:10px;
        padding:0;
        border:0;
        border-radius:50%;
        background:rgba(255,255,255,.22);
      }
      .std-price-dot.active{
        background:#8b7167;
        box-shadow:0 0 13px rgba(151,73,227,.34);
      }
      .std-price-open{
        display:block;
        width:min(100%,390px);
        height:60px;
        margin:30px auto 0;
        border:1px solid rgba(181,148,130,.30);
        border-radius:999px;
        background:linear-gradient(135deg,#715b53,#5d4841);
        color:#fff!important;
        box-shadow:0 10px 28px rgba(65,48,42,.22);
        font:500 15px/1 "Manrope",Arial,sans-serif;
        transition:background .18s ease,box-shadow .18s ease,transform .18s ease;
      }
      .std-price-open:hover{
        background:linear-gradient(135deg,#80675e,#694f48);
        box-shadow:0 12px 30px rgba(65,48,42,.27);
        transform:translateY(-1px);
      }

      .std-service-tabs{
        display:flex;
        flex-wrap:nowrap;
        align-items:center;
        gap:12px;
        width:calc(100% + max(0px,(100vw - 1215px)/2));
        margin:0 0 31px;
        padding:2px 44px 9px 10px;
        overflow-x:auto;
        overflow-y:hidden;
        overscroll-behavior-inline:contain;
        scrollbar-width:none;
        -webkit-overflow-scrolling:touch;
        cursor:grab;
        user-select:none;
        -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 25px,#000 calc(100% - 44px),transparent 100%);
        mask-image:linear-gradient(90deg,transparent 0,#000 25px,#000 calc(100% - 44px),transparent 100%);
      }
      .std-service-tabs::-webkit-scrollbar{display:none}
      .std-service-tabs.dragging{cursor:grabbing}
      .std-service-tab{
        min-height:43px;
        padding:0 24px;
        border:1px solid rgba(255,255,255,.16);
        border-radius:999px;
        background:transparent;
        color:#ded8e2!important;
        font:500 14px/1 "Manrope",Arial,sans-serif;
        white-space:nowrap;
        transition:background .18s ease,border-color .18s ease,color .18s ease,box-shadow .18s ease;
      }
      .std-service-tab.active{
        border-color:#715b53;
        background:#715b53;
        color:#fff!important;
        box-shadow:0 5px 20px rgba(111,61,130,.20);
      }
      .std-service-list{
        border-top:1px solid rgba(255,255,255,.12);
      }
      .std-service-row{
        padding:23px 3px 23px 5px;
        border-bottom:1px solid rgba(255,255,255,.13);
      }
      .std-service-head{
        display:grid;
        grid-template-columns:minmax(0,1fr) auto;
        gap:24px;
        align-items:baseline;
      }
      .std-service-name{
        font:500 27px/1.05 "Cormorant Garamond",Georgia,serif;
        color:#f6f2f7;
      }
      .std-service-price{
        font:600 27px/1 "Cormorant Garamond",Georgia,serif;
        color:#f7f3f8;
        white-space:nowrap;
      }
      .std-service-detail{
        display:block;
        margin-top:9px;
        font:400 15.5px/1.45 "Manrope",Arial,sans-serif;
        color:#b9b2bd;
      }
      .std-service-variants{
        display:grid;
        gap:8px;
        margin-top:13px;
      }
      .std-service-variant{
        display:grid;
        grid-template-columns:minmax(0,1fr) auto;
        gap:18px;
        align-items:baseline;
        font:400 15.5px/1.4 "Manrope",Arial,sans-serif;
        color:#c9c1cc;
      }
      .std-service-variant b{
        font:600 23px/1 "Cormorant Garamond",Georgia,serif;
        color:#f7f3f8;
        white-space:nowrap;
      }
      .std-service-note{
        display:block;
        margin-top:10px;
        font:400 13px/1.5 "Manrope",Arial,sans-serif;
        color:#aaa2ad;
      }
      .std-service-more{
        width:100%;
        height:57px;
        margin-top:20px;
        border:1px solid rgba(255,255,255,.15);
        border-radius:9px;
        background:rgba(255,255,255,.025);
        color:#e8e2ea!important;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:13px;
        font:500 14px/1 "Manrope",Arial,sans-serif;
      }
      .std-service-more:hover{background:rgba(255,255,255,.055)}
      .std-services-count{
        margin-top:17px;
        text-align:right;
        font:500 11px/1 "Manrope",Arial,sans-serif;
        color:#77707c;
        letter-spacing:.06em;
      }

      .std-price-viewer{
        position:fixed;
        inset:0;
        z-index:340;
        display:none;
        align-items:center;
        justify-content:center;
        box-sizing:border-box;
        width:100vw;
        height:100dvh;
        padding:22px 88px 50px;
        overflow:hidden;
        background:rgba(16,14,18,.97);
        backdrop-filter:blur(10px);
      }
      .std-price-viewer.open{display:flex}
      .std-price-viewer-stage{
        position:relative;
        width:min(calc(100vw - 176px),1120px);
        height:calc(100dvh - 72px);
        max-height:880px;
        display:grid;
        place-items:center;
        touch-action:pan-y;
        user-select:none;
      }
      .std-price-viewer-img{
        display:block;
        max-width:100%;
        max-height:calc(100dvh - 92px);
        width:auto;
        height:auto;
        object-fit:contain;
        border-radius:8px;
        box-shadow:0 24px 80px rgba(0,0,0,.35);
        -webkit-user-drag:none;
        user-select:none;
      }
      .std-price-viewer-close{
        position:absolute;
        top:22px;
        right:27px;
        width:46px;
        height:46px;
        border:1px solid rgba(255,255,255,.17);
        border-radius:50%;
        background:rgba(255,255,255,.07);
        color:#fff!important;
        font-size:27px;
        line-height:1;
      }
      .std-price-viewer-nav{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:54px;
        height:72px;
        border:0;
        background:transparent;
        color:#fff!important;
        font:300 54px/1 Arial,sans-serif!important;
      }
      .std-price-viewer-prev{left:-70px}
      .std-price-viewer-next{right:-70px}
      .std-price-viewer-count{
        position:absolute;
        left:50%;
        bottom:-37px;
        transform:translateX(-50%);
        color:rgba(255,255,255,.72);
        font:500 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.08em;
      }

      .std-about{
        position:relative;
        overflow:hidden;
        min-height:790px;
        padding:92px 64px 96px;
        background:
          radial-gradient(470px 340px at 108% 14%,rgba(150,79,190,.135),transparent 68%),
          radial-gradient(340px 250px at -12% 92%,rgba(157,91,194,.055),transparent 73%),
          #f7f7f8;
        color:#211e23;
      }
      .std-about-inner{
        width:min(100%,1405px);
        margin:0 auto;
      }
      .std-about-kicker{
        margin:0 0 27px;
        font:600 11px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.29em;
        text-transform:uppercase;
        color:#6f6971;
      }
      .std-about-grid{
        display:grid;
        grid-template-columns:minmax(0,635px) minmax(0,1fr);
        gap:44px;
        align-items:center;
      }
      .std-about-visual{
        position:relative;
        min-width:0;
        height:556px;
        border-radius:29px;
        overflow:hidden;
        background:#342338;
        box-shadow:0 18px 46px rgba(55,40,62,.10);
      }
      .std-about-visual:after{
        content:'';
        position:absolute;
        inset:0;
        pointer-events:none;
        background:radial-gradient(340px 230px at 88% 12%,rgba(189,121,222,.18),transparent 70%);
      }
      .std-about-visual img{
        width:100%;
        height:100%;
        display:block;
        object-fit:cover;
        object-position:center center;
        filter:brightness(1.17) saturate(1.08) contrast(.98);
      }
      .std-about-rating{
        position:absolute;
        z-index:2;
        left:29px;
        bottom:29px;
        height:72px;
        padding:0 25px;
        border:1px solid rgba(255,255,255,.25);
        border-radius:999px;
        background:rgba(62,35,72,.74);
        backdrop-filter:blur(12px);
        display:flex;
        align-items:center;
        gap:13px;
        color:#fff;
        box-shadow:0 8px 22px rgba(26,18,29,.16);
      }
      .std-about-rating-star{
        color:#f0c45d;
        font-size:25px;
        line-height:1;
      }
      .std-about-rating strong{
        font:600 25px/1 "Manrope",Arial,sans-serif;
        color:#fff;
      }
      .std-about-rating span{
        font:500 15px/1 "Manrope",Arial,sans-serif;
        color:rgba(255,255,255,.72);
        white-space:nowrap;
      }
      .std-about-copy{
        min-width:0;
        padding:6px 0 0;
      }
      .std-about-lead{
        margin:0;
        max-width:700px;
        font:500 55px/1.08 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.035em;
        color:#211e23;
      }
      .std-about-text{
        margin:36px 0 0;
        max-width:710px;
        font:400 20px/1.5 "Manrope",Arial,sans-serif;
        color:#5c565f;
      }
      .std-about-facts{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:20px;
        margin-top:24px;
      }
      .std-about-fact{
        min-height:136px;
        padding:20px 18px;
        border:1px solid rgba(75,58,81,.09);
        border-radius:19px;
        background:#dfdce2;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        font:500 17px/1.35 "Manrope",Arial,sans-serif;
        color:#2c282e;
        box-shadow:none;
      }

      .std-team{
        position:relative;
        overflow:hidden;
        min-height:610px;
        padding:58px 49px 44px;
        background:
          radial-gradient(420px 310px at 108% 8%,rgba(139,113,103,.17),transparent 67%),
          radial-gradient(300px 230px at -14% 88%,rgba(113,91,83,.10),transparent 72%),
          #242424;
        color:#f7f3f8;
      }
      .std-team-inner{
        width:min(100%,1335px);
        margin:0 auto;
      }
      .std-team-kicker{
        margin:0;
        font:600 13px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.31em;
        text-transform:uppercase;
        color:#aaa2ad;
      }
      .std-team-title{
        margin:14px 0 0;
        font:500 52px/.92 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.035em;
        color:#f7f3f8;
      }
      .std-team-subtitle{
        margin:16px 0 0;
        font:400 14px/1.4 "Manrope",Arial,sans-serif;
        color:#aaa2ad;
      }
      .std-team-window{
        position:relative;
        width:100%;
        margin-top:32px;
        overflow:hidden;
      }
      .std-team-track{
        display:flex;
        align-items:flex-start;
        gap:58px;
        width:max-content;
        min-width:100%;
        overflow-x:auto;
        padding:0 0 10px;
        scrollbar-width:none;
        overscroll-behavior-inline:contain;
        -webkit-overflow-scrolling:touch;
        scroll-snap-type:x proximity;
      }
      .std-team-track::-webkit-scrollbar{display:none}
      .std-master{
        flex:0 0 230px;
        scroll-snap-align:start;
        margin:0;
        text-align:center;
        color:#f7f3f8;
      }
      .std-master-avatar{
        width:224px;
        height:224px;
        margin:0 auto;
        border-radius:50%;
        display:grid;
        place-items:center;
        color:#cbbfd0;
        background:
          radial-gradient(circle at 42% 30%,rgba(255,255,255,.07),transparent 45%),
          linear-gradient(145deg,#3c3641,#302b34);
        border:1px solid rgba(255,255,255,.085);
        box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 16px 42px rgba(0,0,0,.10);
      }
      .std-master-avatar svg{
        width:64px;
        height:64px;
        opacity:.92;
      }
      .std-master-name{
        display:block;
        margin-top:18px;
        font:500 25px/1 "Cormorant Garamond",Georgia,serif;
        color:#f7f3f8;
      }
      .std-master-role{
        display:block;
        margin-top:9px;
        font:400 12px/1.3 "Manrope",Arial,sans-serif;
        color:#b9b2bd;
      }
      .std-team-hint{
        margin-top:37px;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        gap:12px;
        font:500 10px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.22em;
        text-transform:uppercase;
        color:#aaa2ad;
      }
      .std-team-hint span{
        font-size:22px;
        line-height:1;
        letter-spacing:0;
        transform:translateY(-1px);
      }

      .std-contact{
        position:relative;
        box-sizing:border-box;
        overflow:hidden;
        min-height:0;
        padding:42px 84px 40px;
        background:
          radial-gradient(420px 310px at 108% 8%,rgba(139,113,103,.17),transparent 67%),
          radial-gradient(300px 230px at -14% 88%,rgba(113,91,83,.10),transparent 72%),
          #242424;
        color:#f8f5fa;
      }
      .std-contact-inner{
        position:relative;
        width:min(100%,1368px);
        margin:0 auto;
        display:grid;
        grid-template-columns:550px minmax(0,1fr);
        gap:30px;
        align-items:start;
      }
      .std-contact-status{
        position:absolute;
        z-index:3;
        top:0;
        right:0;
        height:58px;
        padding:0 26px 0 22px;
        border:1px solid rgba(255,124,139,.32);
        border-radius:999px;
        background:rgba(116,50,65,.39);
        backdrop-filter:blur(12px);
        display:flex;
        align-items:center;
        gap:11px;
        color:#ffb1bb;
        font:500 17px/1 "Manrope",Arial,sans-serif;
        white-space:nowrap;
      }
      .std-contact-status svg{
        width:25px;
        height:25px;
        fill:none;
        stroke:currentColor;
        stroke-width:1.9;
        stroke-linecap:round;
        stroke-linejoin:round;
      }
      .std-contact-status.open{
        border-color:rgba(107,210,132,.34);
        background:rgba(49,104,66,.38);
        color:#b7efc3;
      }
      .std-contact-kicker{
        margin:0;
        font:500 16px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.34em;
        text-transform:uppercase;
        color:rgba(255,255,255,.83);
      }
      .std-contact-title{
        margin:8px 0 42px;
        font:500 78px/.88 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.035em;
        color:#fbf8fc;
      }
      .std-contact-list{
        display:grid;
        gap:10px;
      }
      .std-contact-card{
        box-sizing:border-box;
        width:100%;
        min-height:94px;
        padding:0 22px;
        border:1px solid rgba(255,255,255,.11);
        border-radius:18px;
        background:rgba(255,255,255,.045);
        display:grid;
        grid-template-columns:78px minmax(0,1fr);
        align-items:center;
        color:#f8f5fa!important;
        text-decoration:none!important;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.025);
        transition:border-color .18s ease,background .18s ease;
      }
      .std-contact-card:hover{
        border-color:rgba(198,155,210,.30);
        background:rgba(255,255,255,.065);
      }
      .std-contact-card.static{
        cursor:default;
      }
      .std-contact-card-icon{
        width:49px;
        height:49px;
        display:grid;
        place-items:center;
        color:#c5a795;
      }
      .std-contact-card-icon svg{
        width:36px;
        height:36px;
        fill:none;
        stroke:currentColor;
        stroke-width:1.8;
        stroke-linecap:round;
        stroke-linejoin:round;
      }
      .std-contact-brand-icon.viber svg,
      .std-contact-brand-icon.max svg{
        fill:currentColor;
        stroke:none;
      }
      .std-contact-brand-icon.phone svg{
        fill:none;
        stroke:currentColor;
      }
      .std-contact-card-copy{
        min-width:0;
      }
      .std-contact-card-title{
        display:block;
        font:500 25px/1.05 "Cormorant Garamond",Georgia,serif;
        color:#f8f5fa;
      }
      .std-contact-card-sub{
        display:block;
        margin-top:7px;
        font:400 13.5px/1.18 "Manrope",Arial,sans-serif;
        color:#aaa5b1;
      }
      .std-contact-right{
        min-width:0;
        padding-top:134px;
      }
      .std-contact-map{
        position:relative;
        width:100%;
        height:510px;
        overflow:hidden;
        border-radius:18px;
        background:#eee;
      }
      .std-contact-map iframe{
        display:block;
        width:100%;
        height:100%;
        border:0;
        filter:saturate(.88) contrast(.98);
      }
      .std-contact-actions{display:none!important}
      .std-contact-action{
        box-sizing:border-box;
        height:82px;
        border-radius:18px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#fff!important;
        text-decoration:none!important;
        font:500 29px/1 "Cormorant Garamond",Georgia,serif;
        transition:filter .18s ease,transform .18s ease;
      }
      .std-contact-action:hover{
        filter:brightness(1.05);
        transform:translateY(-1px);
      }
      .std-contact-call{
        border:1px solid rgba(255,255,255,.12);
        background:rgba(30,28,36,.92);
      }
      .std-contact-route{
        border:1px solid rgba(199,120,238,.35);
        background:linear-gradient(105deg,#715b53 0%,#8b7167 100%);
        box-shadow:0 8px 30px rgba(117,57,145,.12);
      }
      .std-contact-bottom{
        width:auto;
        margin:32px -84px 0;
        border-top:1px solid rgba(255,255,255,.16);
        padding-top:27px;
        padding-bottom:6px;
      }
      .std-contact-brand{
        width:max-content;
        margin:0 auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:7px;
        color:#eee8f0!important;
        text-decoration:none!important;
      }
      .std-contact-brand-mark{
        width:36px;
        height:36px;
        border:1px solid rgba(255,255,255,.24);
        border-radius:9px;
        display:grid;
        place-items:center;
        font:500 27px/1 "Cormorant Garamond",Georgia,serif;
        color:#f6f2f7;
        box-shadow:0 4px 14px rgba(0,0,0,.10);
      }
      .std-contact-brand-text{
        font:500 14px/1 "Cormorant Garamond",Georgia,serif;
        letter-spacing:0;
        color:#eee8f0;
      }

      @media(max-width:1280px){
        .std-contact{
          min-height:0;
          padding:34px 40px 34px;
        }
        .std-contact-inner{
          grid-template-columns:500px minmax(0,1fr);
          gap:28px;
        }
        .std-contact-title{font-size:72px;margin-bottom:37px}
        .std-contact-right{padding-top:119px}
        .std-contact-card{grid-template-columns:78px minmax(0,1fr)}
        .std-contact-card-title{font-size:25px}
        .std-contact-card-sub{font-size:13px}
        .std-contact-action{font-size:25px}
        .std-contact-map{height:510px}
        .std-contact-bottom{margin-left:-40px;margin-right:-40px}
      }

      .std-gallery{
        position:fixed;
        inset:0;
        z-index:360;
        display:none;
        align-items:center;
        justify-content:center;
        box-sizing:border-box;
        width:100vw;
        height:100dvh;
        padding:22px 82px 50px;
        overflow:hidden;
        background:rgba(18,16,20,.96);
        backdrop-filter:blur(9px);
      }
      .std-gallery.open{display:flex}
      .std-gallery-close{
        position:absolute;
        top:24px;
        right:28px;
        width:46px;
        height:46px;
        border:1px solid rgba(255,255,255,.17);
        border-radius:50%;
        background:rgba(255,255,255,.07);
        color:#fff!important;
        font-size:27px;
        line-height:1;
      }
      .std-gallery-stage{
        position:relative;
        width:min(calc(100vw - 164px),1180px);
        height:calc(100dvh - 72px);
        max-height:900px;
        display:grid;
        place-items:center;
        touch-action:pan-y;
        user-select:none;
      }
      .std-gallery-image{
        display:block;
        max-width:100%;
        max-height:calc(100dvh - 92px);
        width:auto;
        height:auto;
        object-fit:contain;
        border-radius:12px;
        box-shadow:0 24px 80px rgba(0,0,0,.35);
        -webkit-user-drag:none;
        user-select:none;
      }
      .std-gallery-nav{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:52px;
        height:70px;
        border:0;
        background:transparent;
        color:#fff!important;
        font:300 52px/1 Arial,sans-serif!important;
        opacity:.82;
      }
      .std-gallery-nav:hover{opacity:1}
      .std-gallery-prev{left:-68px}
      .std-gallery-next{right:-68px}
      .std-gallery-count{
        position:absolute;
        left:50%;
        bottom:-39px;
        transform:translateX(-50%);
        color:rgba(255,255,255,.72);
        font:500 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.08em;
      }
      .std-gallery-browser{
        position:fixed;
        inset:0;
        z-index:350;
        display:none;
        width:100vw;
        height:100dvh;
        overflow:auto;
        background:
          radial-gradient(430px 300px at 108% 2%,rgba(143,85,181,.17),transparent 68%),
          radial-gradient(320px 230px at -12% 92%,rgba(111,61,130,.08),transparent 72%),
          #242424;
        color:#f7f3f8;
      }
      .std-gallery-browser.open{display:block}
      .std-gallery-browser-shell{
        box-sizing:border-box;
        width:min(100%,1320px);
        min-height:100%;
        margin:0 auto;
        padding:28px 42px 56px;
      }
      .std-gallery-browser-top{
        display:grid;
        grid-template-columns:54px 1fr 54px;
        align-items:center;
      }
      .std-gallery-browser-back{
        width:46px;
        height:46px;
        border:0;
        background:transparent;
        color:#f7f3f8!important;
        font:300 34px/1 Arial,sans-serif!important;
      }
      .std-gallery-browser-title{text-align:center}
      .std-gallery-browser-title strong{
        display:block;
        font:500 48px/.92 "Cormorant Garamond",Georgia,serif;
        color:#f7f3f8;
      }
      .std-gallery-browser-title span{
        display:block;
        margin-top:8px;
        font:500 10px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.34em;
        text-transform:uppercase;
        color:#b9b2bd;
      }
      .std-gallery-browser-tabs{
        display:flex;
        justify-content:center;
        gap:8px;
        margin:27px auto 0;
        overflow-x:auto;
        scrollbar-width:none;
      }
      .std-gallery-browser-tabs::-webkit-scrollbar{display:none}
      .std-gallery-browser-tab{
        flex:0 0 auto;
        height:38px;
        padding:0 17px;
        border:1px solid rgba(255,255,255,.11);
        border-radius:999px;
        background:rgba(255,255,255,.025);
        color:#c6bec9!important;
        font:500 11px/1 "Manrope",Arial,sans-serif!important;
      }
      .std-gallery-browser-tab.active{
        background:#715b53;
        border-color:#715b53;
        color:#fff!important;
      }
      .std-gallery-browser-grid{
        display:grid;
        grid-template-columns:repeat(4,minmax(0,1fr));
        gap:10px;
        margin-top:22px;
      }
      .std-gallery-browser-tile{
        aspect-ratio:4/3;
        padding:0;
        border:0;
        border-radius:12px;
        overflow:hidden;
        background:#302b34;
      }
      .std-gallery-browser-tile img{
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        -webkit-user-drag:none;
        user-select:none;
      }
      @media(max-width:1100px){
        .std-gallery-browser-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
      }


      /* Compact team override */
      #esmeraldaDesktopTeam.std-team{
        min-height:0!important;
        padding:46px 70px 38px!important;
      }
      #esmeraldaDesktopTeam .std-team-inner{
        width:min(100%,1120px)!important;
      }
      #esmeraldaDesktopTeam .std-team-kicker{
        font-size:10px!important;
      }
      #esmeraldaDesktopTeam .std-team-title{
        margin-top:12px!important;
        font-size:46px!important;
      }
      #esmeraldaDesktopTeam .std-team-subtitle{
        margin-top:13px!important;
        font-size:13px!important;
      }
      #esmeraldaDesktopTeam .std-team-window{
        margin-top:26px!important;
      }
      #esmeraldaDesktopTeam .std-team-track{
        width:100%!important;
        min-width:0!important;
        gap:48px!important;
        justify-content:space-between!important;
        overflow-x:auto!important;
      }
      #esmeraldaDesktopTeam .std-master{
        flex:0 0 210px!important;
      }
      #esmeraldaDesktopTeam .std-master-avatar{
        width:200px!important;
        height:200px!important;
      }
      #esmeraldaDesktopTeam .std-master-avatar svg{
        width:58px!important;
        height:58px!important;
      }
      #esmeraldaDesktopTeam .std-master-name{
        margin-top:14px!important;
        font-size:25px!important;
      }
      #esmeraldaDesktopTeam .std-master-role{
        margin-top:7px!important;
        font-size:11px!important;
      }
      #esmeraldaDesktopTeam .std-team-hint{
        margin-top:18px!important;
        font-size:9px!important;
      }
      #esmeraldaDesktopTeam .std-team-hint span{
        font-size:19px!important;
      }

      @media(max-width:1180px){
        .std-header{padding:0 30px}
        .std-nav{gap:22px}
        .std-phone{width:auto}
        .std-hero{grid-template-columns:50% 50%}
        .std-hero-copy{padding-inline:34px}
        .std-logo{font-size:64px}
        .std-logo-sub{font-size:11px;margin-left:0}
        .std-tagline{font-size:24px}
        .std-meta{gap:14px}
        .std-meta-icon{width:54px;height:54px;flex-basis:54px}
        .std-meta-text{font-size:15px}
      }
    }
  `;
  document.head.appendChild(css);
  const refCss=document.createElement('style');
  refCss.id='esmeralda-desktop-reference-overrides';
  refCss.textContent="\n@media (min-width:768px){\n  #esmeraldaDesktopReviews.std-reviews{\n    position:relative!important;\n    box-sizing:border-box!important;\n    width:100%!important;\n    height:864px!important;\n    min-height:864px!important;\n    overflow:hidden!important;\n    padding:65px 0 35px!important;\n    background:#f9f9fb!important;\n    color:#171719!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-head{\n    width:min(calc(100% - 128px),1408px)!important;\n    margin:0 auto!important;\n    text-align:center!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-kicker{\n    margin:0!important;\n    font:500 17px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:.30em!important;\n    text-transform:uppercase!important;\n    color:#68686d!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-title{\n    margin:22px 0 0!important;\n    font:500 76px/.92 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:-.035em!important;\n    color:#151517!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-score{\n    margin-top:44px!important;\n    text-align:center!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-score>strong{\n    display:block!important;\n    margin:0!important;\n    font:500 88px/.78 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:-.045em!important;\n    color:#151517!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-stars{\n    display:block!important;\n    margin-top:21px!important;\n    color:#d9aa42!important;\n    font-size:34px!important;\n    line-height:1!important;\n    letter-spacing:6px!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-count{\n    margin-top:20px!important;\n    font:400 18px/1 \"Manrope\",Arial,sans-serif!important;\n    color:#737278!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-viewport{\n    position:relative!important;\n    box-sizing:border-box!important;\n    width:100%!important;\n    margin-top:35px!important;\n    padding:0 64px 4px!important;\n    overflow:hidden!important;\n    cursor:default!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-loop{\n    display:flex!important;\n    align-items:stretch!important;\n    gap:16px!important;\n    width:max-content!important;\n    transform:translate3d(0,0,0)!important;\n    will-change:transform!important;\n    animation:stdReviewsReferenceMarquee 105s linear infinite!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-set{\n    display:flex!important;\n    flex:0 0 auto!important;\n    align-items:stretch!important;\n    gap:16px!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-viewport:hover .std-reviews-loop,\n  #esmeraldaDesktopReviews .std-reviews-viewport:focus-within .std-reviews-loop,\n  #esmeraldaDesktopReviews .std-reviews-viewport:active .std-reviews-loop{\n    animation-play-state:paused!important;\n  }\n\n  @keyframes stdReviewsReferenceMarquee{\n    from{transform:translate3d(0,0,0)}\n    to{transform:translate3d(calc(-50% - 8px),0,0)}\n  }\n\n  #esmeraldaDesktopReviews .std-review-card{\n    box-sizing:border-box!important;\n    flex:0 0 459px!important;\n    width:459px!important;\n    height:320px!important;\n    min-width:459px!important;\n    min-height:320px!important;\n    max-width:none!important;\n    padding:31px 30px 28px!important;\n    border:1px solid #dedde2!important;\n    border-radius:12px!important;\n    background:rgba(250,250,252,.76)!important;\n    color:#19191b!important;\n    text-decoration:none!important;\n    box-shadow:none!important;\n    transform:none!important;\n  }\n\n  #esmeraldaDesktopReviews .std-review-card:hover{\n    border-color:#ceccd3!important;\n    background:#fbfbfc!important;\n    transform:none!important;\n  }\n\n  #esmeraldaDesktopReviews .std-review-head{\n    display:grid!important;\n    grid-template-columns:70px minmax(0,1fr)!important;\n    gap:24px!important;\n    align-items:center!important;\n  }\n\n  #esmeraldaDesktopReviews .std-review-avatar{\n    box-sizing:border-box!important;\n    width:70px!important;\n    height:70px!important;\n    border-radius:50%!important;\n    display:grid!important;\n    place-items:center!important;\n    background:#ececf0!important;\n    border:1px solid #dcdae0!important;\n    color:#4e4b51!important;\n    font:500 32px/1 \"Cormorant Garamond\",Georgia,serif!important;\n  }\n\n  #esmeraldaDesktopReviews .std-review-name{\n    display:block!important;\n    margin:0!important;\n    font:600 25px/1 \"Cormorant Garamond\",Georgia,serif!important;\n    color:#242126!important;\n  }\n\n  #esmeraldaDesktopReviews .std-review-meta{\n    display:block!important;\n    margin-top:7px!important;\n    font:500 11px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:.13em!important;\n    text-transform:uppercase!important;\n    color:#818087!important;\n  }\n\n  #esmeraldaDesktopReviews .std-review-stars{\n    display:block!important;\n    margin-top:8px!important;\n    color:#d9aa42!important;\n    font-size:16px!important;\n    line-height:1!important;\n    letter-spacing:1.5px!important;\n  }\n\n  #esmeraldaDesktopReviews .std-review-stars::after{\n    content:\" ·  Google Maps\"!important;\n    margin-left:9px!important;\n    color:#8d8b91!important;\n    font:400 11px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:0!important;\n  }\n\n  #esmeraldaDesktopReviews .std-review-text{\n    display:block!important;\n    margin:31px 0 0!important;\n    min-height:95px!important;\n    font:400 16px/1.52 \"Manrope\",Arial,sans-serif!important;\n    color:#4b4a4f!important;\n  }\n\n  #esmeraldaDesktopReviews .std-review-more{\n    display:block!important;\n    margin-top:20px!important;\n    font:400 12px/1 \"Manrope\",Arial,sans-serif!important;\n    color:#67666c!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-actions{\n    display:flex!important;\n    justify-content:center!important;\n    margin-top:27px!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-all{\n    box-sizing:border-box!important;\n    width:458px!important;\n    height:55px!important;\n    border:1px solid #d5d4d9!important;\n    border-radius:7px!important;\n    background:transparent!important;\n    display:flex!important;\n    align-items:center!important;\n    justify-content:center!important;\n    color:#242327!important;\n    text-decoration:none!important;\n    font:500 14px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:.14em!important;\n    text-transform:uppercase!important;\n  }\n\n  #esmeraldaDesktopReviews .std-reviews-all:hover{\n    background:#fff!important;\n    border-color:#c9c7ce!important;\n  }\n\n  @media (max-width:1450px){\n    #esmeraldaDesktopReviews .std-review-card{\n      flex-basis:calc((100vw - 160px)/3)!important;\n      width:calc((100vw - 160px)/3)!important;\n      min-width:0!important;\n    }\n  }\n}\n\n\n@media (min-width:768px){\n  #esmeraldaDesktopTeam{\n    min-height:0!important;\n    padding:41px 65px 68px!important;\n  }\n  #esmeraldaDesktopTeam .std-team-inner{\n    width:min(100%,1555px)!important;\n  }\n  #esmeraldaDesktopTeam .std-team-kicker{\n    font-size:13px!important;\n    margin:0!important;\n  }\n  #esmeraldaDesktopTeam .std-team-title{\n    margin:14px 0 0!important;\n    font-size:60px!important;\n    line-height:.9!important;\n  }\n  #esmeraldaDesktopTeam .std-team-subtitle{\n    margin:16px 0 0!important;\n    font-size:17px!important;\n  }\n  #esmeraldaDesktopTeam .std-team-window{\n    margin-top:48px!important;\n  }\n  #esmeraldaDesktopTeam .std-team-track{\n    gap:52px!important;\n    justify-content:space-between!important;\n    padding-bottom:5px!important;\n  }\n  #esmeraldaDesktopTeam .std-master{\n    flex:0 0 271px!important;\n  }\n  #esmeraldaDesktopTeam .std-master-avatar{\n    width:257px!important;\n    height:257px!important;\n  }\n  #esmeraldaDesktopTeam .std-master-avatar svg{\n    width:72px!important;\n    height:72px!important;\n  }\n  #esmeraldaDesktopTeam .std-master-name{\n    margin-top:16px!important;\n    font-size:34px!important;\n  }\n  #esmeraldaDesktopTeam .std-master-role{\n    margin-top:7px!important;\n    font-size:14px!important;\n  }\n  #esmeraldaDesktopTeam .std-team-hint{\n    margin-top:24px!important;\n    font-size:12px!important;\n    gap:12px!important;\n  }\n  #esmeraldaDesktopTeam .std-team-hint span{\n    font-size:24px!important;\n  }\n}\n";
  document.head.appendChild(refCss);
  const bookCss=document.createElement('style');bookCss.id='esmeralda-desktop-book-style';bookCss.textContent="@media(min-width:768px){.std-book-overlay{position:fixed;inset:0;z-index:360;display:none;align-items:center;justify-content:center;padding:28px;background:rgba(18,16,15,.62);backdrop-filter:blur(8px)}.std-book-overlay.open{display:flex}.std-book-panel{position:relative;width:min(100%,560px);padding:34px;border-radius:22px;background:#f7f2eb;color:#211d1a;box-shadow:0 28px 90px rgba(0,0,0,.28);animation:stdEsBookIn .32s cubic-bezier(.16,1,.3,1)}@keyframes stdEsBookIn{from{opacity:0;transform:translateY(22px) scale(.985)}to{opacity:1;transform:none}}.std-book-close{position:absolute;right:18px;top:18px;width:42px;height:42px;border:1px solid rgba(61,49,43,.13);border-radius:50%;background:#fff;color:#221e1b;font-size:23px}.std-book-panel h3{margin:16px 52px 0 0;font:500 40px/.95 \"Cormorant Garamond\",Georgia,serif}.std-book-panel>p:not(.std-services-kicker){margin:13px 0 0;color:#756a63;font:400 13px/1.5 \"Manrope\",Arial,sans-serif}.std-book-options{display:grid;gap:9px;margin-top:24px}.std-book-options a{min-height:62px;padding:0 17px;border:1px solid rgba(61,49,43,.12);border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:space-between;color:#211d1a!important;font:600 13px/1 \"Manrope\",Arial,sans-serif}.std-book-options a span:last-child{color:#82766f;font-size:11px}}";document.head.appendChild(bookCss);



  const root=document.createElement('div');
  root.id='esmeralda-desktop-v1';
  root.innerHTML=`
    <header class="std-header">
      <nav class="std-nav" aria-label="Основная навигация">
        <a href="#esmeraldaDesktopServices">Услуги</a>
        <a href="#esmeraldaDesktopPortfolio">Наши работы</a>
        <a href="#esmeraldaDesktopAbout">О нас</a>
        <a href="#esmeraldaDesktopReviews">Отзывы</a>
        <a href="#esmeraldaDesktopContacts">Контакты</a>
      </nav>
      <a class="std-phone" href="tel:${PHONE}" aria-label="Позвонить в Beauty Room">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39Z" fill="currentColor"/></svg>
        <span>+374 93 873617</span>
      </a>
    </header>

    <section class="std-hero" id="esmeraldaDesktopTop" aria-label="Beauty Room">
      <div class="std-hero-copy">
        <div class="std-copy-inner">
          <h1 class="std-logo">BEAUTY ROOM</h1>
          <div class="std-logo-sub">by Esmeralda</div>

          <p class="std-tagline">Салон красоты в самом сердце<br>Еревана.</p>

          <div class="std-meta">
            <div class="std-meta-item">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.7v4.8l3 1.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="std-meta-text"><span class="std-status-main" id="stdStatusMain">Закрыто</span><span class="std-status-sub" id="stdStatusSub">до 10:00</span></span>
            </div>

            <span class="std-meta-divider" aria-hidden="true"></span>

            <a class="std-meta-item" href="${YANDEX_RU}" target="_blank" rel="noopener">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </span>
              <span class="std-meta-text std-address">Ереван,<br>Zavarian St 1/5</span>
            </a>
          </div>

          <div class="std-actions">
            <button class="std-btn std-btn-primary" id="stdBookBtn" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 3.8v4.4M16 3.8v4.4M4 10h16M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01M16 17h.01" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              <span>Записаться</span>
            </button>
            <a class="std-btn" href="#esmeraldaDesktopPortfolio">
              <span class="std-sparkles" aria-hidden="true">✦</span>
              <span>Смотреть работы</span>
            </a>
          </div>
        </div>
      </div>

      <div class="std-hero-photo">
        <img src="interior_reception_02.webp" alt="Ресепшен Beauty Room">
      </div>
    </section>

    <section class="std-portfolio" id="esmeraldaDesktopPortfolio" aria-labelledby="esmeraldaDesktopPortfolioTitle">
      <div class="std-portfolio-inner">
        <div class="std-portfolio-head">
          <p class="std-portfolio-kicker">Портфолио</p>
          <h2 class="std-portfolio-title" id="esmeraldaDesktopPortfolioTitle">Наши работы</h2>
          <p class="std-portfolio-copy">Вдохновляйтесь реальными результатами наших мастеров<br>и выбирайте свой идеальный образ.</p>
        </div>
        <div class="std-portfolio-grid">
          ${PORTFOLIO.map((item,i)=>`<button class="std-work" type="button" data-portfolio-index="${i}" aria-label="Открыть фотографию"><img src="${item.src}" alt="${item.alt}" loading="${i<4?'eager':'lazy'}"></button>`).join('')}
        </div>
        <button class="std-portfolio-more" id="stdOpenGallery" type="button">Открыть галерею <span aria-hidden="true">→</span></button>
      </div>
    </section>

    <section class="std-services" id="esmeraldaDesktopServices" aria-labelledby="stdServicesTitle">
      <div class="std-services-inner">
        <div class="std-services-left">
          <p class="std-services-kicker">Услуги</p>
          <h2 class="std-services-title" id="stdServicesTitle">Наши услуги</h2>
          <div class="std-price-wrap">
            <div class="std-price-card">
              <img id="stdPriceImage" src="${PRICE_PAGES[0]}" alt="Примеры работ Beauty Room, страница 1">
              <span class="std-price-count" id="stdPriceCount">1 / ${PRICE_PAGES.length}</span>
              <button class="std-price-arrow std-price-prev" id="stdPricePrev" type="button" aria-label="Предыдущая страница">‹</button>
              <button class="std-price-arrow std-price-next" id="stdPriceNext" type="button" aria-label="Следующая страница">›</button>
            </div>
            <div class="std-price-dots" id="stdPriceDots"></div>
            <button class="std-price-open" id="stdPriceOpen" type="button">Открыть примеры работ</button>
          </div>
        </div>

        <span class="std-services-divider" aria-hidden="true"></span>

        <div class="std-services-right">
          <div class="std-service-tabs" id="stdServiceTabs"></div>
          <div class="std-service-list" id="stdServiceList"></div>
          <button class="std-service-more" id="stdServiceMore" type="button"><span id="stdServiceMoreText"></span><span id="stdServiceMoreArrow" aria-hidden="true">↓</span></button>
          <div class="std-services-count" id="stdServicesCount"></div>
        </div>
      </div>
    </section>

    <section class="std-about" id="esmeraldaDesktopAbout" aria-labelledby="stdAboutTitle">
      <div class="std-about-inner">
        <p class="std-about-kicker">О нас</p>
        <div class="std-about-grid">
          <div class="std-about-visual">
            <img src="about-salon.webp" alt="Beauty Room" loading="lazy">
            <div class="std-about-rating">
              <span class="std-about-rating-star" aria-hidden="true">★</span>
              <strong>5,0</strong>
              <span>рейтинг салона</span>
            </div>
          </div>
          <div class="std-about-copy">
            <h2 class="std-about-lead" id="stdAboutTitle">Beauty Room — место,<br>где красота собирается<br>в одном пространстве.</h2>
            <p class="std-about-text">В Beauty Room работают мастера разных направлений. Здесь можно совместить несколько процедур, спокойно выбрать нужную услугу и записаться напрямую в салон.</p>
            <div class="std-about-facts">
              <div class="std-about-fact">Мастера разных<br>направлений</div>
              <div class="std-about-fact">Комфортная<br>атмосфера</div>
              <div class="std-about-fact">Индивидуальный<br>подход</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="std-team" id="esmeraldaDesktopTeam" aria-labelledby="stdTeamTitle">
      <div class="std-team-inner">
        <p class="std-team-kicker">Наша команда</p>
        <h2 class="std-team-title" id="stdTeamTitle">Мастера своего дела</h2>
        <p class="std-team-subtitle">Профессионалы, которые заботятся о вашей красоте.</p>

        <div class="std-team-window">
          <div class="std-team-track" id="stdTeamTrack">
            ${TEAM_MASTERS.map(master=>`
              <article class="std-master">
                <div class="std-master-avatar">${TEAM_AVATAR}</div>
                <strong class="std-master-name">${master.name}</strong>
                <span class="std-master-role">${master.role}</span>
              </article>
            `).join('')}
          </div>
        </div>

        <div class="std-team-hint" aria-hidden="true">Листайте <span>→</span></div>
      </div>
    </section>

    <section class="std-reviews" id="esmeraldaDesktopReviews" aria-labelledby="stdReviewsTitle">
      <div class="std-reviews-head">
        <p class="std-reviews-kicker">Отзывы</p>
        <h2 class="std-reviews-title" id="stdReviewsTitle">Что говорят о нас</h2>
        <div class="std-reviews-score">
          <strong>5,0</strong>
          <div class="std-reviews-stars" aria-label="5 звёзд">★★★★★</div>
          <div class="std-reviews-count">Отзывы на Google Maps</div>
        </div>
      </div>

      <div class="std-reviews-viewport" id="stdReviewsViewport" aria-label="Отзывы клиентов. Наведите курсор, чтобы остановить ленту.">
        <div class="std-reviews-loop">
          <div class="std-reviews-set">
            ${DESKTOP_REAL_REVIEWS.map(r=>`
              <a class="std-review-card" href="${YANDEX_REVIEWS}#:~:text=${encodeURIComponent(r[1])}" target="_blank" rel="noopener">
                <div class="std-review-head">
                  <span class="std-review-avatar">${([...(String(r[0]).trim())][0]||'S').toUpperCase()}</span>
                  <span>
                    <strong class="std-review-name">${r[0]}</strong>
                    <span class="std-review-meta">Google Maps</span>
                    <span class="std-review-stars">★★★★★</span>
                  </span>
                </div>
                <p class="std-review-text">${r[1]}</p>
                <span class="std-review-more">Подробнее →</span>
              </a>
            `).join('')}
          </div>
          <div class="std-reviews-set" aria-hidden="true">
            ${DESKTOP_REAL_REVIEWS.map(r=>`
              <a class="std-review-card" href="${YANDEX_REVIEWS}#:~:text=${encodeURIComponent(r[1])}" target="_blank" rel="noopener" tabindex="-1">
                <div class="std-review-head">
                  <span class="std-review-avatar">${([...(String(r[0]).trim())][0]||'S').toUpperCase()}</span>
                  <span>
                    <strong class="std-review-name">${r[0]}</strong>
                    <span class="std-review-meta">Google Maps</span>
                    <span class="std-review-stars">★★★★★</span>
                  </span>
                </div>
                <p class="std-review-text">${r[1]}</p>
                <span class="std-review-more">Подробнее →</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="std-reviews-actions">
        <a class="std-reviews-all" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">Смотреть все отзывы →</a>
      </div>
    </section>

    <section class="std-contact" id="esmeraldaDesktopContacts" aria-labelledby="stdContactTitle">
      <div class="std-contact-inner">
        <div class="std-contact-status" id="stdContactStatus">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3.2 1.8"></path></svg>
          <span id="stdContactStatusText">Закрыто до 10:00</span>
        </div>

        <div class="std-contact-left">
          <p class="std-contact-kicker">Контакты</p>
          <h2 class="std-contact-title" id="stdContactTitle">Ждём вас</h2>

          <div class="std-contact-list">
            <a class="std-contact-card" href="${YANDEX_RU}" target="_blank" rel="noopener">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6.5-5.4 6.5-11a6.5 6.5 0 1 0-13 0c0 5.6 6.5 11 6.5 11Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg>
              </span>
              <span class="std-contact-card-copy">
                <strong class="std-contact-card-title">Ереван, Zavarian St 1/5</strong>
                <span class="std-contact-card-sub">Армения · открыть в Google Maps</span>
              </span>
            </a>

            <a class="std-contact-card" href="tel:${PHONE}">
              <span class="std-contact-card-icon std-contact-brand-icon phone">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="std-contact-card-copy">
                <strong class="std-contact-card-title">+374 93 873617</strong>
                <span class="std-contact-card-sub">Нажмите, чтобы позвонить</span>
              </span>
            </a>

            <a class="std-contact-card" href="${WHATSAPP_URL}" target="_blank" rel="noopener">
              <span class="std-contact-card-icon std-contact-brand-icon viber">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5h14v10H9l-4 3v-13Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.5 9.2c.8 2.2 2.1 3.5 4.3 4.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </span>
              <span class="std-contact-card-copy">
                <strong class="std-contact-card-title">Viber</strong>
                <span class="std-contact-card-sub">Написать в салон</span>
              </span>
            </a>

            <div class="std-contact-card static">
              <span class="std-contact-card-icon std-contact-brand-icon max">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v10M8.5 10h7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
              </span>
              <span class="std-contact-card-copy">
                <strong class="std-contact-card-title">Beauty Room</strong>
              </span>
            </div>

            <div class="std-contact-card static">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3.2 1.8"></path></svg>
              </span>
              <span class="std-contact-card-copy">
                <strong class="std-contact-card-title">Ежедневно 09:00–20:00</strong>
                <span class="std-contact-card-sub">Без выходных</span>
              </span>
            </div>
          </div>
        </div>

        <div class="std-contact-right">
          <div class="std-contact-map">
            <iframe title="Карта Beauty Room" loading="eager" src="https://www.google.com/maps?q=40.1673067,44.5124793&z=16&output=embed"></iframe>
          </div>

        </div>
      </div>

      <div class="std-contact-bottom">
        <a class="std-contact-brand" href="https://tanem.ru/" target="_blank" rel="noopener">
          <span class="std-contact-brand-mark">T</span>
          <span class="std-contact-brand-text">Создано в TANEM.ru</span>
        </a>
      </div>
    </section>

    <div class="std-book-overlay" id="stdBookOverlay" role="dialog" aria-modal="true" aria-label="Запись Beauty Room">
      <div class="std-book-panel">
        <button class="std-book-close" id="stdBookClose" type="button" aria-label="Закрыть">×</button>
        <p class="std-services-kicker">Запись</p><h3>Как вам удобнее записаться?</h3><p>Выберите удобный способ связи.</p>
        <div class="std-book-options">
          <a href="tel:+37493873617"><span>Телефон</span><span>+374 93 873617 →</span></a>
          <a href="viber://chat?number=%2B37493873617"><span>Viber</span><span>Написать →</span></a>
          <a href="https://www.google.com/maps/place/Beauty+Room+by+Esmeralda/@40.1673067,44.5124793,17z/" target="_blank" rel="noopener"><span>Google Maps</span><span>Открыть →</span></a>
        </div>
      </div>
    </div>

    <div class="std-gallery-browser" id="stdGalleryBrowser" role="dialog" aria-modal="true" aria-label="Галерея Beauty Room">
      <div class="std-gallery-browser-shell">
        <div class="std-gallery-browser-top">
          <button class="std-gallery-browser-back" id="stdGalleryBrowserBack" type="button" aria-label="Закрыть галерею">←</button>
          <div class="std-gallery-browser-title"><strong>Галерея</strong><span>Beauty Room</span></div>
          <div></div>
        </div>
        <div class="std-gallery-browser-tabs" id="stdGalleryBrowserTabs"></div>
        <div class="std-gallery-browser-grid" id="stdGalleryBrowserGrid"></div>
      </div>
    </div>

    <div class="std-price-viewer" id="stdPriceViewer" role="dialog" aria-modal="true" aria-label="Примеры работ Beauty Room">
      <button class="std-price-viewer-close" id="stdPriceViewerClose" type="button" aria-label="Закрыть">×</button>
      <div class="std-price-viewer-stage">
        <button class="std-price-viewer-nav std-price-viewer-prev" id="stdPriceViewerPrev" type="button" aria-label="Предыдущая страница">‹</button>
        <img class="std-price-viewer-img" id="stdPriceViewerImage" src="" alt="Примеры работ Beauty Room">
        <button class="std-price-viewer-nav std-price-viewer-next" id="stdPriceViewerNext" type="button" aria-label="Следующая страница">›</button>
        <span class="std-price-viewer-count" id="stdPriceViewerCount"></span>
      </div>
    </div>

    <div class="std-gallery" id="stdGallery" role="dialog" aria-modal="true" aria-label="Галерея Beauty Room">
      <button class="std-gallery-close" id="stdGalleryClose" type="button" aria-label="Закрыть">×</button>
      <div class="std-gallery-stage">
        <button class="std-gallery-nav std-gallery-prev" id="stdGalleryPrev" type="button" aria-label="Предыдущее фото">‹</button>
        <img class="std-gallery-image" id="stdGalleryImage" src="" alt="Фотография Beauty Room">
        <button class="std-gallery-nav std-gallery-next" id="stdGalleryNext" type="button" aria-label="Следующее фото">›</button>
        <span class="std-gallery-count" id="stdGalleryCount"></span>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const bookBtn=document.getElementById('stdBookBtn');
  const bookOverlay=document.getElementById('stdBookOverlay');
  const openDesktopBooking=()=>{bookOverlay.classList.add('open');document.body.style.overflow='hidden'};
  const closeDesktopBooking=()=>{bookOverlay.classList.remove('open');if(!document.querySelector('.std-gallery.open,.std-gallery-browser.open,.std-price-viewer.open'))document.body.style.overflow=''};
  bookBtn.addEventListener('click',openDesktopBooking);
  document.getElementById('stdBookClose').addEventListener('click',closeDesktopBooking);
  bookOverlay.addEventListener('click',e=>{if(e.target===bookOverlay)closeDesktopBooking()});

  const galleryBrowser=document.getElementById('stdGalleryBrowser');
  const galleryBrowserTabs=document.getElementById('stdGalleryBrowserTabs');
  const galleryBrowserGrid=document.getElementById('stdGalleryBrowserGrid');
  const gallery=document.getElementById('stdGallery');
  const galleryStage=document.querySelector('.std-gallery-stage');
  const galleryImage=document.getElementById('stdGalleryImage');
  const galleryCount=document.getElementById('stdGalleryCount');
  let galleryCategory='Ногти';
  let galleryItems=PORTFOLIO.slice();
  let galleryIndex=0;
  let galleryDragStartX=0;
  let galleryDragging=false;

  function paintGallery(){
    const item=galleryItems[galleryIndex];
    if(!item)return;
    galleryImage.src=item.src;
    galleryImage.alt=item.alt||'Фотография Beauty Room';
    galleryCount.textContent=String(galleryIndex+1).padStart(2,'0')+' / '+String(galleryItems.length).padStart(2,'0');
    document.getElementById('stdGalleryPrev').hidden=galleryItems.length<2;
    document.getElementById('stdGalleryNext').hidden=galleryItems.length<2;
  }
  function openDesktopViewer(items,index=0){
    galleryItems=Array.isArray(items)&&items.length?items:PORTFOLIO.slice();
    galleryIndex=Math.max(0,Math.min(index,galleryItems.length-1));
    paintGallery();
    gallery.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDesktopViewer(){
    gallery.classList.remove('open');
    if(!galleryBrowser.classList.contains('open')&&!document.getElementById('stdPriceViewer').classList.contains('open'))document.body.style.overflow='';
  }
  function moveDesktopGallery(step){
    if(galleryItems.length<2)return;
    galleryIndex=(galleryIndex+step+galleryItems.length)%galleryItems.length;
    paintGallery();
  }

  function renderDesktopGalleryBrowser(){
    const cats=Object.keys(DESKTOP_GALLERY_GROUPS);
    const items=DESKTOP_GALLERY_GROUPS[galleryCategory]||[];
    galleryBrowserTabs.innerHTML=cats.map(cat=>'<button class="std-gallery-browser-tab'+(cat===galleryCategory?' active':'')+'" type="button" data-gallery-category="'+cat+'">'+cat+'</button>').join('');
    galleryBrowserGrid.innerHTML=items.map((item,i)=>'<button class="std-gallery-browser-tile" type="button" data-gallery-item="'+i+'" aria-label="Открыть фотографию"><img src="'+item.src+'" alt="'+item.alt+'" loading="lazy"></button>').join('');
    galleryBrowserTabs.querySelectorAll('[data-gallery-category]').forEach(btn=>btn.onclick=()=>{
      galleryCategory=btn.dataset.galleryCategory;
      renderDesktopGalleryBrowser();
    });
    galleryBrowserGrid.querySelectorAll('[data-gallery-item]').forEach(btn=>btn.onclick=()=>{
      openDesktopViewer(items,Number(btn.dataset.galleryItem)||0);
    });
  }
  function openDesktopGalleryBrowser(cat='Ногти'){
    galleryCategory=Object.prototype.hasOwnProperty.call(DESKTOP_GALLERY_GROUPS,cat)?cat:'Ногти';
    renderDesktopGalleryBrowser();
    galleryBrowser.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDesktopGalleryBrowser(){
    galleryBrowser.classList.remove('open');
    if(!gallery.classList.contains('open')&&!document.getElementById('stdPriceViewer').classList.contains('open'))document.body.style.overflow='';
  }

  document.querySelectorAll('.std-work').forEach(btn=>{
    btn.addEventListener('click',()=>{
      openDesktopViewer(PORTFOLIO,Number(btn.dataset.portfolioIndex)||0);
    });
  });
  document.getElementById('stdOpenGallery').addEventListener('click',()=>openDesktopGalleryBrowser('Ногти'));
  document.getElementById('stdGalleryBrowserBack').addEventListener('click',closeDesktopGalleryBrowser);
  document.getElementById('stdGalleryClose').addEventListener('click',closeDesktopViewer);
  document.getElementById('stdGalleryPrev').addEventListener('click',()=>moveDesktopGallery(-1));
  document.getElementById('stdGalleryNext').addEventListener('click',()=>moveDesktopGallery(1));
  gallery.addEventListener('click',e=>{if(e.target===gallery)closeDesktopViewer()});

  galleryStage.addEventListener('pointerdown',e=>{
    if(e.target.closest('.std-gallery-nav'))return;
    galleryDragStartX=e.clientX;
    galleryDragging=true;
    try{galleryStage.setPointerCapture(e.pointerId)}catch(_){}
  });
  galleryStage.addEventListener('pointerup',e=>{
    if(!galleryDragging)return;
    galleryDragging=false;
    const dx=e.clientX-galleryDragStartX;
    try{galleryStage.releasePointerCapture(e.pointerId)}catch(_){}
    if(Math.abs(dx)>55)moveDesktopGallery(dx<0?1:-1);
  });
  galleryStage.addEventListener('pointercancel',()=>{galleryDragging=false});

  document.addEventListener('keydown',e=>{if(bookOverlay.classList.contains('open')&&e.key==='Escape'){closeDesktopBooking();return}});
  document.addEventListener('keydown',e=>{
    if(gallery.classList.contains('open')){
      if(e.key==='Escape')closeDesktopViewer();
      else if(e.key==='ArrowLeft')moveDesktopGallery(-1);
      else if(e.key==='ArrowRight')moveDesktopGallery(1);
      return;
    }
    if(galleryBrowser.classList.contains('open')&&e.key==='Escape')closeDesktopGalleryBrowser();
  });
  document.addEventListener('keydown',e=>{
    const pv=document.getElementById('stdPriceViewer');
    if(!pv||!pv.classList.contains('open'))return;
    if(e.key==='Escape')closePriceViewer();
    if(e.key==='ArrowLeft')movePricePage(-1);
    if(e.key==='ArrowRight')movePricePage(1);
  });

  let pricePageIndex=0;
  const priceImage=document.getElementById('stdPriceImage');
  const priceCount=document.getElementById('stdPriceCount');
  const priceDots=document.getElementById('stdPriceDots');
  const priceViewer=document.getElementById('stdPriceViewer');
  const priceViewerImage=document.getElementById('stdPriceViewerImage');
  const priceViewerCount=document.getElementById('stdPriceViewerCount');
  const priceViewerStage=document.querySelector('.std-price-viewer-stage');
  let priceDragStartX=0;
  let priceDragging=false;

  function paintPricePages(){
    priceImage.src=PRICE_PAGES[pricePageIndex];
    priceImage.alt='Примеры работ Beauty Room, страница '+(pricePageIndex+1);
    priceCount.textContent=(pricePageIndex+1)+' / '+PRICE_PAGES.length;
    priceDots.innerHTML=PRICE_PAGES.map((_,i)=>'<button class="std-price-dot'+(i===pricePageIndex?' active':'')+'" type="button" data-price-dot="'+i+'" aria-label="Страница '+(i+1)+'"></button>').join('');
    priceDots.querySelectorAll('[data-price-dot]').forEach(btn=>btn.onclick=()=>{pricePageIndex=Number(btn.dataset.priceDot);paintPricePages();});
    if(priceViewer.classList.contains('open')){
      priceViewerImage.src=PRICE_PAGES[pricePageIndex];
      priceViewerCount.textContent=(pricePageIndex+1)+' / '+PRICE_PAGES.length;
    }
  }
  function movePricePage(step){
    pricePageIndex=(pricePageIndex+step+PRICE_PAGES.length)%PRICE_PAGES.length;
    paintPricePages();
  }
  function openPriceViewer(){
    priceViewerImage.src=PRICE_PAGES[pricePageIndex];
    priceViewerCount.textContent=(pricePageIndex+1)+' / '+PRICE_PAGES.length;
    priceViewer.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closePriceViewer(){
    priceViewer.classList.remove('open');
    document.body.style.overflow='';
  }
  document.getElementById('stdPricePrev').onclick=()=>movePricePage(-1);
  document.getElementById('stdPriceNext').onclick=()=>movePricePage(1);
  document.getElementById('stdPriceOpen').onclick=openPriceViewer;
  document.getElementById('stdPriceViewerClose').onclick=closePriceViewer;
  document.getElementById('stdPriceViewerPrev').onclick=()=>movePricePage(-1);
  document.getElementById('stdPriceViewerNext').onclick=()=>movePricePage(1);
  priceViewer.addEventListener('click',e=>{if(e.target===priceViewer)closePriceViewer();});
  priceViewerStage.addEventListener('pointerdown',e=>{
    if(e.target.closest('.std-price-viewer-nav'))return;
    priceDragStartX=e.clientX;
    priceDragging=true;
    try{priceViewerStage.setPointerCapture(e.pointerId)}catch(_){}
  });
  priceViewerStage.addEventListener('pointerup',e=>{
    if(!priceDragging)return;
    priceDragging=false;
    const dx=e.clientX-priceDragStartX;
    try{priceViewerStage.releasePointerCapture(e.pointerId)}catch(_){}
    if(Math.abs(dx)>55)movePricePage(dx<0?1:-1);
  });
  priceViewerStage.addEventListener('pointercancel',()=>{priceDragging=false});
  paintPricePages();

  let activeServiceCategory=SERVICE_CATEGORIES[0];
  let desktopServicesExpanded=false;
  const serviceTabs=document.getElementById('stdServiceTabs');
  const serviceList=document.getElementById('stdServiceList');
  const serviceMore=document.getElementById('stdServiceMore');
  const serviceMoreText=document.getElementById('stdServiceMoreText');
  const serviceMoreArrow=document.getElementById('stdServiceMoreArrow');
  const servicesCount=document.getElementById('stdServicesCount');

  function desktopServiceWord(n){
    const n10=n%10,n100=n%100;
    if(n10===1&&n100!==11)return 'услугу';
    if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';
    return 'услуг';
  }
  function desktopServiceRow(item){
    const title=item[0],price=item[1],detail=item[2],variants=item[3]||[],note=item[4];
    const variantsHtml=variants.length?'<div class="std-service-variants">'+variants.map(v=>'<div class="std-service-variant"><span>'+v[0]+'</span><b>'+v[1]+'</b></div>').join('')+'</div>':'';
    return '<div class="std-service-row"><div class="std-service-head"><div class="std-service-name">'+title+'</div>'+(price?'<div class="std-service-price">'+price+'</div>':'')+'</div>'+(detail?'<span class="std-service-detail">'+detail+'</span>':'')+variantsHtml+(note?'<span class="std-service-note">'+note+'</span>':'')+'</div>';
  }
  function renderDesktopServices(){
    serviceTabs.innerHTML=SERVICE_CATEGORIES.map(cat=>'<button class="std-service-tab'+(cat===activeServiceCategory?' active':'')+'" type="button" data-service-category="'+cat+'">'+cat+'</button>').join('');
    serviceTabs.querySelectorAll('[data-service-category]').forEach(btn=>btn.onclick=()=>{
      activeServiceCategory=btn.dataset.serviceCategory;
      desktopServicesExpanded=false;
      const mappedPricePage=SERVICE_PRICE_PAGE[activeServiceCategory];
      if(Number.isInteger(mappedPricePage)){
        pricePageIndex=mappedPricePage;
        paintPricePages();
      }
      renderDesktopServices();
    });
    const all=SERVICE_DATA[activeServiceCategory]||[];
    const shown=desktopServicesExpanded?all:all.slice(0,5);
    serviceList.innerHTML=shown.map(desktopServiceRow).join('');
    const remaining=Math.max(0,all.length-5);
    serviceMore.hidden=all.length<=5;
    serviceMoreText.textContent=desktopServicesExpanded?'Свернуть':('Показать ещё '+remaining+' '+desktopServiceWord(remaining));
    serviceMoreArrow.textContent=desktopServicesExpanded?'↑':'↓';
    const total=SERVICE_CATEGORIES.reduce((sum,cat)=>sum+(SERVICE_DATA[cat]?.length||0),0);
    servicesCount.textContent='Все категории · '+total+' позиций';
  }
  serviceMore.onclick=()=>{desktopServicesExpanded=!desktopServicesExpanded;renderDesktopServices();};
  renderDesktopServices();

  let tabsDragging=false,tabsStartX=0,tabsStartScroll=0;
  serviceTabs.addEventListener('pointerdown',e=>{
    if(e.target.closest('button'))return;
    tabsDragging=true;
    tabsStartX=e.clientX;
    tabsStartScroll=serviceTabs.scrollLeft;
    serviceTabs.classList.add('dragging');
    serviceTabs.setPointerCapture?.(e.pointerId);
  });
  serviceTabs.addEventListener('pointermove',e=>{
    if(!tabsDragging)return;
    serviceTabs.scrollLeft=tabsStartScroll-(e.clientX-tabsStartX);
  });
  const endTabsDrag=()=>{tabsDragging=false;serviceTabs.classList.remove('dragging');};
  serviceTabs.addEventListener('pointerup',endTabsDrag);
  serviceTabs.addEventListener('pointercancel',endTabsDrag);
  serviceTabs.addEventListener('wheel',e=>{
    if(Math.abs(e.deltaY)<=Math.abs(e.deltaX))return;
    const max=serviceTabs.scrollWidth-serviceTabs.clientWidth;
    if(max<=0)return;
    e.preventDefault();
    serviceTabs.scrollLeft+=e.deltaY;
  },{passive:false});

  const desktopReviewsViewport=document.getElementById('stdReviewsViewport');
  const desktopReviewsLoop=desktopReviewsViewport?.querySelector('.std-reviews-loop');
  const desktopReviewsFirstSet=desktopReviewsViewport?.querySelector('.std-reviews-set');
  if(desktopReviewsViewport&&desktopReviewsLoop&&desktopReviewsFirstSet){
    desktopReviewsLoop.style.setProperty('animation','none','important');
    desktopReviewsViewport.style.cursor='grab';
    let reviewCycle=0;
    let reviewX=0;
    let reviewLast=performance.now();
    let reviewDragging=false;
    let reviewMoved=false;
    let reviewStartX=0;
    let reviewStartOffset=0;
    let reviewPauseUntil=0;
    let reviewHoverPause=false;
    let reviewIgnoreHoverUntil=0;
    let reviewSuppressClick=false;

    function measureDesktopReviews(){
      reviewCycle=desktopReviewsFirstSet.getBoundingClientRect().width+16;
      if(reviewCycle>0){
        while(reviewX<=-reviewCycle)reviewX+=reviewCycle;
        while(reviewX>0)reviewX-=reviewCycle;
      }
    }
    function paintDesktopReviews(){
      desktopReviewsLoop.style.setProperty('transform','translate3d('+reviewX+'px,0,0)','important');
    }
    function desktopReviewsFrame(now){
      const dt=Math.min(50,now-reviewLast);
      reviewLast=now;
      const hoverBlocked=reviewHoverPause&&Date.now()>=reviewIgnoreHoverUntil;
      if(!reviewDragging&&Date.now()>=reviewPauseUntil&&!hoverBlocked&&reviewCycle>0){
        reviewX-=reviewCycle/105000*dt;
        if(reviewX<=-reviewCycle)reviewX+=reviewCycle;
        paintDesktopReviews();
      }
      requestAnimationFrame(desktopReviewsFrame);
    }
    measureDesktopReviews();
    paintDesktopReviews();
    requestAnimationFrame(desktopReviewsFrame);
    window.addEventListener('resize',()=>{measureDesktopReviews();paintDesktopReviews()},{passive:true});

    desktopReviewsViewport.addEventListener('pointerenter',()=>{
      if(Date.now()>=reviewIgnoreHoverUntil)reviewHoverPause=true;
    });
    desktopReviewsViewport.addEventListener('pointerleave',()=>{
      reviewHoverPause=false;
      reviewPauseUntil=Date.now()+900;
    });
    desktopReviewsViewport.addEventListener('pointerdown',e=>{
      reviewDragging=true;
      reviewMoved=false;
      reviewStartX=e.clientX;
      reviewStartOffset=reviewX;
      reviewHoverPause=false;
      reviewPauseUntil=Number.POSITIVE_INFINITY;
      desktopReviewsViewport.style.cursor='grabbing';
      try{desktopReviewsViewport.setPointerCapture(e.pointerId)}catch(_){}
    });
    desktopReviewsViewport.addEventListener('pointermove',e=>{
      if(!reviewDragging)return;
      const dx=e.clientX-reviewStartX;
      if(Math.abs(dx)>5)reviewMoved=true;
      reviewX=reviewStartOffset+dx;
      if(reviewCycle>0){
        while(reviewX<=-reviewCycle)reviewX+=reviewCycle;
        while(reviewX>0)reviewX-=reviewCycle;
      }
      paintDesktopReviews();
    });
    function finishDesktopReviewDrag(e){
      if(!reviewDragging)return;
      reviewDragging=false;
      reviewSuppressClick=reviewMoved;
      desktopReviewsViewport.style.cursor='grab';
      reviewPauseUntil=Date.now()+3200;
      reviewIgnoreHoverUntil=Date.now()+3200;
      reviewHoverPause=false;
      try{desktopReviewsViewport.releasePointerCapture(e.pointerId)}catch(_){}
    }
    desktopReviewsViewport.addEventListener('pointerup',finishDesktopReviewDrag);
    desktopReviewsViewport.addEventListener('pointercancel',finishDesktopReviewDrag);
    desktopReviewsViewport.addEventListener('click',e=>{
      if(reviewSuppressClick){
        e.preventDefault();
        e.stopPropagation();
        reviewSuppressClick=false;
      }
    },true);
    desktopReviewsViewport.addEventListener('wheel',e=>{
      const horizontal=Math.abs(e.deltaX)>Math.abs(e.deltaY);
      if(!horizontal&&!e.shiftKey)return;
      e.preventDefault();
      const delta=horizontal?e.deltaX:e.deltaY;
      reviewX-=delta;
      if(reviewCycle>0){
        while(reviewX<=-reviewCycle)reviewX+=reviewCycle;
        while(reviewX>0)reviewX-=reviewCycle;
      }
      paintDesktopReviews();
      reviewPauseUntil=Date.now()+2600;
      reviewIgnoreHoverUntil=Date.now()+2600;
      reviewHoverPause=false;
    },{passive:false});
  }

  // Desktop team keeps the same look, but gains the same horizontal drag behavior as mobile.
  const desktopTeamTrack=document.getElementById('stdTeamTrack');
  if(desktopTeamTrack){
    let teamDragging=false,teamMoved=false,teamStartX=0,teamStartScroll=0;
    desktopTeamTrack.style.cursor='grab';
    desktopTeamTrack.addEventListener('pointerdown',e=>{
      teamDragging=true;teamMoved=false;teamStartX=e.clientX;teamStartScroll=desktopTeamTrack.scrollLeft;
      desktopTeamTrack.style.cursor='grabbing';
      try{desktopTeamTrack.setPointerCapture(e.pointerId)}catch(_){}
    });
    desktopTeamTrack.addEventListener('pointermove',e=>{
      if(!teamDragging)return;
      const dx=e.clientX-teamStartX;
      if(Math.abs(dx)>5)teamMoved=true;
      desktopTeamTrack.scrollLeft=teamStartScroll-dx;
    });
    const endDesktopTeamDrag=e=>{
      if(!teamDragging)return;
      teamDragging=false;
      desktopTeamTrack.style.cursor='grab';
      try{desktopTeamTrack.releasePointerCapture(e.pointerId)}catch(_){}
    };
    desktopTeamTrack.addEventListener('pointerup',endDesktopTeamDrag);
    desktopTeamTrack.addEventListener('pointercancel',endDesktopTeamDrag);
  }

  function updateStatus(){
    const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Yerevan',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
    const hour=Number(parts.find(p=>p.type==='hour')?.value||0),minute=Number(parts.find(p=>p.type==='minute')?.value||0),mins=hour*60+minute,isOpen=mins>=540&&mins<1200;
    const main=document.getElementById('stdStatusMain'),sub=document.getElementById('stdStatusSub');
    if(main&&sub){main.textContent=isOpen?'Открыто':'Закрыто';sub.textContent=isOpen?'до 20:00':'до 09:00';main.style.color=isOpen?'#3f8750':'#a45e64'}
    const contactStatus=document.getElementById('stdContactStatus'),contactStatusText=document.getElementById('stdContactStatusText');
    if(contactStatus&&contactStatusText){contactStatusText.textContent=isOpen?'Открыто до 20:00':'Закрыто до 09:00';contactStatus.classList.toggle('open',isOpen)}
  }
  updateStatus();
  setInterval(updateStatus,60000);
})();