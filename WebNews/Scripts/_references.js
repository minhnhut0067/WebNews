/// <autosync enabled="true" />
/// <reference path="bootstrap.js" />
/// <reference path="jquery.validate.js" />
/// <reference path="jquery.validate.unobtrusive.js" />
/// <reference path="jquery-1.10.2.js" />
/// <reference path="jssor.slider-23.1.5.min.js" />
/// <reference path="modernizr-2.6.2.js" />
/// <reference path="respond.js" />
$(document).ready(function () {
    alert($(".navbar-inverse").height());
    if (window.innerWidth > 768)
        $(".navbar-inverse").css("margin-top", "+=" + ($(".top-header").height() + 200) + "px");

});