// Application bootstrapper

module.exports = Em.Application.create({
  ready: function() {
    setTimeout(function() {
    $(".item.small").hover(function() {
      $(this).animate({ width: 130 }, 200);
    }, function() {
      $(this).animate({ width: 100}, 200);
    });

    }, 500);
  }
});
