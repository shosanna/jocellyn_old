$(document).ready(function() {

  function findImage(p) {
    var selector = "img[src='img/" + p.data("image") + ".jpg']";
    return $(selector);
  }

  $("p").hover(function(e) {
    $(this).css("color", "#155F98");

    var image = findImage($(this));

    image.fadeIn().css({
      top: e.pageY,
      left: e.pageX + 500,
      position: "absolute"
    });

  }, function() {
    $(this).css("color", "#777A8F");
    $(".img2").hide();
  });

  $("p").mousemove(function(e) {
    var image = findImage($(this));

    image.css({
      top: e.pageY,
      left: e.pageX + 500
    });
  });

});
