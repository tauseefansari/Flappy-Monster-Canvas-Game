window.onload = function () {
  // Canvas Definition
  var canvas = document.getElementById("flappy-monster");

  // Game Object
  var flappyMonster = new FlappyMonster(canvas);
  flappyMonster.start();
};
