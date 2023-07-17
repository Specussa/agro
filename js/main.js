// start navbar
const bodyoverlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const burgernav = document.querySelector('.header__nav_burger');

// кнопка header__burger
document.querySelector('.header__burger').addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    bodyoverlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.style.overflow = "visible";
    document.body.style.height = "100%";
  } else {
    bodyoverlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  }
})
// end navbar

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
  const mySwiper = new Swiper(sliderSelector, options);
  mySwiper.init();
  
  [].forEach.call(document.querySelectorAll('.hero__block'), (element) => {
    if (element.getAttribute('data-background')) {
      element.style.setProperty('background-image', 'url(' + element.getAttribute('data-background') + ')');
    }
  });
}
// end hero slider

// start company slider
const companyslider = document.querySelectorAll('.company__slider');
if(!companyslider){} else {
  var interleaveOffset = 0.5;
  var galleryTop = new Swiper('.company__top', {
    loop: false,
    speed: 1000,
    slidesPerView: '1',
    loop: true,
    loopedSlides: 2,
    parallax: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.company__next',
        prevEl: '.company__prev',
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
    loop: false,
    spaceBetween: 40,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: false,
    loop: true,
    loopedSlides: 2,
    speed: 1000,
    allowTouchMove: false,
  });

  var galleryText = new Swiper('.company__texts', {
    loop: false,
    spaceBetween: 40,
    slidesPerView: '1',
    touchRatio: 0.2,
    loop: true,
    loopedSlides: 2,
    speed: 1000,
    allowTouchMove: false,
  });
  galleryTop.controller.control = galleryThumbs && galleryText;
  galleryThumbs.controller.control = galleryTop && galleryText;
  galleryText.controller.control = galleryTop && galleryThumbs;
}
// end company slider

// map
// start search map
function filterFunction() {
  var mapinput, filter, a, i;
  mapinput = document.getElementById("map__input");
  filter = mapinput.value.toUpperCase();
  mapsearch = document.getElementById("map__search");
  searchp = mapsearch.getElementsByTagName("p");
  for (i = 0; i < searchp.length; i++) {
    txtValue = searchp[i].textContent || searchp[i].innerText;
    document.querySelectorAll('.map__search_city .map__search_head').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.map__search_city .map__search_info').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.map__search_city .map__search_head').forEach(n => n.classList.remove('close'));
    document.querySelectorAll('.map__city .map__search_city').forEach(n => n.style.maxHeight = null);
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
  mapback.classList.add('close')
});
// end search back

// start map accordion
var acc = document.getElementsByClassName("map__search_head");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function(e) {
    var accordion = this.nextElementSibling;
    var courseAccordion = document.getElementsByClassName("map__search_info");
    var courseAccordionButton = document.getElementsByClassName("map__search_head");
    var courseAccordionActive = document.getElementsByClassName("map__search_head active");

    if (accordion.style.maxHeight) {
      accordion.style.maxHeight = null;
      mapmargin.forEach(n => n.style.margin = null);
      mapback.classList.add('close')
      this.classList.remove("active");
      accordion.classList.remove("active");
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
      mapback.classList.remove('close')
    }
  };
}
// end accordion

// start yandex map
const map = document.querySelectorAll('.map');
  var myMap,ymaps;
  function init() {
    var winWidth = window.innerWidth;
    myMap = document.getElementById("map");
    if (!myMap) return;
    myMap = new ymaps.Map(myMap, {
        center: [55.253215, 37.622504],
        zoom: 6, 
        controls: []
    });

    myMap.controls.add("zoomControl", {});
    // if(winWidth <= 1024){
    //     myMap.behaviors.disable('drag');
    // }

    var data = {
      'points': [{
        "infoPoint": '<div id="mapmoscow" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">ул. Бабакина, д. 5-А, оф. 707</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 55.88088924541,
        "longitude": 37.423524915344,
        },
        {
        "infoPoint": '<div id="mappeterburg" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">ул. Кутышева, д. 5, стр. 5</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 59.618243,
        "longitude": 30.172631,
        },
        {
        "infoPoint": '<div id="mapvologda" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">ул. Гагарина, д. 91, оф. 3</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 59.199017,
        "longitude": 39.8100982,
        },
        {
        "infoPoint": '<div id="mapvoronezh" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">ул. Автодорожная, д. 7</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 51.639685,
        "longitude": 39.324973,
        },
        {
        "infoPoint": '<div id="mapkursk" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">Промышленный пер., 4а</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 51.627834,
        "longitude": 36.117242,
        },
        {
        "infoPoint": '<div id="maplipetsk" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">ул. Ангарская, д. 26Д</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 52.597220203418,
        "longitude": 39.458276316873,
        },
        {
        "infoPoint": '<div id="maporel" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">ул. Итальянская, д. 1 Г</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 52.923587,
        "longitude": 36.078570,
        },
        {
        "infoPoint": '<div id="mappavlovsck" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">ул. Транспортная, д. 2</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 50.452752,
        "longitude": 40.148549,
        },
        {
        "infoPoint": '<div id="mappenza" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">ул. Ухтинка, д. 1Б</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 53.270195255583,
        "longitude": 45.024497906746,
        },
        {
        "infoPoint": '<div id="mappskov" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">ул. Философовой, д. 13</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 56.9816779,
        "longitude": 29.9243012,
        },
        {
        "infoPoint": '<div id="mapryazan" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">184 км (Окружная дор.), стр. 8</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 54.647213,
        "longitude": 39.638701,
        },
        {
        "infoPoint": '<div id="maptambov" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">Промышленная зона, стр. 1</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
            </div>\
        </div>',
        "latitude": 52.650429,
        "longitude": 41.407760,
        },
        {
        "infoPoint": '<div id="mapyaroslavl" class="map__point{% if properties.active %} map__point_active{% endif %}">\
            <div class="map__point_block">\
                <div class="map__point_temp">п. Лесная поляна, д. 43, стр. 8</div>\
                <div class="map__point_icon"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_324_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><rect width="28" height="28" fill="#D9D9D9"/></mask><g mask="url(#mask0_324_37)"><path d="M14 14.0002C14.6416 14.0002 15.1909 13.7717 15.6479 13.3147C16.1048 12.8578 16.3333 12.3085 16.3333 11.6668C16.3333 11.0252 16.1048 10.4759 15.6479 10.0189C15.1909 9.56197 14.6416 9.3335 14 9.3335C13.3583 9.3335 12.809 9.56197 12.352 10.0189C11.8951 10.4759 11.6666 11.0252 11.6666 11.6668C11.6666 12.3085 11.8951 12.8578 12.352 13.3147C12.809 13.7717 13.3583 14.0002 14 14.0002ZM14 22.5752C16.3722 20.3974 18.1319 18.4189 19.2791 16.6397C20.4263 14.8606 21 13.2807 21 11.9002C21 9.78072 20.3243 8.0453 18.9729 6.69391C17.6215 5.34252 15.9638 4.66683 14 4.66683C12.0361 4.66683 10.3784 5.34252 9.02704 6.69391C7.67565 8.0453 6.99996 9.78072 6.99996 11.9002C6.99996 13.2807 7.57357 14.8606 8.72079 16.6397C9.86801 18.4189 11.6277 20.3974 14 22.5752ZM14 25.6668C10.8694 23.0029 8.53121 20.5286 6.98538 18.2439C5.43954 15.9592 4.66663 13.8446 4.66663 11.9002C4.66663 8.9835 5.60482 6.65988 7.48121 4.92933C9.3576 3.19877 11.5305 2.3335 14 2.3335C16.4694 2.3335 18.6423 3.19877 20.5187 4.92933C22.3951 6.65988 23.3333 8.9835 23.3333 11.9002C23.3333 13.8446 22.5604 15.9592 21.0145 18.2439C19.4687 20.5286 17.1305 23.0029 14 25.6668Z" fill="black"/></g></svg></div>\
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
      var place = new ymaps.Placemark(
          [item.latitude, item.longitude],
          {
              hintContent: false
          }, 
          {
        iconLayout: squareLayout,
        iconShape: {   
            type: 'Rectangle',
            coordinates: [
              [-12, -20], [12, 12]
            ]
        }
      }
      );
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
        let idmap = document.querySelectorAll('.map__search_city');
        let thismapinfo = document.querySelector('.map__search_info');
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
        };
        var mappeterburg = document.getElementById('mappeterburg');
        if (mappeterburg.classList.contains("map__point_active")) {
          maphead.forEach(n => n.classList.remove('active'));
          maphead.forEach(n => n.classList.remove('close'));
          maphead.forEach(n => n.classList.add('close'));
          mapinfo.forEach(n => n.classList.remove('active'));
          mapinfo.forEach(n => n.style.maxHeight = null);
          mapmargin.forEach(n => n.style.margin = 0);
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