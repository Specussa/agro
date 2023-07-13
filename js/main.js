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
                swiper.slides[i].querySelector(".hero__block").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
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
                swiper.slides[i].querySelector(".hero__block").style.transition =
                speed + "ms";
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
                swiper.slides[i].querySelector(".company__block").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
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
                swiper.slides[i].querySelector(".company__block").style.transition =
                speed + "ms";
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