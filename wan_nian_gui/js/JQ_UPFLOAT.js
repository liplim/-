var tabsTop;
function JqUpFloat(UpId) {
    tabsTop = $(UpId).offset().top;
    scrollTo(tabsTop);
    fixeds(UpId);
    $(window).scroll(function () {
        fixeds(UpId);
    });
}
function fixeds(upfloatid) {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= tabsTop) {
        if (($.browser.msie && $.browser.version == "6.0") || ($.browser.msie && $.browser.version == "7.0")) {
            $(upfloatid).css("top", scrollTop - tabsTop + "px");
        } else {
            $(upfloatid).css({
                "position": "fixed",
                "top": "0px"
            });
        }
    } else {
        $(upfloatid).css({
            "position": "relative",
            "top": "0px"
        });
    }
}
function scrollTo(val) {
    if ($(window).scrollTop() > val) {
        $("html,body").animate({ "scrollTop": val + "px" }, "normal");
    }
}
