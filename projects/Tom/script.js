$(document).ready(function() {
    $(".selection").hide();
    var date = prompt("Jaké je dnes datum? Napiš to ve formátu - 1. května = 1/5");
    if (date === "12/2") {
      $(".selection").fadeIn(900);
    } else {
    $("body").css("background-image", "url(img/error.jpg)");
    }
    $(".wrong").click(function(){
      $(".selection").hide(), $("body").css("background-image", "url(img/error.jpg)");
    });
    $(".correct").click(function(){
      alert("Ano! Potvrdil jsi svou totožnost, jsi Ijáček a můžeš pokračovat...");
      document.location = "main.html";
    });
});



