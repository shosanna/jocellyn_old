$(document).ready(function() {
    var date = prompt("Jaké je dnes datum? Napiš to ve formátu - 1. května = 1/5");
    if (date === "12/2") {
      document.location = "main.html";
    } else {
    $("body").css("background-image", "url(img/error.jpg)");
    }

});



