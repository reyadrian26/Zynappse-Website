var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
$(function() {
  $(document).ready(function() {
    // disableScroll();

    var target = $('#__next').offset().top + 1;

    var animateProgressBar = (function() {
      var animated = false;
      return function() {
        if (!animated) {
          animated = true;
          $('.progress-bar').animate({'width': '90%'});
        }
      };
    })();

    $(document).scroll(function() {
      //  disableScroll();
      if ($(this).scrollTop() > target) {
        animateProgressBar();
      }
    });
    
    $('#parallax').parallaxify({
      positionProperty: 'transform',
      responsive: true,
      motionType: 'natural',
      mouseMotionType: 'performance',
      motionAngleX: 70,
      motionAngleY: 70,
      alphaFilter: 0.5,
      adjustBasePosition: true,
      alphaPosition: 0.025
    });

    $("#HOME").click(function() {
      $('html, body').animate({
        scrollTop: $("#home").offset().top
      }, 1000);
    });
    $("#ABOUT").click(function() {
      $('html, body').animate({
        scrollTop: $("#about").offset().top
      }, 1000);
    });
    $("#PORTFOLIO").click(function() {
      $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
      }, 1000);
    });
    $("#SKILLS").click(function() {
      $('html, body').animate({
        scrollTop: $("#skills").offset().top
      }, 1000);
    });
    $("#CONTACT").click(function() {
      $('html, body').animate({
        scrollTop: $("#contact").offset().top
      }, 1000);
    });

    ///////

  });
}); // */
