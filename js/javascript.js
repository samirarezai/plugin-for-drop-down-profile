$(document).ready(function(){

   $('.profile-header').click(function(){
        let profile = $('.profile');
        if(profile.attr('data-open') == 'open' && window.outerWidth > 992 ) {
            profile.addClass('open-style');
            profile.attr('data-open','close');}
        else if(profile.attr('data-open') == 'close' && window.outerWidth > 992) {
            profile.removeClass('open-style');
            profile.attr('data-open','open');
        }
    });
    $('.icon-header-responsive').click(function(){
        let profile = $('.profile');
        if($(this).attr('data-responsive') == 'open') {
            profile.addClass('style-responsive');
            $(this).attr('data-responsive','close');
          }
        else{
            profile.removeClass('style-responsive');
            $(this).attr('data-responsive','open');
        }

    });
    });