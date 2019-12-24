jQuery(document).ready(function () {

    $(window).scroll(function () {
        var topScroll = Number(jQuery(window).scrollTop());

        if (topScroll >= 350) {
            if (!jQuery(".head-fixed").hasClass("show-head")) {
                jQuery('.head-fixed').addClass("show-head");
            }
        } else {
            if (jQuery(".head-fixed").hasClass("show-head")) {
                jQuery('.head-fixed').removeClass("show-head");
            }
        }
    });

});
