var player;
var background;

function startGame() {
  GameArea.start();
  player = new component(50, 50, "millennium-falcon.png", 180, 450, "image");
  background = new component(400, 500, "spacebg.png", 0, 0, "background");

  GameArea.start();
}

var GameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = 400;
      this.canvas.height = 500;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.frameNo = 0;
      this.interval = setInterval(updateGameArea, 20);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
    clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image" || type == "background") {
    this.image = new Image();
    this.image.src = color;
  }

  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;  
  this.speedX = 0;
  this.speedY = 0; 
  this.update = function(){ 
    ctx = GameArea.context;
    if(type == "image" || type == "background"){
      ctx.drawImage(this.image, 
        this.x, 
        this.y, 
        this.width, this.height);

    if(type == "background"){
      ctx.drawImage(this.image,
         this.x , 
         this.y + this.height, 
         this.width, this.height)
      }
    } else {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  this.updatePosition = function(){
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.type == "background"){
      if(this.y == (this.height)){
        this.y = 0;
      }
    }
  }
}
function updateGameArea() {
  GameArea.clear();
  background.speedY = +1;
  background.updatePosition();
  background.update();
  player.updatePosition();
  player.update();
}
function moveleft() {
  player.speedX -= 5;
}

function moveright() {
  player.speedX += 5;
}

function stopMove(){
  player.speedX = 0;
  player.speedY = 0;
}