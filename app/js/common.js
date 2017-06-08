$('#scroll').click(function(event){
  $('html,body').animate({
        scrollTop: $(".srp").offset().top},
        'slow');
});