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
  desktopSyncCss.textContent="\n@media(min-width:768px){\n  #esmeralda-desktop-v1{\n    --br-bg:#f8f4ee;--br-light:#f7f2eb;--br-warm:#e9e2da;--br-dark:#2f2926;\n    --br-ink:#171513;--br-soft:#746c66;--br-taupe:#8b7167;--br-line:rgba(62,51,44,.12);\n    background:var(--br-bg)!important;color:var(--br-ink)!important\n  }\n  .std-portfolio-title,.std-services-title,.std-about-title,#esmeraldaDesktopTeam .std-team-title,\n  #esmeraldaDesktopReviews .std-reviews-title,.std-contact-title{\n    margin-top:14px!important;font:500 clamp(54px,4.35vw,68px)/.94 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:-.035em!important\n  }\n  .std-portfolio-kicker,.std-services-kicker,.std-about-kicker,#esmeraldaDesktopTeam .std-team-kicker,\n  #esmeraldaDesktopReviews .std-reviews-kicker,.std-contact-kicker{\n    font:600 12px/1 \"Manrope\",Arial,sans-serif!important;letter-spacing:.26em!important;text-transform:uppercase!important\n  }\n\n  .std-header{background:#f8f4ee!important;border-bottom:1px solid rgba(62,51,44,.06)!important}\n  .std-header-right{gap:17px!important}\n  .std-lang-switch{height:42px;display:flex;align-items:center;gap:4px;padding:0 4px}\n  .std-lang-switch button{min-width:28px;height:34px;padding:0 3px;border:0;background:transparent;color:#8b817b;\n    font:600 11px/1 \"Manrope\",Arial,sans-serif!important;letter-spacing:.04em}\n  .std-lang-switch button.active{color:#171513!important}.std-lang-switch .sep{color:#c7bbb3;font-size:10px;pointer-events:none}\n\n  .std-copy-inner{width:min(100%,560px)!important;transform:translateY(38px)!important}\n  .std-hero-kicker{font-size:14px!important;letter-spacing:.40em!important;margin-bottom:31px!important}\n  .std-logo{max-width:100%!important;font-size:clamp(54px,4.15vw,70px)!important;letter-spacing:.055em!important;white-space:nowrap!important}\n  .std-logo-sub{font-size:14px!important;letter-spacing:.40em!important;margin-top:20px!important}\n  .std-tagline{font-size:25px!important;line-height:1.38!important;max-width:500px!important}\n  .std-meta-text{font-size:16px!important;line-height:1.42!important}\n  .std-actions{gap:12px!important}.std-btn{height:66px!important;font-size:16px!important;border-radius:8px!important}\n  .std-scroll-hint{right:-88px!important;color:#fff!important;background:rgba(50,42,38,.78)!important;\n    border:1px solid rgba(255,255,255,.13)!important;box-shadow:0 12px 34px rgba(36,29,26,.20)!important;backdrop-filter:blur(7px)!important}\n  .std-scroll-hint span{color:#fff!important}\n\n  .std-portfolio{padding:82px 42px 78px!important;background:#f7f2eb!important;color:#171513!important}\n  .std-portfolio-inner{width:min(calc(100% - 24px),1400px)!important}\n  .std-portfolio-kicker{color:#746c66!important}.std-portfolio-title{color:#171513!important}\n  .std-portfolio-copy{margin-top:17px!important;color:#746c66!important;font-size:15px!important;line-height:1.55!important}\n  .std-portfolio-more{width:min(100%,520px)!important;height:56px!important;margin:34px auto 0!important;\n    border:1px solid rgba(64,52,46,.18)!important;border-radius:10px!important;background:transparent!important;color:#1a1715!important;\n    box-shadow:none!important;font:500 14px/1 \"Manrope\",Arial,sans-serif!important;gap:12px!important}\n  .std-portfolio-more:hover{background:rgba(255,255,255,.32)!important;box-shadow:none!important;transform:translateY(-1px)!important}\n\n  .std-gallery-browser{background:#f7f2eb!important;color:#171513!important}\n  .std-gallery-browser-shell{width:min(100%,1320px)!important;padding:32px 42px 60px!important;background:#f7f2eb!important}\n  .std-gallery-browser-back{width:46px!important;height:46px!important;border:0!important;border-radius:0!important;background:transparent!important;\n    box-shadow:none!important;color:#171513!important;font:300 36px/1 Arial,sans-serif!important}\n  .std-gallery-browser-title strong{font:500 clamp(54px,4vw,64px)/.9 \"Cormorant Garamond\",Georgia,serif!important;color:#171513!important}\n  .std-gallery-browser-title span{margin-top:9px!important;color:#746c66!important;font-size:11px!important}\n  .std-gallery-browser-tab{height:43px!important;padding:0 18px!important;border-color:rgba(55,44,39,.12)!important;background:transparent!important;color:#6f655f!important}\n  .std-gallery-browser-tab.active{background:#171513!important;border-color:#171513!important;color:#fff!important}\n  .std-gallery-browser-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:9px!important;margin-top:20px!important}\n  .std-gallery-browser-tile{aspect-ratio:1/1!important;border-radius:11px!important}\n\n  .std-gallery{z-index:450!important;padding:22px!important;background:rgba(27,20,20,.90)!important;backdrop-filter:blur(9px)!important}\n  .std-gallery-stage{width:min(calc(100vw - 130px),980px)!important;height:min(78dvh,760px)!important;max-height:none!important;touch-action:none!important;overflow:visible!important}\n  .std-gallery-canvas{position:absolute;inset:0;overflow:hidden;border-radius:14px;background:#151312;box-shadow:0 18px 54px rgba(0,0,0,.28);touch-action:none}\n  .std-gallery-image{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;\n    object-fit:contain!important;border-radius:0!important;box-shadow:none!important;transform:translate3d(0,0,0) scale(1);transform-origin:center;will-change:transform}\n  .std-gallery-hint{position:absolute;top:-35px;left:0;color:rgba(255,255,255,.66);font:400 10px/1 \"Manrope\",Arial,sans-serif}\n  .std-gallery-nav{width:34px!important;height:54px!important;border:0!important;background:transparent!important;font-size:39px!important}\n  .std-gallery-prev{left:-48px!important}.std-gallery-next{right:-48px!important}\n  .std-gallery-count{bottom:-32px!important;font-size:10px!important;color:#fff!important}\n  .std-view-gallery{position:absolute;left:50%;bottom:-54px;transform:translateX(-50%);height:42px;padding:0 18px;\n    border:1px solid rgba(255,255,255,.34);border-radius:999px;background:rgba(22,18,16,.74);backdrop-filter:blur(12px);\n    color:#fff!important;font:600 11px/1 \"Manrope\",Arial,sans-serif!important;white-space:nowrap}\n  .std-gallery:not([data-source=\"portfolio\"]) .std-view-gallery{display:none!important}\n\n  .std-services{min-height:0!important;padding:88px 0 94px!important;background:#2f2926!important;color:#f7f3f0!important}\n  .std-services-inner{width:min(calc(100% - 96px),1360px)!important;margin:0 auto!important;display:block!important}\n  .std-services-head-ref{display:grid!important;grid-template-columns:minmax(340px,.88fr) minmax(360px,1.12fr)!important;align-items:end!important;gap:68px!important}\n  .std-services-kicker{color:#b8ada7!important}.std-services-title{color:#f7f3f0!important}\n  .std-services-intro{max-width:570px!important;margin:0 0 5px!important;color:#b9ada7!important;font-size:15px!important;line-height:1.65!important}\n  .std-price-legacy{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip-path:inset(50%)!important}\n  .std-service-tabs{width:100%!important;margin:34px 0 0!important;padding:0 0 8px!important;display:flex!important;gap:8px!important;\n    overflow-x:auto!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;\n    -webkit-mask-image:none!important;mask-image:none!important}\n  .std-service-tab{flex:0 0 auto!important;min-height:38px!important;padding:0 16px!important;border:1px solid rgba(255,255,255,.18)!important;\n    border-radius:999px!important;background:transparent!important;color:#cfc5bf!important;font-size:11px!important;font-weight:500!important}\n  .std-service-tab:hover{transform:translateY(-2px)!important;background:rgba(255,255,255,.06)!important}\n  .std-service-tab.active{background:#8b7167!important;border-color:#8b7167!important;color:#fff!important;box-shadow:none!important}\n  .std-service-list{display:block!important;width:100%!important;margin-top:24px!important;border:0!important}\n  .std-service-grid-ref{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}\n  .std-service-grid-ref:after{display:none!important}\n  .std-service-card-ref{position:relative!important;display:flex!important;min-height:142px!important;flex-direction:column!important;\n    padding:23px 68px 20px 23px!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:17px!important;\n    background:rgba(255,255,255,.045)!important;box-shadow:none!important;color:#f7f3f0!important;text-align:left!important}\n  .std-service-card-ref:after{position:absolute!important;top:20px!important;right:18px!important;display:grid!important;width:38px!important;height:38px!important;\n    place-items:center!important;border:1px solid rgba(255,255,255,.16)!important;border-radius:50%!important;background:rgba(255,255,255,.06)!important;\n    color:#d8b7aa!important;content:\"↗\"!important;font:500 15px/1 \"Manrope\",Arial,sans-serif!important}\n  .std-service-card-ref:hover{transform:translateY(-3px)!important;border-color:rgba(255,255,255,.22)!important;background:rgba(255,255,255,.07)!important;box-shadow:none!important}\n  .std-service-card-title-ref{color:#f7f3f0!important;font:500 clamp(23px,1.55vw,27px)/1.08 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-service-card-detail-ref{margin-top:9px!important;color:#b9ada7!important;font-size:11px!important;line-height:1.5!important}\n  .std-service-card-bottom-ref{display:flex!important;align-items:end!important;justify-content:space-between!important;gap:12px!important;margin-top:auto!important;padding-top:20px!important}\n  .std-service-card-bottom-ref span{display:inline-flex!important;min-height:25px!important;align-items:center!important;padding:0 9px!important;border-radius:999px!important;background:rgba(255,255,255,.07)!important;color:#c9bdb6!important;font-size:9px!important}\n  .std-service-card-bottom-ref b{color:#f7f3f0!important;font:500 17px/1 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-service-all-grid{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:50px}\n  .std-service-all-grid:after{content:\"\";position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,.13);transform:translateX(-.5px)}\n  .std-service-all-row{min-height:92px;padding:20px 5px;border:0;border-bottom:1px solid rgba(255,255,255,.14);background:transparent;\n    color:#f7f3f0!important;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px;align-items:center;text-align:left}\n  .std-service-all-title{display:block;color:#f7f3f0;font:500 24px/1.08 \"Cormorant Garamond\",Georgia,serif}\n  .std-service-all-cat{display:block;margin-top:7px;color:#a99e98;font:500 9.5px/1 \"Manrope\",Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}\n  .std-service-all-action{color:#d8b7aa;font:500 11px/1 \"Manrope\",Arial,sans-serif;white-space:nowrap}\n  .std-service-more{width:min(100%,390px)!important;height:52px!important;margin:28px auto 0!important;border:1px solid rgba(255,255,255,.22)!important;\n    border-radius:8px!important;background:rgba(255,255,255,.06)!important;color:#f4eeea!important}\n  .std-service-more[hidden]{display:none!important}.std-services-count{margin-top:13px!important;text-align:center!important;color:#938984!important;font-size:10px!important}\n\n  .std-about{min-height:0!important;padding:88px 70px 96px!important;background:#f7f2eb!important;color:#171513!important}\n  .std-about-inner{width:min(100%,1360px)!important;margin:0 auto!important}.std-about-kicker{color:#88786e!important}.std-about-title{color:#171513!important}\n  .std-about-grid{margin-top:38px!important;padding:18px!important;display:grid!important;grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr)!important;\n    gap:54px!important;align-items:stretch!important;border:1px solid rgba(66,55,49,.11)!important;border-radius:28px!important;background:#eee7df!important;\n    box-shadow:0 14px 34px rgba(47,37,31,.08)!important}\n  .std-about-visual{height:auto!important;min-height:500px!important;border-radius:20px!important;overflow:hidden!important;box-shadow:none!important;order:0!important}\n  .std-about-visual:after{background:none!important}.std-about-visual img{filter:none!important;object-fit:cover!important}\n  .std-about-rating{left:18px!important;bottom:18px!important;height:42px!important;padding:0 14px!important;background:rgba(18,17,16,.72)!important;color:#fff!important;border-color:rgba(255,255,255,.28)!important}\n  .std-about-rating strong,.std-about-rating span{color:#fff!important}\n  .std-about-copy{padding:38px 34px 34px 0!important;display:flex!important;flex-direction:column!important;justify-content:center!important}\n  .std-about-lead{margin:0!important;max-width:670px!important;color:#1d1a18!important;font:500 clamp(31px,2.55vw,40px)/1.12 \"Cormorant Garamond\",Georgia,serif!important;letter-spacing:-.025em!important}\n  .std-about-text{max-width:660px!important;margin:23px 0 0!important;color:#58504a!important;font-size:15px!important;line-height:1.68!important}\n  .std-about-facts{display:grid!important;grid-template-columns:1fr!important;gap:0!important;margin-top:29px!important;border-top:1px solid rgba(66,55,49,.12)!important}\n  .std-about-fact{min-height:57px!important;padding:0!important;border:0!important;border-bottom:1px solid rgba(66,55,49,.12)!important;border-radius:0!important;background:transparent!important;\n    display:flex!important;align-items:center!important;justify-content:flex-start!important;text-align:left!important}\n  .std-about-fact strong{color:#2b2724!important;font:500 16px/1.2 \"Manrope\",Arial,sans-serif!important;white-space:nowrap!important}\n\n  #esmeraldaDesktopTeam.std-team{min-height:0!important;padding:84px 70px 88px!important;background:#2f2926!important;color:#f7f3f0!important}\n  #esmeraldaDesktopTeam .std-team-inner{width:min(100%,1360px)!important}#esmeraldaDesktopTeam .std-team-kicker{color:#b8ada7!important}\n  #esmeraldaDesktopTeam .std-team-title{color:#f7f3f0!important}#esmeraldaDesktopTeam .std-team-subtitle{margin-top:14px!important;color:#b9ada7!important;font-size:14px!important}\n  #esmeraldaDesktopTeam .std-team-track{display:grid!important;width:100%!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:28px!important;margin-top:42px!important;overflow:visible!important;padding:0!important}\n  #esmeraldaDesktopTeam .std-master{position:relative!important;display:block!important;width:100%!important;min-width:0!important;padding:20px 12px 22px!important;\n    border:1px solid rgba(255,255,255,.10)!important;border-radius:18px!important;background:rgba(255,255,255,.035)!important;color:#f7f3f0!important;text-align:center!important}\n  #esmeraldaDesktopTeam .std-master-arrow{position:absolute!important;top:13px!important;right:13px!important;width:34px!important;height:34px!important;border:1px solid rgba(255,255,255,.14)!important;\n    border-radius:50%!important;background:rgba(255,255,255,.05)!important;color:#d8b7aa!important;display:grid!important;place-items:center!important}\n  #esmeraldaDesktopTeam .std-master-avatar{width:min(100%,176px)!important;height:auto!important;aspect-ratio:1!important;margin:0 auto!important;border-radius:50%!important;\n    background:linear-gradient(145deg,#806b61,#5b4a43)!important;color:#e6d8d0!important;border:1px solid rgba(255,255,255,.10)!important}\n  #esmeraldaDesktopTeam .std-master-name{margin-top:17px!important;color:#f7f3f0!important;font-size:27px!important}\n  #esmeraldaDesktopTeam .std-master-role{margin-top:6px!important;color:#c5b9b2!important;font-size:11px!important}\n  .std-master-cats{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-top:13px}\n  .std-master-cat{display:inline-flex;min-height:25px;align-items:center;padding:0 9px;border:1px solid rgba(255,255,255,.11);border-radius:999px;color:#d8cdc6;font:500 9px/1 \"Manrope\",Arial,sans-serif}\n\n  #esmeraldaDesktopReviews.std-reviews{height:auto!important;min-height:0!important;padding:82px 0 70px!important;background:#e9e2da!important;color:#171513!important}\n  #esmeraldaDesktopReviews .std-reviews-head{width:min(calc(100% - 96px),1360px)!important;margin:0 auto!important;text-align:center!important}\n  #esmeraldaDesktopReviews .std-reviews-kicker{color:#746c66!important}#esmeraldaDesktopReviews .std-reviews-title{color:#171513!important}\n  #esmeraldaDesktopReviews .std-reviews-score{margin-top:34px!important}#esmeraldaDesktopReviews .std-reviews-score>strong{font:500 78px/.82 \"Cormorant Garamond\",Georgia,serif!important;color:#171513!important}\n  #esmeraldaDesktopReviews .std-reviews-stars{margin-top:17px!important;font-size:27px!important;color:#b78d4f!important}\n  #esmeraldaDesktopReviews .std-reviews-count{margin-top:13px!important;color:#716862!important;font-size:13px!important}\n  #esmeraldaDesktopReviews .std-review-card{height:270px!important;min-height:270px!important;padding:25px!important;border-color:rgba(66,55,49,.15)!important;border-radius:13px!important;background:rgba(255,255,255,.34)!important}\n  #esmeraldaDesktopReviews .std-review-text{margin-top:22px!important;color:#4f4843!important;font-size:14px!important;line-height:1.5!important;display:-webkit-box!important;-webkit-box-orient:vertical!important;-webkit-line-clamp:5!important;overflow:hidden!important}\n\n  .std-contact{min-height:0!important;padding:82px 70px 46px!important;background:#2f2926!important;color:#f7f3f0!important}\n  .std-contact-inner{width:min(100%,1360px)!important;grid-template-columns:500px minmax(0,1fr)!important;gap:42px!important}\n  .std-contact-kicker{color:#b8ada7!important}.std-contact-title{color:#f7f3f0!important;margin-bottom:32px!important}.std-contact-right{padding-top:94px!important}\n  .std-contact-card{min-height:76px!important;border-color:rgba(255,255,255,.13)!important;background:rgba(255,255,255,.06)!important;color:#f7f3f0!important}\n  .std-contact-card:hover{border-color:rgba(255,255,255,.22)!important;background:rgba(255,255,255,.085)!important}\n  .std-contact-card-title{color:#f7f3f0!important;font-size:21px!important}.std-contact-card-sub{color:#c7bbb4!important;font-size:11px!important}.std-contact-card-icon{color:#f0e8e3!important}\n  .std-contact-map{height:430px!important;border:1px solid rgba(255,255,255,.12)!important;border-radius:18px!important;overflow:hidden!important;background:#423a36!important}\n  .std-contact-status{border-color:rgba(255,255,255,.16)!important;background:#493336!important;color:#d59a9f!important}\n  .std-contact-status.open{background:#2e4133!important;border-color:#4d6752!important;color:#a9d5b0!important}\n  .std-contact-bottom{margin-top:34px!important;display:flex!important;justify-content:center!important}\n  .std-contact-brand{width:min(100%,480px)!important;min-height:76px!important;padding:0 24px!important;border-radius:14px!important;background:#171513!important;color:#fff!important;\n    display:flex!important;align-items:center!important;justify-content:space-between!important;gap:24px!important;box-shadow:none!important;text-decoration:none!important}\n  .std-contact-brand strong{font:500 23px/1 \"Cormorant Garamond\",Georgia,serif!important;color:#fff!important;white-space:nowrap}\n  .std-contact-brand-text{max-width:220px!important;text-align:right!important;color:#d6cec8!important;font:400 10px/1.35 \"Manrope\",Arial,sans-serif!important}\n\n  .std-master-page-close{border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important}\n  .std-master-profile-cats{display:flex;flex-wrap:wrap;justify-content:center;gap:7px;margin-top:12px}\n  .std-master-profile-cats span{display:inline-flex;min-height:28px;align-items:center;padding:0 10px;border:1px solid rgba(61,49,43,.12);border-radius:999px;color:#71665f;font-size:10px}\n  .std-master-tabs{display:flex!important;justify-content:center!important;gap:7px!important;margin:24px auto 0!important;overflow-x:auto!important}\n  .std-master-tabs button{height:42px!important;padding:0 17px!important;border:1px solid rgba(61,49,43,.12)!important;border-radius:999px!important;background:transparent!important;color:#615851!important;font-size:11px!important}\n  .std-master-tabs button.active{background:#171513!important;color:#fff!important;border-color:#171513!important}\n  .std-master-tab-content{margin-top:28px!important}.std-master-tab-content h3{margin:0 0 14px!important;font:500 31px/1 \"Cormorant Garamond\",Georgia,serif!important}\n  .std-master-about-copy{max-width:660px;margin:0 auto;color:#514a45;font-size:13px;line-height:1.65;text-align:center}\n  .std-master-page-works{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important}\n  .std-master-page-work{border:0;padding:0;background:none}.std-master-page-work img{width:100%!important;aspect-ratio:1.15!important;object-fit:cover!important;border-radius:11px!important}\n\n  .std-section-reveal{opacity:0;transform:translate3d(0,28px,0);transition:opacity .72s ease,transform .82s cubic-bezier(.16,1,.3,1)}\n  .std-section-reveal.in-view{opacity:1;transform:none}\n  @media(prefers-reduced-motion:reduce){.std-section-reveal{opacity:1!important;transform:none!important;transition:none!important}}\n\n  @media(max-width:1180px){\n    .std-header{padding:0 30px!important}.std-nav{gap:19px!important}.std-header-right{gap:9px!important}.std-phone{font-size:14px!important}\n    .std-lang-switch{gap:1px}.std-lang-switch button{min-width:23px;font-size:10px!important}\n    .std-services-inner{width:min(calc(100% - 56px),1360px)!important}.std-services-head-ref{gap:40px!important}\n    .std-about{padding-left:42px!important;padding-right:42px!important}.std-about-grid{gap:36px!important}.std-about-copy{padding-right:18px!important}\n    #esmeraldaDesktopTeam.std-team{padding-left:42px!important;padding-right:42px!important}#esmeraldaDesktopTeam .std-team-track{gap:16px!important}\n    .std-contact{padding-left:42px!important;padding-right:42px!important}.std-contact-inner{grid-template-columns:430px minmax(0,1fr)!important}\n    .std-about-fact strong{font-size:14px!important}\n  }\n  @media(max-width:930px){\n    .std-nav{display:none!important}.std-services-head-ref{grid-template-columns:1fr!important;gap:20px!important}\n    .std-service-grid-ref,.std-service-all-grid{grid-template-columns:1fr!important}.std-service-all-grid:after{display:none!important}\n    .std-about-grid{grid-template-columns:1fr!important}.std-about-visual{min-height:390px!important}.std-about-copy{padding:24px 18px 30px!important}\n    #esmeraldaDesktopTeam .std-team-track{grid-template-columns:repeat(2,minmax(0,1fr))!important}\n    .std-contact-inner{grid-template-columns:1fr!important}.std-contact-right{padding-top:0!important}.std-contact-map{height:360px!important}\n    .std-gallery-browser-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}\n  }\n}";
  document.head.appendChild(desktopSyncCss);

  const desktopRebuildCss=document.createElement('style');
  desktopRebuildCss.id='esmeralda-desktop-rebuild-v2';
  desktopRebuildCss.textContent="\n@media(min-width:768px){\n  html,body{\n    scroll-behavior:smooth!important;\n    overscroll-behavior-y:auto!important;\n  }\n\n  /* HERO — desktop version of the approved mobile framed card. */\n  .std-hero{\n    height:calc(100dvh - 80px)!important;\n    min-height:700px!important;\n    background:#eae0d9!important;\n  }\n  .std-hero-copy{\n    position:relative!important;\n    align-items:stretch!important;\n    justify-content:center!important;\n    padding:0 24px!important;\n    overflow:visible!important;\n  }\n  .std-hero-frame{\n    position:relative!important;\n    z-index:2!important;\n    width:min(100%,660px)!important;\n    height:100%!important;\n    margin:30px auto 0!important;\n    border:1px solid rgba(70,55,48,.10)!important;\n    border-bottom:0!important;\n    border-radius:24px 24px 0 0!important;\n    background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 82%,rgba(247,242,235,.93) 100%)!important;\n    box-shadow:0 -2px 18px rgba(47,37,31,.09),0 -1px 4px rgba(47,37,31,.05)!important;\n    display:flex!important;\n    justify-content:center!important;\n    overflow:visible!important;\n  }\n  .std-hero-frame:after{\n    content:\"\"!important;\n    position:absolute!important;\n    z-index:4!important;\n    left:-26px!important;\n    right:-26px!important;\n    bottom:-2px!important;\n    height:150px!important;\n    background:linear-gradient(180deg,rgba(240,232,225,0) 0%,rgba(240,232,225,.60) 48%,#f0e8e1 90%,#f0e8e1 100%)!important;\n    pointer-events:none!important;\n  }\n  .std-copy-inner{\n    position:relative!important;\n    z-index:5!important;\n    width:min(100% - 64px,560px)!important;\n    margin-top:116px!important;\n    transform:none!important;\n  }\n  .std-scroll-hint{\n    position:absolute!important;\n    z-index:7!important;\n    left:50%!important;\n    right:auto!important;\n    bottom:24px!important;\n    transform:translateX(-50%)!important;\n    display:flex!important;\n    flex-direction:column!important;\n    align-items:center!important;\n    gap:9px!important;\n    padding:0!important;\n    border:0!important;\n    border-radius:0!important;\n    background:transparent!important;\n    box-shadow:none!important;\n    backdrop-filter:none!important;\n    color:#65564e!important;\n    text-decoration:none!important;\n    animation:none!important;\n  }\n  .std-scroll-label{\n    display:block!important;\n    color:#7d6d65!important;\n    font:600 9px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:.30em!important;\n    text-transform:uppercase!important;\n    white-space:nowrap!important;\n  }\n  .std-scroll-circle{\n    display:grid!important;\n    width:54px!important;\n    height:54px!important;\n    place-items:center!important;\n    border:1px solid rgba(255,255,255,.24)!important;\n    border-radius:50%!important;\n    background:#715b53!important;\n    color:#fff!important;\n    box-shadow:0 12px 28px rgba(74,54,47,.22)!important;\n    font:300 24px/1 Arial,sans-serif!important;\n    letter-spacing:0!important;\n    animation:stdScrollCircleFloat 2.5s ease-in-out infinite!important;\n  }\n  @keyframes stdScrollCircleFloat{\n    0%,100%{transform:translateY(0)}\n    50%{transform:translateY(5px)}\n  }\n  @media(prefers-reduced-motion:reduce){\n    .std-scroll-circle{animation:none!important}\n  }\n\n  /* CURRENT SHABLON-FOR-ONLY-MASTERS: SERVICES STRUCTURE.\n     Only the palette below is changed to Esmeralda's dark services colors. */\n  #esmeraldaDesktopServices.mct-prices{\n    overflow:hidden!important;\n    padding:96px 0 104px!important;\n    background:#2f2926!important;\n    color:#f7f3f0!important;\n  }\n  #esmeraldaDesktopServices.mct-prices>.mct-shell{\n    position:relative!important;\n    display:grid!important;\n    width:min(calc(100% - 96px),1360px)!important;\n    margin:0 auto!important;\n    grid-template-columns:minmax(285px,.72fr) minmax(0,1.58fr)!important;\n    column-gap:clamp(46px,5.5vw,82px)!important;\n    align-items:start!important;\n  }\n  #esmeraldaDesktopServices .mct-price-head{\n    position:sticky!important;\n    top:108px!important;\n    display:block!important;\n    grid-column:1!important;\n    width:100%!important;\n    padding:0 clamp(22px,2.7vw,40px) 0 0!important;\n    text-align:left!important;\n    transform:translate(-1.5cm,-3cm)!important;\n  }\n  #esmeraldaDesktopServices .mct-price-head:after{\n    position:absolute!important;\n    top:4px!important;\n    right:-1.6cm!important;\n    width:1px!important;\n    height:min(72vh,660px)!important;\n    background:linear-gradient(180deg,transparent,rgba(255,255,255,.20) 10%,rgba(255,255,255,.12) 86%,transparent)!important;\n    content:\"\"!important;\n  }\n  #esmeraldaDesktopServices .mct-section-kicker{\n    margin:0!important;\n    color:#b8ada7!important;\n    font:600 12px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:.24em!important;\n    text-transform:uppercase!important;\n  }\n  #esmeraldaDesktopServices .mct-price-head h2{\n    width:auto!important;\n    margin:12px 0 0!important;\n    color:#f7f3f0!important;\n    font:500 clamp(49.5px,4.125vw,63.8px)/.94 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:-.035em!important;\n    white-space:nowrap!important;\n  }\n  #esmeraldaDesktopServices .mct-price-head>span{\n    display:block!important;\n    width:auto!important;\n    max-width:374px!important;\n    margin:26px 0 0!important;\n    color:#b9ada7!important;\n    font-size:14.3px!important;\n    line-height:1.72!important;\n  }\n  #esmeraldaDesktopServices .mct-tabs-ribbon-wrap{\n    grid-column:2!important;\n    width:100%!important;\n    min-width:0!important;\n    margin:0 0 12px!important;\n    padding:24px 0 16px!important;\n    overflow:visible!important;\n  }\n  #esmeraldaDesktopServices .mct-tabs{\n    width:calc(100% + 32px)!important;\n    margin:-10px -16px -16px!important;\n    padding:10px 16px 16px!important;\n    overflow-x:auto!important;\n    overflow-y:hidden!important;\n    scrollbar-width:none!important;\n    overscroll-behavior-x:contain!important;\n    scroll-snap-type:x proximity!important;\n    box-sizing:border-box!important;\n  }\n  #esmeraldaDesktopServices .mct-tabs::-webkit-scrollbar{display:none!important}\n  #esmeraldaDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tabs-track{\n    display:flex!important;\n    width:max-content!important;\n    min-width:100%!important;\n    flex-wrap:nowrap!important;\n    gap:10px!important;\n    padding:5px 6px 18px!important;\n    box-sizing:border-box!important;\n  }\n  #esmeraldaDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab,\n  #esmeraldaDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab-all{\n    display:inline-flex!important;\n    width:auto!important;\n    min-width:max-content!important;\n    min-height:56px!important;\n    flex:0 0 auto!important;\n    align-items:center!important;\n    justify-content:center!important;\n    padding:0 28px!important;\n    border:1px solid rgba(255,255,255,.18)!important;\n    border-radius:14px!important;\n    background:rgba(255,255,255,.045)!important;\n    color:#cfc5bf!important;\n    box-shadow:0 10px 22px rgba(0,0,0,.08)!important;\n    font:600 14px/1 \"Manrope\",Arial,sans-serif!important;\n    white-space:nowrap!important;\n    scroll-snap-align:start!important;\n    transition:transform 180ms ease,border-color 180ms ease,box-shadow 180ms ease,background 180ms ease!important;\n  }\n  #esmeraldaDesktopServices .mct-tab:not(.is-active):hover{\n    border-color:rgba(255,255,255,.28)!important;\n    background:rgba(255,255,255,.08)!important;\n    transform:translateY(-2px)!important;\n  }\n  #esmeraldaDesktopServices .mct-tab.is-active{\n    border-color:#8b7167!important;\n    background:#8b7167!important;\n    color:#fff!important;\n    box-shadow:0 14px 30px rgba(0,0,0,.16)!important;\n  }\n  #esmeraldaDesktopServices .dct-service-groups{\n    grid-column:2!important;\n    width:100%!important;\n    min-width:0!important;\n    margin-top:-1cm!important;\n  }\n  #esmeraldaDesktopServices .dct-service-category+.dct-service-category{\n    margin-top:30px!important;\n  }\n  #esmeraldaDesktopServices .dct-service-category-heading{\n    display:flex!important;\n    min-height:30px!important;\n    align-items:center!important;\n    gap:12px!important;\n    margin:0 0 10px!important;\n    color:#d8b7aa!important;\n    font-size:13px!important;\n    font-weight:600!important;\n    letter-spacing:.12em!important;\n    text-transform:uppercase!important;\n  }\n  #esmeraldaDesktopServices .dct-service-category-heading:before{\n    width:34px!important;\n    height:1px!important;\n    flex:0 0 34px!important;\n    background:rgba(216,183,170,.38)!important;\n    content:\"\"!important;\n  }\n  #esmeraldaDesktopServices .dct-service-category-heading i{\n    height:1px!important;\n    flex:1 1 auto!important;\n    background:linear-gradient(90deg,rgba(216,183,170,.26),transparent)!important;\n  }\n  #esmeraldaDesktopServices .dct-service-category-list{\n    display:grid!important;\n    width:100%!important;\n    gap:11px!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card,\n  #esmeraldaDesktopServices .dct-service-card.has-description{\n    position:relative!important;\n    display:block!important;\n    width:100%!important;\n    min-height:104px!important;\n    padding:18px 24px!important;\n    overflow:hidden!important;\n    border:1px solid rgba(255,255,255,.12)!important;\n    border-radius:20px!important;\n    background:rgba(255,255,255,.045)!important;\n    box-shadow:0 10px 26px rgba(0,0,0,.06)!important;\n    color:#f7f3f0!important;\n    text-align:left!important;\n    text-decoration:none!important;\n    transition:transform 200ms ease,border-color 200ms ease,box-shadow 200ms ease,background 200ms ease!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card:hover{\n    border-color:rgba(255,255,255,.23)!important;\n    background:rgba(255,255,255,.075)!important;\n    box-shadow:0 16px 35px rgba(0,0,0,.10)!important;\n    transform:translateY(-3px)!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{\n    display:grid!important;\n    min-height:68px!important;\n    grid-template-columns:minmax(0,1fr) 112px 150px!important;\n    grid-template-rows:1fr!important;\n    align-items:center!important;\n    column-gap:18px!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-title{\n    grid-column:1!important;\n    grid-row:1!important;\n    align-self:center!important;\n    margin:0!important;\n    color:#f7f3f0!important;\n    font:500 clamp(24px,1.8vw,30px)/1.04 \"Cormorant Garamond\",Georgia,serif!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card:not(.has-variants).has-description .dct-service-card-body{\n    min-height:84px!important;\n    grid-template-rows:auto auto!important;\n    align-content:center!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card:not(.has-variants).has-description .dct-service-card-title{\n    grid-row:1!important;\n    align-self:end!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card-description{\n    grid-column:1!important;\n    grid-row:2!important;\n    align-self:start!important;\n    max-width:95%!important;\n    margin:7px 0 0!important;\n    color:#b9ada7!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card-description.is-empty{display:none!important}\n  #esmeraldaDesktopServices .dct-service-card-description p{\n    margin:0!important;\n    color:#b9ada7!important;\n    font-size:11.5px!important;\n    line-height:1.48!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-meta{\n    display:contents!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card-meta>small{\n    grid-column:2!important;\n    grid-row:1!important;\n    align-self:center!important;\n    justify-self:start!important;\n    display:inline-flex!important;\n    min-height:30px!important;\n    align-items:center!important;\n    padding:0 10px!important;\n    border:1px solid rgba(255,255,255,.10)!important;\n    border-radius:999px!important;\n    background:rgba(255,255,255,.06)!important;\n    color:#c9bdb6!important;\n    font-size:11px!important;\n    font-weight:650!important;\n    white-space:nowrap!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card-meta>small:before{\n    margin-right:6px!important;\n    content:\"◷\"!important;\n    font-size:12px!important;\n  }\n  #esmeraldaDesktopServices .dct-service-card-meta>b{\n    grid-column:3!important;\n    grid-row:1!important;\n    align-self:center!important;\n    justify-self:end!important;\n    width:150px!important;\n    min-width:150px!important;\n    color:#f7f3f0!important;\n    font:600 23px/1 \"Cormorant Garamond\",Georgia,serif!important;\n    text-align:right!important;\n    white-space:nowrap!important;\n  }\n  #esmeraldaDesktopServices .mct-more-services{\n    display:flex!important;\n    grid-column:2!important;\n    width:320px!important;\n    min-height:58px!important;\n    margin:26px auto 0!important;\n    align-items:center!important;\n    justify-content:center!important;\n    gap:9px!important;\n    border:1px solid rgba(255,255,255,.22)!important;\n    border-radius:10px!important;\n    background:rgba(255,255,255,.06)!important;\n    color:#f4eeea!important;\n    font:600 13px/1 \"Manrope\",Arial,sans-serif!important;\n  }\n  #esmeraldaDesktopServices .mct-more-services[hidden]{display:none!important}\n  #esmeraldaDesktopServices .mct-more-services svg{transition:transform .2s ease!important}\n  #esmeraldaDesktopServices .mct-more-services.is-open svg{transform:rotate(180deg)!important}\n  #esmeraldaDesktopServices .mct-more-services-mobile-copy{display:none!important}\n  #esmeraldaDesktopServices .mct-more-services-desktop-copy{display:inline!important}\n\n  /* CURRENT SHABLON-FOR-ONLY-MASTERS: ABOUT STRUCTURE. */\n  #esmeraldaDesktopAbout.mct-about{\n    padding:84px 0 88px!important;\n    background:radial-gradient(circle at 88% 18%,rgba(193,158,145,.13),transparent 31%),linear-gradient(180deg,#f8f3ef 0%,#f4ebe5 100%)!important;\n    color:#171513!important;\n  }\n  #esmeraldaDesktopAbout>.mct-shell{\n    width:min(calc(100% - 96px),1360px)!important;\n    margin:0 auto!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-head{\n    display:flex!important;\n    align-items:end!important;\n    justify-content:space-between!important;\n    gap:24px!important;\n  }\n  #esmeraldaDesktopAbout .mct-section-kicker{\n    margin:0!important;\n    color:#88786e!important;\n    font:600 12px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:.22em!important;\n    text-transform:uppercase!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-head h2{\n    margin:13px 0 0!important;\n    color:#171513!important;\n    font:500 clamp(54px,4.35vw,68px)/.94 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:-.035em!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-monogram{\n    color:rgba(113,91,83,.22)!important;\n    font:500 76px/.8 \"Cormorant Garamond\",Georgia,serif!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-card{\n    display:grid!important;\n    grid-template-columns:minmax(360px,.84fr) minmax(500px,1.16fr)!important;\n    height:clamp(600px,43vw,640px)!important;\n    min-height:0!important;\n    margin-top:28px!important;\n    overflow:hidden!important;\n    border:1px solid rgba(85,64,57,.10)!important;\n    border-radius:28px!important;\n    background:rgba(255,253,250,.80)!important;\n    box-shadow:0 18px 48px rgba(67,50,44,.075)!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-portrait-wrap{\n    position:relative!important;\n    height:100%!important;\n    min-height:540px!important;\n    overflow:hidden!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-portrait{\n    width:100%!important;\n    height:100%!important;\n    margin:0!important;\n    overflow:hidden!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-portrait img{\n    display:block!important;\n    width:100%!important;\n    height:100%!important;\n    object-fit:cover!important;\n    object-position:center 20%!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-copy{\n    display:flex!important;\n    flex-direction:column!important;\n    justify-content:center!important;\n    padding:clamp(34px,3.6vw,52px)!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-lead{\n    margin:0 0 12px!important;\n    color:#1d1a18!important;\n    font:500 clamp(30px,2.5vw,38px)/1.15 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:-.025em!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-copy>p:not(.mct-about-lead){\n    margin:8px 0 0!important;\n    color:#58504a!important;\n    font-size:13.5px!important;\n    line-height:1.62!important;\n  }\n  #esmeraldaDesktopAbout .mct-about-list{display:none!important}\n  #esmeraldaDesktopAbout .dct-about-amenities{\n    display:block!important;\n    margin-top:24px!important;\n    padding-top:20px!important;\n    border-top:1px solid rgba(83,63,55,.11)!important;\n  }\n  #esmeraldaDesktopAbout .dct-about-amenities-head{\n    display:flex!important;\n    align-items:center!important;\n    justify-content:space-between!important;\n    gap:22px!important;\n  }\n  #esmeraldaDesktopAbout .dct-about-amenities-head>span{\n    color:#716a66!important;\n    font-size:10px!important;\n  }\n  #esmeraldaDesktopAbout .dct-about-amenities-grid{\n    display:grid!important;\n    grid-template-columns:repeat(3,minmax(0,1fr))!important;\n    margin-top:16px!important;\n  }\n  #esmeraldaDesktopAbout .dct-about-amenities-grid article{\n    min-width:0!important;\n    padding:3px 15px 0 0!important;\n  }\n  #esmeraldaDesktopAbout .dct-about-amenities-grid article+article{\n    padding-left:15px!important;\n    border-left:1px solid rgba(83,63,55,.10)!important;\n  }\n  #esmeraldaDesktopAbout .dct-about-amenities-grid strong,\n  #esmeraldaDesktopAbout .dct-about-amenities-grid span{display:block!important}\n  #esmeraldaDesktopAbout .dct-about-amenities-grid strong{\n    color:#373331!important;\n    font:600 22px/1.08 \"Cormorant Garamond\",Georgia,serif!important;\n  }\n  #esmeraldaDesktopAbout .dct-about-amenities-grid span{\n    margin-top:5px!important;\n    color:#716a66!important;\n    font-size:9.5px!important;\n    line-height:1.42!important;\n  }\n\n  /* TEAM — remove card containers; keep only circular master icons + copy. */\n  #esmeraldaDesktopTeam .std-team-track{\n    gap:42px!important;\n  }\n  #esmeraldaDesktopTeam .std-master{\n    position:relative!important;\n    display:block!important;\n    width:100%!important;\n    min-width:0!important;\n    padding:0!important;\n    border:0!important;\n    border-radius:0!important;\n    background:transparent!important;\n    box-shadow:none!important;\n    color:#f7f3f0!important;\n    text-align:center!important;\n  }\n  #esmeraldaDesktopTeam .std-master-arrow{display:none!important}\n  #esmeraldaDesktopTeam .std-master-avatar{\n    width:min(100%,188px)!important;\n    height:auto!important;\n    aspect-ratio:1!important;\n    margin:0 auto!important;\n    border-radius:50%!important;\n    background:linear-gradient(145deg,#806b61,#5b4a43)!important;\n    border:1px solid rgba(255,255,255,.08)!important;\n    box-shadow:none!important;\n  }\n  #esmeraldaDesktopTeam .std-master-name{\n    margin-top:17px!important;\n  }\n  #esmeraldaDesktopTeam .std-master-cats{\n    margin-top:9px!important;\n    gap:8px!important;\n  }\n  #esmeraldaDesktopTeam .std-master-cat{\n    min-height:0!important;\n    padding:0!important;\n    border:0!important;\n    border-radius:0!important;\n    background:transparent!important;\n    color:#bdb5b0!important;\n    font-size:10px!important;\n  }\n\n  /* REVIEWS — restore the approved pre-rebuild PC proportions and stable marquee. */\n  #esmeraldaDesktopReviews.std-reviews{\n    position:relative!important;\n    box-sizing:border-box!important;\n    width:100%!important;\n    height:auto!important;\n    min-height:760px!important;\n    overflow:hidden!important;\n    padding:65px 0 52px!important;\n    background:#e9e2da!important;\n    color:#171513!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-head{\n    width:min(calc(100% - 128px),1408px)!important;\n    margin:0 auto!important;\n    text-align:center!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-kicker{\n    margin:0!important;\n    color:#746c66!important;\n    font:500 17px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:.30em!important;\n    text-transform:uppercase!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-title{\n    margin:22px 0 0!important;\n    color:#151517!important;\n    font:500 76px/.92 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:-.035em!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-score{margin-top:44px!important;text-align:center!important}\n  #esmeraldaDesktopReviews .std-reviews-score>strong{\n    display:block!important;\n    margin:0!important;\n    color:#151517!important;\n    font:500 88px/.78 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:-.045em!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-stars{\n    display:block!important;\n    margin-top:21px!important;\n    color:#b78d4f!important;\n    font-size:34px!important;\n    line-height:1!important;\n    letter-spacing:6px!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-count{\n    margin-top:20px!important;\n    color:#716862!important;\n    font:400 18px/1 \"Manrope\",Arial,sans-serif!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-viewport{\n    position:relative!important;\n    box-sizing:border-box!important;\n    width:100%!important;\n    margin-top:35px!important;\n    padding:0 64px 4px!important;\n    overflow:hidden!important;\n    cursor:grab!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-loop{\n    display:flex!important;\n    align-items:stretch!important;\n    gap:16px!important;\n    width:max-content!important;\n    will-change:transform!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-set{\n    display:flex!important;\n    flex:0 0 auto!important;\n    align-items:stretch!important;\n    gap:16px!important;\n  }\n  #esmeraldaDesktopReviews .std-review-card{\n    box-sizing:border-box!important;\n    flex:0 0 459px!important;\n    width:459px!important;\n    height:320px!important;\n    min-width:459px!important;\n    min-height:320px!important;\n    max-width:none!important;\n    padding:31px 30px 28px!important;\n    border:1px solid rgba(66,55,49,.15)!important;\n    border-radius:12px!important;\n    background:rgba(255,255,255,.34)!important;\n    color:#19191b!important;\n    text-decoration:none!important;\n    box-shadow:none!important;\n  }\n  #esmeraldaDesktopReviews .std-review-head{\n    display:grid!important;\n    grid-template-columns:70px minmax(0,1fr)!important;\n    gap:24px!important;\n    align-items:center!important;\n  }\n  #esmeraldaDesktopReviews .std-review-avatar{\n    width:70px!important;\n    height:70px!important;\n    border-radius:50%!important;\n    display:grid!important;\n    place-items:center!important;\n    background:#d7cec6!important;\n    border:1px solid rgba(66,55,49,.10)!important;\n    color:#514943!important;\n    font:500 32px/1 \"Cormorant Garamond\",Georgia,serif!important;\n  }\n  #esmeraldaDesktopReviews .std-review-name{\n    display:block!important;\n    margin:0!important;\n    color:#2a2522!important;\n    font:600 25px/1 \"Cormorant Garamond\",Georgia,serif!important;\n  }\n  #esmeraldaDesktopReviews .std-review-meta{\n    display:block!important;\n    margin-top:7px!important;\n    color:#818087!important;\n    font:500 11px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:.13em!important;\n    text-transform:uppercase!important;\n  }\n  #esmeraldaDesktopReviews .std-review-stars{\n    display:block!important;\n    margin-top:8px!important;\n    color:#b78d4f!important;\n    font-size:16px!important;\n    line-height:1!important;\n    letter-spacing:1.5px!important;\n  }\n  #esmeraldaDesktopReviews .std-review-text{\n    display:-webkit-box!important;\n    margin:31px 0 0!important;\n    min-height:95px!important;\n    overflow:hidden!important;\n    color:#4f4843!important;\n    font:400 16px/1.52 \"Manrope\",Arial,sans-serif!important;\n    -webkit-box-orient:vertical!important;\n    -webkit-line-clamp:4!important;\n  }\n  #esmeraldaDesktopReviews .std-review-more{\n    display:block!important;\n    margin-top:18px!important;\n    color:#67666c!important;\n    font:400 12px/1 \"Manrope\",Arial,sans-serif!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-actions{\n    display:flex!important;\n    justify-content:center!important;\n    margin-top:27px!important;\n  }\n  #esmeraldaDesktopReviews .std-reviews-all{\n    width:458px!important;\n    height:55px!important;\n    border:1px solid rgba(66,55,49,.18)!important;\n    border-radius:7px!important;\n    background:rgba(255,255,255,.18)!important;\n    display:flex!important;\n    align-items:center!important;\n    justify-content:center!important;\n    color:#242327!important;\n    font:500 14px/1 \"Manrope\",Arial,sans-serif!important;\n    letter-spacing:.14em!important;\n    text-transform:uppercase!important;\n  }\n\n  /* CONTACTS — clear desktop adaptation of current mobile contact block. */\n  #esmeraldaDesktopContacts.std-contact{\n    padding:82px 70px 0!important;\n    background:#2f2926!important;\n    color:#f7f3f0!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-inner{\n    display:block!important;\n    width:min(100%,1360px)!important;\n    margin:0 auto!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-head{\n    display:flex!important;\n    align-items:flex-end!important;\n    justify-content:space-between!important;\n    gap:28px!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-kicker{color:#b8ada7!important}\n  #esmeraldaDesktopContacts .std-contact-title{\n    margin:14px 0 0!important;\n    color:#f7f3f0!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-status{\n    position:static!important;\n    display:inline-flex!important;\n    min-height:38px!important;\n    align-items:center!important;\n    gap:7px!important;\n    padding:8px 12px!important;\n    border:1px solid rgba(255,255,255,.16)!important;\n    border-radius:999px!important;\n    background:#493336!important;\n    color:#d59a9f!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-status.open{\n    background:#2e4133!important;\n    border-color:#4d6752!important;\n    color:#a9d5b0!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-body{\n    display:grid!important;\n    grid-template-columns:minmax(420px,.9fr) minmax(0,1.1fr)!important;\n    gap:34px!important;\n    margin-top:34px!important;\n    align-items:stretch!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-list{\n    display:grid!important;\n    gap:10px!important;\n    margin:0!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-card{\n    min-height:76px!important;\n    grid-template-columns:46px minmax(0,1fr)!important;\n    gap:13px!important;\n    padding:13px 15px!important;\n    border:1px solid rgba(255,255,255,.13)!important;\n    border-radius:14px!important;\n    background:rgba(255,255,255,.06)!important;\n    color:#f7f3f0!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-card-icon{\n    width:40px!important;\n    height:40px!important;\n    display:grid!important;\n    place-items:center!important;\n    border-radius:50%!important;\n    background:rgba(255,255,255,.08)!important;\n    color:#f0e8e3!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-card-title{\n    color:#f7f3f0!important;\n    font:500 19px/1.15 \"Cormorant Garamond\",Georgia,serif!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-card-sub{\n    margin-top:5px!important;\n    color:#c7bbb4!important;\n    font-size:10.5px!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-right{\n    display:flex!important;\n    flex-direction:column!important;\n    padding:0!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-map{\n    height:100%!important;\n    min-height:334px!important;\n    border:1px solid rgba(255,255,255,.12)!important;\n    border-radius:18px!important;\n    overflow:hidden!important;\n    background:#423a36!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-actions{\n    display:grid!important;\n    grid-template-columns:1fr 1.15fr!important;\n    gap:10px!important;\n    margin-top:12px!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-action-btn{\n    height:50px!important;\n    border-radius:10px!important;\n    display:flex!important;\n    align-items:center!important;\n    justify-content:center!important;\n    text-decoration:none!important;\n    font:500 12px/1 \"Manrope\",Arial,sans-serif!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-call{\n    border:1px solid rgba(255,255,255,.22)!important;\n    color:#f7f3f0!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-route{\n    background:#f4ede8!important;\n    color:#2b2522!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-bottom{\n    width:calc(100% + 140px)!important;\n    margin:42px -70px 0!important;\n    display:block!important;\n  }\n  #esmeraldaDesktopContacts .std-contact-brand{\n    width:100%!important;\n    min-height:96px!important;\n    padding:12px 24px!important;\n    border:0!important;\n    border-radius:0!important;\n    background:#11100f!important;\n    color:#fff!important;\n    display:flex!important;\n    flex-direction:column!important;\n    align-items:center!important;\n    justify-content:center!important;\n    gap:8px!important;\n    box-shadow:none!important;\n  }\n  #esmeraldaDesktopContacts .br-tanem-mark{\n    width:30px!important;\n    height:30px!important;\n    border:1px solid rgba(255,255,255,.42)!important;\n    border-radius:8px!important;\n    display:grid!important;\n    place-items:center!important;\n    color:#fff!important;\n    font:500 21px/1 \"Cormorant Garamond\",Georgia,serif!important;\n  }\n  #esmeraldaDesktopContacts .br-tanem-copy{\n    display:block!important;\n    color:#cfc8c4!important;\n    font:400 10px/1.2 \"Manrope\",Arial,sans-serif!important;\n    text-align:center!important;\n  }\n  #esmeraldaDesktopContacts .br-tanem-copy strong{\n    display:inline!important;\n    color:#fff!important;\n    font:500 15px/1 \"Cormorant Garamond\",Georgia,serif!important;\n  }\n\n  @media(max-width:1199px){\n    #esmeraldaDesktopServices.mct-prices>.mct-shell{\n      width:min(calc(100% - 56px),1360px)!important;\n      grid-template-columns:minmax(255px,.68fr) minmax(0,1.52fr)!important;\n      column-gap:34px!important;\n    }\n    #esmeraldaDesktopServices .mct-price-head{\n      top:96px!important;\n    }\n    #esmeraldaDesktopServices .mct-price-head h2{font-size:47.3px!important}\n    #esmeraldaDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{\n      grid-template-columns:minmax(0,1fr) 98px 132px!important;\n      column-gap:14px!important;\n    }\n    #esmeraldaDesktopServices .dct-service-card-meta>b{\n      width:132px!important;\n      min-width:132px!important;\n    }\n    #esmeraldaDesktopAbout>.mct-shell{\n      width:min(calc(100% - 56px),1360px)!important;\n    }\n    #esmeraldaDesktopAbout .mct-about-card{\n      grid-template-columns:minmax(330px,.84fr) minmax(0,1.16fr)!important;\n    }\n    #esmeraldaDesktopContacts.std-contact{padding-left:42px!important;padding-right:42px!important}\n    #esmeraldaDesktopContacts .std-contact-bottom{\n      width:calc(100% + 84px)!important;\n      margin-left:-42px!important;\n      margin-right:-42px!important;\n    }\n  }\n  @media(max-width:930px){\n    .std-hero-frame{margin-top:18px!important}\n    .std-copy-inner{width:min(100% - 44px,540px)!important;margin-top:90px!important}\n\n    #esmeraldaDesktopServices.mct-prices>.mct-shell{\n      grid-template-columns:1fr!important;\n      row-gap:26px!important;\n    }\n    #esmeraldaDesktopServices .mct-price-head{\n      position:relative!important;\n      top:auto!important;\n      grid-column:1!important;\n      padding:0!important;\n      transform:none!important;\n    }\n    #esmeraldaDesktopServices .mct-price-head:after{display:none!important}\n    #esmeraldaDesktopServices .mct-tabs-ribbon-wrap,\n    #esmeraldaDesktopServices .dct-service-groups,\n    #esmeraldaDesktopServices .mct-more-services{grid-column:1!important}\n    #esmeraldaDesktopServices .dct-service-groups{margin-top:0!important}\n\n    #esmeraldaDesktopAbout .mct-about-card{\n      grid-template-columns:1fr!important;\n      height:auto!important;\n    }\n    #esmeraldaDesktopAbout .mct-about-portrait-wrap{min-height:390px!important}\n    #esmeraldaDesktopAbout .dct-about-amenities-grid{grid-template-columns:1fr!important;gap:12px!important}\n    #esmeraldaDesktopAbout .dct-about-amenities-grid article+article{padding-left:0!important;border-left:0!important}\n\n    #esmeraldaDesktopContacts .std-contact-body{grid-template-columns:1fr!important}\n    #esmeraldaDesktopContacts .std-contact-map{min-height:330px!important}\n  }\n}\n";
  document.head.appendChild(desktopRebuildCss);


  const desktopFinishCss=document.createElement('style');
  desktopFinishCss.id='esmeralda-desktop-finish-v1';
  desktopFinishCss.textContent="\n@media(min-width:768px){\n  html,body{scroll-behavior:auto!important;overscroll-behavior-y:auto!important}\n  .std-hero{height:calc(100dvh - 80px)!important;min-height:0!important}\n  .std-hero-copy{min-height:0!important}\n  .std-hero-frame{min-height:0!important}\n  #esmeraldaDesktopPortfolio,#esmeraldaDesktopServices,#esmeraldaDesktopAbout,#esmeraldaDesktopTeam,#esmeraldaDesktopReviews,#esmeraldaDesktopContacts{scroll-margin-top:80px!important}\n}\n@media(min-width:768px) and (max-height:820px){\n  .std-hero-frame{margin-top:18px!important}\n  .std-copy-inner{margin-top:72px!important;width:min(100% - 56px,540px)!important}\n  .std-hero-kicker{margin-bottom:20px!important}\n  .std-logo-sub{margin-bottom:22px!important}\n  .std-tagline{margin-bottom:22px!important;font-size:21px!important}\n  .std-meta{margin-bottom:20px!important}\n  .std-meta-icon{width:52px!important;height:52px!important;flex-basis:52px!important}\n  .std-btn{height:58px!important}\n  .std-scroll-hint{bottom:14px!important}\n  .std-scroll-circle{width:46px!important;height:46px!important}\n}\n";
  document.head.appendChild(desktopFinishCss);

  const luxuryHeroCss=document.createElement('style');
  luxuryHeroCss.id='esmeralda-desktop-luxury-hero-v1';
  luxuryHeroCss.textContent="\n@media(min-width:768px){\n  /* Luxury desktop hero only. Mobile remains untouched. */\n  .std-header{\n    height:80px!important;\n    padding:0 48px!important;\n    background:#f8f4ee!important;\n    border-bottom:1px solid rgba(77,59,50,.055)!important;\n  }\n  .std-header-brand{\n    width:auto!important;\n    min-width:0!important;\n    align-items:flex-start!important;\n  }\n  .std-header-brand-main{\n    font-size:31px!important;\n    letter-spacing:.075em!important;\n  }\n  .std-header-brand-sub{\n    margin-top:7px!important;\n    font-size:8px!important;\n    letter-spacing:.38em!important;\n    padding-left:2px!important;\n  }\n  .std-header-right{\n    margin-left:auto!important;\n    gap:19px!important;\n    transform:none!important;\n  }\n  .std-phone{font-size:16px!important}\n  .std-header-book{\n    width:158px!important;\n    min-width:158px!important;\n    height:48px!important;\n    font-size:15px!important;\n  }\n\n  .std-hero{\n    position:relative!important;\n    isolation:isolate!important;\n    display:grid!important;\n    grid-template-columns:46.5% 53.5%!important;\n    height:calc(100dvh - 80px)!important;\n    min-height:690px!important;\n    overflow:hidden!important;\n    background:\n      radial-gradient(700px 520px at 22% 48%,rgba(255,255,255,.52),transparent 68%),\n      radial-gradient(620px 460px at 76% 38%,rgba(183,143,120,.09),transparent 72%),\n      linear-gradient(118deg,#f8f4ee 0%,#f6efe9 56%,#f2e8e0 100%)!important;\n  }\n  .std-hero:before,\n  .std-hero:after{\n    content:\"\"!important;\n    position:absolute!important;\n    z-index:0!important;\n    width:1040px!important;\n    height:1040px!important;\n    border:1px solid rgba(151,112,91,.17)!important;\n    border-radius:50%!important;\n    pointer-events:none!important;\n    background:transparent!important;\n  }\n  .std-hero:before{\n    left:33%!important;\n    top:-600px!important;\n  }\n  .std-hero:after{\n    width:820px!important;\n    height:820px!important;\n    right:-410px!important;\n    bottom:-540px!important;\n  }\n\n  .std-hero-copy{\n    position:relative!important;\n    z-index:2!important;\n    min-width:0!important;\n    align-items:stretch!important;\n    justify-content:flex-start!important;\n    padding:0 40px 0 78px!important;\n    overflow:visible!important;\n    background:transparent!important;\n  }\n  .std-hero-copy:before{\n    content:\"\"!important;\n    position:absolute!important;\n    z-index:0!important;\n    width:540px!important;\n    height:540px!important;\n    left:-365px!important;\n    top:70px!important;\n    border:1px solid rgba(151,112,91,.10)!important;\n    border-radius:50%!important;\n    opacity:1!important;\n    filter:none!important;\n    transform:none!important;\n    background:transparent!important;\n    -webkit-mask-image:none!important;\n    mask-image:none!important;\n    pointer-events:none!important;\n  }\n  .std-hero-copy:after{\n    content:\"Красота — это уверенность\\Aв себе каждый день.\"!important;\n    white-space:pre!important;\n    position:absolute!important;\n    left:78px!important;\n    bottom:44px!important;\n    z-index:3!important;\n    padding-left:58px!important;\n    color:#9b7768!important;\n    font:500 italic 19px/1.24 \"Cormorant Garamond\",Georgia,serif!important;\n    letter-spacing:.01em!important;\n    background:linear-gradient(#9b7768,#9b7768) left 9px/38px 1px no-repeat!important;\n    pointer-events:none!important;\n  }\n\n  .std-hero-frame{\n    position:relative!important;\n    z-index:2!important;\n    width:min(100%,610px)!important;\n    height:100%!important;\n    min-height:0!important;\n    margin:0!important;\n    border:0!important;\n    border-radius:0!important;\n    background:transparent!important;\n    box-shadow:none!important;\n    display:flex!important;\n    justify-content:flex-start!important;\n    overflow:visible!important;\n  }\n  .std-hero-frame:after{display:none!important}\n\n  .std-copy-inner{\n    position:relative!important;\n    z-index:4!important;\n    width:min(100%,570px)!important;\n    margin:clamp(72px,10.5vh,120px) 0 0!important;\n    transform:none!important;\n    text-align:left!important;\n  }\n  .std-hero-kicker{\n    margin:0 0 28px!important;\n    color:#9b7768!important;\n    font-size:12px!important;\n    letter-spacing:.43em!important;\n    text-align:left!important;\n  }\n  .std-logo{\n    max-width:100%!important;\n    margin:0!important;\n    color:#211d1a!important;\n    font-size:clamp(64px,5.35vw,88px)!important;\n    line-height:.84!important;\n    letter-spacing:.055em!important;\n    text-indent:0!important;\n    text-align:left!important;\n    white-space:nowrap!important;\n  }\n  .std-logo-sub{\n    width:min(100%,540px)!important;\n    margin:22px 0 38px!important;\n    color:#4f443f!important;\n    font-size:12px!important;\n    letter-spacing:.43em!important;\n    text-indent:0!important;\n    text-align:center!important;\n  }\n  .std-tagline{\n    max-width:540px!important;\n    margin:0 0 34px!important;\n    color:#2d2724!important;\n    font-size:23px!important;\n    line-height:1.35!important;\n    text-align:left!important;\n  }\n  .std-meta{\n    width:min(100%,540px)!important;\n    display:grid!important;\n    grid-template-columns:1fr 1px 1.13fr!important;\n    gap:20px!important;\n    margin:0 0 30px!important;\n  }\n  .std-meta-item{justify-content:flex-start!important}\n  .std-meta-icon{\n    width:56px!important;\n    height:56px!important;\n    flex-basis:56px!important;\n    background:rgba(255,255,255,.20)!important;\n    border-color:rgba(103,78,65,.15)!important;\n  }\n  .std-meta-icon svg{width:24px!important;height:24px!important}\n  .std-meta-text{font-size:15px!important;line-height:1.38!important}\n  .std-meta-divider{height:58px!important}\n  .std-actions{\n    width:min(100%,540px)!important;\n    gap:11px!important;\n  }\n  .std-btn{\n    height:62px!important;\n    border-radius:9px!important;\n    font-size:16px!important;\n  }\n  .std-btn-primary{\n    background:#a58270!important;\n    border-color:#a58270!important;\n  }\n  .std-btn-primary:hover{background:#967361!important}\n  .std-scroll-hint{display:none!important}\n\n  .std-hero-photo{\n    position:relative!important;\n    z-index:3!important;\n    min-width:0!important;\n    height:auto!important;\n    margin:36px 48px 36px 0!important;\n    overflow:hidden!important;\n    border:1px solid rgba(109,82,68,.16)!important;\n    border-radius:28px!important;\n    background:#e7ddd4!important;\n    box-shadow:\n      0 24px 70px rgba(75,53,43,.11),\n      inset 0 0 0 1px rgba(255,255,255,.18)!important;\n    cursor:pointer!important;\n  }\n  .std-hero-photo:before{\n    content:\"\"!important;\n    position:absolute!important;\n    inset:0!important;\n    z-index:2!important;\n    pointer-events:none!important;\n    border-radius:inherit!important;\n    box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)!important;\n  }\n  .std-hero-photo video,\n  .std-hero-photo img{\n    position:absolute!important;\n    inset:0!important;\n    width:100%!important;\n    height:100%!important;\n    object-fit:cover!important;\n    object-position:center center!important;\n    border-radius:inherit!important;\n    display:block!important;\n  }\n  .std-hero-photo video{\n    pointer-events:auto!important;\n    cursor:pointer!important;\n  }\n}\n\n@media(min-width:768px) and (max-width:1180px){\n  .std-header{padding:0 28px!important}\n  .std-header-brand-main{font-size:27px!important}\n  .std-header-right{gap:10px!important}\n  .std-header-book{width:132px!important;min-width:132px!important}\n  .std-hero{grid-template-columns:48% 52%!important}\n  .std-hero-copy{padding-left:42px!important;padding-right:24px!important}\n  .std-hero-copy:after{left:42px!important}\n  .std-copy-inner{width:min(100%,500px)!important;margin-top:clamp(58px,8vh,86px)!important}\n  .std-logo{font-size:clamp(52px,5.1vw,66px)!important}\n  .std-logo-sub{margin-bottom:27px!important}\n  .std-tagline{font-size:20px!important;margin-bottom:26px!important}\n  .std-meta{gap:13px!important;margin-bottom:24px!important}\n  .std-meta-icon{width:50px!important;height:50px!important;flex-basis:50px!important}\n  .std-meta-text{font-size:13px!important}\n  .std-btn{height:56px!important;font-size:14px!important}\n  .std-hero-photo{margin:26px 28px 26px 0!important;border-radius:22px!important}\n}\n\n@media(min-width:768px) and (max-height:820px){\n  .std-copy-inner{margin-top:48px!important}\n  .std-hero-kicker{margin-bottom:18px!important}\n  .std-logo-sub{margin-top:15px!important;margin-bottom:20px!important}\n  .std-tagline{margin-bottom:20px!important;font-size:19px!important}\n  .std-meta{margin-bottom:18px!important}\n  .std-meta-icon{width:48px!important;height:48px!important;flex-basis:48px!important}\n  .std-btn{height:54px!important}\n  .std-hero-copy:after{bottom:24px!important;font-size:17px!important}\n  .std-hero-photo{margin-top:24px!important;margin-bottom:24px!important}\n}\n";
  document.head.appendChild(luxuryHeroCss);

  const luxuryHeroFineTuneCss=document.createElement('style');
  luxuryHeroFineTuneCss.id='esmeralda-desktop-luxury-hero-v2';
  luxuryHeroFineTuneCss.textContent="\n@media(min-width:768px){\n  /* Fine-tuning of the approved luxury desktop hero. */\n  html{scrollbar-width:none!important}\n  html::-webkit-scrollbar,body::-webkit-scrollbar{width:0!important;height:0!important;display:none!important}\n\n  .std-header{padding-left:36px!important;padding-right:36px!important}\n  .std-header-right{margin-left:auto!important;transform:translateX(0)!important}\n\n  .std-hero{\n    background:\n      radial-gradient(330px 470px at -4% 24%,rgba(88,61,49,.115) 0%,rgba(125,92,74,.065) 18%,transparent 66%),\n      radial-gradient(420px 560px at 104% 82%,rgba(93,65,52,.115) 0%,rgba(137,101,80,.06) 19%,transparent 66%),\n      radial-gradient(520px 320px at 69% 2%,rgba(170,129,104,.085),transparent 72%),\n      radial-gradient(650px 500px at 25% 50%,rgba(255,255,255,.55),transparent 70%),\n      linear-gradient(118deg,#f9f5ef 0%,#f6efe9 53%,#f1e7df 100%)!important;\n  }\n  .std-hero:before{\n    left:30%!important;\n    top:-620px!important;\n    border-color:rgba(146,106,85,.20)!important;\n    box-shadow:0 0 90px rgba(150,112,91,.035)!important;\n  }\n  .std-hero:after{\n    right:-395px!important;\n    bottom:-525px!important;\n    border-color:rgba(146,106,85,.16)!important;\n    box-shadow:0 0 100px rgba(150,112,91,.04)!important;\n  }\n  .std-hero-copy{\n    padding-left:58px!important;\n    padding-right:58px!important;\n  }\n  .std-hero-copy:before{\n    left:-355px!important;\n    top:88px!important;\n    border-color:rgba(146,106,85,.12)!important;\n    box-shadow:0 0 80px rgba(108,77,61,.035)!important;\n  }\n  .std-copy-inner{\n    width:100%!important;\n    max-width:570px!important;\n    margin-left:auto!important;\n    margin-right:auto!important;\n    text-align:center!important;\n  }\n  .std-hero-kicker,\n  .std-logo,\n  .std-logo-sub,\n  .std-tagline{text-align:center!important}\n  .std-logo{margin-left:auto!important;margin-right:auto!important}\n  .std-logo-sub,\n  .std-tagline,\n  .std-meta,\n  .std-actions{\n    margin-left:auto!important;\n    margin-right:auto!important;\n  }\n  .std-meta-item{justify-content:center!important;text-align:left!important}\n  .std-actions{justify-content:center!important}\n\n  .std-hero-photo{\n    margin:36px 36px 36px 0!important;\n    border-color:rgba(112,83,68,.20)!important;\n    box-shadow:\n      0 34px 82px rgba(71,48,38,.18),\n      -18px 10px 42px rgba(91,64,51,.075),\n      18px 10px 42px rgba(91,64,51,.07),\n      0 0 0 7px rgba(255,255,255,.16),\n      inset 0 0 0 1px rgba(255,255,255,.24)!important;\n  }\n  .std-hero-photo:before{\n    box-shadow:\n      inset 0 0 0 1px rgba(255,255,255,.18),\n      inset 0 -34px 70px rgba(55,39,31,.035)!important;\n  }\n}\n@media(min-width:768px) and (max-width:1180px){\n  .std-header{padding-left:26px!important;padding-right:26px!important}\n  .std-hero-copy{padding-left:34px!important;padding-right:34px!important}\n  .std-hero-photo{margin:26px 26px 26px 0!important}\n}\n";
  document.head.appendChild(luxuryHeroFineTuneCss);

  const luxuryHeroCenterCss=document.createElement('style');
  luxuryHeroCenterCss.id='esmeralda-desktop-luxury-hero-v3';
  luxuryHeroCenterCss.textContent="\n@media(min-width:768px){\n  /* Center the hero content in the entire left column and restore full CTA sizing. */\n  .std-hero-copy{padding-left:0!important;padding-right:0!important}\n  .std-hero-frame{\n    width:100%!important;\n    max-width:none!important;\n    justify-content:center!important;\n  }\n  .std-copy-inner{\n    width:min(calc(100% - 72px),570px)!important;\n    max-width:570px!important;\n    margin-left:auto!important;\n    margin-right:auto!important;\n  }\n  .std-actions{\n    width:min(100%,540px)!important;\n    display:grid!important;\n    grid-template-columns:1fr!important;\n    gap:11px!important;\n  }\n  .std-actions .std-btn{\n    width:100%!important;\n    min-width:0!important;\n    height:62px!important;\n    padding:0 28px!important;\n    font-size:16px!important;\n  }\n}\n@media(min-width:768px) and (max-width:1180px){\n  .std-hero-copy{padding-left:0!important;padding-right:0!important}\n  .std-copy-inner{width:min(calc(100% - 52px),500px)!important}\n  .std-actions .std-btn{height:58px!important;font-size:15px!important}\n}\n";
  document.head.appendChild(luxuryHeroCenterCss);

  const luxuryHeroExactCenterCss=document.createElement('style');
  luxuryHeroExactCenterCss.id='esmeralda-desktop-luxury-hero-v4';
  luxuryHeroExactCenterCss.textContent="\n@media(min-width:768px){\n  /* Exact optical center: viewport left edge -> actual left edge of video. */\n  .std-hero-copy{position:static!important}\n  .std-hero-frame{position:static!important}\n  .std-copy-inner{\n    position:absolute!important;\n    z-index:4!important;\n    left:0!important;\n    top:0!important;\n    width:46.5%!important;\n    max-width:none!important;\n    height:100%!important;\n    margin:0!important;\n    padding:clamp(72px,10.5vh,120px) 36px 118px!important;\n    box-sizing:border-box!important;\n    display:flex!important;\n    flex-direction:column!important;\n    align-items:center!important;\n    justify-content:flex-start!important;\n    text-align:center!important;\n  }\n  .std-hero-kicker,.std-logo,.std-logo-sub,.std-tagline{\n    width:100%!important;\n    text-align:center!important;\n  }\n  .std-logo{\n    margin-left:auto!important;\n    margin-right:auto!important;\n    white-space:nowrap!important;\n  }\n  .std-logo-sub,.std-tagline,.std-meta,.std-actions{\n    margin-left:auto!important;\n    margin-right:auto!important;\n  }\n  .std-meta{\n    justify-content:center!important;\n    justify-items:center!important;\n  }\n  .std-meta-item{justify-content:center!important}\n  .std-actions{\n    width:min(100%,540px)!important;\n    grid-template-columns:1fr 1fr!important;\n    gap:12px!important;\n  }\n  .std-actions .std-btn{\n    width:100%!important;\n    height:62px!important;\n    font-size:16px!important;\n  }\n}\n@media(min-width:768px) and (max-width:1180px){\n  .std-copy-inner{\n    width:48%!important;\n    padding:clamp(58px,8vh,86px) 26px 100px!important;\n  }\n  .std-actions{width:min(100%,500px)!important}\n  .std-actions .std-btn{height:58px!important;font-size:15px!important}\n}\n@media(min-width:768px) and (max-height:820px){\n  .std-copy-inner{padding-top:48px!important;padding-bottom:82px!important}\n}\n";
  document.head.appendChild(luxuryHeroExactCenterCss);

  const luxuryHeroTrueCenterCss=document.createElement('style');
  luxuryHeroTrueCenterCss.id='esmeralda-desktop-luxury-hero-v7';
  luxuryHeroTrueCenterCss.textContent="\n@media(min-width:768px){\n  /* One source of truth: left pane ends exactly where the video begins. */\n  .std-hero{--hero-video-start:46.5%}\n  .std-copy-inner{\n    left:0!important;\n    width:var(--hero-video-start)!important;\n    padding-left:36px!important;\n    padding-right:36px!important;\n    transform:none!important;\n    align-items:center!important;\n    text-align:center!important;\n  }\n  .std-copy-inner > *{margin-left:auto!important;margin-right:auto!important}\n  .std-hero-kicker,.std-logo,.std-logo-sub,.std-tagline{text-align:center!important}\n  .std-meta{justify-content:center!important;justify-items:center!important}\n  .std-meta-item{justify-content:center!important}\n}\n@media(min-width:768px) and (max-width:1180px){\n  .std-hero{--hero-video-start:48%}\n  .std-copy-inner{\n    width:var(--hero-video-start)!important;\n    padding-left:26px!important;\n    padding-right:26px!important;\n    transform:none!important;\n  }\n}\n";
  document.head.appendChild(luxuryHeroTrueCenterCss);

  const desktopCtaSizeOnlyCss=document.createElement('style');
  desktopCtaSizeOnlyCss.id='esmeralda-desktop-cta-size-only-v8';
  desktopCtaSizeOnlyCss.textContent="\n@media(min-width:768px){\n  /* CTA size only. Do not alter hero positioning/layout. */\n  .std-actions .std-btn{\n    height:62px!important;\n    padding:0 28px!important;\n    font-size:16px!important;\n  }\n}\n@media(min-width:768px) and (max-width:1180px){\n  .std-actions .std-btn{\n    height:58px!important;\n    padding:0 26px!important;\n    font-size:15px!important;\n  }\n}\n";
  document.head.appendChild(desktopCtaSizeOnlyCss);

  const desktopCtaStackCss=document.createElement('style');
  desktopCtaStackCss.id='esmeralda-desktop-cta-stack-v9';
  desktopCtaStackCss.textContent="\n@media(min-width:768px){\n  /* Buttons only: stacked; each button takes the previous combined two-button width. */\n  .std-actions{\n    display:grid!important;\n    grid-template-columns:1fr!important;\n    width:min(100%,540px)!important;\n    gap:11px!important;\n  }\n  .std-actions .std-btn{\n    width:100%!important;\n    min-width:0!important;\n    height:62px!important;\n    padding:0 28px!important;\n    font-size:16px!important;\n  }\n}\n@media(min-width:768px) and (max-width:1180px){\n  .std-actions{width:min(100%,500px)!important}\n  .std-actions .std-btn{\n    width:100%!important;\n    height:58px!important;\n    padding:0 26px!important;\n    font-size:15px!important;\n  }\n}\n";
  document.head.appendChild(desktopCtaStackCss);

  const desktopCtaExactCss=document.createElement('style');
  desktopCtaExactCss.id='esmeralda-desktop-cta-exact-v10';
  desktopCtaExactCss.textContent="\n@media(min-width:768px){\n  /* Exact CTA structure only: first button above second, same full width. */\n  #esmeraldaDesktopTop .std-actions{\n    display:flex!important;\n    flex-direction:column!important;\n    align-items:stretch!important;\n    justify-content:flex-start!important;\n    width:540px!important;\n    max-width:calc(100% - 72px)!important;\n    gap:12px!important;\n  }\n  #esmeraldaDesktopTop .std-actions > #stdBookBtn,\n  #esmeraldaDesktopTop .std-actions > a.std-btn{\n    display:flex!important;\n    flex:0 0 auto!important;\n    width:100%!important;\n    max-width:none!important;\n    min-width:0!important;\n    box-sizing:border-box!important;\n    height:62px!important;\n    margin:0!important;\n  }\n}\n@media(min-width:768px) and (max-width:1180px){\n  #esmeraldaDesktopTop .std-actions{\n    width:500px!important;\n    max-width:calc(100% - 52px)!important;\n  }\n  #esmeraldaDesktopTop .std-actions > #stdBookBtn,\n  #esmeraldaDesktopTop .std-actions > a.std-btn{height:58px!important}\n}\n";
  document.head.appendChild(desktopCtaExactCss);

  const desktopCopyDownOnlyCss=document.createElement('style');
  desktopCopyDownOnlyCss.id='esmeralda-desktop-copy-down-only-v13';
  desktopCopyDownOnlyCss.textContent="\n@media(min-width:768px){\n  /* Position only: move the existing left mini-block lower as one intact unit.\n     Header is outside .std-hero, so center within the hero's remaining vertical area. */\n  #esmeraldaDesktopTop .std-copy-inner{\n    top:50%!important;\n    bottom:auto!important;\n    height:auto!important;\n    padding-top:0!important;\n    padding-bottom:0!important;\n    transform:translateY(calc(-50% + 36px - 1cm))!important;\n  }\n}\n";
  document.head.appendChild(desktopCopyDownOnlyCss);

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
        <div class="std-hero-frame">
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
          <a class="std-scroll-hint" href="#esmeraldaDesktopPortfolio" aria-label="Листайте вниз"><span class="std-scroll-label">Листайте вниз</span><span class="std-scroll-circle" aria-hidden="true">↓</span></a>
        </div>
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
          <p class="std-portfolio-copy">Вдохновляйтесь реальными результатами наших мастеров и выбирайте свой идеальный образ.</p>
        </div>
        <div class="std-portfolio-grid">
          ${PORTFOLIO.map((item,i)=>`<button class="std-work" type="button" data-portfolio-index="${i}" aria-label="Открыть фотографию"><img src="${item.src}" alt="${item.alt}" loading="${i<4?'eager':'lazy'}"></button>`).join('')}
        </div>
        <button class="std-portfolio-more" id="stdOpenGallery" type="button">Смотреть все работы <span aria-hidden="true">→</span></button>
      </div>
    </section>

    <section class="mct-prices" id="esmeraldaDesktopServices" aria-labelledby="stdServicesTitle">
      <div class="mct-shell">
        <div class="mct-price-head">
          <p class="mct-section-kicker">Услуги и цены</p>
          <h2 id="stdServicesTitle">Выберите услугу</h2>
          <span>Выберите направление и нужную процедуру. Нажмите на услугу, чтобы выбрать удобный способ записи.</span>
        </div>

        <div class="mct-tabs-ribbon-wrap is-many">
          <div class="mct-tabs mct-tabs-scroll is-many" role="tablist" aria-label="Категории услуг">
            <div class="mct-tabs-track" id="stdServiceTabs"></div>
          </div>
        </div>

        <div class="dct-service-groups" id="stdServiceList" aria-label="Услуги по категориям на компьютере"></div>

        <button class="mct-more-services" id="stdServiceMore" type="button" aria-expanded="false">
          <span class="mct-more-services-mobile-copy" id="stdServiceMoreTextMobile"></span>
          <span class="mct-more-services-desktop-copy" id="stdServiceMoreText"></span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </section>

    <section class="mct-about" id="esmeraldaDesktopAbout" aria-labelledby="stdAboutTitle">
      <div class="mct-shell">
        <div class="mct-about-head">
          <div>
            <p class="mct-section-kicker">О нас</p>
            <h2 id="stdAboutTitle">О салоне</h2>
          </div>
          <span class="mct-about-monogram" aria-hidden="true">E</span>
        </div>

        <div class="mct-about-card">
          <div class="mct-about-portrait-wrap">
            <figure class="mct-about-portrait">
              <img src="about-salon.webp" alt="Beauty Room by Esmeralda" loading="lazy">
            </figure>
          </div>

          <div class="mct-about-copy">
            <p class="mct-about-lead">Beauty Room by Esmeralda — салон красоты в Ереване.</p>
            <p>Здесь можно спокойно выбрать нужные процедуры и доверить уход мастерам разных направлений.</p>
            <p>Мы ценим аккуратную работу, комфорт и внимательное отношение к каждому гостю.</p>

            <ul class="mct-about-list">
              <li>Несколько направлений в одном салоне</li>
              <li>Комфортная атмосфера</li>
              <li>Индивидуальный подход</li>
            </ul>

            <div class="dct-about-amenities">
              <div class="dct-about-amenities-head">
                <p class="mct-section-kicker">О салоне</p>
                <span>Всё необходимое для комфортного визита</span>
              </div>
              <div class="dct-about-amenities-grid">
                <article><strong>Разные направления</strong><span>Маникюр, волосы, брови, косметология и другие услуги.</span></article>
                <article><strong>Комфорт</strong><span>Спокойная атмосфера и внимательное отношение к каждому гостю.</span></article>
                <article><strong>Прямая запись</strong><span>Связь с салоном по телефону или Viber без лишних шагов.</span></article>
              </div>
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
        <div class="std-contact-head">
          <div>
            <p class="std-contact-kicker">Контакты</p>
            <h2 class="std-contact-title" id="stdContactTitle">Ждём вас</h2>
          </div>
          <div class="std-contact-status" id="stdContactStatus">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3.2 1.8"></path></svg>
            <span id="stdContactStatusText">Закрыто до 09:00</span>
          </div>
        </div>

        <div class="std-contact-body">
          <div class="std-contact-list">
            <a class="std-contact-card" href="${YANDEX_RU}" target="_blank" rel="noopener">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6.5-5.4 6.5-11a6.5 6.5 0 1 0-13 0c0 5.6 6.5 11 6.5 11Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">Ереван, Zavarian St 1/5</strong><span class="std-contact-card-sub">Армения · открыть в Google Maps</span></span>
            </a>

            <a class="std-contact-card" href="tel:${PHONE}">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">+374 93 873617</strong><span class="std-contact-card-sub">Нажмите, чтобы позвонить</span></span>
            </a>

            <a class="std-contact-card" href="${WHATSAPP_URL}" target="_blank" rel="noopener">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5h14v10H9l-4 3v-13Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.5 9.2c.8 2.2 2.1 3.5 4.3 4.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">Viber</strong><span class="std-contact-card-sub">Написать в салон</span></span>
            </a>

            <div class="std-contact-card static">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3.2 1.8"></path></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">Ежедневно 09:00–20:00</strong><span class="std-contact-card-sub">Без выходных</span></span>
            </div>
          </div>

          <div class="std-contact-right">
            <div class="std-contact-map"><iframe title="Карта Beauty Room" loading="eager" src="https://www.google.com/maps?q=40.1673067,44.5124793&z=16&output=embed"></iframe></div>
            <div class="std-contact-actions">
              <a class="std-contact-action-btn std-contact-call" href="tel:${PHONE}">Позвонить</a>
              <a class="std-contact-action-btn std-contact-route" href="${ROUTE}" target="_blank" rel="noopener">Построить маршрут</a>
            </div>
          </div>
        </div>
      </div>

      <div class="std-contact-bottom">
        <a class="std-contact-brand" href="https://tanem.ru/" target="_blank" rel="noopener">
          <span class="br-tanem-mark">T</span>
          <span class="br-tanem-copy">Создано в <strong>TANEM.ru</strong></span>
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
  const galleryCanvas=document.querySelector('.std-gallery-canvas');
  const galleryImage=document.getElementById('stdGalleryImage');
  const galleryCount=document.getElementById('stdGalleryCount');
  const galleryViewAll=document.getElementById('stdViewGallery');
  let galleryCategory='Ногти';
  let galleryItems=PORTFOLIO.slice();
  let galleryIndex=0;
  let galleryScale=1,galleryX=0,galleryY=0;
  let galleryDragStartX=0,galleryDragStartY=0,galleryPanStartX=0,galleryPanStartY=0,galleryDragging=false;
  let galleryPinchStart=0,galleryPinchBase=1,galleryHadPinch=false;

  function clampDesktopViewer(){
    if(galleryScale<=1){galleryX=0;galleryY=0;return}
    const maxX=(galleryScale-1)*galleryCanvas.clientWidth*.5;
    const maxY=(galleryScale-1)*galleryCanvas.clientHeight*.5;
    galleryX=Math.max(-maxX,Math.min(maxX,galleryX));
    galleryY=Math.max(-maxY,Math.min(maxY,galleryY));
  }
  function applyDesktopViewerTransform(){
    clampDesktopViewer();
    galleryImage.style.transform='translate3d('+galleryX+'px,'+galleryY+'px,0) scale('+galleryScale+')';
  }
  function resetDesktopViewer(){
    galleryScale=1;galleryX=0;galleryY=0;galleryPinchStart=0;galleryPinchBase=1;
    applyDesktopViewerTransform();
  }
  function paintGallery(){
    const item=galleryItems[galleryIndex];
    if(!item)return;
    galleryImage.src=item.src;
    galleryImage.alt=item.alt||'Фотография Beauty Room';
    galleryCount.textContent=String(galleryIndex+1).padStart(2,'0')+' / '+String(galleryItems.length).padStart(2,'0');
    document.getElementById('stdGalleryPrev').hidden=galleryItems.length<2;
    document.getElementById('stdGalleryNext').hidden=galleryItems.length<2;
    resetDesktopViewer();
  }
  function openDesktopViewer(items,index=0,source='gallery'){
    galleryItems=Array.isArray(items)&&items.length?items:PORTFOLIO.slice();
    gallery.dataset.source=source;
    galleryViewAll.hidden=source!=='portfolio';
    galleryIndex=Math.max(0,Math.min(index,galleryItems.length-1));
    paintGallery();
    gallery.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDesktopViewer(){
    gallery.classList.remove('open');
    resetDesktopViewer();
    if(!galleryBrowser.classList.contains('open'))document.body.style.overflow='';
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
      openDesktopViewer(items,Number(btn.dataset.galleryItem)||0,'gallery');
    });
  }
  function openDesktopGalleryBrowser(cat='Ногти'){
    galleryCategory=Object.prototype.hasOwnProperty.call(DESKTOP_GALLERY_GROUPS,cat)?cat:'Ногти';
    renderDesktopGalleryBrowser();
    galleryBrowser.classList.add('open');
    galleryBrowser.scrollTop=0;
    document.body.style.overflow='hidden';
  }
  function closeDesktopGalleryBrowser(){
    galleryBrowser.classList.remove('open');
    if(!gallery.classList.contains('open'))document.body.style.overflow='';
  }

  document.querySelectorAll('.std-work').forEach(btn=>{
    btn.addEventListener('click',()=>openDesktopViewer(PORTFOLIO,Number(btn.dataset.portfolioIndex)||0,'portfolio'));
  });
  document.getElementById('stdOpenGallery').addEventListener('click',()=>openDesktopGalleryBrowser('Ногти'));
  if(heroVideo)heroVideo.addEventListener('click',()=>openDesktopGalleryBrowser('Ногти'));
  document.getElementById('stdGalleryBrowserBack').addEventListener('click',closeDesktopGalleryBrowser);
  document.getElementById('stdGalleryClose').addEventListener('click',closeDesktopViewer);
  document.getElementById('stdGalleryPrev').addEventListener('click',()=>moveDesktopGallery(-1));
  document.getElementById('stdGalleryNext').addEventListener('click',()=>moveDesktopGallery(1));
  galleryViewAll.addEventListener('click',()=>{closeDesktopViewer();openDesktopGalleryBrowser('Ногти')});
  gallery.addEventListener('click',e=>{if(e.target===gallery)closeDesktopViewer()});

  galleryStage.addEventListener('wheel',e=>{
    if(!gallery.classList.contains('open'))return;
    e.preventDefault();
    const delta=e.deltaY<0?.18:-.18;
    galleryScale=Math.max(1,Math.min(4,galleryScale+delta));
    if(galleryScale<=1.01)galleryScale=1;
    applyDesktopViewerTransform();
  },{passive:false});
  galleryCanvas.addEventListener('dblclick',e=>{
    e.preventDefault();
    galleryScale=galleryScale>1?1:2;
    if(galleryScale===1){galleryX=0;galleryY=0}
    applyDesktopViewerTransform();
  });

  galleryStage.addEventListener('pointerdown',e=>{
    if(e.pointerType==='touch'||e.target.closest('.std-gallery-nav,.std-view-gallery'))return;
    galleryDragging=true;
    galleryDragStartX=e.clientX;galleryDragStartY=e.clientY;
    galleryPanStartX=galleryX;galleryPanStartY=galleryY;
    try{galleryStage.setPointerCapture(e.pointerId)}catch(_){}
  });
  galleryStage.addEventListener('pointermove',e=>{
    if(!galleryDragging||e.pointerType==='touch')return;
    if(galleryScale>1){
      galleryX=galleryPanStartX+(e.clientX-galleryDragStartX);
      galleryY=galleryPanStartY+(e.clientY-galleryDragStartY);
      applyDesktopViewerTransform();
    }
  });
  galleryStage.addEventListener('pointerup',e=>{
    if(!galleryDragging||e.pointerType==='touch')return;
    galleryDragging=false;
    const dx=e.clientX-galleryDragStartX,dy=e.clientY-galleryDragStartY;
    try{galleryStage.releasePointerCapture(e.pointerId)}catch(_){}
    if(galleryScale===1&&Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.1)moveDesktopGallery(dx<0?1:-1);
  });
  galleryStage.addEventListener('pointercancel',()=>{galleryDragging=false});

  const pinchDistance=e=>Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
  galleryCanvas.addEventListener('touchstart',e=>{
    if(e.touches.length===2){
      e.preventDefault();galleryHadPinch=true;galleryPinchStart=pinchDistance(e);galleryPinchBase=galleryScale;
    }else if(e.touches.length===1){
      galleryDragStartX=e.touches[0].clientX;galleryDragStartY=e.touches[0].clientY;
      galleryPanStartX=galleryX;galleryPanStartY=galleryY;
    }
  },{passive:false});
  galleryCanvas.addEventListener('touchmove',e=>{
    if(e.touches.length===2&&galleryPinchStart){
      e.preventDefault();
      galleryScale=Math.max(1,Math.min(4,galleryPinchBase*(pinchDistance(e)/galleryPinchStart)));
      applyDesktopViewerTransform();
    }else if(e.touches.length===1&&galleryScale>1){
      e.preventDefault();
      galleryX=galleryPanStartX+(e.touches[0].clientX-galleryDragStartX);
      galleryY=galleryPanStartY+(e.touches[0].clientY-galleryDragStartY);
      applyDesktopViewerTransform();
    }
  },{passive:false});
  galleryCanvas.addEventListener('touchend',e=>{
    if(e.touches.length<2)galleryPinchStart=0;
    if(e.touches.length===0){
      if(!galleryHadPinch&&galleryScale===1&&galleryItems.length>1&&e.changedTouches.length){
        const dx=e.changedTouches[0].clientX-galleryDragStartX;
        const dy=e.changedTouches[0].clientY-galleryDragStartY;
        if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.15)moveDesktopGallery(dx<0?1:-1);
      }
      galleryHadPinch=false;
      if(galleryScale<=1.01)resetDesktopViewer();
    }
  },{passive:false});

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


  const SERVICE_PREVIEW_LIMIT=7;
  let activeServiceCategory='Все';
  let desktopServicesExpanded=false;
  const serviceTabs=document.getElementById('stdServiceTabs');
  const serviceList=document.getElementById('stdServiceList');
  const serviceMore=document.getElementById('stdServiceMore');
  const serviceMoreText=document.getElementById('stdServiceMoreText');
  const serviceMoreTextMobile=document.getElementById('stdServiceMoreTextMobile');
  const DESKTOP_SERVICE_TABS=['Все',...SERVICE_CATEGORIES];

  function desktopServiceWord(n){
    const n10=n%10,n100=n%100;
    if(n10===1&&n100!==11)return 'услугу';
    if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';
    return 'услуг';
  }

  function templateServiceCard(item){
    const title=item[0];
    const price=item[1]||'';
    const description=item[2]||item[4]||'';
    const variants=item[3]||[];
    const hasVariants=variants.length>0;
    const action=price||'Записаться';

    if(hasVariants){
      return '<button class="dct-service-card has-variants'+(description?' has-description':'')+'" type="button" data-service-book>'+
        '<span class="dct-service-card-body">'+
          '<strong class="dct-service-card-title">'+title+'</strong>'+
          '<div class="dct-service-card-description '+(description?'has-copy':'is-empty')+'">'+(description?'<p>'+description+'</p>':'')+'</div>'+
          '<div class="dct-service-card-variants">'+variants.map(v=>
            '<div class="dct-service-card-variant"><span>'+v[0]+'</span><span class="dct-service-card-variant-meta">'+(v[1]?'<small>'+v[1]+'</small>':'')+'<b>'+(v[2]||action)+'</b></span></div>'
          ).join('')+'</div>'+
        '</span>'+
      '</button>';
    }

    return '<button class="dct-service-card'+(description?' has-description':'')+'" type="button" data-service-book>'+
      '<span class="dct-service-card-body">'+
        '<strong class="dct-service-card-title">'+title+'</strong>'+
        '<div class="dct-service-card-description '+(description?'has-copy':'is-empty')+'">'+(description?'<p>'+description+'</p>':'')+'</div>'+
        '<div class="dct-service-card-meta"><b>'+action+'</b></div>'+
      '</span>'+
    '</button>';
  }

  function currentTemplateServiceState(){
    const groups=activeServiceCategory==='Все'
      ? SERVICE_CATEGORIES.map(cat=>({id:cat,label:cat,services:SERVICE_DATA[cat]||[]}))
      : SERVICE_CATEGORIES.filter(cat=>cat===activeServiceCategory).map(cat=>({id:cat,label:cat,services:SERVICE_DATA[cat]||[]}));

    const total=groups.reduce((sum,group)=>sum+group.services.length,0);
    if(desktopServicesExpanded||total<=SERVICE_PREVIEW_LIMIT){
      return {groups,total,hidden:Math.max(total-SERVICE_PREVIEW_LIMIT,0)};
    }

    let remaining=SERVICE_PREVIEW_LIMIT;
    const visible=groups.map(group=>{
      const services=group.services.slice(0,Math.max(remaining,0));
      remaining-=services.length;
      return {...group,services};
    }).filter(group=>group.services.length>0);

    return {groups:visible,total,hidden:Math.max(total-SERVICE_PREVIEW_LIMIT,0)};
  }

  function renderDesktopServices(){
    serviceTabs.innerHTML=DESKTOP_SERVICE_TABS.map(cat=>
      '<button class="mct-tab'+(cat==='Все'?' mct-tab-all':'')+(cat===activeServiceCategory?' is-active':'')+'" type="button" role="tab" aria-selected="'+(cat===activeServiceCategory?'true':'false')+'" data-service-category="'+cat+'">'+cat+'</button>'
    ).join('');

    serviceTabs.querySelectorAll('[data-service-category]').forEach(btn=>btn.onclick=()=>{
      activeServiceCategory=btn.dataset.serviceCategory;
      desktopServicesExpanded=false;
      renderDesktopServices();
    });

    const state=currentTemplateServiceState();
    serviceList.innerHTML=state.groups.map(group=>{
      const heading=activeServiceCategory==='Все'
        ? '<div class="dct-service-category-heading"><span>'+group.label+'</span><i aria-hidden="true"></i></div>'
        : '';
      return '<section class="dct-service-category">'+heading+'<div class="dct-service-category-list">'+group.services.map(templateServiceCard).join('')+'</div></section>';
    }).join('');

    serviceList.querySelectorAll('[data-service-book]').forEach(btn=>btn.onclick=openDesktopBooking);

    serviceMore.hidden=state.total<=SERVICE_PREVIEW_LIMIT;
    serviceMore.classList.toggle('is-open',desktopServicesExpanded);
    serviceMore.setAttribute('aria-expanded',desktopServicesExpanded?'true':'false');

    const copy=desktopServicesExpanded
      ? 'Свернуть услуги'
      : ('Открыть ещё '+state.hidden+' '+desktopServiceWord(state.hidden));
    serviceMoreText.textContent=copy;
    serviceMoreTextMobile.textContent=copy;

    if(typeof applyDesktopLanguage==='function') requestAnimationFrame(applyDesktopLanguage);
  }

  serviceMore.onclick=()=>{
    desktopServicesExpanded=!desktopServicesExpanded;
    renderDesktopServices();
  };
  renderDesktopServices();

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

  // Desktop master pages: mobile structure adapted to a wide screen.
  const masterOverlay=document.getElementById('stdMasterOverlay');
  const masterPageContent=document.getElementById('stdMasterPageContent');
  const masterPageClose=document.getElementById('stdMasterPageClose');
  const masterPageBook=document.getElementById('stdMasterPageBook');
  let activeDesktopMaster=null;
  let activeDesktopMasterTab='Профиль';

  function desktopMasterServices(master){
    return (master.cats||[]).flatMap(cat=>(SERVICE_DATA[cat]||[]).map(item=>({cat,item})));
  }
  function desktopMasterAbout(master){
    const map={
      nails:'Маникюр и педикюр. Аккуратная работа и внимание к деталям.',
      hair:'Стрижки, окрашивание, укладки и уход за волосами.',
      cosmetology:'Косметология и профессиональный уход за кожей.',
      brows:'Брови и ресницы — форма, ламинирование и уход.'
    };
    return map[master.id]||'Специалист Beauty Room по своему направлению.';
  }
  function paintDesktopMasterTab(){
    const target=masterPageContent.querySelector('.std-master-tab-content');
    if(!target||!activeDesktopMaster)return;
    const master=activeDesktopMaster;
    const items=desktopMasterServices(master);
    const works=master.work||[];
    if(activeDesktopMasterTab==='Профиль'){
      target.innerHTML='<h3>О мастере</h3><p class="std-master-about-copy">'+desktopMasterAbout(master)+'</p>';
    }else if(activeDesktopMasterTab==='Услуги'){
      target.innerHTML='<section class="std-master-page-block"><h3>Услуги</h3>'+(items.length?items.map(({cat,item})=>'<div class="std-master-page-service"><strong>'+item[0]+'</strong><span>'+cat+'</span></div>').join(''):'<p class="std-master-page-empty">Пока нет данных об услугах.</p>')+'</section>';
    }else if(activeDesktopMasterTab==='Портфолио'){
      target.innerHTML='<section class="std-master-page-block"><h3>Портфолио</h3>'+(works.length?'<div class="std-master-page-works">'+works.map((src,i)=>'<button class="std-master-page-work" type="button" data-master-work="'+i+'"><img src="'+src+'" alt="'+master.name+'" loading="lazy"></button>').join('')+'</div>':'<p class="std-master-page-empty">Пока нет фото.</p>')+'</section>';
      target.querySelectorAll('[data-master-work]').forEach(btn=>btn.onclick=()=>{
        const list=works.map(src=>({src,alt:master.name}));
        openDesktopViewer(list,Number(btn.dataset.masterWork)||0,'gallery');
      });
    }else{
      target.innerHTML='<section class="std-master-page-block"><h3>Отзывы</h3><p class="std-master-page-empty">Пока нет отзывов.</p></section>';
    }
  }
  function paintDesktopMaster(master){
    masterPageContent.innerHTML='<div class="std-master-profile"><div class="std-master-avatar">'+TEAM_AVATAR+'</div><h2>'+master.name+'</h2><p>'+master.role+'</p><div class="std-master-profile-rating"><b>★★★★★</b> · Beauty Room</div><div class="std-master-profile-cats">'+(master.cats||[]).map(cat=>'<span>'+cat+'</span>').join('')+'</div></div><div class="std-master-tabs">'+['Профиль','Услуги','Портфолио','Отзывы'].map(tab=>'<button type="button" data-master-tab="'+tab+'" class="'+(tab===activeDesktopMasterTab?'active':'')+'">'+tab+'</button>').join('')+'</div><div class="std-master-tab-content"></div>';
    masterPageContent.querySelectorAll('[data-master-tab]').forEach(btn=>btn.onclick=()=>{
      activeDesktopMasterTab=btn.dataset.masterTab;
      masterPageContent.querySelectorAll('[data-master-tab]').forEach(x=>x.classList.toggle('active',x===btn));
      paintDesktopMasterTab();
    });
    paintDesktopMasterTab();
  }
  function openDesktopMaster(master){
    activeDesktopMaster=master;
    activeDesktopMasterTab='Профиль';
    paintDesktopMaster(master);
    masterOverlay.classList.add('open');
    masterOverlay.scrollTop=0;
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

  const desktopHero=document.getElementById('esmeraldaDesktopTop');
  const desktopPortfolio=document.getElementById('esmeraldaDesktopPortfolio');
  let heroWheelAssistLocked=false;
  if(desktopHero&&desktopPortfolio){
    desktopHero.addEventListener('wheel',e=>{
      if(e.deltaY<=18||window.scrollY>12||heroWheelAssistLocked)return;
      e.preventDefault();
      heroWheelAssistLocked=true;
      desktopPortfolio.scrollIntoView({behavior:'smooth',block:'start'});
      window.setTimeout(()=>{heroWheelAssistLocked=false},760);
    },{passive:false});
  }

  const DESKTOP_LANG_STORAGE='beautyroom-language';
  const DESKTOP_I18N_ROWS=[
    ['Услуги','Ծառայություններ','Services'],['Наши работы','Մեր աշխատանքները','Our work'],['О нас','Մեր մասին','About us'],
    ['Отзывы','Կարծիքներ','Reviews'],['Контакты','Կոնտակտներ','Contacts'],['Салон красоты','Գեղեցկության սրահ','Beauty salon'],
    ['Салон красоты в самом сердце Еревана.','Գեղեցկության սրահ Երևանի սրտում։','A beauty salon in the heart of Yerevan.'],['Листайте вниз','Սահեցրեք ներքև','Scroll down'],['Ереван,','Երևան,','Yerevan,'],['Zavarian St 1/5','Զավարյան փ. 1/5','1/5 Zavarian St'],
    ['Записаться','Ամրագրել','Book now'],['Записаться →','Ամրագրել →','Book now →'],['Записаться онлайн','Ամրագրել առցանց','Book online'],['Смотреть работы','Դիտել աշխատանքները','View our work'],
    ['Портфолио','Պորտֆոլիո','Portfolio'],['Вдохновляйтесь реальными результатами наших мастеров и выбирайте свой идеальный образ.','Ոգեշնչվեք մեր մասնագետների իրական աշխատանքներով և ընտրեք ձեր կերպարը։','Explore real results from our specialists and choose your look.'],['Смотреть все работы','Դիտել բոլոր աշխատանքները','View all work'],
    ['Открыть галерею','Բացել պատկերասրահը','Open gallery'],['Колесо или двойной клик — увеличить','Մեծացնելու համար օգտագործեք անիվը կամ կրկնակի սեղմումը','Use the wheel or double-click to zoom'],['Галерея','Պատկերասրահ','Gallery'],
    ['Ногти','Եղունգներ','Nails'],['Волосы','Մազեր','Hair'],['Брови и ресницы','Հոնքեր և թարթիչներ','Brows & lashes'],
    ['Косметология','Կոսմետոլոգիա','Cosmetology'],['Эпиляция','Էպիլյացիա','Hair removal'],['Макияж','Դիմահարդարում','Makeup'],
    ['Массаж','Մերսում','Massage'],['Другое','Այլ','Other'],['Все','Բոլորը','All'],
    ['Услуги и цены','Ծառայություններ և գներ','Services & prices'],['Выберите услугу','Ընտրեք ծառայությունը','Choose a service'],
    ['Выберите направление и нужную процедуру. Запись открывается в отдельной плашке, а все услуги собраны в одной понятной структуре.','Ընտրեք ուղղությունն ու անհրաժեշտ ծառայությունը։ Բոլոր ծառայությունները հավաքված են մեկ պարզ կառուցվածքում։','Choose a category and service. Everything is organized in one clear structure.'],['Выберите направление и нужную процедуру. Нажмите на услугу, чтобы выбрать удобный способ записи.','Ընտրեք ուղղությունն ու անհրաժեշտ ծառայությունը։ Սեղմեք ծառայության վրա՝ ամրագրման հարմար տարբերակ ընտրելու համար։','Choose a category and service. Select a service to choose a convenient booking method.'],
    ['Свернуть','Փակել ցանկը','Show less'],['Свернуть услуги','Փակել ծառայությունները','Collapse services'],['Открыть ещё','Բացել ևս','Show'],['О салоне','Սրահի մասին','About the salon'],
    ['Beauty Room by Esmeralda — салон красоты в Ереване.','Beauty Room by Esmeralda — գեղեցկության սրահ Երևանում։','Beauty Room by Esmeralda — a beauty salon in Yerevan.'],
    ['Здесь можно спокойно выбрать нужные процедуры и доверить уход мастерам разных направлений. Мы ценим аккуратную работу, комфорт и внимательное отношение к каждому гостю.','Այստեղ կարող եք հանգիստ ընտրել անհրաժեշտ ծառայությունները և ձեր խնամքը վստահել տարբեր ուղղությունների մասնագետների։ Մենք կարևորում ենք կոկիկ աշխատանքը, հարմարավետությունն ու յուրաքանչյուր հյուրի նկատմամբ ուշադիր վերաբերմունքը։','Here you can comfortably choose the services you need and trust your care to specialists in different fields. We value precise work, comfort and attentive service for every guest.'],
    ['Несколько направлений в одном салоне','Մի քանի ուղղություն մեկ սրահում','Several services in one salon'],
    ['Комфортная атмосфера','Հարմարավետ մթնոլորտ','Comfortable atmosphere'],['Индивидуальный подход','Անհատական մոտեցում','Personal approach'],
    ['Наша команда','Մեր թիմը','Our team'],['Мастера Beauty Room','Beauty Room-ի մասնագետները','Beauty Room specialists'],
    ['Нажмите на мастера, чтобы открыть отдельную страницу специалиста.','Ընտրեք մասնագետին՝ նրա էջը բացելու համար։','Select a specialist to open their profile.'],
    ['Nail-мастер','Մատնահարդարման վարպետ','Nail specialist'],['Парикмахер','Վարսահարդար','Hair stylist'],['Косметолог','Կոսմետոլոգ','Cosmetologist'],
    ['Brow & Lash-мастер','Հոնքերի և թարթիչների վարպետ','Brow & lash specialist'],
    ['Маникюр · педикюр','Մատնահարդարում · ոտնահարդարում','Manicure · pedicure'],['Волосы · укладки','Մազեր · հարդարում','Hair · styling'],
    ['Что говорят о нас','Ինչ են ասում մեր մասին','What clients say about us'],['Отзывы на Google Maps','Կարծիքներ Google Maps-ում','Reviews on Google Maps'],['Подробнее →','Ավելին →','Read more →'],['рейтинг салона','սրահի վարկանիշ','salon rating'],
    ['Смотреть все отзывы →','Դիտել բոլոր կարծիքները →','View all reviews →'],['Ждём вас','Սպասում ենք ձեզ','We look forward to seeing you'],['Ереван, Zavarian St 1/5','Երևան, Զավարյան փ. 1/5','Yerevan, 1/5 Zavarian St'],
    ['Армения · открыть в Google Maps','Հայաստան · բացել Google Maps-ում','Armenia · open in Google Maps'],
    ['Нажмите, чтобы позвонить','Սեղմեք զանգահարելու համար','Click to call'],['Написать в салон','Գրել սրահին','Message the salon'],
    ['Ежедневно 09:00–20:00','Ամեն օր՝ 09:00–20:00','Daily 09:00–20:00'],['Без выходных','Առանց հանգստյան օրերի','Open every day'],
    ['Цифровой офис для салонов красоты','Թվային գրասենյակ գեղեցկության սրահների համար','Digital office for beauty salons'],['Создано в','Ստեղծված է','Created in'],['Позвонить','Զանգահարել','Call'],['Построить маршрут','Կառուցել երթուղի','Get directions'],['Всё необходимое для комфортного визита','Ամեն ինչ հարմարավետ այցի համար','Everything for a comfortable visit'],['Разные направления','Տարբեր ուղղություններ','Different services'],['Комфорт','Հարմարավետություն','Comfort'],['Прямая запись','Ուղիղ ամրագրում','Direct booking'],
    ['Запись','Ամրագրում','Booking'],['Как вам удобнее записаться?','Ինչպե՞ս է ձեզ հարմար ամրագրել։','How would you like to book?'],
    ['Выберите удобный способ связи.','Ընտրեք ձեզ հարմար կապի տարբերակը։','Choose the most convenient way to contact us.'],
    ['Телефон','Հեռախոս','Phone'],['Открыть','Բացել','Open'],['Профиль','Պրոֆիլ','Profile'],['О мастере','Մասնագետի մասին','About the specialist'],
    ['Пока нет данных об услугах.','Ծառայությունների մասին տվյալներ դեռ չկան։','No service information yet.'],
    ['Пока нет фото.','Լուսանկարներ դեռ չկան։','No photos yet.'],['Пока нет отзывов.','Կարծիքներ դեռ չկան։','No reviews yet.'],
    ['Маникюр и педикюр. Аккуратная работа и внимание к деталям.','Մատնահարդարում և ոտնահարդարում։ Կոկիկ աշխատանք և ուշադրություն մանրուքներին։','Manicure and pedicure with careful attention to detail.'],
    ['Стрижки, окрашивание, укладки и уход за волосами.','Սանրվածք, ներկում, հարդարում և մազերի խնամք։','Haircuts, coloring, styling and hair care.'],
    ['Косметология и профессиональный уход за кожей.','Կոսմետոլոգիա և մասնագիտական մաշկի խնամք։','Cosmetology and professional skin care.'],
    ['Брови и ресницы — форма, ламинирование и уход.','Հոնքեր և թարթիչներ՝ ձևավորում, լամինացիա և խնամք։','Brows and lashes — shaping, lamination and care.'],
    ['Педикюр','Ոտնահարդարում','Pedicure'],['Наращивание ногтей','Եղունգների երկարացում','Nail extensions'],
    ['Маникюр + покрытие гель-лак','Մատնահարդարում + գել-լաք','Manicure + gel polish'],['Маникюр + покрытие лак','Մատնահարդարում + լաք','Manicure + nail polish'],
    ['Парафинотерапия для рук','Ձեռքերի պարաֆինաթերապիա','Paraffin hand treatment'],['Маникюр','Մատնահարդարում','Manicure'],
    ['Свадебные прически','Հարսանեկան սանրվածքներ','Bridal hairstyles'],['Укладка волос','Մազերի հարդարում','Hair styling'],
    ['Стрижка волос','Մազերի կտրում','Haircut'],['Окрашивание волос','Մազերի ներկում','Hair coloring'],['Уход за волосами','Մազերի խնամք','Hair care'],
    ['Спа-процедура для волос','ՍՊԱ խնամք մազերի համար','Hair spa treatment'],['Косы','Հյուսքեր','Braids'],['Наращивание волос','Մազերի երկարացում','Hair extensions'],
    ['Процедуры для бровей','Հոնքերի խնամքի ծառայություններ','Brow treatments'],['Тридинг бровей','Հոնքերի թրիդինգ','Brow threading'],
    ['Коррекция формы бровей','Հոնքերի ձևի շտկում','Brow shaping'],['Ламинирование бровей','Հոնքերի լամինացիա','Brow lamination'],
    ['Ламинирование ресниц','Թարթիչների լամինացիա','Lash lamination'],['Наращивание ресниц','Թարթիչների երկարացում','Eyelash extensions'],
    ['Карбокси-терапия','Կարբոքսիթերապիա','Carboxytherapy'],['Ультразвуковая чистка лица','Դեմքի ուլտրաձայնային մաքրում','Ultrasonic facial cleansing'],
    ['Удаление волос нитью','Մազահեռացում թելով','Threading hair removal'],['Шугаринг','Շուգարինգ','Sugaring'],
    ['Электроэпиляция игловая','Ասեղային էլեկտրոէպիլյացիա','Needle electrolysis'],['Восковая эпиляция','Մոմային էպիլյացիա','Waxing'],
    ['Прокалывание ушей','Ականջների ծակում','Ear piercing'],
    ['Открыто','Բաց է','Open'],['Закрыто','Փակ է','Closed'],['до 20:00','մինչև 20:00','until 20:00'],['до 09:00','մինչև 09:00','until 09:00'],
    ['Открыто до 20:00','Բաց է մինչև 20:00','Open until 20:00'],['Закрыто до 09:00','Փակ է մինչև 09:00','Closed until 09:00']
  ];
  const desktopLangIndex={ru:0,hy:1,en:2};
  const desktopDirect={};
  DESKTOP_I18N_ROWS.forEach(row=>desktopDirect[row[0]]=row);

  function desktopDetectLanguage(){
    try{
      const saved=localStorage.getItem(DESKTOP_LANG_STORAGE);
      if(/^(hy|ru|en)$/.test(saved||''))return saved;
    }catch(_){}
    const list=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(x=>String(x).toLowerCase());
    for(const value of list){
      if(value.startsWith('hy'))return 'hy';
      if(value.startsWith('ru'))return 'ru';
      if(value.startsWith('en'))return 'en';
    }
    return 'hy';
  }
  let currentDesktopLang=desktopDetectLanguage();

  function desktopDynamicTranslation(source,lang){
    let m=source.match(/^Показать ещё (\d+) (?:услугу|услуги|услуг)$/);
    if(m)return lang==='hy'?'Ցույց տալ ևս '+m[1]+' ծառայություն':lang==='en'?'Show '+m[1]+' more services':source;
    m=source.match(/^Открыть ещё (\d+) (?:услугу|услуги|услуг)$/);
    if(m)return lang==='hy'?'Բացել ևս '+m[1]+' ծառայություն':lang==='en'?'Show '+m[1]+' more services':source;
    m=source.match(/^Все категории · (\d+) позиций$/);
    if(m)return lang==='hy'?'Բոլոր բաժինները · '+m[1]+' ծառայություն':lang==='en'?'All categories · '+m[1]+' services':source;
    m=source.match(/^(.+) · (\d+) (?:услугу|услуги|услуг)$/);
    if(m){
      const row=desktopDirect[m[1]],cat=row?row[desktopLangIndex[lang]]:m[1];
      return lang==='hy'?cat+' · '+m[2]+' ծառայություն':lang==='en'?cat+' · '+m[2]+' services':source;
    }
    return null;
  }
  function desktopTrText(source,lang=currentDesktopLang){
    const row=desktopDirect[source];
    if(row)return row[desktopLangIndex[lang]];
    const dyn=desktopDynamicTranslation(source,lang);
    return dyn===null?source:dyn;
  }
  function desktopCanTranslate(source){return !!desktopDirect[source]||desktopDynamicTranslation(source,'ru')!==null}
  function desktopSkipText(node){
    const el=node.parentElement;
    if(!el)return true;
    if(el.closest('.std-lang-switch,.std-review-text'))return true;
    return /^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.tagName);
  }
  function translateDesktopTree(scope,lang=currentDesktopLang){
    if(!scope)return;
    const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      if(desktopSkipText(node))return;
      const raw=node.nodeValue||'',trimmed=raw.trim();
      if(!trimmed)return;
      let canonical=node.__desktopI18nCanonical;
      if(!canonical&&desktopCanTranslate(trimmed)){
        canonical=trimmed;
        node.__desktopI18nCanonical=canonical;
      }
      if(!canonical)return;
      const leading=(raw.match(/^\s*/)||[''])[0],trailing=(raw.match(/\s*$/)||[''])[0];
      node.nodeValue=leading+desktopTrText(canonical,lang)+trailing;
    });
  }
  function updateDesktopLangSwitcher(){
    root.querySelectorAll('.std-lang-switch [data-desktop-lang]').forEach(btn=>{
      const active=btn.dataset.desktopLang===currentDesktopLang;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }
  function applyDesktopLanguage(){
    translateDesktopTree(root,currentDesktopLang);
    updateDesktopLangSwitcher();
    document.documentElement.lang=currentDesktopLang;
    document.documentElement.dir='ltr';
    document.body.dataset.brLang=currentDesktopLang;
    const titles={ru:'Beauty Room by Esmeralda — Ереван',hy:'Beauty Room by Esmeralda — Երևան',en:'Beauty Room by Esmeralda — Yerevan'};
    document.title=titles[currentDesktopLang]||titles.hy;
  }
  root.querySelectorAll('.std-lang-switch [data-desktop-lang]').forEach(btn=>btn.addEventListener('click',()=>{
    currentDesktopLang=btn.dataset.desktopLang;
    try{localStorage.setItem(DESKTOP_LANG_STORAGE,currentDesktopLang)}catch(_){}
    applyDesktopLanguage();
  }));
  const desktopLangObserver=new MutationObserver(records=>{
    records.forEach(record=>record.addedNodes.forEach(node=>{
      if(node.nodeType===Node.TEXT_NODE)translateDesktopTree(node.parentElement,currentDesktopLang);
      else if(node.nodeType===Node.ELEMENT_NODE)translateDesktopTree(node,currentDesktopLang);
    }));
  });
  desktopLangObserver.observe(root,{childList:true,subtree:true});
  applyDesktopLanguage();

  const revealSections=[...root.querySelectorAll('.std-portfolio,.mct-prices,.mct-about,.std-team,.std-reviews,.std-contact')];
  revealSections.forEach(el=>el.classList.add('std-section-reveal'));
  if('IntersectionObserver' in window){
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view','is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },{threshold:.09,rootMargin:'0px 0px -5% 0px'});
    revealSections.forEach(el=>revealObserver.observe(el));
  }else{
    revealSections.forEach(el=>el.classList.add('in-view'));
  }

  function updateStatus(){
    const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Yerevan',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
    const hour=Number(parts.find(p=>p.type==='hour')?.value||0),minute=Number(parts.find(p=>p.type==='minute')?.value||0),mins=hour*60+minute,isOpen=mins>=540&&mins<1200;
    const main=document.getElementById('stdStatusMain'),sub=document.getElementById('stdStatusSub');
    if(main&&sub){
      main.textContent=desktopTrText(isOpen?'Открыто':'Закрыто');
      sub.textContent=desktopTrText(isOpen?'до 20:00':'до 09:00');
      main.style.color=isOpen?'#3f8750':'#a45e64';
    }
    const contactStatus=document.getElementById('stdContactStatus'),contactStatusText=document.getElementById('stdContactStatusText');
    if(contactStatus&&contactStatusText){
      contactStatusText.textContent=desktopTrText(isOpen?'Открыто до 20:00':'Закрыто до 09:00');
      contactStatus.classList.toggle('open',isOpen);
    }
  }
  updateStatus();
  setInterval(updateStatus,60000);
})();