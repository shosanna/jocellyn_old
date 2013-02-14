$(document).ready(function(){
  $("div.valentine").hide();
  $("div.video").hide();
  $(function() {
    $("#menu").menu();
  });

  $("a.valentine").click(function(){
    $("div.valentine").fadeIn(3000);
    $("div.video").hide();
  });

  $("a.video").click(function(){
    $("div.video").fadeIn(3000);
    $("div.valentine").hide();
  });

});