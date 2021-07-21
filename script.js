let gameArea = document.getElementById('canvas')
let score = document.getElementById('score-div')
let startButton = document.getElementById('start')
let spaceShip = document.getElementById('spaceship1')

startButton.addEventListener("click", start);

let player ={score:0, speed:2};
let keys= {ArrowUp:false, ArrowDown:false, ArrowRight:false, ArrowLeft:false};

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(e){
    e.preventDefault();
    keys[e.key]=true;
}

function keyUp(e){
    e.preventDefault();
    keys[e.key]=false;
}

function gamePlay(){

    
    let road= gameArea.getBoundingClientRect();
    
    if(player.start){
        if(keys.ArrowUp && player.y > road.top){player.y -= player.speed}
        if(keys.ArrowDown && player.y < road.bottom){player.y += player.speed}
        if(keys.ArrowLeft && player.x > 4){player.x -= player.speed}
        if(keys.ArrowRight && player.x > road.width){player.x += player.speed}

    spaceShip.top=player.y + 'px';
    spaceShip.left=player.x + 'px';
        
    window.requestAnimationFrame(gamePlay);
    score.innerText=" score: " + player.score;
    player.score++;
    }
}

function start(){
    startButton.classList.add('hide');

    

    player.start= true;
    player.score= 0;

    window.requestAnimationFrame(gamePlay);

    
    gameArea.appendChild(spaceShip);
    player.x=spaceShip.offsetLeft;
    player.y=spaceShip.offsetTop;
    console.log(player.x);
    console.log(player.y);

}