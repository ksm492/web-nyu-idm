$(document).ready(function() {

  // jQuery for WEBSITE

  $("div.night").click(function() {
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

    // jQuery for MOBILE
    $("#dream-btn").click(function(){
   		$(".dream-gif").toggle();
	});

    $("#miss-btn").click(function(){
      $(".miss-gif").toggle();
  });

    $("#think-btn").click(function(){
      $(".think-gif").toggle();
  });
});
