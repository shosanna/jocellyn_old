$(document).ready(function() {
  $(".small img").hide();

  $(".large img").mouseenter(function() {
    $("div.clickme").append("Click me!");
  });

  $(".large img").mouseleave(function() {
    $("div.clickme").empty();
  });

  $(".large img").click(function() {
    $(".small img").fadeTo(3000, 0.6);
  });

  $(".small img").mouseenter(function() {
    $(this).animate({width: "120px", opacity: 1}, 500);
  });

  $(".small img").mouseleave(function() {
    $(this).width("100px");
  });

});