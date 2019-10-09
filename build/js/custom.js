'use strict';

$('document').ready(function () {
  $('.header__burger-btn').click(function () {
    $('.main-index__wrap').toggleClass('main-index__wrap_active');
    $('.main-index').toggleClass('main-index_active');
    $('.footer').toggleClass('footer_deactivate');
    $('.header__burger-btn').toggleClass('header__burger-btn_active');
    if ($("div").is(".main-index__wrap_active")) {
      if (getWindowWidth() >= 576) {
        $("body").css({
          "overflow": "hidden"
        });
      }
    } else {
      $("body").css({
        "overflow": "auto"
      });
    }
  });
  /*   let mediaQuery = window.matchMedia('(max-width: 576px)');
  if (mediaQuery.matches) {
  let languageList = $(".header__language-list");
  languageList.clone(true, true).appendTo(".main-index__page-list").toggleClass('header__language-list_active');
  } */
  var modalVideo = new Kmodal('.modal-video');
  var modalCovers = new Kmodal('.modal-covers');

  var swiperModal = new Swiper($('.slider-modal'), {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    initialSlide: 1,
    preventInteractionOnTransition: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      prevEl: $('.video-prev-slide'),

      nextEl: $('.video-next-slide')
    },
    breakpoints: {
      992: {
        slidesPerView: 1
      }
    }
  });
  var exampleSlider = new Swiper($('.example-slider'), {
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 30,
    loop: true,
    initialSlide: 1,
    preventInteractionOnTransition: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      prevEl: $('.video-prev-slide'),

      nextEl: $('.video-next-slide')
    }
  });

  var num = $('.swiper-pagination-current').text();
  if ($('.swiper-pagination-current').text() < 10) {
    $('.swiper-pagination-current').text('0' + num);
  }

  var numTot = $('.swiper-pagination-total').text();
  if ($('.swiper-pagination-total').text() < 10) {
    $('.swiper-pagination-total').text('0' + numTot);
  }

  swiperModal.on('slideChange', function () {
    num = $('.swiper-pagination-current').text();
    numTot = $('.swiper-pagination-total').text();
    if ($('.swiper-pagination-current').text() < 10) {
      $('.swiper-pagination-current').text('0' + num);
    };

    if ($('.swiper-pagination-total').text() < 10) {
      $('.swiper-pagination-total').text('0' + numTot);
    }
  });

  exampleSlider.on('slideChange', function () {
    num = $('.swiper-pagination-current').text();
    numTot = $('.swiper-pagination-total').text();
    if ($('.swiper-pagination-current').text() < 10) {
      $('.swiper-pagination-current').text('0' + num);
    };

    if ($('.swiper-pagination-total').text() < 10) {
      $('.swiper-pagination-total').text('0' + numTot);
    }
  });

  $('.content__close-modal').on('click', function () {
    $(".modal").siblings().css({
      "filter": "blur(0)"
    });
    $('.modal').removeClass('modal_active');
    $("body").css({
      "overflow": "auto"
    });
  });

  $('.lyric-videos-list__item').on('click', function () {
    $(".modal").siblings().css({
      "filter": "blur(10px)"
    });
    $("body").css({
      "overflow": "hidden"
    });
  });
  $('.album-list__item').on('click', function () {
    $(".modal").siblings().css({
      "filter": "blur(10px)"
    });
    $("body").css({
      "overflow": "hidden"
    });
  });
  /* var exampleSlider = new Swiper($('.example-slider'), {
  speed: 400,
  slidesPerView: 1.2,
  spaceBetween: 30,
  loop: true,
  initialSlide: 1,
  preventInteractionOnTransition: false,
  pagination: {
  el: '.swiper-pagination',
  type: 'fraction',
  },
  navigation: {
  prevEl: $('.video-prev-slide'),
        nextEl: $('.video-next-slide')
  }
  }); */
  /* let numWeb = $('.swiper-pagination-current').text();
  if ($('.swiper-pagination-current').text() < 10) {
    $('.swiper-pagination-current').text(`0${numWeb}`);
  }
  
  let numTotWeb = $('.swiper-pagination-total').text();
  if ($('.swiper-pagination-total').text() < 10) {
    $('.swiper-pagination-total').text(`0${numTotWeb}`);
  } */

  /* exampleSlider.on('slideChange', function () {
    numWeb = $('.swiper-pagination-current').text();
    numTotWeb = $('.swiper-pagination-total').text();
    if ($('.swiper-pagination-current').text() < 10) {
      $('.swiper-pagination-current').text(`0${numWeb}`);
    };
  
    if ($('.swiper-pagination-total').text() < 10) {
      $('.swiper-pagination-total').text(`0${numTotWeb}`);
    }
  }); */
});