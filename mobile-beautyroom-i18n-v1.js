/* Beauty Room multilingual interface — HY / RU / EN */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

  var STORAGE_KEY='beautyroom-language';
  var currentLang='hy';
  var root=null;

  var meta={
    ru:{
      title:'Beauty Room by Esmeralda — Ереван',
      description:'Beauty Room by Esmeralda — салон красоты в Ереване, Zavarian Street 1/5. Ежедневно 09:00–20:00.'
    },
    hy:{
      title:'Beauty Room by Esmeralda — Երևան',
      description:'Beauty Room by Esmeralda — գեղեցկության սրահ Երևանում, Զավարյան փ. 1/5։ Ամեն օր՝ 09:00–20:00։'
    },
    en:{
      title:'Beauty Room by Esmeralda — Yerevan',
      description:'Beauty Room by Esmeralda — beauty salon in Yerevan, 1/5 Zavarian St. Open daily 09:00–20:00.'
    }
  };

  var rows=[
    ['Меню','Մենյու','Menu'],
    ['Открыть меню','Բացել մենյուն','Open menu'],
    ['Салон красоты','Գեղեցկության սրահ','Beauty salon'],
    ['Салон красоты в самом сердце Еревана.','Գեղեցկության սրահ Երևանի սրտում։','A beauty salon in the heart of Yerevan.'],
    ['Проверяем','Ստուգում ենք','Checking'],
    ['режим работы','աշխատանքային ժամերը','opening hours'],
    ['Ереван,','Երևան,','Yerevan,'],
    ['Zavarian St 1/5','Զավարյան փ. 1/5','1/5 Zavarian St'],
    ['Записаться','Ամրագրել','Book now'],
    ['Записаться →','Ամրագրել →','Book now →'],
    ['Записаться онлайн','Ամրագրել առցանց','Book online'],
    ['Смотреть работы','Դիտել աշխատանքները','View our work'],
    ['Портфолио','Պորտֆոլիո','Portfolio'],
    ['Услуги','Ծառայություններ','Services'],
    ['О салоне','Սրահի մասին','About'],
    ['Команда','Թիմ','Team'],
    ['Отзывы','Կարծիքներ','Reviews'],
    ['Контакты','Կոնտակտներ','Contacts'],
    ['Визит','Այց','Visit'],
    ['Разведите двумя пальцами, чтобы увеличить','Մեծացնելու համար երկու մատով բացեք պատկերը','Pinch with two fingers to zoom'],
    ['Закрыть','Փակել','Close'],
    ['Фото Beauty Room','Beauty Room-ի լուսանկար','Beauty Room photo'],
    ['Открыть галерею','Բացել պատկերասրահը','Open gallery'],
    ['Галерея','Պատկերասրահ','Gallery'],
    ['Салон','Սրահ','Salon'],
    ['Ногти','Եղունգներ','Nails'],
    ['Волосы','Մազեր','Hair'],
    ['Брови и ресницы','Հոնքեր և թարթիչներ','Brows & lashes'],
    ['Эпиляция','Էպիլյացիա','Hair removal'],
    ['Макияж','Դիմահարդարում','Makeup'],
    ['Массаж','Մերսում','Massage'],
    ['Другое','Այլ','Other'],
    ['Косметология','Կոսմետոլոգիա','Cosmetology'],
    ['Все','Բոլորը','All'],
    ['Фото ресниц пока не добавлены','Թարթիչների լուսանկարները դեռ չեն ավելացվել','Eyelash photos have not been added yet'],
    ['Наши работы','Մեր աշխատանքները','Our work'],
    ['Смотреть все работы','Դիտել բոլոր աշխատանքները','View all work'],
    ['Наши услуги','Մեր ծառայությունները','Our services'],
    ['Свернуть','Փակել ցանկը','Show less'],
    ['Наша команда','Մեր թիմը','Our team'],
    ['Мастера своего дела','Իրենց գործի վարպետները','Experts in their craft'],
    ['Листайте','Սահեցրեք','Swipe'],
    ['Nail-мастер','Մատնահարդարման վարպետ','Nail specialist'],
    ['Парикмахер','Վարսահարդար','Hair stylist'],
    ['Косметолог','Կոսմետոլոգ','Cosmetologist'],
    ['Маникюр · педикюр','Մատնահարդարում · ոտնահարդարում','Manicure · pedicure'],
    ['Волосы · укладки','Մազեր · հարդարում','Hair · styling'],
    ['Профиль','Պրոֆիլ','Profile'],
    ['О мастере','Մասնագետի մասին','About the specialist'],
    ['Пока нет данных об услугах.','Ծառայությունների մասին տվյալներ դեռ չկան։','No service information yet.'],
    ['Пока нет фото.','Լուսանկարներ դեռ չկան։','No photos yet.'],
    ['Пока нет отзывов.','Կարծիքներ դեռ չկան։','No reviews yet.'],
    ['рейтинг салона','սրահի վարկանիշ','salon rating'],
    ['Что говорят о нас','Ինչ են ասում մեր մասին','What clients say about us'],
    ['Подробнее →','Ավելին →','Read more →'],
    ['Смотреть все отзывы →','Դիտել բոլոր կարծիքները →','View all reviews →'],
    ['Ждём вас','Սպասում ենք ձեզ','We look forward to seeing you'],
    ['Ереван, Zavarian St 1/5','Երևան, Զավարյան փ. 1/5','Yerevan, 1/5 Zavarian St'],
    ['Открыть в Google Maps','Բացել Google Maps-ում','Open in Google Maps'],
    ['Нажмите, чтобы позвонить','Սեղմեք զանգահարելու համար','Tap to call'],
    ['Написать в салон','Գրել սրահին','Message the salon'],
    ['Ежедневно 09:00–20:00','Ամեն օր՝ 09:00–20:00','Daily 09:00–20:00'],
    ['Без выходных','Առանց հանգստյան օրերի','Open every day'],
    ['Загружаем карту…','Քարտեզը բեռնվում է…','Loading map…'],
    ['Позвонить','Զանգահարել','Call'],
    ['Построить маршрут','Ստանալ երթուղին','Get directions'],
    ['Цифровой офис для салонов красоты','Թվային գրասենյակ գեղեցկության սրահների համար','Digital office for beauty salons'],
    ['Открыто до 20:00','Բաց է մինչև 20:00','Open until 20:00'],
    ['Закрыто до 09:00','Փակ է մինչև 09:00','Closed until 09:00'],
    ['Открыто','Բաց է','Open'],
    ['Закрыто','Փակ է','Closed'],
    ['до 20:00','մինչև 20:00','until 20:00'],
    ['до 09:00','մինչև 09:00','until 09:00'],
    ['О нас','Մեր մասին','About us'],
    ['Салон красоты в Ереване','Գեղեցկության սրահ Երևանում','Beauty salon in Yerevan'],
    ['Beauty Room by Esmeralda — салон красоты в Ереване.','Beauty Room by Esmeralda — գեղեցկության սրահ Երևանում։','Beauty Room by Esmeralda — a beauty salon in Yerevan.'],
    ['Маникюр, волосы, брови и ресницы, макияж, косметология, эпиляция и массаж — в одном пространстве.','Մատնահարդարում, մազեր, հոնքեր և թարթիչներ, դիմահարդարում, կոսմետոլոգիա, էպիլյացիա և մերսում՝ մեկ վայրում։','Manicure, hair, brows and lashes, makeup, cosmetology, hair removal and massage — all in one place.'],
    ['Здесь можно спокойно выбрать нужные процедуры и доверить уход мастерам разных направлений. Мы ценим аккуратную работу, комфорт и внимательное отношение к каждому гостю.','Այստեղ կարող եք հանգիստ ընտրել անհրաժեշտ ծառայությունները և ձեր խնամքը վստահել տարբեր ուղղությունների մասնագետների։ Մենք կարևորում ենք կոկիկ աշխատանքը, հարմարավետությունն ու յուրաքանչյուր հյուրի նկատմամբ ուշադիր վերաբերմունքը։','Here you can comfortably choose the services you need and trust your care to specialists in different fields. We value precise work, comfort and attentive service for every guest.'],
    ['Мастера разных направлений','Տարբեր ուղղությունների մասնագետներ','Specialists in different fields'],
    ['Комфортная атмосфера','Հարմարավետ մթնոլորտ','Comfortable atmosphere'],
    ['Индивидуальный подход','Անհատական մոտեցում','Personal approach'],
    ['Запись','Ամրագրում','Booking'],
    ['Как вам удобнее записаться?','Ինչպե՞ս է ձեզ հարմար ամրագրել։','How would you like to book?'],
    ['Выберите удобный способ связи.','Ընտրեք ձեզ հարմար կապի տարբերակը։','Choose the most convenient way to contact us.'],
    ['Телефон','Հեռախոս','Phone'],
    ['Создано в','Ստեղծված է','Created with'],
    ['Создано в TANEM.ru','Ստեղծված է TANEM.ru-ում','Created with TANEM.ru'],
    ['ежедневно','ամեն օր','daily'],
    ['рейтинг','վարկանիշ','rating'],
    ['оценок','գնահատական','ratings'],
    ['услуг','ծառայություն','services'],
    ['Педикюр','Ոտնահարդարում','Pedicure'],
    ['Процедуры для бровей','Հոնքերի խնամքի ծառայություններ','Brow treatments'],
    ['Свадебные прически','Հարսանեկան սանրվածքներ','Bridal hairstyles'],
    ['Тридинг бровей','Հոնքերի թրիդինգ','Brow threading'],
    ['Удаление волос нитью','Մազահեռացում թելով','Threading hair removal'],
    ['Укладка волос','Մազերի հարդարում','Hair styling'],
    ['Прокалывание ушей','Ականջների ծակում','Ear piercing'],
    ['Шугаринг','Շուգարինգ','Sugaring'],
    ['Стрижка волос','Մազերի կտրում','Haircut'],
    ['Электроэпиляция игловая','Ասեղային էլեկտրոէպիլյացիա','Needle electrolysis'],
    ['Окрашивание волос','Մազերի ներկում','Hair coloring'],
    ['Уход за волосами восстановление повреждённых волос','Մազերի խնամք և վնասված մազերի վերականգնում','Hair care and damaged hair restoration'],
    ['Спа процедура для волос','ՍՊԱ խնամք մազերի համար','Hair spa treatment'],
    ['Наращивание ногтей','Եղունգների երկարացում','Nail extensions'],
    ['Маникюр + покрытие гельлак','Մատնահարդարում + գել-լաք ծածկույթ','Manicure + gel polish'],
    ['Маникюр + покрытие лак','Մատնահարդարում + լաք ծածկույթ','Manicure + nail polish'],
    ['Парафинотерапия для рук','Ձեռքերի պարաֆինաթերապիա','Paraffin hand treatment'],
    ['Карбокси терапия','Կարբոքսիթերապիա','Carboxytherapy'],
    ['Ультразвуковая чистка лица','Դեմքի ուլտրաձայնային մաքրում','Ultrasonic facial cleansing'],
    ['Восковая эпиляция','Մոմային էպիլյացիա','Waxing'],
    ['Коррекция формы бровей','Հոնքերի ձևի շտկում','Brow shaping'],
    ['Косы','Հյուսքեր','Braids'],
    ['Ламинирование бровей','Հոնքերի լամինացիա','Brow lamination'],
    ['Ламинирование ресниц','Թարթիչների լամինացիա','Lash lamination'],
    ['Маникюр','Մատնահարդարում','Manicure'],
    ['Мытье головы шампунем и кондиционирование','Մազերի լվացում շամպունով և կոնդիցիոներով','Shampoo and conditioning'],
    ['Наращивание волос','Մազերի երկարացում','Hair extensions'],
    ['Наращивание ресниц','Թարթիչների երկարացում','Eyelash extensions']
  ];

  var direct={};
  rows.forEach(function(row){ direct[row[0]]=row; });

  var langIndex={ru:0,hy:1,en:2};

  function getSaved(){
    try{
      var v=localStorage.getItem(STORAGE_KEY);
      return /^(hy|ru|en)$/.test(v||'')?v:null;
    }catch(_){ return null; }
  }

  function detect(){
    var saved=getSaved();
    if(saved) return saved;
    var list=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(function(x){return String(x).toLowerCase();});
    for(var i=0;i<list.length;i++){
      if(list[i].indexOf('hy')===0) return 'hy';
      if(list[i].indexOf('ru')===0) return 'ru';
      if(list[i].indexOf('en')===0) return 'en';
    }
    return 'hy';
  }

  function save(lang){
    try{ localStorage.setItem(STORAGE_KEY,lang); }catch(_){}
  }

  function dynamicValue(source,lang){
    var m;
    m=source.match(/^Показать ещё (\d+) (?:услугу|услуги|услуг)$/);
    if(m) return lang==='hy'?'Ցույց տալ ևս '+m[1]+' ծառայություն':lang==='en'?'Show '+m[1]+' more services':source;
    m=source.match(/^Доступно (\d+) услуг$/);
    if(m) return lang==='hy'?'Հասանելի է '+m[1]+' ծառայություն':lang==='en'?m[1]+' services available':source;
    m=source.match(/^(\d+) отзыв(?:ов|а)? · Google Maps$/);
    if(m) return lang==='hy'?m[1]+' կարծիք · Google Maps':lang==='en'?m[1]+' reviews · Google Maps':source;
    m=source.match(/^(\d{1,2}) из (\d{1,2})$/);
    if(m) return lang==='hy'?m[1]+' / '+m[2]:lang==='en'?m[1]+' of '+m[2]:source;
    return null;
  }

  function canTranslate(source){
    return !!direct[source] || dynamicValue(source,'ru')!==null;
  }

  function outputFor(source,lang){
    var row=direct[source];
    if(row) return row[langIndex[lang]];
    var dyn=dynamicValue(source,lang);
    return dyn===null?source:dyn;
  }

  function skipText(node){
    var el=node.parentElement;
    if(!el) return true;
    if(el.closest('.br-lang-switch')) return true;
    if(el.closest('.tn30-review-card p,.br-review-card p,.tn22-master-review p')) return true;
    return /^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.tagName);
  }

  function translateTree(scope,lang){
    if(!scope) return;
    var walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT);
    var nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      if(skipText(node)) return;
      var raw=node.nodeValue||'';
      var trimmed=raw.trim();
      if(!trimmed) return;
      var canonical=node.__brI18nCanonical;
      if(!canonical && canTranslate(trimmed)){
        canonical=trimmed;
        node.__brI18nCanonical=canonical;
      }
      if(!canonical) return;
      var next=outputFor(canonical,lang);
      var leading=(raw.match(/^\s*/)||[''])[0];
      var trailing=(raw.match(/\s*$/)||[''])[0];
      node.nodeValue=leading+next+trailing;
    });
  }

  function translateAttributes(scope,lang){
    if(!scope) return;
    ['aria-label','title','alt'].forEach(function(attr){
      scope.querySelectorAll('['+attr+']').forEach(function(el){
        var key='brI18n'+attr.replace(/-([a-z])/g,function(_,c){return c.toUpperCase();}).replace(/^./,function(c){return c.toUpperCase();});
        var source=el.dataset[key];
        var current=(el.getAttribute(attr)||'').trim();
        if(!source && canTranslate(current)){
          source=current;
          el.dataset[key]=source;
        }
        if(source) el.setAttribute(attr,outputFor(source,lang));
      });
    });
  }

  function ensureStyle(){
    if(document.getElementById('beautyroom-i18n-style')) return;
    var style=document.createElement('style');
    style.id='beautyroom-i18n-style';
    style.textContent=[
      '@media(max-width:1023px){',
      '#stluxe-tanem-v13 .br-lang-switch{position:absolute;z-index:66;top:0;right:57px;height:52px;display:flex;align-items:center;gap:3px;font-family:Manrope,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}',
      '#stluxe-tanem-v13 .br-lang-switch button{border:0;background:transparent;padding:0 3px;min-width:27px;height:36px;color:#8b817b;font:600 11.5px/1 Manrope,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;letter-spacing:.035em;-webkit-tap-highlight-color:transparent}',
      '#stluxe-tanem-v13 .br-lang-switch button.active{color:#171513}',
      '#stluxe-tanem-v13 .br-lang-switch .sep{color:#c7bbb3;font-size:10px;line-height:1;pointer-events:none}',
      '#stluxe-tanem-v13 .br-lang-switch button:active{transform:scale(.92)}',
      '@media(max-width:360px){#stluxe-tanem-v13 .br-lang-switch{right:52px;gap:1px}#stluxe-tanem-v13 .br-lang-switch button{min-width:23px;padding:0 1px;font-size:10.5px}}',
      'body[data-br-lang="hy"] #tn13Portfolio .tn22-port h2{font-size:38px!important;line-height:1!important;letter-spacing:-.035em!important;max-width:100%!important;overflow-wrap:anywhere!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-services h2{font-size:39px!important;line-height:1!important;letter-spacing:-.035em!important;white-space:normal!important;max-width:100%!important;overflow-wrap:anywhere!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-row{grid-template-columns:minmax(0,1fr) 92px!important;gap:10px!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-copy{min-width:0!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-name{font-weight:500!important;line-height:1.2!important;max-width:100%!important;overflow-wrap:anywhere!important;word-break:normal!important;-webkit-line-clamp:3!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-detail{white-space:normal!important;overflow-wrap:anywhere!important}',
      'body[data-br-lang="hy"] #tn13Visit h2{font-size:39px!important;line-height:1!important;white-space:nowrap!important;letter-spacing:-.035em!important}',
      'body[data-br-lang="hy"] #tn13Visit .tn22-contact:last-child strong{font-size:13.2px!important;white-space:nowrap!important}',
      'body[data-br-lang="hy"] #tn13Visit .tn22-contact:last-child>span:last-child>span{font-size:8.8px!important;white-space:nowrap!important}',
      'body[data-br-lang="hy"] #tn13Visit .tn22-route{font-size:11.5px!important;white-space:nowrap!important}',
      '#stluxe-tanem-v13 .tn22-master-top{display:grid!important;grid-template-columns:40px minmax(0,1fr) 40px!important;align-items:center!important}',
      '#stluxe-tanem-v13 .tn22-master-brand{text-align:center!important;justify-self:center!important;max-width:100%!important;font-size:14px!important;letter-spacing:.12em!important;white-space:nowrap!important}',
      '}'
    ].join('');
    document.head.appendChild(style);
  }

  function ensureSwitcher(){
    if(!root) return;
    var top=root.querySelector('.tn22-top');
    if(!top || top.querySelector('.br-lang-switch')) return;
    var sw=document.createElement('div');
    sw.className='br-lang-switch';
    sw.setAttribute('role','group');
    sw.setAttribute('aria-label','Language');
    sw.innerHTML='<button type="button" data-lang="hy">HY</button><span class="sep">/</span><button type="button" data-lang="ru">RU</button><span class="sep">/</span><button type="button" data-lang="en">EN</button>';
    sw.addEventListener('pointerdown',function(e){e.stopPropagation();});
    sw.addEventListener('click',function(e){
      var btn=e.target.closest('[data-lang]');
      if(!btn) return;
      e.preventDefault();
      e.stopPropagation();
      setLanguage(btn.getAttribute('data-lang'),true);
    });
    var menu=top.querySelector('.tn22-menu');
    top.insertBefore(sw,menu||null);
  }

  function updateSwitcher(){
    if(!root) return;
    root.querySelectorAll('.br-lang-switch [data-lang]').forEach(function(btn){
      var active=btn.getAttribute('data-lang')===currentLang;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }

  function applySpecials(){
    if(!root) return;
    var credit=root.querySelector('.br-tanem-copy');
    if(credit){
      if(currentLang==='hy') credit.innerHTML='Ստեղծված է <strong>TANEM.ru</strong>-ում';
      else if(currentLang==='en') credit.innerHTML='Created with <strong>TANEM.ru</strong>';
      else credit.innerHTML='Создано в <strong>TANEM.ru</strong>';
    }

    var masterBrand=root.querySelector('.tn22-master-brand');
    if(masterBrand) masterBrand.textContent='Beauty Room';

    if(currentLang==='hy'){
      var team=root.querySelector('#tn13Team');
      var masterPage=root.querySelector('.tn22-master-page');
      if(team){
        translateTree(team,'en');
        translateAttributes(team,'en');
      }
      if(masterPage){
        translateTree(masterPage,'en');
        translateAttributes(masterPage,'en');
      }
    }
  }

  function updateMeta(){
    var m=meta[currentLang]||meta.hy;
    document.documentElement.lang=currentLang;
    document.documentElement.dir='ltr';
    document.title=m.title;
    var desc=document.querySelector('meta[name="description"]');
    if(desc) desc.setAttribute('content',m.description);
  }

  function applyLanguage(){
    if(!root) return;
    ensureSwitcher();
    translateTree(root,currentLang);
    translateAttributes(root,currentLang);
    updateSwitcher();
    applySpecials();
    updateMeta();
    document.body.dataset.brLang=currentLang;
  }

  function setLanguage(lang,userChoice){
    if(!/^(hy|ru|en)$/.test(lang)) lang='hy';
    currentLang=lang;
    if(userChoice) save(lang);
    applyLanguage();
    setTimeout(applyLanguage,0);
    setTimeout(applyLanguage,80);
    setTimeout(applyLanguage,260);
  }

  function start(){
    ensureStyle();
    currentLang=detect();
    var attempts=0;
    var timer=setInterval(function(){
      attempts++;
      root=document.getElementById('stluxe-tanem-v13');
      if(!root){
        if(attempts>100) clearInterval(timer);
        return;
      }
      clearInterval(timer);
      setLanguage(currentLang,false);
      [250,700,1400].forEach(function(ms){setTimeout(applyLanguage,ms);});
      root.addEventListener('click',function(e){
        if(e.target.closest('.br-lang-switch')) return;
        setTimeout(applyLanguage,0);
        setTimeout(applyLanguage,90);
      },true);
      setInterval(function(){
        var statusRoot=root.querySelector('#tn22Status');
        var heroStatus=root.querySelector('.tn50-hero-status');
        if(statusRoot) translateTree(statusRoot,currentLang);
        if(heroStatus) translateTree(heroStatus,currentLang);
      },1000);
    },80);
  }

  start();
})();
