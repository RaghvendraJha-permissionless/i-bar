// this will help us get the value of body width and set --body_width variable inside

$(document).ready(function(){
    var width=$(window).width();
    $(":root").css("--body_width", width+"px");
});


$(window).resize(function(){
    var width=$(window).width();
    $("body").css("--body_width", width+"px");
});