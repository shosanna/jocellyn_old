$(document).ready(function() {

  // vytvori cestu k obrazku, kterou si slozi za pomoci p a jeho data atributu.
  function findImage(p) {
    var selector = "img[src='img/" + p.data("image") + ".jpg']";
    return $(selector);
  }

  // Po najeti mysi na odstavec p se zobrazi obrazek
  $("p").hover(function(e) {
    $(this).css("color", "#155F98");

    findImage($(this)).fadeIn().css({
      top: e.pageY - 100,
      left: e.pageX + 200,
      position: "absolute"
    });

  }, function() {
    $("p").css("color", "#777A8F");
    findImage($(this)).hide();
  });

  $("p").mousemove(function(e) {
    var image = findImage($(this));

    image.css({
      top: e.pageY - 100,
      left: e.pageX + 200
    });
  });

});
