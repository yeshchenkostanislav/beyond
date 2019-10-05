$('.header__burger-btn').click(function () {
  $('.main-index__wrap').toggleClass('main-index__wrap_active');
  $('.main-index').toggleClass('main-index_active');
  $('.footer').toggleClass('footer_deactivate');
  $(this).toggleClass('header__burger-btn_active');
  if ($("div").is(".main-index__wrap_active")) {
    $("body").css({
      "overflow": "hidden"
    });
  } else {
    $("body").css({
      "overflow": "auto"
    });
  }

})