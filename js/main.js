$(document).ready(function(){
	$(".ref__items").slick({
		arrows: true,
		dots: true,
	});
	$('.comments').slick({
		arrows: true,
		dots: true,
	});
	$('.toggle-button').click(function(){
		$('.header__list').slideToggle('slow');
		$('.toggle-button').toggleClass('active')
	})
})