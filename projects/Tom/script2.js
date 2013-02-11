$(document).ready(function() {
  $(".hide").hide();

  $("p").hover(function() {
    $(this).css("color", "#155F98");
  }, function() {
    $(this).css("color", "#777A8F");
  });

  $(".click").click(function() {
    $('.box').fadeOut(900, function() {
      $(this).remove();
      $("body").prepend($("<img src='img/tom.jpg'>"));
      $("img").fadeTo(900, 1);

      $("img").hover(function() {
        $(".hide").fadeIn(900);
      }, function() {
        $(".hide").hide();
      });
    });
  });
  $(".next").dblclick(function(){
    document.location = "second.html";
  });

});
