$(function(){

	//Init Navigation
	var nav = $('.swiper-nav').swiper({
		slidesPerView: 'auto',
		freeMode:true,
		freeModeFluid:true,
		onSlideClick: function(nav){
			pages.swipeTo( nav.clickedSlideIndex )
		}
	})

	//Function to Fix Pages Height
	function fixPagesHeight() {
		$('.swiper-pages').css({
			height: $(window).height()-nav.height
		})
	}
	$(window).on('resize',function(){
		fixPagesHeight()
	})
	fixPagesHeight()

	//Init Pages
	var pages = $('.swiper-pages').swiper()

	//Scroll Containers
	$('.scroll-container').each(function(){
		$(this).swiper({
			mode:'vertical',
			scrollContainer: true,
			mousewheelControl: true,
			scrollbar: {
				container:$(this).find('.swiper-scrollbar')[0]
			}
		})
	})

	//Gallery
	var swiperGallery = $('.swiper-gallery').swiper({
		mode: 'vertical',
		slidesPerView: 'auto',
		freeMode: true,
		freeModeFluid: true,
		scrollbar: {
			container:$('.swiper-gallery .swiper-scrollbar')[0]
		}
	})
	swiperGallery.reInit()

	//Gallery
	var swiperGallery2 = $('.swiper-gallery2').swiper({
		mode: 'vertical',
		slidesPerView: 'auto',
		freeMode: true,
		freeModeFluid: true,
		scrollbar: {
			container:$('.swiper-gallery2 .swiper-scrollbar')[0]
		}
	})
	swiperGallery2.reInit()

	//Gallery
	var swiperGallery3 = $('.swiper-gallery3').swiper({
		mode: 'vertical',
		slidesPerView: 'auto',
		freeMode: true,
		freeModeFluid: true,
		scrollbar: {
			container:$('.swiper-gallery3 .swiper-scrollbar')[0]
		}
	})
	swiperGallery3.reInit()

	//Gallery
	var swiperGallery4 = $('.swiper-gallery4').swiper({
		mode: 'vertical',
		slidesPerView: 'auto',
		freeMode: true,
		freeModeFluid: true,
		scrollbar: {
			container:$('.swiper-gallery4 .swiper-scrollbar')[0]
		}
	})
	swiperGallery4.reInit()

	//Gallery
	var swiperGallery5 = $('.swiper-gallery5').swiper({
		mode: 'vertical',
		slidesPerView: 'auto',
		freeMode: true,
		freeModeFluid: true,
		scrollbar: {
			container:$('.swiper-gallery5 .swiper-scrollbar')[0]
		}
	})
	swiperGallery5.reInit()

})