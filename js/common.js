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
        $('.js-main-btn').toggleClass('icon-minus');
        return false;
    });


    $('.js-second-btn').on('click', function() {
        $('.faq__second-drop').toggleClass('is-drop__open');
        return false;
    });

    $('.js-text-btn').on('click', function() {
        $('.faq__second-text').toggleClass('is-drop__open');
        return false;
    });
});