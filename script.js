$(function(){

  //$('.screen').append('<circle cx="60" cy="60" r="50"/>');
  var shooter = $('.shooter')[0];



  var runGame = function() {
    shooter.setAttribute('cx', Math.max(10, Math.min( Number( shooter.getAttribute('cx') )+ 1, 790) ));
  }
  // debugger;
  setInterval(runGame, 30);

}
);