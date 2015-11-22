/* global $ */
const DEBUG = true;
function printf() {
    //unshift return the number of the array. not the array self.
    [].unshift.call(arguments, 'Debug Msg :');
    if (DEBUG) console.log.apply(console, arguments);
}
var TKW = (function ($) {
    var ret = new Object();
    ret.ScrollToElement = function (opts) {
        opts = opts || {};
        if (typeof opts !== "object") {
            printf("params error in TKW.ScrollToElement");
            return;
        }
        var scrollSpeed = opts.scrollSpeed || 600;
        var pos = 0;
        if (opts.$elem instanceof $) {
            pos = opts.$elem.prev().offset().top;
        }
        $("html,body").animate({
            scrollTop: pos
        }, scrollSpeed);
    }
    ret.init = function () {
        var $ToTop = $('.to-top');
        if ($ToTop.length > 0) {
            $ToTop.on('click', function (e) {
                printf("fuck");
                // 1 for left button, 2 for middle, and 3 for right
                if (e.which == 1) {
                    ret.ScrollToElement();
                }
            });
        }
    }
    
    return ret;
})(jQuery);

$(function () {
    $.material.init();
    TKW.init();
});