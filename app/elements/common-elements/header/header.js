$('.header__burger-btn').click(function () {
  $('.main-index__wrap').toggleClass('main-index__wrap_active');
  $('.footer').toggleClass('footer_deactivate');
  $(this).toggleClass('header__burger-btn_active');
})