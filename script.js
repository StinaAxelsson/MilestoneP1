var player;

function startGame() {
  GameArea.start();
  player = new component(50, 50, "red", 180, 450);
}

var GameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = 400;
      this.canvas.height = 500;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;  
  this.speedX = 0;
  this.speedY = 0; 
  this.update = function(){ 
    ctx = GameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.updatePosition = function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
function updateGameArea() {
  GameArea.clear();
  player.updatePosition();
  player.update();
}
function moveleft() {
  player.speedX -= 5;
}

function moveright() {
  player.speedX += 8;
}

function stopMove(){
  player.speedX = 0;
  player.speedY = 0;
}