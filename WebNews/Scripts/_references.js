/// <autosync enabled="true" />
/// <reference path="bootstrap.min.js" />
/// <reference path="jquery.validate.min.js" />
/// <reference path="jquery.validate.unobtrusive.js" />
/// <reference path="jquery-3.1.1.min.js" />
/// <reference path="jquery-3.1.1.slim.min.js" />
/// <reference path="jssor.slider-23.1.5.min.js" />
/// <reference path="modernizr-2.8.3.js" />
/// <reference path="respond.matchmedia.addlistener.min.js" />
/// <reference path="respond.min.js" />
$(document).ready(function () {
    //alert($("#top-header").height() + $("#top-banner").height());
    if (window.innerWidth > 768) {
        $("#top-menu").css("margin-top", "170px");
        $(".body-content").css("margin-top","40px");
    }
    $(document).scroll(function () {
        if ($(document).scrollTop() > 5) {
            $("#top-menu").css("margin-top", "0px");
            $(".body-content").css("margin-top", "0px");
        }
        else {
            $("#top-menu").css("margin-top", "170px");
            $(".body-content").css("margin-top", "40px");
        }
    });
});
