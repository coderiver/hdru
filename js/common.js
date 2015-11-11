head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	// console.log($('body').html());

	$(function(){
		$('.select').click(function(e){
			$(this).toggleClass('is-active');
		});
	})

	$(function(){
		$('.allcountries__close').click(function(e){
			$('.select').removeClass('is-active')
		});
	})


	$('.js-main-btn').on('click', function() {
        $('.faq__drop').toggleClass('is-drop__open');
        $('.is-marker1').toggleClass('is-active');
        $('.is-open').toggleClass('is-close');
        return false;
    });


    $('.js-second-btn').on('click', function() {
        $('.faq__second-drop').toggleClass('is-drop__open');
        $('.is-marker2').toggleClass('is-active');
        $('.is-open__drop').toggleClass('is-close');
        return false;
    });

    $('.js-text-btn').on('click', function() {
        $('.faq__second-text').toggleClass('is-drop__open');
        $('.is-marker').toggleClass('is-active');
        return false;
    });


	//function footerToBottom() {
	//var browserHeight = $(window).height(),
	//footerOuterHeight = $('footer').outerHeight(true),
	//mainHeightMarginPaddingBorder = $('.support-footer').outerHeight(true) - $('.support-footer').height();
	//$('.support-footer').css({
	//'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
	//});
	//};
	//footerToBottom();
	//$(window).resize(function () {
	//footerToBottom();
	//});
});