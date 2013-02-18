$(document).ready(function(){
  //hide eveything which is supposed to be hidden and fade in later
  $("div.valentine").hide();
  $("div.video").hide();
  $("div.nuf").hide();
  $("img.hidden").hide();
  $("div.cute").hide();
  $("div.sexy").hide();
  $("div.listology").hide();

  //create a nice menu
  $(function() {
    $("#menu").menu();
  });

  //links in menu which will fade out the content
  $("a.valentine").click(function(){
    $("div.valentine").fadeIn(3000);
    $("div.video").hide();
    $("div.nuf").hide();
    $("div.cute").hide();
    $("div.sexy").hide();
    $("div.listology").hide();
  });

  $("a.video").click(function(){
    $("div.video").fadeIn(3000);
    $("div.valentine").hide();
    $("div.nuf").hide();
    $("div.cute").hide();
    $("div.sexy").hide();
    $("div.listology").hide();
  });

  $("a.nuf").click(function(){
    $("div.nuf").fadeIn(3000);
    $("div.valentine").hide();
    $("div.video").hide();
    $("div.cute").hide();
    $("div.sexy").hide();
    $("div.listology").hide();
  });

  $("a.cute").click(function(){
    $("div.cute").fadeIn(3000);
    $("div.valentine").hide();
    $("div.video").hide();
    $("div.nuf").hide();
    $("div.sexy").hide();
    $("div.listology").hide();
  });

  $("a.sexy").click(function(){
    $("div.sexy").fadeIn(3000);
    $("div.valentine").hide();
    $("div.video").hide();
    $("div.nuf").hide();
    $("div.cute").hide();
    $("div.listology").hide();
  });

  $("a.listology").click(function(){
    $("div.listology").fadeIn(3000);
    $("div.valentine").hide();
    $("div.video").hide();
    $("div.nuf").hide();
    $("div.cute").hide();
    $("div.sexy").hide();
  });


  // images from our story - click to one and next one will fade in.
  $("img.img1").click(function(){
    $("img.img2").fadeIn(4000);
  });

  $("img.img2").click(function(){
    $("img.img3").fadeIn(4000);
  });

  $("img.img3").click(function(){
    $("img.img4").fadeIn(4000);
  });

  $("img.img4").click(function(){
    $("img.img5").fadeIn(4000);
  });

  $("img.img5").click(function(){
    $("img.img6").fadeIn(4000);
  });

  $("img.img6").click(function(){
    $("img.img7").fadeIn(4000);
  });

  $("img.img7").click(function(){
    $("img.img8").fadeIn(4000);
    $("p.back").fadeIn(4000);
  });

// listology script
  $("input").focus(function(){
    $("input").css("outline-color","red");
  });

  $(document).on("dblclick", ".list ul li", function(){
    $(this).remove();
  });

  $(".button").click(function() {
    var toAdd = $("input[name=text]").val();
  $('.list ul').append('<li>'+ toAdd +'</li>');
  $("input[name=text]").val("").focus();
  });

  $(document).on("mouseenter", ".listology ul li", function(){
    $(this).css({'background-color':'red'});
  });

  $(document).on("mouseleave", ".listology ul li", function(){
    $(this).css({'background-color':'#f08080'});
  });

  $(".listology ul").sortable();

  });