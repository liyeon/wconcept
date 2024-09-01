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
// 초기 높이 설정
$('.side-btn__wrap.bottom').css('--height', '42px');
$('.side-btn__wrap.top').css('--height', '0px');
const $headerOffsetTop = $('.header__nav').offset().top;
$(window).scroll(function (e) { 
	const $scrollTop = $(this).scrollTop();

	if($scrollTop >= $headerOffsetTop){
		$('.header__nav').addClass('fixed');
	}else{
		$('.header__nav').removeClass('fixed');
	}
  // if ($scrollTop > 100) { // 스크롤이 100px 이상일 때
  //   $('.header__nav').addClass('fixed');
  // } else {
  //   $('.header__nav').removeClass('fixed');
  // }
	// 현재 스크롤 위치 + 창의 높이
	const $scrollPosition = $scrollTop + $(window).height();
	// 문서의 전체 높이
	const $documentHeight = $(document).height();

	//스크롤 탑일 때
	if ($scrollTop === 0) { 
		// alert('팁')
		$('.side-btn__wrap.bottom').css('--height','42px');
		$('.side-btn__wrap.top').css('--height', '0px');
  } else if($scrollPosition >= $documentHeight){
		$('.side-btn__wrap.top').css('--height','42px');
		$('.side-btn__wrap.bottom').css('--height', '0px');
	}else{
		$('.side-btn__wrap.top').css('--height','42px');
		$('.side-btn__wrap.bottom').css('--height','42px');
	}
});

$('.side-btn__wrap.top .btn-arrow').on('click', function() {
	$('html, body').animate({ scrollTop: 0 }, 400);
	return false; // 클릭 시 기본 동작 방지
});
$('.side-btn__wrap.bottom .btn-arrow').on('click', function() {
	// 클릭 시 최신 문서 높이 계산
	const $documentHeight = $(document).height();
	$('html, body').animate({ scrollTop: $documentHeight - $(window).height() }, 400);
	return false; 
});


// 메인 슬라이드
const visual = new Swiper(".visualSwiper", {
	slidesPerView: 'auto', // 자동으로 슬라이드 크기에 맞게 조정
	centeredSlides: true, // 슬라이드를 중앙에 배치
	loop: true, // 루프 모드 활성화
	loopAdditionalSlides : 1, 
	spaceBetween: 2, // 슬라이드 사이의 간격
	grabCursor: true, // 드래그 커서
  autoplay:{
		delay:4000, // 4초
		disableOnInteraction: false     // 사용자가건들더라도 자동재생유지
  },
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
	speed:500,
});
const yours = new Swiper(".yoursSwiper", {
	slidesPerView: 5,
	loop: true, // 루프 모드 활성화
	loopAdditionalSlides : 1, 
	spaceBetween: 20,
	grabCursor: true, // 드래그 커서
	navigation: {
		nextEl: ".sc-product__yours .next",
		prevEl: ".sc-product__yours .prev",
	},
	speed:500,
	breakpoints:{
		1600:{
			slidesPerView:6,
		},
		1920:{
			slidesPerView:7,
		}
	}
});
const beauty = new Swiper(".beautySwiper", {
	slidesPerView: 'auto',
	loop: true, // 루프 모드 활성화
	loopAdditionalSlides : 1, 
	grabCursor: true, // 드래그 커서
	pagination:{
		el: ".swiper-pagination",
		clickable: true, // 클릭 가능 여부
	},
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
	speed:500,
});
const event = new Swiper(".eventSwiper", {
	slidesPerView: 'auto',
	loop: true, // 루프 모드 활성화
	loopAdditionalSlides : 1, 
	grabCursor: true, // 드래그 커서
	pagination:{
		el: ".swiper-pagination",
		clickable: true, // 클릭 가능 여부
	},
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
	speed:500,
});