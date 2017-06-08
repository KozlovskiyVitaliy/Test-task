$('#scroll').click(function(event){
    $('html,body').animate({
        scrollTop: $(".srp").offset().top},
        'slow');
});

$(".phone").magnificPopup();

$('input').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });

// $('.nav__item-active').click(function() {
//    $('.sub__menu').toggle();
//    $('.nav__item-active').css('background', 'rgba(0, 0, 0, .3)');
// });

$('.nav__item-active').click(function(e) {
    e.preventDefault();            
    $(this).toggleClass('bgc');
    $('.sub__menu').toggle();
});