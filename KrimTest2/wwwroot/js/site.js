﻿(function () {
    var cx = '001787165001180363838:liud3rsaha0';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

$("#googleRadio").on("click", function() {
    $("#bingCollapse").removeClass("show");
});

$("#bingRadio").on("click", function () {
    $("#googleCollapse").removeClass("show");
});

$(document).ready(function () {
    $(".submit-btn-search").attr("disabled", true);
    $("#searchInput").keyup(function () {
        if ($(this).val().length !== 0)
            $(".submit-btn-search").attr("disabled", false);
        else
            $(".submit-btn-search").attr("disabled", true);
    });
});