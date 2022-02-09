$(document).ready(function() {

    //first method

    // $('.wrap').hover(
    //     function() {
    //         $(this).find('.overlay').show();
    //         console.log("mouseover")
    //     },
    //     function() {
    //         $(this).find('.overlay').hide();
    //         console.log("mouseout")
    //     }
    // );

    // });

    // second method
    $('.wrap').hover(function() {
        $(this).find('.overlay').fadeIn("fast", "linear");
    }, function() {
        $(this).find('.overlay').fadeOut("fast", "swing");
    });
});