// $(document).ready(function(){
//   $(".header").mouseenter(function(){
//     $(".header").stop().fadeTo("slow", 1);
//   });
//   $(".header").mouseleave(function(){
//     $(".header").stop().fadeTo("slow", 0.5);
//   });
// });

$(document).ready(function() {

  $(".header").mouseenter(function(){
     $(".header").fadeTo("slow", 0.7);
  });

  $(".header").mouseleave(function(){
    $(".header").fadeTo("slow", 1);
  });

});