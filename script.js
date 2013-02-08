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
    $(this).stop().animate({width: "120px", opacity: 1}, 500);
  });

  $(".small img").mouseenter(function() {
    var text = $(this).data("text");
    $("div.linktext").append(text);
  });

   $(".small img").mouseleave(function() {
    $("div.linktext").empty();
  });

  $(".small img").mouseleave(function() {
    $(this).stop().animate({width: "100px", opacity: 0.6}, 500);
  });

});