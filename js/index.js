$(window).resize(function () {
    $('body').css('padding-top', parseInt($('.navbar-fixed-top').css("height")));
    $('body').css('padding-bottom', parseInt($('.navbar-fixed-bottom').css("height")));
});
$(window).load(function () {
    $('body').css('padding-top', parseInt($('.navbar-fixed-top').css("height")));
    $('body').css('padding-bottom', parseInt($('.navbar-fixed-bottom').css("height")));
});
function show(e) {
    $(e).toggle();
}
