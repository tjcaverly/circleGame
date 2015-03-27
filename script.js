$(function(){
  var score = 0;
  $('.screen').append('<circle cx="60" cy="60" r="50"/>');
  var shooter = $('.shooter')[0];
  var velocityX = 10;
  var velocityY = 0;

  var boxY = Math.floor(Math.random() * 300);
  $('.target')[0].setAttribute('y', boxY);



  $('svg').on('click', function(){
    velocityY += 1;
  });


  var runGame = function() {

    var cx = Number(shooter.getAttribute('cx'));

    shooter.setAttribute('cx', cx + velocityX);

    var cy = Number(shooter.getAttribute('cy'));

    shooter.setAttribute('cy', cy + velocityY);

    if (cx > 600) {
      if (cy > boxY && cy < boxY + 50) {
        score += 1
        $('.score').text(score);
        boxY = Math.floor(Math.random() * 300);
        $('.target')[0].setAttribute('y', boxY);
      }
      shooter.setAttribute('cx', 10);
      shooter.setAttribute('cy', 10);
      velocityY = 0;
    }


  }
  // debugger;
  setInterval(runGame, 30);

}
);