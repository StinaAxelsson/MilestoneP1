const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let player = getElementById("spaceship")

//Game Loop
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    player();
    
}
function player(){
    
}

function clearScreen(){
    ctx.fillStyle = "pink";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {}

function keyUp(event){}

drawGame();