const player = document.getElementById('player');
const gameArea = document.getElementById('gameArea');
const enemie = document.getElementsByClassName('enemies');
const startGameBtn = document.getElementById('start');

let score = 0;
let enemieInterval;
let shots = document.getElementById('shots');
let key ={
    ArrowRight: 39,
    ArrowLeft: 37,
    SpaceBar: 32,
}



function movePlayer(event){
    if(event.keyCode === Key.ArrowRight){
        event.preventDefault();
        moveRight();

    } else if (event.keyCode === Key.ArrowLeft) {
        event.preventDefault();
        moveLeft();

    } else if(event.keyCode === Key.SpaceBar){
        event.preventDefault();
        shots();
    }
}

function moveRight(){
    let RightPosition = getComputedStyle(player).getPropertyValue('right');
    if(RightPosition === "0px") {
      return
    } else {
        let position = parseInt(RightPosition);
        position -= 50;
        playerp.style.right = `${position}px`;
    }        
}

function moveLeft(){
    let RightPosition = getComputedStyle(player).getPropertyValue('right');
    if(RightPosition === "550px") {
      return
    } else {
        let position = parseInt(RightPosition);
        position += 50;
        player.style.right = `${position}px`;
    }
}

function shots(){
    shots.play();
    let fire = createFireElement();
    playArea.appendChild(fire);
    moveShots(fire);
}

function generateShots(){
    let xPosition = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let yPosition = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
    let newEnemies = document.createElement('newEnemies');
   
    newEnemies.classList.add('newEnemies');
    newEnemies.style.top = `${xPosition}px`;
    newEnemies.style.bottom = `${yPosition - 10}px`;
    return newEnemies;
}

function moveShots(shots){
    let shotsInterval = setInterval(() => {
        let xPosition = parseInt(shots.style.top);
        let enemies = document.getElementById('enemies');
    
        enemies.forEach((enemies) => {
          if(checkShotCollision(shots, enemies)) {
            score++;
            scoreboardRefresh();
            enemies.classList.remove('newEnemies');
          }
        })
        
        if (xPosition === 340) {
          enemies.remove();
        } else {
            shots.style.top = `${xPosition + 8}px`;
        }
      }, 10);
}

function makeEnemies(){
    let newEnemies = document.createElement('div');
    let alienSprite = aliensImg[Math.floor(Math.random() * aliensImg.length)];
    newAlien.src = alienSprite;
    newAlien.classList.add('alien');
    newAlien.classList.add('alien-transition');
    newAlien.style.left = '370px';
    newAlien.style.top = `${Math.floor(Math.random() * 330) + 30}px`;
    playArea.appendChild(newAlien);
    moveAlien(newAlien);
}     



function moveEnemies(){

}

function checkShotsCollision(){

}

function startGame(){

}

function gameOver(){

}