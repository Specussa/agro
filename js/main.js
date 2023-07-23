// start scroll
const map_scroll = document.querySelector('.map__city');
const headernav_scroll = document.querySelector('.header__nav_scroll');
const headercity_scroll = document.querySelector('.header__city_scroll');
const headerlist_scroll = document.querySelector('.header__list_scroll');
if(!map_scroll){} else {
  Scrollbar.init(map_scroll);
  map_scroll.addEventListener("touchstart", function (e) {scroll.stop()});
  map_scroll.addEventListener("touchmove", function (e) {scroll.stop()});
  map_scroll.addEventListener("touched", function (e) {scroll.stop()});
  document.body.addEventListener("touchstart", function (e) {scroll.start()});
  document.body.addEventListener("touchmove", function (e) {scroll.start()});
  document.body.addEventListener("touched", function (e) {scroll.start()});
  map_scroll.onmouseover = function(e) {scroll.stop();};
  map_scroll.onmouseout = function(e) {scroll.start();};
}
if(!headernav_scroll){} else {Scrollbar.init(headernav_scroll);}
if(!headercity_scroll){} else {Scrollbar.init(headercity_scroll);}
if(!headerlist_scroll){} else {Scrollbar.init(headerlist_scroll);}
// end scroll

// start navbar
// кнопка header__burger
const bodyoverlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const menuindex = document.querySelector("header");
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.height = null;
    menuindex.style.zIndex = null;
    document.querySelectorAll('.header__item .header__button').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.header__item .header__block').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.header__item .header__block').forEach(n => n.style.maxHeight = null);
  } else {
    bodyoverlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.height = "100vh";
    menuindex.style.zIndex = "102";
    document.querySelectorAll('.header__item .header__button').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.header__item .header__block').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.header__item .header__block').forEach(n => n.style.maxHeight = null);
  }
})
// end navbar

// кнопка header__burger_mobile
const burgermobile = document.querySelector('.header__burger_mobile');
const headerlist = document.querySelector('.header__list');
const headerbuttons = document.querySelector('.header__buttons');
const headercontacts = document.querySelector('.header__contacts');
const headerscroll = document.querySelector('.header__list_block');
burgermobile.addEventListener('click', function() {
  if (burgermobile.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    burgermobile.classList.remove("active");
    headerlist.classList.remove("active");
    headerbuttons.classList.remove("active");
    headercontacts.classList.remove("active");
    headerscroll.classList.remove("active");
    document.body.style.height = null;
    menuindex.style.zIndex = null;
    document.querySelectorAll('.header__item .header__button').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.header__item .header__block').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.header__item .header__block').forEach(n => n.style.maxHeight = null);
  } else {
    bodyoverlay.classList.add("active");
    burgermobile.classList.add("active");
    headerlist.classList.add("active");
    headerbuttons.classList.add("active");
    headercontacts.classList.add("active");
    headerscroll.classList.add("active");
    document.body.style.height = "100vh";
    menuindex.style.zIndex = "102";
    document.querySelectorAll('.header__item .header__button').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.header__item .header__block').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.header__item .header__block').forEach(n => n.style.maxHeight = null);
  }
})
// end navbar

// кнопка header__region
const bodyoverlaycity = document.querySelector('.overlay__city');
const menucity = document.querySelector('.header__city');
const burgercity = document.querySelector('.header__region');

burgercity.addEventListener('click', function() {
  if (burgercity.classList.contains("active")) {
    bodyoverlaycity.classList.remove("active");
    menucity.classList.remove("active");
    burgercity.classList.remove("active");
    document.body.style.height = null;
    menuindex.style.zIndex = null;
  } else {
    bodyoverlaycity.classList.add("active");
    menucity.classList.add("active");
    burgercity.classList.add("active");
    document.body.style.height = "100vh";
    menuindex.style.zIndex = "102";
  }
})
document.querySelector('.header__city_button').addEventListener('click', function() {
  bodyoverlaycity.classList.remove("active");
  menucity.classList.remove("active");
  burgercity.classList.remove("active");
  document.body.style.height = null;
  menuindex.style.zIndex = null;
})
// end header__region

// кнопка overlay
bodyoverlay.addEventListener('click', function() {
  bodyoverlay.classList.remove("active");
  menu.classList.remove("active");
  burger.classList.remove("active");
  burgermobile.classList.remove("active");
  headerlist.classList.remove("active");
  headerbuttons.classList.remove("active");
  headercontacts.classList.remove("active");
  headerscroll.classList.remove("active");
  document.querySelectorAll('.header__item .header__button').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.header__item .header__block').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.header__item .header__block').forEach(n => n.style.maxHeight = null);
  document.body.style.height = null;
  menuindex.style.zIndex = null;
})
// end overlay

// кнопка overlay__city
bodyoverlaycity.addEventListener('click', function() {
  bodyoverlaycity.classList.remove("active");
  menucity.classList.remove("active");
  burgercity.classList.remove("active");
  document.body.style.height = null;
  menuindex.style.zIndex = null;
})
// end overlay

// кнопка header__search
document.querySelector('.header__search').addEventListener('click', () => {
  document.querySelector('.header__search_input').classList.toggle('active');
});
// end overlay

// start menu
var hblockacc = document.getElementsByClassName("header__button");
for (i = 0; i < hblockacc.length; i++) {
  hblockacc[i].onclick = function(e) {
    var hblockaccordion = this.nextElementSibling;
    var coursehblockAccordion = document.getElementsByClassName("header__block");
    var coursehblockAccordionActive = document.getElementsByClassName("header__button active");

    if (hblockaccordion.style.maxHeight) {
      hblockaccordion.style.maxHeight = null;
      mapmargin.forEach(n => n.style.margin = null);
      this.classList.remove("active");
      hblockaccordion.classList.remove("active");
      bodyoverlay.classList.remove("active");
      document.querySelectorAll('.header__list_scroll .scroll-content').forEach(n => n.classList.remove('active'));
    } else {
      for (var q = 0; q < coursehblockAccordionActive.length; q++) {
        coursehblockAccordionActive[q].classList.remove("active");
        coursehblockAccordion[q].classList.remove("active");
      }
      for (var p = 0; p < coursehblockAccordion.length; p++) {
        this.classList.remove("active");
        coursehblockAccordion[p].classList.remove("active");
        coursehblockAccordion[p].style.maxHeight = null;
      }
      bodyoverlay.classList.remove("active");
      menu.classList.remove("active");
      burger.classList.remove("active");
      bodyoverlay.classList.add("active");
      hblockaccordion.style.maxHeight = (hblockaccordion.scrollHeight * 1) + "px";
      hblockaccordion.classList.add("active");
      this.classList.add("active");
      mapmargin.forEach(n => n.style.margin = 0);
      document.querySelectorAll('.header__list_scroll .scroll-content').forEach(n => n.classList.add('active'));
    }
  };
}
// удаляем блоки если в нем нет текста
window.addEventListener('DOMContentLoaded', function() {
   [].forEach.call( document.querySelectorAll('.header__block'), function(el) {
        if ('' == +el.textContent) {
          el.style.display = 'none';
          el.previousElementSibling.style.display = 'none';
          el.previousElementSibling.remove(el);
          el.parentNode.removeChild(el);
        } else {
          el.previousElementSibling.previousElementSibling.style.display = 'none';
          el.previousElementSibling.previousElementSibling.remove(el);
        }
   });
});
// end menu

// start hover menu
var hover = document.querySelector('.header__nav_list'),
elemHover = false;

hover.addEventListener('mouseover', function(e) {
  if(elemHover) return;
  var target = e.target.closest('.header__nav_item');
  if(!target) return;
  elemHover = target;
  var parent = target.closest('.header__nav_list'),
  old = parent.querySelector('.active')
  if(old) old.classList.remove('active')
  target.classList.add('active')
})
hover.addEventListener('mouseout', function(e) {
  if(!elemHover) return
  elemHover = null;
})
// start dark mode

// start счетчик для всех листов
const hlisttop = document.querySelectorAll('.header__list_top'); 
[...hlisttop].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
const hlistbottom = document.querySelectorAll('.header__list_bottom'); 
[...hlistbottom].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
// end счетчик для всех листов

// start year
const year = document.querySelector('.footer__year');
if(!year){} else {
const currentYear = new Date().getFullYear();
year.insertAdjacentText('beforebegin', currentYear);
year.remove();
}
// end year

// start hero slider
const heroslider = document.querySelectorAll('.hero');
if(!heroslider){} else {
  var interleaveOffset = 0.5;
  const sliderSelector = '.hero__slider',
  options = {
    loop: true,
    loopedSlides: 2,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
    },
    on: {
      progress: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".hero__block").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
        }      
      },
      touchStart: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function(speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".hero__block").style.transition = speed + "ms";
        }
      }
    }
  };
  const heroSwiper = new Swiper(sliderSelector, options);
  heroSwiper.init();
  
  [].forEach.call(document.querySelectorAll('.hero__block'), (element) => {
    if (element.getAttribute('data-background')) {
      element.style.setProperty('background-image', 'url(' + element.getAttribute('data-background') + ')');
    }
  });
}
// end hero slider

// start hero slider
const partnerslisttop = document.querySelectorAll('.partners__list_top');
if(!partnerslisttop){} else {
  var partnerstop = new Swiper('.partners__list_top', {  
    loop: true,
    loopedSlides: 0,
    spaceBetween: 0,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    slideToClickedSlide: false,
    allowTouchMove: false,
    autoplay : true,
    speed: 3000,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          partnerstop.params.speed = 0;
          partnersbottom.params.speed = 0;
          partnerstop.autoplay.stop();
          partnersbottom.autoplay.stop();
        });
        this.el.addEventListener('mouseleave', () => {
          partnerstop.params.speed = 3000;
          partnersbottom.params.speed = 3000;
          partnerstop.autoplay.start();
          partnersbottom.autoplay.start();
        });
      }
    },
  });
}

const partnerslistbottom = document.querySelectorAll('.partners__list_bottom');
if(!partnerslistbottom){} else {
  var partnersbottom = new Swiper('.partners__list_bottom', {
    loop: true,
    loopedSlides: 0,
    spaceBetween: 0,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    slideToClickedSlide: false,
    allowTouchMove: false,
    speed: '3000',
    autoplay: {
      delay: 0,
      reverseDirection: true,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          partnerstop.params.speed = 0;
          partnersbottom.params.speed = 0;
          partnerstop.autoplay.stop();
          partnersbottom.autoplay.stop();
        });
        this.el.addEventListener('mouseleave', () => {
          partnerstop.params.speed = 3000;
          partnersbottom.params.speed = 3000;
          partnerstop.autoplay.start();
          partnersbottom.autoplay.start();
        });
      }
    },
  });
}

// end company slider

// start company slider
const companyslider = document.querySelectorAll('.company__slider');
if(!companyslider){} else {
  var interleaveOffset = 0.5;
  var galleryTop = new Swiper('.company__top', {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    loopedSlides: 2,
    parallax: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '.company__next',
      prevEl: '.company__prev',
    },
    pagination: {
      el: '.company__counter',
      type: 'fraction',
    },
    on: {
      progress: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".company__block").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
        }      
      },
      touchStart: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function(speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".company__block").style.transition = speed + "ms";
        }
      }
    }
  });
  
  [].forEach.call(document.querySelectorAll('.company__block'), (element) => {
    if (element.getAttribute('data-background')) {
      element.style.setProperty('background-image', 'url(' + element.getAttribute('data-background') + ')');
    }
  });

  var galleryThumbs = new Swiper('.company__thumbs', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: '2',
    touchRatio: 0.2,
    loop: true,
    loopedSlides: 2,
    speed: 1000,
    slideToClickedSlide: false,
    allowTouchMove: false,
    breakpoints: {
      1700: {
        spaceBetween: 20,
      }
    }
  });

  var galleryText = new Swiper('.company__texts', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: '1',
    touchRatio: 0.2,
    loop: true,
    loopedSlides: 2,
    slideToClickedSlide: false,
    allowTouchMove: false,
    speed: 1000,
    breakpoints: {
      800: {
        spaceBetween: 20,
      }
    }
  });
  galleryTop.controller.control = galleryThumbs && galleryText;
  galleryThumbs.controller.control = galleryTop && galleryText;
  galleryText.controller.control = galleryTop && galleryThumbs;
}
// end company slider

// start company slider
var offerslider = new Swiper('.offer__slider', {
  loop: false,
  spaceBetween: 50,
  slidesPerView: '2',
  touchRatio: 0.2,
  loop: false,
  loopedSlides: 1,
  speed: 1000,
  slideToClickedSlide: false,
  allowTouchMove: false,
  pagination: {
    el: '.offer__pagination',
    clickable: true,
  },
  breakpoints: {
    800: {
      slidesPerView: '1',
      spaceBetween: 20,
      allowTouchMove: true,
      slideToClickedSlide: true,
      setings: {
        loop: true,
        loopedSlides: 2,
      },
    },
    1199: {
      spaceBetween: 40,
    }
  },
});
// end company slider

// map
// start search map
const mapcity = document.querySelector('.map__city');
function filterFunction() {
  var mapinput, filter, i;
  mapinput = document.getElementById("map__input");
  filter = mapinput.value.toUpperCase();
  mapsearch = document.getElementById("map__search");
  searchp = mapsearch.getElementsByTagName("p");
  for (i = 0; i < searchp.length; i++) {
    txtValue = searchp[i].textContent || searchp[i].innerText;
    document.querySelectorAll('.map__search_city .map__search_head').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.map__search_city .map__search_head').forEach(n => n.classList.remove('close'));
    document.querySelectorAll('.map__search_city .map__search_info').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.map__search_city .map__search_info').forEach(n => n.style.maxHeight = null);
    document.querySelectorAll('.map__city .scroll-content').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.map__container .map__city').forEach(n => n.classList.remove('active'));
    map_scroll.onmouseover = function(e) {scroll.stop();};
    mapcity.style.overflow = "hidden";
    mapmargin.forEach(n => n.style.margin = null);
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      searchp[i].style.display = "";
    } else {
      searchp[i].style.display = "none";
    }
  }
}
// end search map

// start search back
const maphead = document.querySelectorAll('.map__search_city .map__search_head');
const mapinfo = document.querySelectorAll('.map__search_city .map__search_info');
const mapmargin = document.querySelectorAll('.map__city .map__search_city');
const mapback = document.querySelector('.map__search_back');
document.querySelector('.map__search_back').addEventListener('click', (event) => {
  maphead.forEach(n => n.classList.remove('active'));
  maphead.forEach(n => n.classList.remove('close'));
  mapinfo.forEach(n => n.classList.remove('active'));
  mapinfo.forEach(n => n.style.maxHeight = null);
  mapmargin.forEach(n => n.style.margin = null);
  mapback.classList.add('close');
  mapcity.style.overflow = "hidden";
  document.querySelectorAll('.map__city .scroll-content').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.map__container .map__city').forEach(n => n.classList.remove('active'));
  map_scroll.onmouseover = function(e) {scroll.stop();};
  myMap.setCenter([55.253215,37.622504],6);
});
// end search back

// start map accordion href
function moscow() {
  if (maphead[0].classList.contains("active")) {
    myMap.setCenter([55.88088924541,37.423524915344],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function peterburg() {
  if (maphead[1].classList.contains("active")) {
    myMap.setCenter([59.618243,30.172631],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function vologda() {
  if (maphead[2].classList.contains("active")) {
    myMap.setCenter([59.199017,39.8100982],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function voronezh() {
  if (maphead[3].classList.contains("active")) {
    myMap.setCenter([51.639685,39.324973],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function kursk() {
  if (maphead[4].classList.contains("active")) {
    myMap.setCenter([51.627834,36.117242],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function lipetsk() {
  if (maphead[5].classList.contains("active")) {
    myMap.setCenter([52.597220203418,39.458276316873],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function orel() {
  if (maphead[6].classList.contains("active")) {
    myMap.setCenter([52.923587,36.078570],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function pavlovsck() {
  if (maphead[7].classList.contains("active")) {
    myMap.setCenter([50.452752,40.148549],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function penza() {
  if (maphead[8].classList.contains("active")) {
    myMap.setCenter([53.270195255583,45.024497906746],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function pskov() {
  if (maphead[9].classList.contains("active")) {
    myMap.setCenter([56.9816779,29.9243012],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function ryazan() {
  if (maphead[10].classList.contains("active")) {
    myMap.setCenter([54.647213,39.638701],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function tambov() {
  if (maphead[11].classList.contains("active")) {
    myMap.setCenter([52.650429,41.407760],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
function yaroslavl() {
  if (maphead[12].classList.contains("active")) {
    myMap.setCenter([57.6873825,39.8908799],12);
  } else {
    myMap.setCenter([55.253215,37.622504],6);
  };
}
// end map accordion href

// start map accordion
var acc = document.getElementsByClassName("map__search_head");
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function(e) {
    var accordion = this.nextElementSibling;
    var courseAccordion = document.getElementsByClassName("map__search_info");
    var courseAccordionButton = document.getElementsByClassName("map__search_head");
    var courseAccordionActive = document.getElementsByClassName("map__search_head active");

    if (accordion.style.maxHeight) {
      accordion.style.maxHeight = null;
      mapmargin.forEach(n => n.style.margin = null);
      mapback.classList.add('close');
      this.classList.remove("active");
      accordion.classList.remove("active");
      mapcity.style.overflow = "hidden";
      document.querySelectorAll('.map__city .scroll-content').forEach(n => n.classList.remove('active'));
      document.querySelectorAll('.map__container .map__city').forEach(n => n.classList.remove('active'));
      map_scroll.onmouseover = function(e) {scroll.stop();};
      for (var b = 0; b < courseAccordionButton.length; b++) {
        courseAccordionButton[b].classList.remove("close");
      }
    } else {
      for (var q = 0; q < courseAccordionActive.length; q++) {
        courseAccordionActive[q].classList.remove("active");
        courseAccordion[q].classList.remove("active");
      }
      for (var b = 0; b < courseAccordionButton.length; b++) {
        courseAccordionButton[b].classList.add("close");
      }
      for (var p = 0; p < courseAccordion.length; p++) {
        this.classList.remove("active");
        courseAccordion[p].classList.remove("active");
        courseAccordion[p].style.maxHeight = null;
      }
      accordion.style.maxHeight = (accordion.scrollHeight * 2) + "px";
      accordion.classList.add("active");
      this.classList.add("active");
      accordion.classList.remove("close");
      this.classList.remove("close");
      mapmargin.forEach(n => n.style.margin = 0);
      mapback.classList.remove('close');
      mapcity.style.overflow = "visible";
      document.querySelectorAll('.map__city .scroll-content').forEach(n => n.classList.add('active'));
      document.querySelectorAll('.map__container .map__city').forEach(n => n.classList.add('active'));
      map_scroll.onmouseover = function(e) {scroll.start();};
    }
  };
}
// end accordion

// start yandex map
const map = document.querySelectorAll('.map');
  var myMap,ymaps;
  function init() {
    myMap = document.getElementById("map");
    if (!myMap) return;
    myMap = new ymaps.Map(myMap, {
      center: [55.253215, 37.622504],
      zoom: 6, 
      controls: []
      },{
      zoomControlPosition: { right: 0, top: 0 },
      zoomControlSize: 'auto'
    });

    // myMap.controls.add("zoomControl", {});
    // var winWidth = window.innerWidth;
    // if(winWidth <= 1024){
    //     myMap.behaviors.disable('drag');
    // }

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);

    function zoomIn() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom + 1);
    }
  
    function zoomOut() {
      const currentZoom = myMap.getZoom();
      myMap.setZoom(currentZoom - 1);
    }

    var data = {
      'points': [{
        "infoPoint": '<div id="mapmoscow" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Бабакина, д. 5-А, оф. 707</div>\
          </div>\
        </div>',
        "latitude": 55.88088924541,
        "longitude": 37.423524915344,
        },
        {
        "infoPoint": '<div id="mappeterburg" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Кутышева, д. 5, стр. 5</div>\
          </div>\
        </div>',
        "latitude": 59.618243,
        "longitude": 30.172631,
        },
        {
        "infoPoint": '<div id="mapvologda" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Гагарина, д. 91, оф. 3</div>\
          </div>\
        </div>',
        "latitude": 59.199017,
        "longitude": 39.8100982,
        },
        {
        "infoPoint": '<div id="mapvoronezh" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Автодорожная, д. 7</div>\
          </div>\
        </div>',
        "latitude": 51.639685,
        "longitude": 39.324973,
        },
        {
        "infoPoint": '<div id="mapkursk" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">Промышленный пер., 4а</div>\
          </div>\
        </div>',
        "latitude": 51.627834,
        "longitude": 36.117242,
        },
        {
        "infoPoint": '<div id="maplipetsk" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Ангарская, д. 26Д</div>\
          </div>\
        </div>',
        "latitude": 52.597220203418,
        "longitude": 39.458276316873,
        },
        {
        "infoPoint": '<div id="maporel" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Итальянская, д. 1 Г</div>\
          </div>\
        </div>',
        "latitude": 52.923587,
        "longitude": 36.078570,
        },
        {
        "infoPoint": '<div id="mappavlovsck" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Транспортная, д. 2</div>\
          </div>\
        </div>',
        "latitude": 50.452752,
        "longitude": 40.148549,
        },
        {
        "infoPoint": '<div id="mappenza" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Ухтинка, д. 1Б</div>\
          </div>\
        </div>',
        "latitude": 53.270195255583,
        "longitude": 45.024497906746,
        },
        {
        "infoPoint": '<div id="mappskov" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">ул. Философовой, д. 13</div>\
          </div>\
        </div>',
        "latitude": 56.9816779,
        "longitude": 29.9243012,
        },
        {
        "infoPoint": '<div id="mapryazan" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">184 км (Окружная дор.), стр. 8</div>\
          </div>\
        </div>',
        "latitude": 54.647213,
        "longitude": 39.638701,
        },
        {
        "infoPoint": '<div id="maptambov" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">Промышленная зона, стр. 1</div>\
          </div>\
        </div>',
        "latitude": 52.650429,
        "longitude": 41.407760,
        },
        {
        "infoPoint": '<div id="mapyaroslavl" class="map__point{% if properties.active %} map__point_active{% endif %}">\
        <span class="map__icon"><svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9289 13.429C11.6164 13.429 12.205 13.1842 12.6946 12.6946C13.1841 12.205 13.4289 11.6165 13.4289 10.929C13.4289 10.2415 13.1841 9.65291 12.6946 9.16333C12.205 8.67375 11.6164 8.42895 10.9289 8.42895C10.2414 8.42895 9.65289 8.67375 9.16331 9.16333C8.67373 9.65291 8.42893 10.2415 8.42893 10.929C8.42893 11.6165 8.67373 12.205 9.16331 12.6946C9.65289 13.1842 10.2414 13.429 10.9289 13.429ZM10.9289 22.6165C13.4706 20.2831 15.356 18.1633 16.5852 16.2571C17.8144 14.3508 18.4289 12.6581 18.4289 11.179C18.4289 8.90812 17.705 7.04875 16.2571 5.60083C14.8091 4.15291 13.0331 3.42895 10.9289 3.42895C8.82477 3.42895 7.04873 4.15291 5.60081 5.60083C4.15289 7.04875 3.42893 8.90812 3.42893 11.179C3.42893 12.6581 4.04352 14.3508 5.27268 16.2571C6.50185 18.1633 8.38727 20.2831 10.9289 22.6165ZM10.9289 25.929C7.57477 23.0748 5.06956 20.4237 3.41331 17.9758C1.75706 15.5279 0.928934 13.2623 0.928934 11.179C0.928934 8.05395 1.93414 5.56437 3.94456 3.71021C5.95498 1.85604 8.2831 0.928955 10.9289 0.928955C13.5748 0.928955 15.9029 1.85604 17.9133 3.71021C19.9237 5.56437 20.9289 8.05395 20.9289 11.179C20.9289 13.2623 20.1008 15.5279 18.4446 17.9758C16.7883 20.4237 14.2831 23.0748 10.9289 25.929Z" fill="#006EB9"/></svg></span>\
          <div class="map__point_block">\
            <div class="map__point_temp">п. Лесная поляна, д. 43, стр. 8</div>\
          </div>\
        </div>',
        "latitude": 57.6873825,
        "longitude": 39.8908799,
        }
      ],
    };

    var mapCoordinates = new ymaps.GeoObjectCollection();

    var results = [];
    data.points.forEach(function(item, index){
      results.push(createPlacemark(item));
    });
    myMap.geoObjects.add(mapCoordinates);
    myMap.behaviors.disable('scrollZoom');

  // Создать метку
    function createPlacemark(item) {
      var options = Object();
      var squareLayout = ymaps.templateLayoutFactory.createClass(item.infoPoint);
      var place = new ymaps.Placemark([item.latitude, item.longitude],{hintContent: false}, {
        iconLayout: squareLayout,
        iconShape: {   
          type: 'Rectangle',
          coordinates: [
            [-12, -20], [30, 30]
          ]
        }
      });
      mapCoordinates.add(place);
    }
    var thatCoordinates;
    mapCoordinates.events.add('click', function (e) {
      var that = e.get('target').properties.get('active');
      mapCoordinates.each(function(item, index){
        item.properties.set('active', false);
        if(e.get('target') == item && !that){
          e.get('target').properties.set('active', true);
          thatCoordinates = e.get('coords');
        }
      });
      var idmap = document.querySelectorAll('.map__search_city');
      var thismapinfo = document.querySelector('.map__search_info');
      var mapmoscow = document.getElementById('mapmoscow');
      const maphead = document.querySelectorAll('.map__search_city .map__search_head');
      const mapinfo = document.querySelectorAll('.map__search_city .map__search_info');
      
      if (mapmoscow.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([55.88088924541,37.423524915344],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[0].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = null);
        mapback.classList.add('close');
        myMap.setCenter([55.253215,37.622504],6);
      };
      var mappeterburg = document.getElementById('mappeterburg');
      if (mappeterburg.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([59.618243,30.172631],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[1].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mapvologda = document.getElementById('mapvologda');
      if (mapvologda.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([59.199017,39.8100982],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[2].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mapvoronezh = document.getElementById('mapvoronezh');
      if (mapvoronezh.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([51.639685,39.324973],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[3].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mapkursk = document.getElementById('mapkursk');
      if (mapkursk.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([51.627834,36.117242],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[4].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var maplipetsk = document.getElementById('maplipetsk');
      if (maplipetsk.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([52.597220203418,39.458276316873],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[5].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var maporel = document.getElementById('maporel');
      if (maporel.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([52.923587,36.078570],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[6].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mappavlovsck = document.getElementById('mappavlovsck');
      if (mappavlovsck.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([50.452752,40.148549],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[7].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mappenza = document.getElementById('mappenza');
      if (mappenza.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([53.270195255583,45.024497906746],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[8].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mappskov = document.getElementById('mappskov');
      if (mappskov.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([56.9816779,29.9243012],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[9].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mapryazan = document.getElementById('mapryazan');
      if (mapryazan.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([54.647213,39.638701],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[10].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var maptambov = document.getElementById('maptambov');
      if (maptambov.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([52.650429,41.407760],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[11].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
      var mapyaroslavl = document.getElementById('mapyaroslavl');
      if (mapyaroslavl.classList.contains("map__point_active")) {
        maphead.forEach(n => n.classList.remove('active'));
        maphead.forEach(n => n.classList.remove('close'));
        maphead.forEach(n => n.classList.add('close'));
        mapinfo.forEach(n => n.classList.remove('active'));
        mapinfo.forEach(n => n.style.maxHeight = null);
        mapmargin.forEach(n => n.style.margin = 0);
        myMap.setCenter([57.6873825,39.8908799],12);
        mapback.classList.remove('close');
        idmap.forEach(n => n.style.display = "block");
        var idmapi = idmap[12].children;
        for (var i = 0; i < idmapi.length; i++) {
          idmapi[i].classList.add('active');
          idmapi[0].classList.remove('close');
          idmapi[1].style.maxHeight = (thismapinfo.scrollHeight * 2) + "px";
        }
      } else {};
    });
  }
  if (ymaps != undefined) ymaps.ready(init);
// end yandex map
// map