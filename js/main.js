// start reload
var oldWidth = window.innerWidth;
window.addEventListener("resize", function() {
  if (window.innerWidth <= 800 && window.innerWidth > 799) {
    location.reload();
  }
});
// start reload

// start scroll
const mapcity = document.querySelector('.map__city');
const headernav_scroll = document.querySelector('.header__nav_scroll');
const headercity_scroll = document.querySelector('.header__city_scroll');
const headerlist_scroll = document.querySelector('.header__list_scroll');
const inforead_scroll = document.querySelector('.info__read_scroll');
const formread_scroll = document.querySelector('.form__read_scroll');
const sparepartslist_scroll = document.querySelector(".spareparts__list");
const detaillist_scroll = document.querySelector(".detail__list");
var headersubnav_scroll = document.getElementsByClassName("header__subnav_scroll");
if(mapcity){
  if (mapcity.classList.contains("active")) {} else {
    Scrollbar.init(mapcity);
    mapcity.addEventListener("touchstart", function (e) {scroll.stop()});
    mapcity.addEventListener("touchmove", function (e) {scroll.stop()});
    mapcity.addEventListener("touched", function (e) {scroll.stop()});
    document.body.addEventListener("touchstart", function (e) {scroll.start()});
    document.body.addEventListener("touchmove", function (e) {scroll.start()});
    document.body.addEventListener("touched", function (e) {scroll.start()});
    mapcity.onmouseover = function(e) {scroll.stop();};
    mapcity.onmouseout = function(e) {scroll.start();};
  }
}
if(sparepartslist_scroll){
  if(window.innerWidth > 800){
    if (sparepartslist_scroll.classList.contains("active")) {} else {
      Scrollbar.init(sparepartslist_scroll);
      sparepartslist_scroll.addEventListener("touchstart", function (e) {scroll.stop()});
      sparepartslist_scroll.addEventListener("touchmove", function (e) {scroll.stop()});
      sparepartslist_scroll.addEventListener("touched", function (e) {scroll.stop()});
      document.body.addEventListener("touchstart", function (e) {scroll.start()});
      document.body.addEventListener("touchmove", function (e) {scroll.start()});
      document.body.addEventListener("touched", function (e) {scroll.start()});
      sparepartslist_scroll.onmouseover = function(e) {scroll.stop();};
      sparepartslist_scroll.onmouseout = function(e) {scroll.start();};
    }
  } else {}
}
if(detaillist_scroll){
  if(window.innerWidth > 800){
    if (detaillist_scroll.classList.contains("active")) {} else {
      Scrollbar.init(detaillist_scroll);
      detaillist_scroll.addEventListener("touchstart", function (e) {scroll.stop()});
      detaillist_scroll.addEventListener("touchmove", function (e) {scroll.stop()});
      detaillist_scroll.addEventListener("touched", function (e) {scroll.stop()});
      document.body.addEventListener("touchstart", function (e) {scroll.start()});
      document.body.addEventListener("touchmove", function (e) {scroll.start()});
      document.body.addEventListener("touched", function (e) {scroll.start()});
      detaillist_scroll.onmouseover = function(e) {scroll.stop();};
      detaillist_scroll.onmouseout = function(e) {scroll.start();};
    }
  } else {}
}
if(headernav_scroll){Scrollbar.init(headernav_scroll);}
if(headercity_scroll){Scrollbar.init(headercity_scroll);}
if(headerlist_scroll){Scrollbar.init(headerlist_scroll);}
if(inforead_scroll){Scrollbar.init(inforead_scroll);}
if(formread_scroll){Scrollbar.init(formread_scroll);}
for (i = 0; i < headersubnav_scroll.length; i++) {
  Scrollbar.init(headersubnav_scroll[i]);
}
// end scroll

// start анимация перехода если есть класс link
let link = document.querySelectorAll(".link");
let links = document.querySelector(".link");
if(links){
  for (let i = 0; i < link.length; i++) {
    link[i].onclick = function(e) {
      let href = this.href;
      document.querySelector('.preloader').style.visibility = "visible";
      window.setTimeout(function () {
        document.querySelector('.preloader__top').style.top = null;
        document.querySelector('.preloader__bottom').style.top = null;
      }, 0);
      setTimeout(function() {
        window.setTimeout(function () {
          document.querySelector('.preloader').style.display = null;
        }, 4400);
        window.setTimeout(function () {
          document.querySelector('.preloader__top').style.top = "-50%";
          document.querySelector('.preloader__bottom').style.top = "100%";
        }, 4000);
        window.location = href;
      }, 500);
      e.preventDefault();
    }
  }
}
// end

// start height
const docheight = document.documentElement
const appHeight = () => {docheight.style.setProperty('--height', `${window.innerHeight}px`)}
window.addEventListener('resize', appHeight)
appHeight()
window.onresize = function () {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    const appHeight = () => {docheight.style.setProperty('--height', `${window.innerHeight}px`)}
    window.addEventListener('resize', appHeight)
    appHeight()
  }
};
// end height

// start navbar
// кнопка header__burger
const bodyoverlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const menuindex = document.querySelector("header");
const hhbt = document.querySelectorAll('.header__item .header__button');
const hhbl = document.querySelectorAll('.header__item .header__block');
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.height = null;
    menuindex.style.zIndex = null;
    hhbt.forEach(n => n.classList.remove('active'));
    hhbl.forEach(n => n.classList.remove('active'));
    hhbl.forEach(n => n.style.maxHeight = null);
  } else {
    bodyoverlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.height = "100vh";
    menuindex.style.zIndex = "102";
    hhbt.forEach(n => n.classList.remove('active'));
    hhbl.forEach(n => n.classList.remove('active'));
    hhbl.forEach(n => n.style.maxHeight = null);
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
    hhbt.forEach(n => n.classList.remove('active'));
    hhbl.forEach(n => n.classList.remove('active'));
    hhbl.forEach(n => n.style.maxHeight = null);
  } else {
    bodyoverlay.classList.add("active");
    burgermobile.classList.add("active");
    headerlist.classList.add("active");
    headerbuttons.classList.add("active");
    headercontacts.classList.add("active");
    headerscroll.classList.add("active");
    document.body.style.height = "100vh";
    menuindex.style.zIndex = "102";
    hhbt.forEach(n => n.classList.remove('active'));
    hhbl.forEach(n => n.classList.remove('active'));
    hhbl.forEach(n => n.style.maxHeight = null);
  }
})
// end header__burger_mobile

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

// кнопка info__button
const infobuttons = document.querySelector('.info__button');
const inforeading = document.querySelector('.info__read');
const infobutton = document.querySelector('.info__button');
if(infobuttons){
  infobutton.addEventListener('click', function() {
    if (infobutton.classList.contains("active")) {
      bodyoverlaycity.classList.remove("active");
      inforeading.classList.remove("active");
      infobutton.classList.remove("active");
      document.body.style.height = null;
      menuindex.style.zIndex = null;
      scroll.start();
    } else {
      bodyoverlaycity.classList.add("active");
      inforeading.classList.add("active");
      infobutton.classList.add("active");
      document.body.style.height = "100vh";
      menuindex.style.zIndex = "102";
      scroll.stop();
    }
  })
}
const inforeadbutton = document.querySelector('.info__read_button');
if(inforeadbutton){
  inforeadbutton.addEventListener('click', function() {
    bodyoverlaycity.classList.remove("active");
    inforeading.classList.remove("active");
    infobutton.classList.remove("active");
    document.body.style.height = null;
    menuindex.style.zIndex = null;
    scroll.start();
  })
}
// end info__button

// кнопка form__button
const buttonform = document.querySelector('.button__form');
const formreading = document.querySelector('.form__read');
const formbuttons = document.querySelectorAll('.button__form');
if(buttonform){
  formbuttons.forEach(function(formbutton) {
    formbutton.addEventListener('click', function(e) {
      if (formbutton.classList.contains("active")) {
        bodyoverlaycity.classList.remove("active");
        formreading.classList.remove("active");
        document.body.style.height = null;
        menuindex.style.zIndex = null;
      } else {
        bodyoverlaycity.classList.add("active");
        formreading.classList.add("active");
        document.body.style.height = "100vh";
        menuindex.style.zIndex = "102";
      }
    })
  })
}
const formreadbutton = document.querySelector('.form__read_button');
if(formreadbutton){
  formreadbutton.addEventListener('click', function() {
    bodyoverlaycity.classList.remove("active");
    formreading.classList.remove("active");
    document.body.style.height = null;
    menuindex.style.zIndex = null;
  })
}
// end info__button

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
  bodyoverlaycity.classList.remove("active");
  if(inforeading){inforeading.classList.remove("active");scroll.start();}
  if(infobutton){infobutton.classList.remove("active");}
  hhbt.forEach(n => n.classList.remove('active'));
  hhbl.forEach(n => n.classList.remove('active'));
  hhbl.forEach(n => n.style.maxHeight = null);
  document.body.style.height = null;
  menuindex.style.zIndex = null;
})
// end overlay

// кнопка overlay__city
bodyoverlaycity.addEventListener('click', function() {
  bodyoverlaycity.classList.remove("active");
  menucity.classList.remove("active");
  burgercity.classList.remove("active");
  if(inforeading){inforeading.classList.remove("active");scroll.start();}
  if(infobutton){infobutton.classList.remove("active");}
  if(formreading){formreading.classList.remove("active");}
  document.body.style.height = null;
  menuindex.style.zIndex = null;
})
// end overlay

// кнопка header__search
document.querySelector('.header__search').addEventListener('click', () => {
  document.querySelector('.header__search_input').classList.toggle('active');
});
// end header__search

// start menu
var hblockacc = document.getElementsByClassName("header__button");
const hlscroll = document.querySelectorAll('.header__list_scroll .scroll-content');
for (i = 0; i < hblockacc.length; i++) {
  hblockacc[i].onclick = function(e) {
    var hblockaccordion = this.nextElementSibling;
    var coursehblockAccordion = document.getElementsByClassName("header__block");
    var coursehblockAccordionActive = document.getElementsByClassName("header__button active");

    if (hblockaccordion.style.maxHeight) {
      hblockaccordion.style.maxHeight = null;
      this.classList.remove("active");
      hblockaccordion.classList.remove("active");
      hlscroll.forEach(n => n.classList.remove('active'));
      if (document.documentElement.clientWidth > 1200) {hlscroll.forEach(n => n.style.transform = null);}
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
      scroll.on('scroll', function() {
        bodyoverlay.classList.remove("active");
        menu.classList.remove("active");
        burger.classList.remove("active");
        burgermobile.classList.remove("active");
        headerlist.classList.remove("active");
        headerbuttons.classList.remove("active");
        headercontacts.classList.remove("active");
        bodyoverlaycity.classList.remove("active");
        if(inforeading){inforeading.classList.remove("active");scroll.start();}
        if(infobutton){infobutton.classList.remove("active");}
        hhbt.forEach(n => n.classList.remove('active'));
        hhbl.forEach(n => n.classList.remove('active'));
        hhbl.forEach(n => n.style.maxHeight = null);
        document.body.style.height = null;
        menuindex.style.zIndex = null;
      });
      bodyoverlay.classList.remove("active");
      document.body.style.height = null;
      menuindex.style.zIndex = null;
      menu.classList.remove("active");
      burger.classList.remove("active");
      hblockaccordion.style.maxHeight = (hblockaccordion.scrollHeight * 1) + "px";
      hblockaccordion.classList.add("active");
      this.classList.add("active");
      hlscroll.forEach(n => n.classList.add('active'));
      if (document.documentElement.clientWidth > 1200) {hlscroll.forEach(n => n.style.transform = null);}
    }
  };
}
// удаляем блоки если в них нет текста
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
// end hover menu

// start счетчик для всех листов
const hlisttop = document.querySelectorAll('.header__list_top'); 
[...hlisttop].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
const hlistbottom = document.querySelectorAll('.header__list_bottom'); 
[...hlistbottom].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
const tractorfl = document.querySelectorAll('.tractor__filter_sublist'); 
[...tractorfl].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});
// end

// start year
const year = document.querySelector('.footer__year');
if(year){
const currentYear = new Date().getFullYear();
year.insertAdjacentText('beforebegin', currentYear);
year.remove();
}
// end year

// start hero slider
const hero = document.querySelector('.hero');
if(hero){
  var interleaveOffset = 0.5;
  var heroslider = new Swiper('.hero__slider', { 
    loop: true,
    loopedSlides: 3,
    speed: 1000,
    parallax: true,
    slideToClickedSlide: false,
    watchSlidesProgress: true,
    autoplay: {
      delay: 6500,
      pauseOnMouseEnter: true,
      allowTouchMove: true,
      disableOnInteraction: false,
    },
    watchSlidesProgress: false,
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
  });
  [].forEach.call(document.querySelectorAll('.hero__block'), (element) => {
    if (element.getAttribute('data-background')) {
      element.style.setProperty('background-image', 'url(' + element.getAttribute('data-background') + ')');
    }
  });
}
// end hero slider

// start partners slider
const partnerslisttop = document.querySelector('.partners__list_top');
if(partnerslisttop){
  var transformValue;
  var ptl = document.querySelector('.partners__list_top .partners__list');
  var partnerstop = new Swiper('.partners__list_top', {
    loop: true,
    speed: 4000,
    slidesPerView: 5,
    slideToClickedSlide: false,
    allowTouchMove: false,
    autoplay: {
      enabled: true,
      delay: 1,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      580: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      // 1700: {
      //   slidesPerView: 4,
      // }
    },
    on: {
      slideChangeTransitionStart: function() {
        ptl.style.transitionDuration = "4000ms";
        this.params.speed = 4000;
        this.autoplay.start();
      },
      init: function() {
        partnerslisttop.addEventListener('mouseenter', () => {
          this.autoplay.stop();
          transformValue = ptl.style.transform;
          ptl.style.transitionDuration = "0ms";
          this.params.speed = 0;
          ptl.style.transform = "translate3d(" + this.getTranslate() + "px, 0px, 0px)";
        });
        partnerslisttop.addEventListener('mouseleave', () => {
          ptl.style.transitionDuration = "1000ms";
          this.params.speed = 1000;
          ptl.style.transform = transformValue;
          this.autoplay.start();
        });
      }
    }
  });
}

const partnerslistbottom = document.querySelector('.partners__list_bottom');
if(partnerslistbottom){
  var transformValue;
  var pbl = document.querySelector('.partners__list_bottom .partners__list');
  var partnersbottom = new Swiper('.partners__list_bottom', {
    loop: true,
    speed: 4000,
    slidesPerView: 5,
    slideToClickedSlide: false,
    allowTouchMove: false,
    autoplay: {
      enabled: true,
      delay: 1,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      580: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      // 1700: {
      //   slidesPerView: 4,
      // }
    },
    on: {
      slideChangeTransitionStart: function() {
        pbl.style.transitionDuration = "4000ms";
        this.params.speed = 4000;
        this.autoplay.start();
      },
      init: function() {
        partnerslistbottom.addEventListener('mouseenter', () => {
          this.autoplay.stop();
          transformValue = pbl.style.transform;
          pbl.style.transitionDuration = "0ms";
          this.params.speed = 0;
          this.params.reverseDirection = true;
          pbl.style.transform = "translate3d(" + this.getTranslate() + "px, 0px, 0px)";
        });
        partnerslistbottom.addEventListener('mouseleave', () => {
          pbl.style.transitionDuration = "1000ms";
          this.params.speed = 1000;
          pbl.style.transform = transformValue;
          this.params.reverseDirection = true;
          this.autoplay.start();
          this.update();
        });
      }
    }
  });
}
// end partners slider

// start company slider
const companyslider = document.querySelector('.company__slider');
if(companyslider){
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

  var galleryText = new Swiper('.company__texts', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 1,
    touchRatio: 0.2,
    loopedSlides: 2,
    slideToClickedSlide: true,
    allowTouchMove: true,
    speed: 1000,
    breakpoints: {
      1700: {
        spaceBetween: 20,
      }
    }
  });
  galleryTop.controller.control = galleryText;
  galleryText.controller.control = galleryTop;
}
// end company slider

// start offer slider
var offerslider = new Swiper('.offer__slider', {
  loop: false,
  spaceBetween: 50,
  slidesPerView: 2,
  touchRatio: 0.2,
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
      slidesPerView: 1,
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
// end offer slider

// start product slider
const productslider = document.querySelector('.product__slider');
if(productslider){
  var interleaveOffset = 0.5;
  var productsliders = new Swiper('.product__slider', {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    loopedSlides: 2,
    parallax: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '.product__slider_next',
      prevEl: '.product__slider_prev',
    },
    pagination: {
      el: '.product__pagination',
      clickable: true,
    },
    on: {
      progress: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".product__slider_block").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
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
          swiper.slides[i].querySelector(".product__slider_block").style.transition = speed + "ms";
        }
      }
    }
  });
  [].forEach.call(document.querySelectorAll('.product__slider_block'), (element) => {
    if (element.getAttribute('data-background')) {
      element.style.setProperty('background-image', 'url(' + element.getAttribute('data-background') + ')');
    }
  });
}
// end product slider

// start info slider
const infosliders = document.querySelector('.info__sliders');
if(infosliders){
  var interleaveOffset = 0.5;
  var infoSlider = new Swiper('.info__slider', {
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    loopedSlides: 3,
    parallax: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    allowTouchMove: true,
    on: {
      progress: function() {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".info__slider_block").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
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
          swiper.slides[i].querySelector(".info__slider_block").style.transition = speed + "ms";
        }
      }
    }
  });
  
  [].forEach.call(document.querySelectorAll('.info__slider_block'), (element) => {
    if (element.getAttribute('data-background')) {
      element.style.setProperty('background-image', 'url(' + element.getAttribute('data-background') + ')');
    }
  });

  var infoThumbs = new Swiper('.info__thumbs', {
    loop: true,
    loopedSlides: 3,
    slidesPerView: 3,
    touchRatio: 0.1,
    spaceBetween: 20,
    speed: 1000,
    parallax: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    allowTouchMove: true,
    breakpoints: {
      580: {
        spaceBetween: 10,
      },
    },
  });
  infoSlider.controller.control = infoThumbs;
  infoThumbs.controller.control = infoSlider;
}
// end info slider

// start propelled slider
const propelledblock = document.querySelector('.propelled__flex');
if(propelledblock){
  var propelled = new Swiper('.propelled__flex', {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 0,
    speed: 2500,
    slideToClickedSlide: true,
    allowTouchMove: true,
    autoplay: {
      enabled: true,
      delay: 1,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      800: {
        slidesPerView: 1.5,
        spaceBetween: 25,
        speed: 500,
        autoplay: {
          enabled: false,
          pauseOnMouseEnter: false,
        },
        autoplay: false,
      },
    },
  });
  var propelleditem = document.getElementsByClassName("propelled__item");
  for (i = 0; i < propelleditem.length; i++) {
    propelleditem[i].onclick = function(e) {
      this.classList.toggle("selected");
    };
  }
}
// end propelled slider

// start info__buttons slider
var offerslider = new Swiper('.info__buttons_slider', {
  loop: false,
  spaceBetween: 0,
  slidesPerView: 'auto',
  speed: 1000,
  slideToClickedSlide: false,
  allowTouchMove: false,
  breakpoints: {
    1200: {
      allowTouchMove: true,
    },
  },
});
// end info__buttons slider

// start info__buttons slider
var actionslider = new Swiper('.action__buttons_slider', {
  loop: false,
  spaceBetween: 0,
  slidesPerView: 'auto',
  speed: 1000,
  slideToClickedSlide: false,
  allowTouchMove: false,
  breakpoints: {
    1200: {
      allowTouchMove: true,
      slidesPerView: 2,
    },
  },
});
// end info__buttons slider

// start aboutus slider
const aboutussliders = document.querySelector('.aboutus__brand_sliders');
if(aboutussliders){
  var aboutusThumbs = new Swiper('.aboutus__brand_thumbs', {
    loop: true,
    loopedSlides: 5,
    slidesPerView: 'auto',
    touchRatio: 0.1,
    spaceBetween: 0,
    speed: 1000,
    slideToClickedSlide: true,
    allowTouchMove: true,
  });

  var infoSlider = new Swiper('.aboutus__brand_slider', {
    loop: true,
    loopedSlides: 5,
    slidesPerView: 1,
    touchRatio: 0.1,
    spaceBetween: 40,
    speed: 1000,
    slideToClickedSlide: true,
    allowTouchMove: true,
    breakpoints: {
      580: {
        spaceBetween: 10,
      },
    },
  });
  aboutusThumbs.controller.control = infoSlider;
  infoSlider.controller.control = aboutusThumbs;
}
// end aboutus slider

// start aboutus slider
const aboutusteamsliders = document.querySelector('.aboutus__team');
if(aboutusteamsliders){
  var aboutusThumbs = new Swiper('.aboutus__team_slider', {
    loop: false,
    slidesPerView: 'auto',
    touchRatio: 0.1,
    spaceBetween: 40,
    speed: 1000,
    slideToClickedSlide: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '.aboutus__next',
      prevEl: '.aboutus__prev',
    },
    pagination: {
      el: '.aboutus__counter',
      type: 'fraction',
    },
    breakpoints: {
      800: {
        spaceBetween: 20,
      },
    },
  });
}
// end aboutus slider

// end service slider
const serviceslider = document.querySelector('.service__thumbs');
if(serviceslider){
  var serviceThumbs = new Swiper('.service__thumbs', {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 5,
    speed: 4000,
    slideToClickedSlide: false,
    allowTouchMove: false,
    autoplay: {
      enabled: true,
      delay: 1,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      580: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2.5,
      },
      1700: {
        slidesPerView: 4.5,
      }
    },
  });
}
// end service slider

// end service slider
const financelider = document.querySelector('.finance__thumbs');
if(financelider){
  var serviceThumbs = new Swiper('.finance__thumbs', {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 4,
    speed: 4000,
    slideToClickedSlide: false,
    allowTouchMove: false,
    autoplay: {
      enabled: true,
      delay: 1,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      580: {
        slidesPerView: 1.5,
      },
      800: {
        slidesPerView: 2.5,
      },
    },
  });
}
// end service slider

// start accordion tractor__filter
const tractorfilters = document.querySelector('.tractor__filter');
if(tractorfilters) {
  var tractorfilter = document.getElementsByClassName("tractor__filter_button");
  for (i = 0; i < tractorfilter.length; i++) {
    tractorfilter[i].onclick = function(e) {
      var tractorfilterordion = this.nextElementSibling;
      var coursetractorfilterordion = document.getElementsByClassName("tractor__filter_sublist");
      var coursetractorfilterordionActive = document.getElementsByClassName("tractor__filter_button active");

      if (tractorfilterordion.style.maxHeight) {
        tractorfilterordion.style.maxHeight = null;
        this.classList.remove("active");
        tractorfilterordion.classList.remove("active");
      } else {
        for (var q = 0; q < coursetractorfilterordionActive.length; q++) {
          coursetractorfilterordionActive[q].classList.remove("active");
          coursetractorfilterordion[q].classList.remove("active");
        }
        for (var p = 0; p < coursetractorfilterordion.length; p++) {
          this.classList.remove("active");
          coursetractorfilterordion[p].classList.remove("active");
          coursetractorfilterordion[p].style.maxHeight = null;
        }
        tractorfilterordion.style.maxHeight = (tractorfilterordion.scrollHeight * 2) + "px";
        tractorfilterordion.classList.add("active");
        this.classList.add("active");
      }
    };
  }
  var filtersublink = document.getElementsByClassName("tractor__filter_sublink");
  for (i = 0; i < filtersublink.length; i++) {
    filtersublink[i].onclick = function(e) {
      this.parentNode.classList.toggle('active');
    };
  }
}
// end accordion tractor__filter

// start accordion info
var infodesc = document.getElementsByClassName("info__button_description");
var infochar = document.getElementsByClassName("info__button_characteristics");
var infocert = document.getElementsByClassName("info__button_certification");
const ibb = document.querySelectorAll('.info__buttons_block .info__button_block');
const ib = document.querySelectorAll('.info__container .info__blocks');
const idesc = document.querySelectorAll('.info__container .info__description');
const ichar = document.querySelectorAll('.info__container .info__characteristics');
const icert = document.querySelectorAll('.info__container .info__certification');
var infoblock = document.querySelector(".info__blocks");
if(infoblock){
  for (i = 0; i < infodesc.length; i++) {
    infodesc[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        ibb.forEach(n => n.classList.remove('active'));
        ib.forEach(n => n.classList.remove('active'));
        ib.forEach(n => n.style.maxHeight = null);
        idesc.forEach(n => n.classList.add('active'));
        idesc.forEach(n => n.style.maxHeight = (document.querySelector('.info__description').scrollHeight * 1) + "px");
        this.classList.add("active");
        scroll.update();
      }
    };
  }
  for (i = 0; i < infochar.length; i++) {
    infochar[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        ibb.forEach(n => n.classList.remove('active'));
        ib.forEach(n => n.classList.remove('active'));
        ib.forEach(n => n.style.maxHeight = null);
        ichar.forEach(n => n.classList.add('active'));
        ichar.forEach(n => n.style.maxHeight = (document.querySelector('.info__characteristics').scrollHeight * 1) + "px");
        this.classList.add("active");
        scroll.update();
      }
    };
  }
  for (i = 0; i < infocert.length; i++) {
    infocert[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        ibb.forEach(n => n.classList.remove('active'));
        ib.forEach(n => n.classList.remove('active'));
        ib.forEach(n => n.style.maxHeight = null);
        icert.forEach(n => n.classList.add('active'));
        icert.forEach(n => n.style.maxHeight = (document.querySelector('.info__certification').scrollHeight * 1) + "px");
        this.classList.add("active");
        scroll.update();
      }
    };
  }
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.info__container .info__description.active').forEach(n => n.style.maxHeight = (document.querySelector('.info__description').scrollHeight * 1) + "px");
  });
  window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
      ib.forEach(n => n.style.maxHeight = null);
      document.querySelectorAll('.info__container .info__description.active').forEach(n => n.style.maxHeight = (document.querySelector('.info__description').scrollHeight * 1) + "px");
      document.querySelectorAll('.info__container .info__characteristics.active').forEach(n => n.style.maxHeight = (document.querySelector('.info__characteristics').scrollHeight * 1) + "px");
      document.querySelectorAll('.info__container .info__certification.active').forEach(n => n.style.maxHeight = (document.querySelector('.info__certification').scrollHeight * 1) + "px");
    }
  };
}
// end accordion info

// start accordion action
var actionfirst = document.getElementsByClassName("action__button_first");
var actionsecond = document.getElementsByClassName("action__button_second");
var actionthird = document.getElementsByClassName("action__button_third");
const abb = document.querySelectorAll('.action__buttons_block .action__button');
const ab = document.querySelectorAll('.action__container .action__list');
const adesc = document.querySelectorAll('.action__container .action__first');
const achar = document.querySelectorAll('.action__container .action__second');
const acert = document.querySelectorAll('.action__container .action__third');
var actionblock = document.querySelector(".action__list");
if(actionblock){
  for (i = 0; i < actionfirst.length; i++) {
    actionfirst[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        abb.forEach(n => n.classList.remove('active'));
        ab.forEach(n => n.classList.remove('active'));
        ab.forEach(n => n.style.maxHeight = null);
        adesc.forEach(n => n.classList.add('active'));
        adesc.forEach(n => n.style.maxHeight = (document.querySelector('.action__first').scrollHeight * 1) + "px");
        this.classList.add("active");
        scroll.update();
      }
    };
  }
  for (i = 0; i < actionsecond.length; i++) {
    actionsecond[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        abb.forEach(n => n.classList.remove('active'));
        ab.forEach(n => n.classList.remove('active'));
        ab.forEach(n => n.style.maxHeight = null);
        achar.forEach(n => n.classList.add('active'));
        achar.forEach(n => n.style.maxHeight = (document.querySelector('.action__second').scrollHeight * 1) + "px");
        this.classList.add("active");
        scroll.update();
      }
    };
  }
  for (i = 0; i < actionthird.length; i++) {
    actionthird[i].onclick = function(e) {
      if (!this.classList.contains("active")) {
        abb.forEach(n => n.classList.remove('active'));
        ab.forEach(n => n.classList.remove('active'));
        ab.forEach(n => n.style.maxHeight = null);
        acert.forEach(n => n.classList.add('active'));
        acert.forEach(n => n.style.maxHeight = (document.querySelector('.action__third').scrollHeight * 1) + "px");
        this.classList.add("active");
        scroll.update();
      }
    };
  }
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.action__container .action__first.active').forEach(n => n.style.maxHeight = (document.querySelector('.action__first').scrollHeight * 1) + "px");
  });
  window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
      ib.forEach(n => n.style.maxHeight = null);
      document.querySelectorAll('.action__container .action__first.active').forEach(n => n.style.maxHeight = (document.querySelector('.action__first').scrollHeight * 1) + "px");
      document.querySelectorAll('.action__container .action__second.active').forEach(n => n.style.maxHeight = (document.querySelector('.action__second').scrollHeight * 1) + "px");
      document.querySelectorAll('.action__container .action__third.active').forEach(n => n.style.maxHeight = (document.querySelector('.action__third').scrollHeight * 1) + "px");
    }
  };
}
// end accordion action

// start validate section_form
const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const region = document.getElementById('region');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
  });
  function checkInputs() {
    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const regionValue = region.value.trim();
    
    if(usernameValue === '') {setErrorFor(username, 'Введите Ваше имя');} else {setSuccessFor(username);}
    if(phoneValue === '') {setErrorFor(phone, 'Введите корректный телефон');} else {setSuccessFor(phone);}
    if(regionValue === '') {setErrorFor(region, 'Введите регион');} else {setSuccessFor(region);}
    if(usernameValue != '' && phoneValue != '' && regionValue != ''){
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          title: regionValue,
          body: phoneValue,
          userId: usernameValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      username.value = '';
      phone.value = '';
      region.value = '';
      document.querySelector('#form .button__text').value = '🗹️ Отправлено';
      document.querySelector('#form .button__text').disabled = true;
    }
  }
  
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form__control error';
    small.innerText = message;
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__control success';
  }
}
// end validate section_form

// start validate formpopup
const formpopup = document.getElementById('formpopup');
const usernamepopup = document.getElementById('usernamepopup');
const phonepopup = document.getElementById('phonepopup');
const regionpopup = document.getElementById('regionpopup');
if(formpopup){
  formpopup.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
  });
  function checkInputs() {
    const usernamepopupValue = usernamepopup.value.trim();
    const phonepopupValue = phonepopup.value.trim();
    const regionpopupValue = regionpopup.value.trim();
    
    if(usernamepopupValue === '') {setErrorFor(usernamepopup, 'Введите Ваше имя');} else {setSuccessFor(usernamepopup);}
    if(phonepopupValue === '') {setErrorFor(phonepopup, 'Введите корректный телефон');} else {setSuccessFor(phonepopup);}
    if(regionpopupValue === '') {setErrorFor(regionpopup, 'Введите регион');} else {setSuccessFor(regionpopup);}
    if(usernamepopupValue != '' && phonepopupValue != '' && regionpopupValue != ''){
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          title: usernamepopupValue,
          body: phonepopupValue,
          userId: usernamepopupValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      usernamepopup.value = '';
      phonepopup.value = '';
      regionpopup.value = '';
      document.querySelector('#formpopup .button__text').value = '🗹️ Отправлено';
      document.querySelector('#formpopup .button__text').disabled = true;
    }
  }
  
  function setErrorFor(input, message) {
    const formpopupControl = input.parentElement;
    const smallpopup = formpopupControl.querySelector('small');
    formpopupControl.className = 'form__control error';
    smallpopup.innerText = message;
  }
  
  function setSuccessFor(input) {
    const formpopupControl = input.parentElement;
    formpopupControl.className = 'form__control success';
  }
}
// end validate section_form

// start search spareparts
const spareparts = document.querySelector('.spareparts');
if(spareparts){
  function sparepartsFunction() {
    var sparepartsinput, filter, i;
    sparepartsinput = document.getElementById("spareparts__input");
    filter = sparepartsinput.value.toUpperCase();
    sparepartsfilter = document.getElementById("spareparts__filter");
    searchparts = sparepartsfilter.getElementsByTagName("li");
    for (i = 0; i < searchparts.length; i++) {
      txtValue = searchparts[i].textContent || searchparts[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        searchparts[i].classList.remove('close');
      } else {
        searchparts[i].classList.add('close');
      }
    }
  }
  // скрываем блоки если в них нет текста
  window.addEventListener('DOMContentLoaded', function() {
    [].forEach.call( document.querySelectorAll('.spareparts__info'), function(el) {
        if ('' == +el.textContent) {
          el.style.display = 'none';
          el.previousElementSibling.classList.add('close');
        } else {}
    });
  });
  // end
  let sparepartshead = document.querySelectorAll(".spareparts__head");
  let sparepartsupload = document.querySelector(".spareparts__upload");
  if(window.innerWidth <= 800){
    for (let i = 0; i < sparepartshead.length; i++) {
      sparepartshead[i].onclick = function(e) {
        if (this.classList.contains("close")) {
          let href = this.href;
          document.querySelector('.preloader').style.display = "block";
          window.setTimeout(function () {
            document.querySelector('.preloader__top').style.top = null;
            document.querySelector('.preloader__bottom').style.top = null;
          }, 0);
          setTimeout(function() {
            window.setTimeout(function () {
              document.querySelector('.preloader').style.display = null;
            }, 400);
            window.setTimeout(function () {
              document.querySelector('.preloader__top').style.top = "-50%";
              document.querySelector('.preloader__bottom').style.top = "100%";
            }, 100);
            window.location = href;
          }, 500);
        } else {}
        e.preventDefault();
        // аккордион
        var accordion = this.nextElementSibling;
        var courseqAccordion = document.getElementsByClassName("spareparts__info");
        var courseqAccordionActive = document.getElementsByClassName("spareparts__head active");
    
        if (accordion.style.maxHeight) {
          accordion.style.maxHeight = null;
          this.classList.remove("active");
          accordion.classList.remove("active");
        } else {
          for (var q = 0; q < courseqAccordionActive.length; q++) {
            courseqAccordionActive[q].classList.remove("active");
            courseqAccordion[q].classList.remove("active");
          }
          for (var p = 0; p < courseqAccordion.length; p++) {
            this.classList.remove("active");
            courseqAccordion[p].classList.remove("active");
            courseqAccordion[p].style.maxHeight = null;
          }
          accordion.style.maxHeight = (accordion.scrollHeight * 1) + "px";
          accordion.classList.add("active");
          this.classList.add("active");
        }
      }
    }
  } else {
    for (let i = 0; i < sparepartshead.length; i++) {
      sparepartshead[i].onclick = function(e) {
        e.preventDefault();
        // если больше 1 то скрываем первый блок
        if(this.nextElementSibling.nextElementSibling.childNodes[1].children.length > 1){
          this.nextElementSibling.nextElementSibling.childNodes[1].children[0].style.display = 'none';
        }
        // дублируем в правый блок
        sparepartsupload.innerHTML = sparepartshead[i].nextElementSibling.nextElementSibling.innerHTML;
        // делаем клик чтобы активировать функцию
        sparepartsupload.childNodes[1].children[0].children[0].click();
        // аккордион
        var accordion = this.nextElementSibling;
        var courseqAccordion = document.getElementsByClassName("spareparts__info");
        var courseqAccordionActive = document.getElementsByClassName("spareparts__head active");
    
        if (accordion.style.maxHeight) {
          accordion.style.maxHeight = null;
          this.classList.remove("active");
          accordion.classList.remove("active");
          sparepartsupload.innerHTML = '';
        } else {
          for (var q = 0; q < courseqAccordionActive.length; q++) {
            courseqAccordionActive[q].classList.remove("active");
            courseqAccordion[q].classList.remove("active");
          }
          for (var p = 0; p < courseqAccordion.length; p++) {
            this.classList.remove("active");
            courseqAccordion[p].classList.remove("active");
            courseqAccordion[p].style.maxHeight = null;
          }
          accordion.style.maxHeight = (accordion.scrollHeight * 1) + "px";
          accordion.classList.add("active");
          this.classList.add("active");
        }
      }
    }
  };
  function linkFunction(href) {
    let slink = document.querySelectorAll(".spareparts__subitem .link");
    for (let i = 0; i < slink.length; i++) {
      slink[i].onclick = function(e) {
        document.querySelector('.preloader').style.display = "block";
        window.setTimeout(function () {
          document.querySelector('.preloader__top').style.top = null;
          document.querySelector('.preloader__bottom').style.top = null;
        }, 0);
        setTimeout(function() {
          window.setTimeout(function () {
            document.querySelector('.preloader').style.display = null;
          }, 400);
          window.setTimeout(function () {
            document.querySelector('.preloader__top').style.top = "-50%";
            document.querySelector('.preloader__bottom').style.top = "100%";
          }, 100);
          location.href=href;
        }, 500);
        e.preventDefault();
      }
    }
  }
}
// end search spareparts

// start video
function video_load(e){
  e.onclick=null;
  e.innerHTML = '<iframe width="100%" height="400" src="https://www.youtube.com/embed/'+e.getAttribute('vid')+'?autoplay=1&controls=1&mute=1&loop=1&playlist='+e.getAttribute('vid')+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}
// end video

// start city
let hslink = document.querySelectorAll(".header__city_link");
for (let i = 0; i < hslink.length; i++) {
  hslink[i].onclick = function(e) {
    document.querySelector(".header__region span").innerText = hslink[i].children[0].innerText;

    fetch('/ajax/region.php', {
      method: 'POST',
      body: JSON.stringify({
        cityId: hslink[i].children[0].innerText
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log('response: ' + JSON.stringify(json));
    })

    bodyoverlaycity.classList.remove("active");
    menucity.classList.remove("active");
    burgercity.classList.remove("active");
    document.body.style.height = null;
    menuindex.style.zIndex = null;
  }
}
// end city