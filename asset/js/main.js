const $navBtn = $('.header__nav-btn');
const $navSub = $('.header__nav-sub');
const $cateLink = $('.category__link');
const $cateWrap = $('.category__wrap');
$navBtn.hover(function () {
  // over
  $navBtn.addClass('on');
  $navSub.addClass('active');
}, function () {
  // out
  if (!$navSub.is(':hover')) {
    $navBtn.removeClass('on');
    $navSub.removeClass('active');

  }
});

$navSub.mouseleave(function() {
  $navBtn.removeClass('on');
  $navSub.removeClass('active');
});

// 추가: $navSub가 hover될 때 상태 유지
$navSub.hover(function() {
  $navBtn.addClass('on');
  $navSub.addClass('active');
}, function() {
  $navBtn.removeClass('on');
  $navSub.removeClass('active');
});

$($cateLink).hover(function (e) {
  e.preventDefault();
  //내가 선택한 데이터 값 중에 tab 이라는 데이터 값을 가져와라
  const $tabName = $(this).data('tab');
  $(this).addClass('on').siblings($cateLink).removeClass('on');
  $($tabName).addClass('active').siblings($cateWrap).removeClass('active');
});

//header 축소

$(window).scroll(function (e) { 
  if ($(this).scrollTop() > 100) { // 스크롤이 100px 이상일 때
    $('.header__nav').addClass('fixed');
  } else {
    $('.header__nav').removeClass('fixed');
  }
});