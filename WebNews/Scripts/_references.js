/// <autosync enabled="true" />
/// <reference path="modernizr-2.6.2.js" />
/// <reference path="jquery-1.10.2.js" />
/// <reference path="jquery.validate.js" />
/// <reference path="jquery.validate.unobtrusive.js" />
/// <reference path="bootstrap.js" />
/// <reference path="respond.js" />
$(document).ready(function () {
    //alert(window.innerWidth)
    if (window.innerWidth > 768)
        $(".navbar-inverse").css("margin-top", "+=" + $(".top-header").height() + "px");

});