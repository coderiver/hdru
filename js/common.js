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
			$('.allcountries').toggleClass('is-active')
		});
	})

	$(function(){
		$('.allcountries__close').click(function(e){
			$('.allcountries').removeClass('is-active')
		});
	})
});