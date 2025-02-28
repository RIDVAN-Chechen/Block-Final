import '../scss/style.scss'
import './show-button.js'
import './menu-open.js'
console.log('Works!')


//Slider
if (window.innerWidth < 768) {
  const swiper = new Swiper('.brands__container', {
    slidesPerView: 1.25,
    loop: true,
    pagination: {
      el: '.brands__pagination',
      clickable: true,
    },
    breakpoints: {
      375: {
        slidesPerView: 1.5
      },
      425: {
        slidesPerView: 1.7
      },
      580: {
        slidesPerView: 2
      },
      720: {
        slidesPerView: 3
      },
    },
  });
};

if (window.innerWidth < 768) {
  const swiperPrice = new Swiper('.prices__container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.brands__pagination',
      clickable: true,
    },
    breakpoints: {
      375: {
        slidesPerView: 1.5
      },
      425: {
        slidesPerView: 1.7
      },
      580: {
        slidesPerView: 2
      },
      720: {
        slidesPerView: 3
      },
    },
  });
};
