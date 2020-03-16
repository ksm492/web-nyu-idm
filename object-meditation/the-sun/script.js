console.log("I'm here, I'm here!!");

$(document).ready(function() {

  // Credit for MODAL (JS): https://www.w3schools.com/howto/howto_css_modal_images.asp //

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Get the modal2
  var modal2 = document.getElementById("myModal2");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img2 = document.getElementById("myImg2");
  var modalImg2 = document.getElementById("img02");
  var captionText2 = document.getElementById("caption2");
  img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span2 = document.getElementsByClassName("close2")[0];

  // When the user clicks on <span> (x), close the modal
  span2.onclick = function() {
    modal2.style.display = "none";
  }

  // Get the modal3
  var modal3 = document.getElementById("myModal3");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img3 = document.getElementById("myImg3");
  var modalImg3 = document.getElementById("img03");
  var captionText3 = document.getElementById("caption3");
  img3.onclick = function() {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span3 = document.getElementsByClassName("close3")[0];

  // When the user clicks on <span> (x), close the modal
  span3.onclick = function() {
    modal3.style.display = "none";
  }

  // Credit to ToggleBackgroundColor: https://www.geeksread.com/javascript-lesson-36-dom-how-to-toggle-background-color/

  var button = document.querySelector("button.you");
  var backgroundColor = "background-color";
  var isDark = false;

  button.addEventListener("click", function() {
    if (isDark) {
      document.body.style.backgroundColor = "#ffab57";
      isDark = false;
    } else {
      document.body.style.backgroundColor = "#ff7575";
      isDark = true;
    }
  });

  $("#heart").click(function() {
    var windowHeight = $(window).height();

    $("#heart").fadeIn()
      .css({
        position: 'relative'
      })
      .animate({
        top: -windowHeight
      }, 1000, function() {
        $('#heart').removeAttr('style');
      });
  });
});

// Scroll button credit: https://html-online.com/articles/dynamic-scroll-back-top-page-button-javascript/
$("#scrollBtn").click(function(event) {
  event.preventDefault();
  $("html, body").animate({
    scrollTop: 2000
  }, "slow");
  return false;
});
