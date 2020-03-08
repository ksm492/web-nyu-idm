$(document).ready(function() {

  $(".night").click(function() {
    $("body").css({
      "background-color": "#1e1d2a"});
    $(".night").css({
      "color": "white"});
  });

  $("#heart").click(function() {
    var windowHeight = $(window).height();

    $("#heart").fadeIn()
    .css({position:'relative'})
    .animate({top:windowHeight}, 1000, function()
    { $('#heart').removeAttr('style'); });
    });
});
