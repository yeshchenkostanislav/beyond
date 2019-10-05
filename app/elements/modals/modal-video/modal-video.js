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
    type: 'fraction',
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
    type: 'fraction',
  },
  navigation: {
    prevEl: $('.video-prev-slide'),

    nextEl: $('.video-next-slide')
  }
});

let num = $('.swiper-pagination-current').text();
if ($('.swiper-pagination-current').text() < 10) {
  $('.swiper-pagination-current').text(`0${num}`);
}

let numTot = $('.swiper-pagination-total').text();
if ($('.swiper-pagination-total').text() < 10) {
  $('.swiper-pagination-total').text(`0${numTot}`);
}

swiperModal.on('slideChange', function () {
  num = $('.swiper-pagination-current').text();
  numTot = $('.swiper-pagination-total').text();
  if ($('.swiper-pagination-current').text() < 10) {
    $('.swiper-pagination-current').text(`0${num}`);
  };

  if ($('.swiper-pagination-total').text() < 10) {
    $('.swiper-pagination-total').text(`0${numTot}`);
  }
});

exampleSlider.on('slideChange', function () {
  num = $('.swiper-pagination-current').text();
  numTot = $('.swiper-pagination-total').text();
  if ($('.swiper-pagination-current').text() < 10) {
    $('.swiper-pagination-current').text(`0${num}`);
  };

  if ($('.swiper-pagination-total').text() < 10) {
    $('.swiper-pagination-total').text(`0${numTot}`);
  }
});


$('.content__close-modal').on('click', function () {
  $('.modal').removeClass('modal_active');
  $("body").css({
    "overflow": "auto"
  })
})

$('.lyric-videos-list__item').on('click', function () {
  $("body").css({
    "overflow": "hidden"
  })
})
$('.album-list__item').on('click', function () {
  $("body").css({
    "overflow": "hidden"
  })
})