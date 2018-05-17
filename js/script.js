$(document).ready(function() {
    changeBackground();
});

$(window).scroll(function() {
    changeBackground();
})

function changeBackground() {
    let navHeight = $('#main-nav').outerHeight();
    let currentPosition = $(window).scrollTop();

    if(currentPosition >= navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}


    
