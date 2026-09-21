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
  const TEAM_MASTERS=[
    {id:'nails',name:'Nail-мастер',role:'Маникюр · педикюр',cats:['Маникюр'],work:['manicure_french_soft_pink_design_04.webp','manicure_burgundy_long_glitter_09.webp','manicure_nude_almond_02.webp']},
    {id:'hair',name:'Парикмахер',role:'Волосы · укладки',cats:['Волосы'],work:['hair_layered_brunette_02.webp','hair_blonde_layers_03.webp','hair_long_waves_05.webp']},
    {id:'cosmetology',name:'Косметолог',role:'Косметология',cats:['Косметология'],work:[]},
    {id:'brows',name:'Brow & Lash-мастер',role:'Брови · ресницы',cats:['Брови и ресницы'],work:[]}
  ];
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
        height:80px;
        width:100%;
        display:flex;
        align-items:center;
        position:relative;
        z-index:20;
        padding:0 100px;
        border-bottom:0;
        background:#f6f0ec;
      }
      .std-header-brand{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:242px;
        min-width:242px;
        color:#211d1a!important;
        text-decoration:none!important;
        line-height:1;
      }
      .std-header-brand-main{
        font:500 31px/.9 "Cormorant Garamond",Georgia,serif;
        letter-spacing:.075em;
        text-transform:uppercase;
      }
      .std-header-brand-sub{
        margin-top:8px;
        font:600 9px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.39em;
        text-transform:uppercase;
        color:#5f534d;
      }
      .std-nav{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        display:flex;
        align-items:center;
        gap:37px;
        white-space:nowrap;
      }
      .std-nav a{
        font-size:14px;
        font-weight:500;
        line-height:1;
        color:#211d1a!important;
        text-shadow:none;
        transition:opacity .18s ease;
      }
      .std-nav a:hover{opacity:.52}
      .std-header-right{
        margin-left:auto;
        display:flex;
        align-items:center;
        gap:25px;
        transform:translateX(38px);
      }
      .std-phone{
        margin-left:0;
        width:auto;
        height:44px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:11px;
        border-radius:0;
        background:transparent;
        color:#211d1a!important;
        box-shadow:none;
        font-size:16px;
        font-weight:500;
        letter-spacing:0;
        text-shadow:none;
        white-space:nowrap;
      }
      .std-phone svg{width:21px;height:21px;flex:0 0 21px}
      .std-header-book{
        height:47px;
        width:159px;
        min-width:159px;
        padding:0 22px;
        border:0;
        border-radius:999px;
        background:#9c7967;
        color:#fff!important;
        font:500 15px/1 "Manrope",Arial,sans-serif!important;
        box-shadow:none;
        transition:transform .18s ease,background .18s ease;
      }
      .std-header-book:hover{transform:translateY(-1px);background:#8f6d5c;box-shadow:0 10px 24px rgba(104,78,65,.20)}

      .std-hero{
        position:relative;
        display:grid;
        grid-template-columns:48.5% 51.5%;
        height:calc(100svh - 80px);
        min-height:760px;
        margin:0;
        background:#eae0d9;
        overflow:hidden;
      }
      .std-hero-copy{
        position:relative;
        min-width:0;
        display:flex;
        justify-content:center;
        align-items:flex-start;
        padding:0 48px;
        background:
          radial-gradient(620px 460px at 60% 58%,rgba(255,255,255,.20),transparent 72%),
          radial-gradient(380px 300px at 88% 2%,rgba(255,255,255,.22),transparent 72%),
          linear-gradient(120deg,#ebe1da 0%,#e7dcd4 58%,#eee6df 100%);
      }
      .std-hero-copy:before{
        content:'';
        position:absolute;
        left:-42px;
        bottom:-26px;
        width:230px;
        height:570px;
        opacity:.60;
        filter:blur(6px);
        transform:rotate(-7deg);
        background:
          radial-gradient(ellipse 34px 76px at 34% 13%,rgba(65,91,58,.88) 0 54%,transparent 58%),
          radial-gradient(ellipse 32px 70px at 69% 24%,rgba(77,104,67,.84) 0 54%,transparent 58%),
          radial-gradient(ellipse 36px 78px at 26% 39%,rgba(63,92,56,.80) 0 54%,transparent 58%),
          radial-gradient(ellipse 31px 72px at 72% 50%,rgba(78,108,69,.77) 0 54%,transparent 58%),
          radial-gradient(ellipse 37px 82px at 30% 65%,rgba(67,97,60,.72) 0 54%,transparent 58%),
          radial-gradient(ellipse 32px 74px at 69% 78%,rgba(76,105,66,.68) 0 54%,transparent 58%),
          linear-gradient(79deg,transparent 46%,rgba(69,90,62,.62) 47% 49%,transparent 50%);
        pointer-events:none;
      }
      .std-copy-inner{
        width:min(100%,470px);
        margin-top:110px;
        transform:none;
        text-align:center;
      }
      .std-hero-kicker{
        margin:0 0 34px;
        font:600 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.43em;
        text-transform:uppercase;
        color:#9b7768;
      }
      .std-logo{
        margin:0;
        font-family:"Cormorant Garamond",Georgia,serif;
        font-size:clamp(62px,5.1vw,82px);
        line-height:.84;
        font-weight:500;
        letter-spacing:.105em;
        text-indent:.105em;
        text-transform:uppercase;
        text-align:center;
        color:#211d1a;
        white-space:nowrap;
      }
      .std-logo-sub{
        margin:24px 0 37px;
        font-family:"Manrope",Arial,sans-serif;
        font-size:12px;
        line-height:1;
        font-weight:600;
        letter-spacing:.43em;
        text-indent:.43em;
        text-align:center;
        color:#4f443f;
        text-transform:uppercase;
        white-space:nowrap;
      }
      .std-tagline{
        margin:0 auto 38px;
        max-width:455px;
        font-family:"Manrope",Arial,sans-serif;
        font-size:24px;
        line-height:1.36;
        font-weight:400;
        letter-spacing:-.022em;
        color:#2d2724;
        text-align:center;
      }
      .std-meta{
        display:grid;
        grid-template-columns:1fr 1px 1.18fr;
        gap:24px;
        align-items:center;
        justify-content:center;
        margin-bottom:32px;
      }
      .std-meta-divider{width:1px;height:64px;background:rgba(75,61,54,.18)}
      .std-meta-item{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:14px;
        min-width:0;
      }
      .std-meta-icon{
        width:59px;
        height:59px;
        flex:0 0 59px;
        display:grid;
        place-items:center;
        border:1px solid rgba(75,61,54,.16);
        border-radius:50%;
        background:rgba(255,255,255,.12);
        color:#2b2623;
      }
      .std-meta-icon svg{width:25px;height:25px}
      .std-meta-text{
        min-width:0;
        font-size:15px;
        line-height:1.38;
        letter-spacing:-.02em;
        color:#4f4540;
        text-align:left;
      }
      .std-status-main{display:block;color:#a45e64;font-weight:500}
      .std-status-sub{display:block;color:#554b46}
      .std-address{display:block;color:#423a36}
      .std-actions{display:grid;gap:14px}
      .std-btn{
        width:100%;
        height:69px;
        border-radius:11px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:18px;
        font-size:17px;
        font-weight:500;
        border:1px solid rgba(126,95,79,.46);
        background:rgba(255,255,255,.08);
        color:#332c28!important;
        transition:transform .15s ease,box-shadow .15s ease,background .15s ease;
      }
      .std-btn:not(.std-btn-primary){color:#332c28!important}
      .std-sparkles{color:#8e6e5e!important}
      .std-btn:hover{transform:translateY(-1px);background:rgba(255,255,255,.34)}
      .std-btn:active{transform:translateY(0)}
      .std-btn-primary{
        position:relative;
        overflow:hidden;
        border-color:#9a7866;
        color:#fff!important;
        background:#9c7967;
        box-shadow:none;
      }
      .std-btn-primary:after{
        content:'';
        position:absolute;
        top:-35%;
        bottom:-35%;
        left:-34%;
        width:24%;
        pointer-events:none;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.30),transparent);
        transform:skewX(-22deg);
        animation:stdBookShine 4.2s ease-in-out infinite;
      }
      @keyframes stdBookShine{0%,68%{left:-34%}100%{left:132%}}
      @media(prefers-reduced-motion:reduce){.std-btn-primary:after{animation:none!important}}
      .std-btn-primary:hover{background:#8f6d5c;box-shadow:0 10px 26px rgba(104,78,65,.22)}
      .std-btn svg{width:24px;height:24px;flex:0 0 24px}
      .std-sparkles{width:25px;height:25px;position:relative;display:inline-grid;place-items:center;font-size:25px;line-height:1}
      .std-scroll-hint{
        position:absolute;
        right:-88px;
        bottom:30px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:8px;
        padding:10px 15px 8px;
        border-radius:999px;
        color:#65564e;
        background:rgba(237,228,221,.48);
        box-shadow:0 0 28px 22px rgba(237,228,221,.48);
        backdrop-filter:blur(5px);
        font:600 10px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.34em;
        text-transform:uppercase;
        z-index:6;
        animation:stdScrollHintFloat 2.8s ease-in-out infinite;
        will-change:transform;
      }
      .std-scroll-hint span{font-size:22px;line-height:1;letter-spacing:0;font-weight:300}
      @keyframes stdScrollHintFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(7px)}}
      @media(prefers-reduced-motion:reduce){.std-scroll-hint{animation:none!important}}
      .std-hero-photo{
        position:relative;
        min-width:0;
        height:100%;
        margin:0;
        overflow:hidden;
        background:#e7ddd4;
      }
      .std-hero-photo video,
      .std-hero-photo img{
        position:absolute;
        inset:0;
        width:100%;
        height:100%;
        object-fit:cover;
        object-position:center center;
        display:block;
        border:0;
        margin:0;
        padding:0;
        background:#e7ddd4;
      }
      .std-hero-photo video{pointer-events:none}
      .std-hero:after{
        content:'';
        position:absolute;
        z-index:5;
        left:0;
        right:0;
        bottom:0;
        height:86px;
        pointer-events:none;
        background:linear-gradient(180deg,rgba(239,231,224,0) 0%,rgba(239,231,224,.28) 45%,#f0e8e1 100%);
      }

      .std-portfolio{
        position:relative;
        overflow:hidden;
        min-height:auto;
        padding:46px 42px 46px;
        background:
          radial-gradient(620px 430px at -8% 96%,rgba(176,145,128,.10) 0%,transparent 70%),
          radial-gradient(620px 420px at 108% 2%,rgba(190,159,142,.08) 0%,transparent 70%),
          linear-gradient(180deg,#f0e8e1 0%,#f4ede7 34%,#f7f2ed 100%);
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
        background:radial-gradient(circle,rgba(169,132,112,.13) 0%,rgba(169,132,112,.07) 38%,rgba(169,132,112,.025) 62%,transparent 78%);
      }
      .std-portfolio:after{
        width:560px;
        height:420px;
        right:-210px;
        top:-165px;
        background:radial-gradient(circle,rgba(178,142,122,.12) 0%,rgba(178,142,122,.065) 38%,rgba(178,142,122,.022) 62%,transparent 78%);
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
        border:1px solid #d8c8bd;
        border-radius:13px;
        background:linear-gradient(180deg,#faf6f2 0%,#f1e7e0 100%);
        color:#2a2530;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:18px;
        font:500 18px/1 "Manrope",Arial,sans-serif;
        position:static;
        left:auto;
        box-shadow:0 8px 22px rgba(116,84,68,.07);
        transition:background .18s ease,transform .18s ease,box-shadow .18s ease;
      }
      .std-portfolio-more:hover{
        background:linear-gradient(180deg,#fcf8f5 0%,#f3e9e2 100%);
        transform:translateY(-1px);
        box-shadow:0 10px 26px rgba(116,84,68,.10);
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
        .std-header-brand{width:190px;min-width:190px}
        .std-header-brand-main{font-size:27px}
        .std-nav{gap:20px}
        .std-nav a{font-size:13px}
        .std-header-right{gap:12px;transform:translateX(12px)}
        .std-phone{width:auto;font-size:14px}
        .std-header-book{width:132px;min-width:132px;padding:0 18px}
        .std-hero{grid-template-columns:49% 51%}
        .std-hero-copy{padding-inline:28px}
        .std-copy-inner{width:min(100%,430px);margin-top:92px}
        .std-logo{font-size:58px;letter-spacing:.055em;white-space:nowrap}
        .std-logo-sub{font-size:11px;margin-left:0}
        .std-tagline{font-size:21px}
        .std-meta{gap:14px}
        .std-meta-icon{width:52px;height:52px;flex-basis:52px}
        .std-meta-text{font-size:14px}
        .std-scroll-hint{right:-68px}
      }
    }
  `;
  document.head.appendChild(css);
  /* Legacy reference override removed; final desktop sync layer is authoritative. */
  const bookCss=document.createElement('style');bookCss.id='esmeralda-desktop-book-style';bookCss.textContent="@media(min-width:768px){.std-book-overlay{position:fixed;inset:0;z-index:360;display:none;align-items:center;justify-content:center;padding:28px;background:rgba(18,16,15,.62);backdrop-filter:blur(8px)}.std-book-overlay.open{display:flex}.std-book-panel{position:relative;width:min(100%,560px);padding:34px;border-radius:22px;background:#f7f2eb;color:#211d1a;box-shadow:0 28px 90px rgba(0,0,0,.28);animation:stdEsBookIn .32s cubic-bezier(.16,1,.3,1)}@keyframes stdEsBookIn{from{opacity:0;transform:translateY(22px) scale(.985)}to{opacity:1;transform:none}}.std-book-close{position:absolute;right:18px;top:18px;width:42px;height:42px;border:1px solid rgba(61,49,43,.13);border-radius:50%;background:#fff;color:#221e1b;font-size:23px}.std-book-panel h3{margin:16px 52px 0 0;font:500 40px/.95 \"Cormorant Garamond\",Georgia,serif}.std-book-panel>p:not(.std-services-kicker){margin:13px 0 0;color:#756a63;font:400 13px/1.5 \"Manrope\",Arial,sans-serif}.std-book-options{display:grid;gap:9px;margin-top:24px}.std-book-options a{min-height:62px;padding:0 17px;border:1px solid rgba(61,49,43,.12);border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:space-between;color:#211d1a!important;font:600 13px/1 \"Manrope\",Arial,sans-serif}.std-book-options a span:last-child{color:#82766f;font-size:11px}}";document.head.appendChild(bookCss);
  const polishCss=document.createElement('style');
  polishCss.id='esmeralda-desktop-mobile-language-v1';
  polishCss.textContent="\n@media(min-width:768px){\n  #esmeralda-desktop-v1{\n    --br-bg:#f8f4ee;\n    --br-section:#f7f2eb;\n    --br-warm:#e9e2da;\n    --br-team:#f6f1e9;\n    --br-ink:#171513;\n    --br-soft:#746c66;\n    --br-line:rgba(62,51,44,.12);\n    --br-taupe:#8f7167;\n    background:var(--br-bg)!important;\n    color:var(--br-ink)!important;\n  }\n\n  /* Hero scale and alignment. */\n  .std-copy-inner{width:min(100%,560px)!important}\n  .std-logo{max-width:100%!important;font-size:clamp(54px,4.15vw,70px)!important;letter-spacing:.055em!important;white-space:nowrap!important}\n  .std-hero-kicker{font-size:14px!important;letter-spacing:.40em!important;margin-bottom:31px!important}\n  .std-logo-sub{font-size:14px!important;letter-spacing:.40em!important;margin-top:20px!important}\n  .std-tagline{font-size:26px!important;max-width:510px!important}\n  .std-meta{width:100%!important;grid-template-columns:1fr 1px 1.18fr!important;margin-top:2px!important;margin-bottom:34px!important}\n  .std-meta-icon{width:68px!important;height:68px!important;flex-basis:68px!important}\n  .std-meta-icon svg{width:29px!important;height:29px!important}\n  .std-meta-text{font-size:17px!important;line-height:1.42!important}\n  .std-actions{width:100%!important;gap:15px!important}\n  .std-btn{height:74px!important;font-size:18px!important;border-radius:10px!important}\n  .std-phone{font-size:19px!important}\n  .std-header-book{width:174px!important;min-width:174px!important;height:50px!important;font-size:17px!important}\n  .std-hero-copy:before{\n    left:0!important;\n    bottom:0!important;\n    width:190px!important;\n    height:545px!important;\n    opacity:.92!important;\n    filter:none!important;\n    transform:none!important;\n    background-image:url('desktop-hero-reference.webp')!important;\n    background-repeat:no-repeat!important;\n    background-size:1648px auto!important;\n    background-position:left bottom!important;\n    -webkit-mask-image:linear-gradient(90deg,#000 0%,#000 58%,transparent 100%)!important;\n    mask-image:linear-gradient(90deg,#000 0%,#000 58%,transparent 100%)!important;\n    pointer-events:none!important;\n  }\n\n  /* Portfolio moves down ~0.5 cm and blends into hero. */\n  .std-portfolio{padding-top:65px!important;background:linear-gradient(180deg,#f0e8e1 0%,#f4ede7 24%,#f7f2eb 100%)!important}\n  .std-portfolio-kicker{color:#746c66!important}\n  .std-portfolio-title{color:#171513!important}\n  .std-portfolio-copy{color:#746c66!important}\n\n  /* Gallery — same light palette, larger title/tabs. */\n  .std-gallery-browser{background:#f7f2eb!important;color:#171513!important}\n  .std-gallery-browser-shell{background:#f7f2eb!important}\n  .std-gallery-browser-title strong{font-size:31px!important;color:#171513!important}\n  .std-gallery-browser-title span{color:#746c66!important}\n  .std-gallery-browser-back{color:#171513!important;border-color:rgba(62,51,44,.16)!important;background:rgba(255,255,255,.34)!important}\n  .std-gallery-browser-tab{\n    height:44px!important;\n    padding:0 20px!important;\n    border-color:rgba(62,51,44,.16)!important;\n    background:rgba(255,255,255,.20)!important;\n    color:#655d57!important;\n    font-size:12.7px!important;\n  }\n  .std-gallery-browser-tab.active{background:#171513!important;border-color:#171513!important;color:#fff!important}\n\n  /* Services — structure copied from Shablon-Hair-Master desktop system. */\n  .std-services{\n    min-height:0!important;\n    padding:96px 0 104px!important;\n    background:\n      radial-gradient(circle at 9% 4%,rgba(204,171,158,.15),transparent 29%),\n      radial-gradient(circle at 92% 83%,rgba(218,195,184,.12),transparent 31%),\n      #f8f4ef!important;\n    color:#171513!important;\n  }\n  .std-services-inner{width:min(calc(100% - 96px),1400px)!important;margin:0 auto!important;display:block!important}\n  .std-services-head-ref{display:grid!important;grid-template-columns:minmax(360px,.95fr) minmax(360px,1.05fr)!important;align-items:end!important;column-gap:clamp(54px,7vw,110px)!important}\n  .std-services-kicker{margin:0!important;color:#9b7d72!important;font-size:12px!important;font-weight:600!important;letter-spacing:.24em!important;text-transform:uppercase!important}\n  .std-services-title{margin:12px 0 0!important;color:#171513!important;font:500 clamp(64px,5.6vw,82px)/.90 \"Cormorant Garamond\",Georgia,serif!important;letter-spacing:-.045em!important}\n  .std-services-intro{max-width:540px!important;margin:0 0 7px!important;color:#625b57!important;font-size:14px!important;line-height:1.7!important}\n  .std-price-legacy{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;clip-path:inset(50%)!important}\n  .std-services-right{width:100%!important}\n  .std-service-tabs{\n    width:100%!important;\n    max-width:none!important;\n    margin-top:38px!important;\n    padding:5px!important;\n    display:flex!important;\n    gap:5px!important;\n    overflow-x:auto!important;\n    border:1px solid rgba(83,63,55,.09)!important;\n    border-radius:17px!important;\n    background:rgba(229,216,208,.58)!important;\n    box-shadow:inset 0 1px 0 rgba(255,255,255,.62)!important;\n    scrollbar-width:none!important;\n  }\n  .std-service-tabs::-webkit-scrollbar{display:none!important}\n  .std-service-tab{\n    flex:1 0 auto!important;\n    min-height:50px!important;\n    padding:0 18px!important;\n    border:1px solid transparent!important;\n    border-radius:13px!important;\n    background:transparent!important;\n    color:#655d57!important;\n    font-size:12px!important;\n    font-weight:600!important;\n    transition:transform 180ms ease,border-color 180ms ease,box-shadow 180ms ease,background 180ms ease!important;\n  }\n  .std-service-tab:hover{background:rgba(237,226,219,.76)!important;transform:translateY(-2px)!important}\n  .std-service-tab.active{background:#171513!important;color:#fff!important;border-color:#171513!important;box-shadow:0 12px 24px rgba(50,39,33,.12)!important}\n  .std-service-list{display:block!important;width:100%!important;margin-top:30px!important;border:0!important}\n  .std-service-category-ref + .std-service-category-ref{margin-top:38px!important}\n  .std-service-category-heading-ref{display:flex!important;min-height:30px!important;align-items:center!important;gap:12px!important;margin:0 0 14px!important;color:#705a52!important;font-size:13px!important;font-weight:600!important;letter-spacing:.12em!important;text-transform:uppercase!important}\n  .std-service-category-heading-ref:before{width:34px!important;height:1px!important;flex:0 0 34px!important;background:rgba(104,79,70,.28)!important;content:\"\"!important}\n  .std-service-category-heading-ref i{height:1px!important;flex:1 1 auto!important;background:linear-gradient(90deg,rgba(104,79,70,.18),transparent)!important}\n  .std-service-grid-ref{position:relative!important;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:16px 38px!important}\n  .std-service-grid-ref:after{position:absolute!important;top:0!important;bottom:0!important;left:50%!important;width:1px!important;background:linear-gradient(180deg,transparent,rgba(100,77,68,.14) 8%,rgba(100,77,68,.14) 92%,transparent)!important;content:\"\"!important;transform:translateX(-.5px)!important;pointer-events:none!important}\n  .std-service-card-ref{\n    position:relative!important;\n    display:flex!important;\n    width:100%!important;\n    min-height:154px!important;\n    flex-direction:column!important;\n    align-items:stretch!important;\n    padding:24px 76px 22px 24px!important;\n    overflow:hidden!important;\n    border:1px solid rgba(79,60,53,.105)!important;\n    border-radius:22px!important;\n    background:rgba(255,253,250,.80)!important;\n    box-shadow:0 10px 26px rgba(68,50,43,.05)!important;\n    color:#171513!important;\n    text-align:left!important;\n    transition:transform 200ms ease,border-color 200ms ease,box-shadow 200ms ease,background 200ms ease!important;\n  }\n  .std-service-card-ref:after{position:absolute!important;top:22px!important;right:20px!important;display:grid!important;width:42px!important;height:42px!important;place-items:center!important;border:1px solid rgba(112,81,71,.16)!important;border-radius:50%!important;background:#eee3dd!important;color:#6d514a!important;content:\"↗\"!important;font:500 16px/1 \"Manrope\",Arial,sans-serif!important}\n  .std-service-card-ref:hover{border-color:rgba(117,82,72,.22)!important;background:#fffdf9!important;box-shadow:0 16px 35px rgba(68,50,43,.085)!important;transform:translateY(-3px)!important}\n  .std-service-card-ref:hover:after{background:#171513!important;color:#fff!important}\n  .std-service-card-title-ref{max-width:100%!important;color:#2d2825!important;font:500 clamp(23px,1.65vw,28px)/1.08 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-service-card-detail-ref{margin-top:10px!important;color:#716964!important;font-size:11.5px!important;line-height:1.5!important}\n  .std-service-card-bottom-ref{display:flex!important;align-items:end!important;justify-content:space-between!important;gap:14px!important;margin-top:auto!important;padding-top:22px!important}\n  .std-service-card-bottom-ref span{display:inline-flex!important;min-height:27px!important;align-items:center!important;padding:0 10px!important;border-radius:999px!important;background:#f0e7e1!important;color:#81736b!important;font-size:9.5px!important;font-weight:600!important}\n  .std-service-card-bottom-ref b{color:#332d2a!important;font:600 18px/1 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-service-more{width:min(100%,390px)!important;height:56px!important;margin:32px auto 0!important;border:1px solid #bbaea5!important;border-radius:10px!important;background:rgba(255,255,255,.26)!important;color:#342f2b!important}\n  .std-services-count{text-align:center!important;color:#8a7f78!important;font-size:10px!important;margin-top:14px!important}\n\n  /* About — wider, calmer, no cramped blocks. */\n  .std-about{padding:96px 70px 104px!important;background:#f8f4ee!important;color:#171513!important}\n  .std-about-inner{width:min(100%,1360px)!important;margin:0 auto!important}\n  .std-about-kicker{color:#9b7d72!important;font-size:12px!important;letter-spacing:.24em!important}\n  .std-about-grid{display:grid!important;grid-template-columns:1.05fr .95fr!important;gap:70px!important;align-items:center!important;margin-top:28px!important}\n  .std-about-copy{padding:20px 0!important}\n  .std-about-lead{max-width:720px!important;font-size:clamp(55px,4.6vw,72px)!important;line-height:.98!important;color:#171513!important}\n  .std-about-text{max-width:690px!important;margin-top:30px!important;color:#625b57!important;font-size:17px!important;line-height:1.65!important}\n  .std-about-facts{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:12px!important;margin-top:36px!important}\n  .std-about-fact{min-height:92px!important;padding:18px!important;border:1px solid rgba(63,50,44,.10)!important;border-radius:15px!important;background:rgba(255,255,255,.28)!important;display:flex!important;flex-direction:column!important;align-items:flex-start!important;justify-content:center!important;text-align:left!important;color:#171513!important}\n  .std-about-fact strong{font:500 18px/1.05 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-about-fact span{margin-top:7px!important;color:#81766f!important;font-size:10px!important}\n  .std-about-visual{min-height:520px!important;border-radius:28px!important;overflow:hidden!important;box-shadow:0 24px 60px rgba(67,50,43,.10)!important}\n  .std-about-visual img{width:100%!important;height:100%!important;object-fit:cover!important}\n  .std-about-rating{left:24px!important;bottom:24px!important;background:rgba(248,244,238,.92)!important;color:#171513!important}\n\n  /* Team — same light mobile language, four balanced cards. */\n  #esmeraldaDesktopTeam.std-team{min-height:0!important;padding:88px 70px 92px!important;background:#f6f1e9!important;color:#171513!important}\n  #esmeraldaDesktopTeam .std-team-inner{width:min(100%,1360px)!important}\n  #esmeraldaDesktopTeam .std-team-kicker{color:#9b7d72!important;font-size:12px!important}\n  #esmeraldaDesktopTeam .std-team-title{margin-top:14px!important;color:#171513!important;font-size:64px!important;line-height:.93!important}\n  #esmeraldaDesktopTeam .std-team-subtitle{margin-top:14px!important;color:#746c66!important;font-size:14px!important}\n  #esmeraldaDesktopTeam .std-team-track{display:grid!important;width:100%!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:30px!important;margin-top:46px!important;overflow:visible!important;padding:0!important}\n  #esmeraldaDesktopTeam .std-master{position:relative!important;display:block!important;width:100%!important;min-width:0!important;padding:0 8px 18px!important;border:0!important;background:none!important;color:#171513!important;text-align:center!important;cursor:pointer!important}\n  #esmeraldaDesktopTeam .std-master-arrow{position:absolute!important;top:7px!important;right:12px!important;z-index:2!important;width:36px!important;height:36px!important;border:1px solid rgba(62,51,44,.12)!important;border-radius:50%!important;background:rgba(255,255,255,.48)!important;display:grid!important;place-items:center!important;color:#75675f!important;font-size:14px!important}\n  #esmeraldaDesktopTeam .std-master-avatar{width:min(100%,190px)!important;height:auto!important;aspect-ratio:1/1!important;margin:0 auto!important;border:0!important;border-radius:50%!important;background:linear-gradient(145deg,#e9e3dc,#d7cec6)!important;color:#9b9088!important;box-shadow:none!important;transition:transform .22s ease!important}\n  #esmeraldaDesktopTeam .std-master:hover .std-master-avatar{transform:translateY(-4px)!important}\n  #esmeraldaDesktopTeam .std-master-avatar svg{width:64px!important;height:64px!important}\n  #esmeraldaDesktopTeam .std-master-name{margin-top:18px!important;color:#171513!important;font-size:29px!important}\n  #esmeraldaDesktopTeam .std-master-role{margin-top:7px!important;color:#827871!important;font-size:11px!important}\n\n  /* Reviews — same warm mobile block color. */\n  #esmeraldaDesktopReviews.std-reviews{\n    height:auto!important;\n    min-height:760px!important;\n    padding:78px 0 62px!important;\n    background:#e9e2da!important;\n    color:#171513!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-kicker{color:#746c66!important}\n  #esmeraldaDesktopReviews .std-reviews-title{color:#171513!important}\n  #esmeraldaDesktopReviews .std-reviews-score>strong{color:#171513!important}\n  #esmeraldaDesktopReviews .std-reviews-count{color:#716862!important}\n  #esmeraldaDesktopReviews .std-review-card{border-color:rgba(66,55,49,.15)!important;border-radius:14px!important;background:rgba(255,255,255,.34)!important}\n  #esmeraldaDesktopReviews .std-review-avatar{background:#d7cec6!important;border-color:rgba(66,55,49,.10)!important;color:#514943!important}\n  #esmeraldaDesktopReviews .std-review-name{color:#2a2522!important}\n  #esmeraldaDesktopReviews .std-review-text{color:#4f4843!important}\n  #esmeraldaDesktopReviews .std-reviews-all{border-color:rgba(66,55,49,.18)!important;background:rgba(255,255,255,.18)!important;color:#2f2a26!important}\n\n  /* Contacts follow the mobile light section; TANEM badge stays dark. */\n  .std-contact{padding:74px 70px 54px!important;background:#f7f2eb!important;color:#171513!important}\n  .std-contact-inner{width:min(100%,1360px)!important;grid-template-columns:520px minmax(0,1fr)!important;gap:42px!important}\n  .std-contact-kicker{color:#9b7d72!important}\n  .std-contact-title{color:#171513!important}\n  .std-contact-card{border-color:rgba(63,50,44,.12)!important;background:rgba(255,255,255,.55)!important;color:#1e1a17!important}\n  .std-contact-card:hover{border-color:rgba(63,50,44,.22)!important;background:rgba(255,255,255,.76)!important}\n  .std-contact-card-title{color:#171513!important}\n  .std-contact-card-sub{color:#81766f!important}\n  .std-contact-card-icon{color:#8d7e74!important}\n  .std-contact-map{border:1px solid rgba(63,50,44,.12)!important;border-radius:24px!important;overflow:hidden!important;background:#eee!important}\n  .std-contact-status{border-color:#b8b0aa!important;background:#fff0df!important;color:#a46020!important}\n  .std-contact-status.open{background:#e7f4e6!important;color:#3a7440!important}\n  .std-contact-bottom{margin-top:34px!important;display:flex!important;justify-content:center!important}\n  .std-contact-brand{min-width:280px!important;min-height:58px!important;padding:0 22px!important;border-radius:16px!important;background:#171513!important;color:#fff!important;box-shadow:0 14px 34px rgba(23,21,19,.16)!important}\n  .std-contact-brand-mark{background:#8f7167!important;color:#fff!important}\n  .std-contact-brand-text{color:#f4eee8!important}\n\n  /* Separate master page, desktop version of mobile overlay. */\n  .std-master-overlay{position:fixed!important;z-index:390!important;inset:0!important;display:block!important;overflow:auto!important;background:#f8f4ee!important;color:#171513!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;transition:opacity .34s ease,visibility 0s linear .42s!important}\n  .std-master-overlay.open{visibility:visible!important;opacity:1!important;pointer-events:auto!important;transition-delay:0s!important}\n  .std-master-page-panel{width:min(100%,1120px)!important;min-height:100vh!important;margin:0 auto!important;padding:24px 48px 120px!important;transform:translateY(28px)!important;transition:transform .46s cubic-bezier(.16,1,.3,1)!important}\n  .std-master-overlay.open .std-master-page-panel{transform:none!important}\n  .std-master-page-top{display:grid!important;grid-template-columns:48px 1fr 48px!important;align-items:center!important;text-align:center!important}\n  .std-master-page-top span{font-size:14px!important;font-weight:600!important;letter-spacing:.28em!important}\n  .std-master-page-top i{width:48px!important;height:48px!important}\n  .std-master-page-close{width:48px!important;height:48px!important;border:1px solid rgba(63,50,44,.12)!important;border-radius:50%!important;background:rgba(255,255,255,.45)!important;font-size:27px!important}\n  .std-master-profile{text-align:center!important;margin-top:28px!important}\n  .std-master-profile .std-master-avatar{width:158px!important;height:158px!important;margin:0 auto!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:linear-gradient(145deg,#e9e3dc,#d7cec6)!important;color:#9b9088!important}\n  .std-master-profile .std-master-avatar svg{width:72px!important;height:72px!important}\n  .std-master-profile h2{margin:18px 0 0!important;font:500 54px/.95 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-master-profile p{margin:8px 0 0!important;color:#837970!important;font-size:14px!important}\n  .std-master-profile-rating{margin-top:10px!important;font-size:12px!important;font-weight:600!important}.std-master-profile-rating b{color:#b78d4f!important}\n  .std-master-page-grid{display:grid!important;grid-template-columns:1.1fr .9fr!important;gap:34px!important;margin-top:38px!important}\n  .std-master-page-block{padding:26px!important;border:1px solid rgba(63,50,44,.10)!important;border-radius:20px!important;background:rgba(255,255,255,.38)!important}\n  .std-master-page-block h3{margin:0 0 16px!important;font:500 31px/1 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-master-page-service{display:flex!important;justify-content:space-between!important;gap:18px!important;padding:14px 0!important;border-bottom:1px solid rgba(63,50,44,.10)!important}\n  .std-master-page-service:last-child{border-bottom:0!important}.std-master-page-service strong{font-size:13px!important}.std-master-page-service span{color:#81766f!important;font-size:11px!important}\n  .std-master-page-works{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:9px!important}.std-master-page-works img{width:100%!important;aspect-ratio:1.25/1!important;object-fit:cover!important;border-radius:12px!important}\n  .std-master-page-empty{color:#81766f!important;font-size:12px!important;line-height:1.55!important}\n  .std-master-page-book{position:fixed!important;z-index:395!important;left:50%!important;bottom:22px!important;width:min(620px,calc(100% - 64px))!important;height:58px!important;transform:translateX(-50%)!important;border:0!important;border-radius:14px!important;background:#171513!important;color:#fff!important;font-size:14px!important;font-weight:600!important;box-shadow:0 16px 38px rgba(23,21,19,.18)!important}\n}\n";
  document.head.appendChild(polishCss);

  const desktopSyncCss=document.createElement('style');
  desktopSyncCss.id='esmeralda-desktop-mobile-sync-v3';
  desktopSyncCss.textContent="\n@media(min-width:768px){\n  #esmeralda-desktop-v1{\n    --br-bg:#f8f4ee;--br-light:#f7f2eb;--br-warm:#e9e2da;--br-dark:#2f2926;\n    --br-ink:#171513;--br-soft:#746c66;--br-taupe:#8b7167;--br-line:rgba(62,51,44,.12);\n    background:var(--br-bg)!important;color:var(--br-ink)!important\n  }\n  .std-portfolio-title,.std-services-title,.std-about-title,#esmeraldaDesktopTeam .std-team-title,\n  #esmeraldaDesktopReviews .std-reviews-title,.std-contact-title{\n    margin-top:14px!important;font:500 clamp(54px,4.35vw,68px)/.94 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:-.035em!important\n  }\n  .std-portfolio-kicker,.std-services-kicker,.std-about-kicker,#esmeraldaDesktopTeam .std-team-kicker,\n  #esmeraldaDesktopReviews .std-reviews-kicker,.std-contact-kicker{\n    font:600 12px/1 \"Manrope\",Arial,sans-serif!important;letter-spacing:.26em!important;text-transform:uppercase!important\n  }\n\n  .std-header{background:#f8f4ee!important;border-bottom:1px solid rgba(62,51,44,.06)!important}\n  .std-header-right{gap:17px!important}\n  .std-lang-switch{height:42px;display:flex;align-items:center;gap:4px;padding:0 4px}\n  .std-lang-switch button{min-width:28px;height:34px;padding:0 3px;border:0;background:transparent;color:#8b817b;\n    font:600 11px/1 \"Manrope\",Arial,sans-serif!important;letter-spacing:.04em}\n  .std-lang-switch button.active{color:#171513!important}.std-lang-switch .sep{color:#c7bbb3;font-size:10px;pointer-events:none}\n\n  .std-copy-inner{width:min(100%,560px)!important;transform:translateY(38px)!important}\n  .std-hero-kicker{font-size:14px!important;letter-spacing:.40em!important;margin-bottom:31px!important}\n  .std-logo{max-width:100%!important;font-size:clamp(54px,4.15vw,70px)!important;letter-spacing:.055em!important;white-space:nowrap!important}\n  .std-logo-sub{font-size:14px!important;letter-spacing:.40em!important;margin-top:20px!important}\n  .std-tagline{font-size:25px!important;line-height:1.38!important;max-width:500px!important}\n  .std-meta-text{font-size:16px!important;line-height:1.42!important}\n  .std-actions{gap:12px!important}.std-btn{height:66px!important;font-size:16px!important;border-radius:8px!important}\n  .std-scroll-hint{right:-88px!important;color:#fff!important;background:rgba(50,42,38,.78)!important;\n    border:1px solid rgba(255,255,255,.13)!important;box-shadow:0 12px 34px rgba(36,29,26,.20)!important;backdrop-filter:blur(7px)!important}\n  .std-scroll-hint span{color:#fff!important}\n\n  .std-portfolio{padding:82px 42px 78px!important;background:#f7f2eb!important;color:#171513!important}\n  .std-portfolio-inner{width:min(calc(100% - 24px),1400px)!important}\n  .std-portfolio-kicker{color:#746c66!important}.std-portfolio-title{color:#171513!important}\n  .std-portfolio-copy{margin-top:17px!important;color:#746c66!important;font-size:15px!important;line-height:1.55!important}\n  .std-portfolio-more{width:min(100%,520px)!important;height:56px!important;margin:34px auto 0!important;\n    border:1px solid rgba(64,52,46,.18)!important;border-radius:10px!important;background:transparent!important;color:#1a1715!important;\n    box-shadow:none!important;font:500 14px/1 \"Manrope\",Arial,sans-serif!important;gap:12px!important}\n  .std-portfolio-more:hover{background:rgba(255,255,255,.32)!important;box-shadow:none!important;transform:translateY(-1px)!important}\n\n  .std-gallery-browser{background:#f7f2eb!important;color:#171513!important}\n  .std-gallery-browser-shell{width:min(100%,1320px)!important;padding:32px 42px 60px!important;background:#f7f2eb!important}\n  .std-gallery-browser-back{width:46px!important;height:46px!important;border:0!important;border-radius:0!important;background:transparent!important;\n    box-shadow:none!important;color:#171513!important;font:300 36px/1 Arial,sans-serif!important}\n  .std-gallery-browser-title strong{font:500 clamp(54px,4vw,64px)/.9 \"Cormorant Garamond\",Georgia,serif!important;color:#171513!important}\n  .std-gallery-browser-title span{margin-top:9px!important;color:#746c66!important;font-size:11px!important}\n  .std-gallery-browser-tab{height:43px!important;padding:0 18px!important;border-color:rgba(55,44,39,.12)!important;background:transparent!important;color:#6f655f!important}\n  .std-gallery-browser-tab.active{background:#171513!important;border-color:#171513!important;color:#fff!important}\n  .std-gallery-browser-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:9px!important;margin-top:20px!important}\n  .std-gallery-browser-tile{aspect-ratio:1/1!important;border-radius:11px!important}\n\n  .std-gallery{padding:22px!important;background:rgba(27,20,20,.90)!important;backdrop-filter:blur(9px)!important}\n  .std-gallery-stage{width:min(calc(100vw - 130px),980px)!important;height:min(78dvh,760px)!important;max-height:none!important;touch-action:none!important;overflow:visible!important}\n  .std-gallery-canvas{position:absolute;inset:0;overflow:hidden;border-radius:14px;background:#151312;box-shadow:0 18px 54px rgba(0,0,0,.28);touch-action:none}\n  .std-gallery-image{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;\n    object-fit:contain!important;border-radius:0!important;box-shadow:none!important;transform:translate3d(0,0,0) scale(1);transform-origin:center;will-change:transform}\n  .std-gallery-hint{position:absolute;top:-35px;left:0;color:rgba(255,255,255,.66);font:400 10px/1 \"Manrope\",Arial,sans-serif}\n  .std-gallery-nav{width:34px!important;height:54px!important;border:0!important;background:transparent!important;font-size:39px!important}\n  .std-gallery-prev{left:-48px!important}.std-gallery-next{right:-48px!important}\n  .std-gallery-count{bottom:-32px!important;font-size:10px!important;color:#fff!important}\n  .std-view-gallery{position:absolute;left:50%;bottom:-54px;transform:translateX(-50%);height:42px;padding:0 18px;\n    border:1px solid rgba(255,255,255,.34);border-radius:999px;background:rgba(22,18,16,.74);backdrop-filter:blur(12px);\n    color:#fff!important;font:600 11px/1 \"Manrope\",Arial,sans-serif!important;white-space:nowrap}\n  .std-gallery:not([data-source=\"portfolio\"]) .std-view-gallery{display:none!important}\n\n  .std-services{min-height:0!important;padding:88px 0 94px!important;background:#2f2926!important;color:#f7f3f0!important}\n  .std-services-inner{width:min(calc(100% - 96px),1360px)!important;margin:0 auto!important;display:block!important}\n  .std-services-head-ref{display:grid!important;grid-template-columns:minmax(340px,.88fr) minmax(360px,1.12fr)!important;align-items:end!important;gap:68px!important}\n  .std-services-kicker{color:#b8ada7!important}.std-services-title{color:#f7f3f0!important}\n  .std-services-intro{max-width:570px!important;margin:0 0 5px!important;color:#b9ada7!important;font-size:15px!important;line-height:1.65!important}\n  .std-price-legacy{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip-path:inset(50%)!important}\n  .std-service-tabs{width:100%!important;margin:34px 0 0!important;padding:0 0 8px!important;display:flex!important;gap:8px!important;\n    overflow-x:auto!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;\n    -webkit-mask-image:none!important;mask-image:none!important}\n  .std-service-tab{flex:0 0 auto!important;min-height:38px!important;padding:0 16px!important;border:1px solid rgba(255,255,255,.18)!important;\n    border-radius:999px!important;background:transparent!important;color:#cfc5bf!important;font-size:11px!important;font-weight:500!important}\n  .std-service-tab:hover{transform:translateY(-2px)!important;background:rgba(255,255,255,.06)!important}\n  .std-service-tab.active{background:#8b7167!important;border-color:#8b7167!important;color:#fff!important;box-shadow:none!important}\n  .std-service-list{display:block!important;width:100%!important;margin-top:24px!important;border:0!important}\n  .std-service-grid-ref{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}\n  .std-service-grid-ref:after{display:none!important}\n  .std-service-card-ref{position:relative!important;display:flex!important;min-height:142px!important;flex-direction:column!important;\n    padding:23px 68px 20px 23px!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:17px!important;\n    background:rgba(255,255,255,.045)!important;box-shadow:none!important;color:#f7f3f0!important;text-align:left!important}\n  .std-service-card-ref:after{position:absolute!important;top:20px!important;right:18px!important;display:grid!important;width:38px!important;height:38px!important;\n    place-items:center!important;border:1px solid rgba(255,255,255,.16)!important;border-radius:50%!important;background:rgba(255,255,255,.06)!important;\n    color:#d8b7aa!important;content:\"↗\"!important;font:500 15px/1 \"Manrope\",Arial,sans-serif!important}\n  .std-service-card-ref:hover{transform:translateY(-3px)!important;border-color:rgba(255,255,255,.22)!important;background:rgba(255,255,255,.07)!important;box-shadow:none!important}\n  .std-service-card-title-ref{color:#f7f3f0!important;font:500 clamp(23px,1.55vw,27px)/1.08 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-service-card-detail-ref{margin-top:9px!important;color:#b9ada7!important;font-size:11px!important;line-height:1.5!important}\n  .std-service-card-bottom-ref{display:flex!important;align-items:end!important;justify-content:space-between!important;gap:12px!important;margin-top:auto!important;padding-top:20px!important}\n  .std-service-card-bottom-ref span{display:inline-flex!important;min-height:25px!important;align-items:center!important;padding:0 9px!important;border-radius:999px!important;background:rgba(255,255,255,.07)!important;color:#c9bdb6!important;font-size:9px!important}\n  .std-service-card-bottom-ref b{color:#f7f3f0!important;font:500 17px/1 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-service-all-grid{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:50px}\n  .std-service-all-grid:after{content:\"\";position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,.13);transform:translateX(-.5px)}\n  .std-service-all-row{min-height:92px;padding:20px 5px;border:0;border-bottom:1px solid rgba(255,255,255,.14);background:transparent;\n    color:#f7f3f0!important;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px;align-items:center;text-align:left}\n  .std-service-all-title{display:block;color:#f7f3f0;font:500 24px/1.08 \"Cormorant Garamond\",Georgia,serif}\n  .std-service-all-cat{display:block;margin-top:7px;color:#a99e98;font:500 9.5px/1 \"Manrope\",Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}\n  .std-service-all-action{color:#d8b7aa;font:500 11px/1 \"Manrope\",Arial,sans-serif;white-space:nowrap}\n  .std-service-more{width:min(100%,390px)!important;height:52px!important;margin:28px auto 0!important;border:1px solid rgba(255,255,255,.22)!important;\n    border-radius:8px!important;background:rgba(255,255,255,.06)!important;color:#f4eeea!important}\n  .std-service-more[hidden]{display:none!important}.std-services-count{margin-top:13px!important;text-align:center!important;color:#938984!important;font-size:10px!important}\n\n  .std-about{min-height:0!important;padding:88px 70px 96px!important;background:#f7f2eb!important;color:#171513!important}\n  .std-about-inner{width:min(100%,1360px)!important;margin:0 auto!important}.std-about-kicker{color:#88786e!important}.std-about-title{color:#171513!important}\n  .std-about-grid{margin-top:38px!important;padding:18px!important;display:grid!important;grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr)!important;\n    gap:54px!important;align-items:stretch!important;border:1px solid rgba(66,55,49,.11)!important;border-radius:28px!important;background:#eee7df!important;\n    box-shadow:0 14px 34px rgba(47,37,31,.08)!important}\n  .std-about-visual{height:auto!important;min-height:500px!important;border-radius:20px!important;overflow:hidden!important;box-shadow:none!important;order:0!important}\n  .std-about-visual:after{background:none!important}.std-about-visual img{filter:none!important;object-fit:cover!important}\n  .std-about-rating{left:18px!important;bottom:18px!important;height:42px!important;padding:0 14px!important;background:rgba(18,17,16,.72)!important;color:#fff!important;border-color:rgba(255,255,255,.28)!important}\n  .std-about-rating strong,.std-about-rating span{color:#fff!important}\n  .std-about-copy{padding:38px 34px 34px 0!important;display:flex!important;flex-direction:column!important;justify-content:center!important}\n  .std-about-lead{margin:0!important;max-width:670px!important;color:#1d1a18!important;font:500 clamp(31px,2.55vw,40px)/1.12 \"Cormorant Garamond\",Georgia,serif!important;letter-spacing:-.025em!important}\n  .std-about-text{max-width:660px!important;margin:23px 0 0!important;color:#58504a!important;font-size:15px!important;line-height:1.68!important}\n  .std-about-facts{display:grid!important;grid-template-columns:1fr!important;gap:0!important;margin-top:29px!important;border-top:1px solid rgba(66,55,49,.12)!important}\n  .std-about-fact{min-height:57px!important;padding:0!important;border:0!important;border-bottom:1px solid rgba(66,55,49,.12)!important;border-radius:0!important;background:transparent!important;\n    display:flex!important;align-items:center!important;justify-content:flex-start!important;text-align:left!important}\n  .std-about-fact strong{color:#2b2724!important;font:500 16px/1.2 \"Manrope\",Arial,sans-serif!important;white-space:nowrap!important}\n\n  #esmeraldaDesktopTeam.std-team{min-height:0!important;padding:84px 70px 88px!important;background:#2f2926!important;color:#f7f3f0!important}\n  #esmeraldaDesktopTeam .std-team-inner{width:min(100%,1360px)!important}#esmeraldaDesktopTeam .std-team-kicker{color:#b8ada7!important}\n  #esmeraldaDesktopTeam .std-team-title{color:#f7f3f0!important}#esmeraldaDesktopTeam .std-team-subtitle{margin-top:14px!important;color:#b9ada7!important;font-size:14px!important}\n  #esmeraldaDesktopTeam .std-team-track{display:grid!important;width:100%!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:28px!important;margin-top:42px!important;overflow:visible!important;padding:0!important}\n  #esmeraldaDesktopTeam .std-master{position:relative!important;display:block!important;width:100%!important;min-width:0!important;padding:20px 12px 22px!important;\n    border:1px solid rgba(255,255,255,.10)!important;border-radius:18px!important;background:rgba(255,255,255,.035)!important;color:#f7f3f0!important;text-align:center!important}\n  #esmeraldaDesktopTeam .std-master-arrow{position:absolute!important;top:13px!important;right:13px!important;width:34px!important;height:34px!important;border:1px solid rgba(255,255,255,.14)!important;\n    border-radius:50%!important;background:rgba(255,255,255,.05)!important;color:#d8b7aa!important;display:grid!important;place-items:center!important}\n  #esmeraldaDesktopTeam .std-master-avatar{width:min(100%,176px)!important;height:auto!important;aspect-ratio:1!important;margin:0 auto!important;border-radius:50%!important;\n    background:linear-gradient(145deg,#806b61,#5b4a43)!important;color:#e6d8d0!important;border:1px solid rgba(255,255,255,.10)!important}\n  #esmeraldaDesktopTeam .std-master-name{margin-top:17px!important;color:#f7f3f0!important;font-size:27px!important}\n  #esmeraldaDesktopTeam .std-master-role{margin-top:6px!important;color:#c5b9b2!important;font-size:11px!important}\n  .std-master-cats{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-top:13px}\n  .std-master-cat{display:inline-flex;min-height:25px;align-items:center;padding:0 9px;border:1px solid rgba(255,255,255,.11);border-radius:999px;color:#d8cdc6;font:500 9px/1 \"Manrope\",Arial,sans-serif}\n\n  #esmeraldaDesktopReviews.std-reviews{height:auto!important;min-height:0!important;padding:82px 0 70px!important;background:#e9e2da!important;color:#171513!important}\n  #esmeraldaDesktopReviews .std-reviews-head{width:min(calc(100% - 96px),1360px)!important;margin:0 auto!important;text-align:center!important}\n  #esmeraldaDesktopReviews .std-reviews-kicker{color:#746c66!important}#esmeraldaDesktopReviews .std-reviews-title{color:#171513!important}\n  #esmeraldaDesktopReviews .std-reviews-score{margin-top:34px!important}#esmeraldaDesktopReviews .std-reviews-score>strong{font:500 78px/.82 \"Cormorant Garamond\",Georgia,serif!important;color:#171513!important}\n  #esmeraldaDesktopReviews .std-reviews-stars{margin-top:17px!important;font-size:27px!important;color:#b78d4f!important}\n  #esmeraldaDesktopReviews .std-reviews-count{margin-top:13px!important;color:#716862!important;font-size:13px!important}\n  #esmeraldaDesktopReviews .std-review-card{height:270px!important;min-height:270px!important;padding:25px!important;border-color:rgba(66,55,49,.15)!important;border-radius:13px!important;background:rgba(255,255,255,.34)!important}\n  #esmeraldaDesktopReviews .std-review-text{margin-top:22px!important;color:#4f4843!important;font-size:14px!important;line-height:1.5!important;display:-webkit-box!important;-webkit-box-orient:vertical!important;-webkit-line-clamp:5!important;overflow:hidden!important}\n\n  .std-contact{min-height:0!important;padding:82px 70px 46px!important;background:#2f2926!important;color:#f7f3f0!important}\n  .std-contact-inner{width:min(100%,1360px)!important;grid-template-columns:500px minmax(0,1fr)!important;gap:42px!important}\n  .std-contact-kicker{color:#b8ada7!important}.std-contact-title{color:#f7f3f0!important;margin-bottom:32px!important}.std-contact-right{padding-top:94px!important}\n  .std-contact-card{min-height:76px!important;border-color:rgba(255,255,255,.13)!important;background:rgba(255,255,255,.06)!important;color:#f7f3f0!important}\n  .std-contact-card:hover{border-color:rgba(255,255,255,.22)!important;background:rgba(255,255,255,.085)!important}\n  .std-contact-card-title{color:#f7f3f0!important;font-size:21px!important}.std-contact-card-sub{color:#c7bbb4!important;font-size:11px!important}.std-contact-card-icon{color:#f0e8e3!important}\n  .std-contact-map{height:430px!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:18px!important;overflow:hidden!important;background:#423a36!important}\n  .std-contact-status{border-color:rgba(255,255,255,.16)!important;background:#493336!important;color:#d59a9f!important}\n  .std-contact-status.open{background:#2e4133!important;border-color:#4d6752!important;color:#a9d5b0!important}\n  .std-contact-bottom{margin-top:34px!important;display:flex!important;justify-content:center!important}\n  .std-contact-brand{width:min(100%,480px)!important;min-height:76px!important;padding:0 24px!important;border-radius:14px!important;background:#171513!important;color:#fff!important;\n    display:flex!important;align-items:center!important;justify-content:space-between!important;gap:24px!important;box-shadow:none!important;text-decoration:none!important}\n  .std-contact-brand strong{font:500 23px/1 \"Cormorant Garamond\",Georgia,serif!important;color:#fff!important;white-space:nowrap}\n  .std-contact-brand-text{max-width:220px!important;text-align:right!important;color:#d6cec8!important;font:400 10px/1.35 \"Manrope\",Arial,sans-serif!important}\n\n  .std-master-page-close{border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important}\n  .std-master-profile-cats{display:flex;flex-wrap:wrap;justify-content:center;gap:7px;margin-top:12px}\n  .std-master-profile-cats span{display:inline-flex;min-height:28px;align-items:center;padding:0 10px;border:1px solid rgba(61,49,43,.12);border-radius:999px;color:#71665f;font-size:10px}\n  .std-master-tabs{display:flex!important;justify-content:center!important;gap:7px!important;margin:24px auto 0!important;overflow-x:auto!important}\n  .std-master-tabs button{height:42px!important;padding:0 17px!important;border:1px solid rgba(61,49,43,.12)!important;border-radius:999px!important;background:transparent!important;color:#615851!important;font-size:11px!important}\n  .std-master-tabs button.active{background:#171513!important;color:#fff!important;border-color:#171513!important}\n  .std-master-tab-content{margin-top:28px!important}.std-master-tab-content h3{margin:0 0 14px!important;font:500 31px/1 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-master-about-copy{max-width:660px;margin:0 auto;color:#514a45;font-size:13px;line-height:1.65;text-align:center}\n  .std-master-page-works{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important}\n  .std-master-page-work{border:0;padding:0;background:none}.std-master-page-work img{width:100%!important;aspect-ratio:1.15!important;object-fit:cover!important;border-radius:11px!important}\n\n  .std-section-reveal{opacity:0;transform:translate3d(0,28px,0);transition:opacity .72s ease,transform .82s cubic-bezier(.16,1,.3,1)}\n  .std-section-reveal.in-view{opacity:1;transform:none}\n  @media(prefers-reduced-motion:reduce){.std-section-reveal{opacity:1!important;transform:none!important;transition:none!important}}\n\n  @media(max-width:1180px){\n    .std-header{padding:0 30px!important}.std-nav{gap:19px!important}.std-header-right{gap:9px!important}.std-phone{font-size:14px!important}\n    .std-lang-switch{gap:1px}.std-lang-switch button{min-width:23px;font-size:10px!important}\n    .std-services-inner{width:min(calc(100% - 56px),1360px)!important}.std-services-head-ref{gap:40px!important}\n    .std-about{padding-left:42px!important;padding-right:42px!important}.std-about-grid{gap:36px!important}.std-about-copy{padding-right:18px!important}\n    #esmeraldaDesktopTeam.std-team{padding-left:42px!important;padding-right:42px!important}#esmeraldaDesktopTeam .std-team-track{gap:16px!important}\n    .std-contact{padding-left:42px!important;padding-right:42px!important}.std-contact-inner{grid-template-columns:430px minmax(0,1fr)!important}\n    .std-about-fact strong{font-size:14px!important}\n  }\n  @media(max-width:930px){\n    .std-nav{display:none!important}.std-services-head-ref{grid-template-columns:1fr!important;gap:20px!important}\n    .std-service-grid-ref,.std-service-all-grid{grid-template-columns:1fr!important}.std-service-all-grid:after{display:none!important}\n    .std-about-grid{grid-template-columns:1fr!important}.std-about-visual{min-height:390px!important}.std-about-copy{padding:24px 18px 30px!important}\n    #esmeraldaDesktopTeam .std-team-track{grid-template-columns:repeat(2,minmax(0,1fr))!important}\n    .std-contact-inner{grid-template-columns:1fr!important}.std-contact-right{padding-top:0!important}.std-contact-map{height:360px!important}\n    .std-gallery-browser-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}\n  }\n}";
  document.head.appendChild(desktopSyncCss);



  const root=document.createElement('div');
  root.id='esmeralda-desktop-v1';
  root.innerHTML=`
    <header class="std-header">
      <a class="std-header-brand" href="#esmeraldaDesktopTop" aria-label="Beauty Room by Esmeralda">
        <span class="std-header-brand-main">Beauty Room</span>
        <span class="std-header-brand-sub">by Esmeralda</span>
      </a>
      <nav class="std-nav" aria-label="Основная навигация">
        <a href="#esmeraldaDesktopServices">Услуги</a>
        <a href="#esmeraldaDesktopPortfolio">Наши работы</a>
        <a href="#esmeraldaDesktopAbout">О нас</a>
        <a href="#esmeraldaDesktopReviews">Отзывы</a>
        <a href="#esmeraldaDesktopContacts">Контакты</a>
      </nav>
      <div class="std-header-right">
        <div class="std-lang-switch" role="group" aria-label="Language"><button type="button" data-desktop-lang="hy">HY</button><span class="sep">/</span><button type="button" data-desktop-lang="ru">RU</button><span class="sep">/</span><button type="button" data-desktop-lang="en">EN</button></div>
        <a class="std-phone" href="tel:${PHONE}" aria-label="Позвонить в Beauty Room">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39Z" fill="currentColor"/></svg>
          <span>+374 93 873617</span>
        </a>
        <button class="std-header-book" id="stdHeaderBookBtn" type="button">Записаться</button>
      </div>
    </header>

    <section class="std-hero" id="esmeraldaDesktopTop" aria-label="Beauty Room">
      <div class="std-hero-copy">
        <div class="std-copy-inner">
          <p class="std-hero-kicker">Салон красоты</p>
          <h1 class="std-logo">BEAUTY ROOM</h1>
          <div class="std-logo-sub">by Esmeralda</div>

          <p class="std-tagline">Салон красоты в самом сердце Еревана.</p>

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
        <div class="std-scroll-hint" aria-hidden="true">Листайте вниз <span>↓</span></div>
      </div>

      <div class="std-hero-photo">
        <video id="stdHeroVideo" muted autoplay loop playsinline webkit-playsinline preload="metadata" poster="interior_reception_02.webp" aria-label="Видео Beauty Room by Esmeralda">
          <source src="SaveClip.App_AQMAwV91MkTpBiNct73I425uzlW_h6abP65-n07hUj4AwohUq5WlrKaE3TMQPtiaQvi2o_TdNi1Of7laSvuKsDXA3ykliQBk9mqD10k.mp4" type="video/mp4">
        </video>
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
        <button class="std-portfolio-more" id="stdOpenGallery" type="button">Смотреть все работы <span aria-hidden="true">→</span></button>
      </div>
    </section>

    <section class="std-services" id="esmeraldaDesktopServices" aria-labelledby="stdServicesTitle">
      <div class="std-services-inner">
        <div class="std-services-head-ref">
          <div>
            <p class="std-services-kicker">Услуги и цены</p>
            <h2 class="std-services-title" id="stdServicesTitle">Выберите услугу</h2>
          </div>
          <p class="std-services-intro">Выберите направление и нужную процедуру. Запись открывается в отдельной плашке, а все услуги собраны в одной понятной структуре.</p>
        </div>

        <div class="std-price-legacy" aria-hidden="true">
          <div class="std-price-wrap">
            <div class="std-price-card">
              <img id="stdPriceImage" src="${PRICE_PAGES[0]}" alt="">
              <span class="std-price-count" id="stdPriceCount"></span>
              <button id="stdPricePrev" type="button">‹</button>
              <button id="stdPriceNext" type="button">›</button>
            </div>
            <div id="stdPriceDots"></div>
            <button id="stdPriceOpen" type="button">Открыть</button>
          </div>
        </div>

        <div class="std-services-right">
          <div class="std-service-tabs" id="stdServiceTabs" aria-label="Категории услуг"></div>
          <div class="std-service-list" id="stdServiceList"></div>
          <button class="std-service-more" id="stdServiceMore" type="button"><span id="stdServiceMoreText"></span><span id="stdServiceMoreArrow" aria-hidden="true">↓</span></button>
          <div class="std-services-count" id="stdServicesCount"></div>
        </div>
      </div>
    </section>

    <section class="std-about" id="esmeraldaDesktopAbout" aria-labelledby="stdAboutTitle">
      <div class="std-about-inner">
        <p class="std-about-kicker">О нас</p>
        <h2 class="std-about-title" id="stdAboutTitle">О салоне</h2>
        <div class="std-about-grid">
          <div class="std-about-visual">
            <img src="about-salon.webp" alt="Beauty Room by Esmeralda" loading="lazy">
            <div class="std-about-rating"><span class="std-about-rating-star" aria-hidden="true">★</span><strong>5,0</strong><span>рейтинг салона</span></div>
          </div>
          <div class="std-about-copy">
            <p class="std-about-lead">Beauty Room by Esmeralda — салон красоты в Ереване.</p>
            <p class="std-about-text">Здесь можно спокойно выбрать нужные процедуры и доверить уход мастерам разных направлений. Мы ценим аккуратную работу, комфорт и внимательное отношение к каждому гостю.</p>
            <div class="std-about-facts">
              <div class="std-about-fact"><strong>Несколько направлений в одном салоне</strong></div>
              <div class="std-about-fact"><strong>Комфортная атмосфера</strong></div>
              <div class="std-about-fact"><strong>Индивидуальный подход</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="std-team" id="esmeraldaDesktopTeam" aria-labelledby="stdTeamTitle">
      <div class="std-team-inner">
        <p class="std-team-kicker">Наша команда</p>
        <div class="std-team-heading-row">
          <div>
            <h2 class="std-team-title" id="stdTeamTitle">Мастера Beauty Room</h2>
            <p class="std-team-subtitle">Нажмите на мастера, чтобы открыть отдельную страницу специалиста.</p>
          </div>
        </div>
        <div class="std-team-track" id="stdTeamTrack">
          ${TEAM_MASTERS.map(master=>`
            <button class="std-master" type="button" data-desktop-master="${master.id}">
              <span class="std-master-arrow" aria-hidden="true">↗</span>
              <div class="std-master-avatar">${TEAM_AVATAR}</div>
              <strong class="std-master-name">${master.name}</strong>
              <span class="std-master-role">${master.role}</span>
              <span class="std-master-cats">${master.cats.map(cat=>'<span class="std-master-cat">'+cat+'</span>').join('')}</span>
            </button>
          `).join('')}
        </div>
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
          <strong>TANEM.ru</strong>
          <span class="std-contact-brand-text">Цифровой офис для салонов красоты</span>
        </a>
      </div>
    </section>

    <div class="std-master-overlay" id="stdMasterOverlay" role="dialog" aria-modal="true" aria-label="Мастер Beauty Room">
      <div class="std-master-page-panel">
        <div class="std-master-page-top">
          <button class="std-master-page-close" id="stdMasterPageClose" type="button" aria-label="Закрыть">←</button>
          <span>BEAUTY ROOM</span>
          <i aria-hidden="true"></i>
        </div>
        <div class="std-master-page-content" id="stdMasterPageContent"></div>
        <button class="std-master-page-book" id="stdMasterPageBook" type="button">Записаться онлайн</button>
      </div>
    </div>

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
        <div class="std-gallery-hint">Колесо или двойной клик — увеличить</div>
        <div class="std-gallery-canvas"><img class="std-gallery-image" id="stdGalleryImage" src="" alt="Фотография Beauty Room"></div>
        <button class="std-gallery-nav std-gallery-prev" id="stdGalleryPrev" type="button" aria-label="Предыдущее фото">‹</button>
        <button class="std-gallery-nav std-gallery-next" id="stdGalleryNext" type="button" aria-label="Следующее фото">›</button>
        <span class="std-gallery-count" id="stdGalleryCount"></span>
        <button class="std-view-gallery" id="stdViewGallery" type="button">Открыть галерею</button>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const heroVideo=document.getElementById('stdHeroVideo');
  if(heroVideo){
    heroVideo.muted=true;
    heroVideo.defaultMuted=true;
    const tryHeroVideo=()=>{const p=heroVideo.play();if(p&&typeof p.catch==='function')p.catch(()=>{})};
    heroVideo.addEventListener('loadeddata',tryHeroVideo,{once:true});
    heroVideo.addEventListener('canplay',tryHeroVideo,{once:true});
    requestAnimationFrame(tryHeroVideo);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)tryHeroVideo()});
  }

  const bookBtn=document.getElementById('stdBookBtn');
  const bookOverlay=document.getElementById('stdBookOverlay');
  const openDesktopBooking=()=>{bookOverlay.classList.add('open');document.body.style.overflow='hidden'};
  const closeDesktopBooking=()=>{bookOverlay.classList.remove('open');if(!document.querySelector('.std-gallery.open,.std-gallery-browser.open,.std-price-viewer.open'))document.body.style.overflow=''};
  bookBtn.addEventListener('click',openDesktopBooking);
  const headerBookBtn=document.getElementById('stdHeaderBookBtn');
  if(headerBookBtn)headerBookBtn.addEventListener('click',openDesktopBooking);
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

  let activeServiceCategory='Все';
  let desktopServicesExpanded=false;
  const serviceTabs=document.getElementById('stdServiceTabs');
  const serviceList=document.getElementById('stdServiceList');
  const serviceMore=document.getElementById('stdServiceMore');
  const serviceMoreText=document.getElementById('stdServiceMoreText');
  const serviceMoreArrow=document.getElementById('stdServiceMoreArrow');
  const servicesCount=document.getElementById('stdServicesCount');
  const DESKTOP_SERVICE_TABS=['Все',...SERVICE_CATEGORIES];

  function desktopServiceWord(n){
    const n10=n%10,n100=n%100;
    if(n10===1&&n100!==11)return 'услугу';
    if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';
    return 'услуг';
  }
  function desktopServiceCard(item,category){
    const title=item[0],price=item[1],detail=item[2],variants=item[3]||[],note=item[4];
    const meta=detail||note||category;
    const priceText=price||'Записаться';
    return '<button class="std-service-card-ref" type="button" data-service-book><strong class="std-service-card-title-ref">'+title+'</strong>'+(variants.length?'<span class="std-service-card-detail-ref">'+variants.map(v=>v[0]+(v[1]?' · '+v[1]:'')).join(' · ')+'</span>':(detail?'<span class="std-service-card-detail-ref">'+detail+'</span>':''))+'<span class="std-service-card-bottom-ref"><span>'+meta+'</span><b>'+priceText+'</b></span></button>';
  }
  function desktopServiceGroup(category,items,showHeading){
    return '<section class="std-service-category-ref">'+(showHeading?'<div class="std-service-category-heading-ref"><span>'+category+'</span><i aria-hidden="true"></i></div>':'')+'<div class="std-service-grid-ref">'+items.map(item=>desktopServiceCard(item,category)).join('')+'</div></section>';
  }
  function renderDesktopServices(){
    serviceTabs.innerHTML=DESKTOP_SERVICE_TABS.map(cat=>'<button class="std-service-tab'+(cat===activeServiceCategory?' active':'')+'" type="button" data-service-category="'+cat+'">'+cat+'</button>').join('');
    serviceTabs.querySelectorAll('[data-service-category]').forEach(btn=>btn.onclick=()=>{
      activeServiceCategory=btn.dataset.serviceCategory;
      desktopServicesExpanded=false;
      renderDesktopServices();
    });

    if(activeServiceCategory==='Все'){
      serviceList.innerHTML=SERVICE_CATEGORIES.map(cat=>{
        const all=SERVICE_DATA[cat]||[];
        const shown=desktopServicesExpanded?all:all.slice(0,2);
        return shown.length?desktopServiceGroup(cat,shown,true):'';
      }).join('');
      const total=SERVICE_CATEGORIES.reduce((sum,cat)=>sum+(SERVICE_DATA[cat]?.length||0),0);
      const shownCount=SERVICE_CATEGORIES.reduce((sum,cat)=>sum+Math.min(2,SERVICE_DATA[cat]?.length||0),0);
      const remaining=Math.max(0,total-shownCount);
      serviceMore.hidden=remaining===0&&desktopServicesExpanded===false;
      serviceMoreText.textContent=desktopServicesExpanded?'Свернуть':('Показать ещё '+remaining+' '+desktopServiceWord(remaining));
      serviceMoreArrow.textContent=desktopServicesExpanded?'↑':'↓';
      servicesCount.textContent='Все категории · '+total+' позиций';
    }else{
      const all=SERVICE_DATA[activeServiceCategory]||[];
      serviceList.innerHTML=desktopServiceGroup(activeServiceCategory,all,false);
      serviceMore.hidden=true;
      servicesCount.textContent=activeServiceCategory+' · '+all.length+' '+desktopServiceWord(all.length);
    }

    serviceList.querySelectorAll('[data-service-book]').forEach(btn=>btn.onclick=openDesktopBooking);
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

  // Desktop master pages: same separate-overlay idea as the mobile version.
  const masterOverlay=document.getElementById('stdMasterOverlay');
  const masterPageContent=document.getElementById('stdMasterPageContent');
  const masterPageClose=document.getElementById('stdMasterPageClose');
  const masterPageBook=document.getElementById('stdMasterPageBook');
  let activeDesktopMaster=null;

  function desktopMasterServices(master){
    return (master.cats||[]).flatMap(cat=>(SERVICE_DATA[cat]||[]).map(item=>({cat,item})));
  }
  function paintDesktopMaster(master){
    const items=desktopMasterServices(master);
    const works=master.work||[];
    masterPageContent.innerHTML='<div class="std-master-profile"><div class="std-master-avatar">'+TEAM_AVATAR+'</div><h2>'+master.name+'</h2><p>'+master.role+'</p><div class="std-master-profile-rating"><b>★★★★★</b> · Beauty Room</div></div><div class="std-master-page-grid"><section class="std-master-page-block"><h3>Услуги</h3>'+(items.length?items.map(({cat,item})=>'<div class="std-master-page-service"><strong>'+item[0]+'</strong><span>'+cat+'</span></div>').join(''):'<p class="std-master-page-empty">Услуги уточняются при записи.</p>')+'</section><section class="std-master-page-block"><h3>Работы</h3>'+(works.length?'<div class="std-master-page-works">'+works.map(src=>'<img src="'+src+'" alt="'+master.name+'" loading="lazy">').join('')+'</div>':'<p class="std-master-page-empty">Работы этого направления можно посмотреть в общей галерее Beauty Room.</p>')+'</section></div>';
  }
  function openDesktopMaster(master){
    activeDesktopMaster=master;
    paintDesktopMaster(master);
    masterOverlay.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDesktopMaster(){
    masterOverlay.classList.remove('open');
    activeDesktopMaster=null;
    if(!bookOverlay.classList.contains('open')&&!gallery.classList.contains('open')&&!galleryBrowser.classList.contains('open'))document.body.style.overflow='';
  }
  document.querySelectorAll('[data-desktop-master]').forEach(btn=>btn.addEventListener('click',()=>{
    const master=TEAM_MASTERS.find(item=>item.id===btn.dataset.desktopMaster);
    if(master)openDesktopMaster(master);
  }));
  masterPageClose.addEventListener('click',closeDesktopMaster);
  masterOverlay.addEventListener('click',e=>{if(e.target===masterOverlay)closeDesktopMaster()});
  masterPageBook.addEventListener('click',()=>{closeDesktopMaster();openDesktopBooking()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&masterOverlay.classList.contains('open'))closeDesktopMaster()});

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