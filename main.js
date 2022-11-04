/** categories menu **/
$(function() {
    $(".toggle-menu").mouseenter(function() {
        let menu_id = $(this).attr("data-menu-id");
        $(menu_id).addClass("visible_menu");
    });
    $(".toggle-menu").mouseleave(function() {
        let menu_id = $(this).attr("data-menu-id");
        $(menu_id).removeClass("visible_menu");
    });
});
$('.carousel').carousel({
    interval: 200088
})

$(window).scroll(function() {
    var h_header = $('header').outerHeight();
    var st = $(this).scrollTop();
    if (st > h_header) {
        $('.header_sticky').fadeIn(300);
    } else if (st < h_header) {
        $('.header_sticky').fadeOut(300);
    }
});