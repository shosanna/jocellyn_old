$(document).ready(function() {

    $(".image").hide();

    $(".helptext").hide();

    $("input").focus(function(){
        $("input").css("outline-color","#D01C76");
    });

    $(document).on("dblclick", ".list p", function(){
        $(this).remove();
    });

    var count = 0;

    $(".button").click(function() {
        var toAdd = $("input[name=text]").val();

        if (toAdd.length == 0) {
            return;
        }

        $('.list').append('<p>'+ toAdd +'</p>');
        $("input[name=text]").val("").focus();

        count++;

        if (count >= 5) {
            $(".next").css("background", "white");
        }
    });

    $("input[name=text]").keydown(function(event) {
        if (event.keyCode == 13) {
            $(".button").click();
        }
    });

    $(document).on("mouseenter", ".list p", function(){
        $(this).css({'background-color':'#8DBAE2'});
    });

    $(document).on("mouseleave", ".list p", function(){
        $(this).css({'background-color':'white'});
    });

    $(".next").css("background", "red");
    $(".next").click(function() {
        if (count >= 5) {
            $(".image").fadeTo(3000, "1");
        }
    });

    $(".help").mouseenter(function(){
        $(".helptext").fadeTo(800, "0.75");
    });

    $(".help").mouseleave(function(){
        $(".helptext").hide(800);
    });

   $()

});

