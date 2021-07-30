const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');
const aliensImg = ['asteroid.png'];
const instructionsText = document.querySelector('.game-instructions');
const startButton = document.querySelector('.start-button');

let alienInterval; 
let score = 0;

let sfxShoot=document.getElementById("sfxShoot");
let sfxExplosion=document.getElementById("sfxExplosion");

let Key = {
  ArrowLeft: 37,
  ArrowRight: 39,
  SpaceBar: 32,

}

function playerMovement(event) {
  if(event.keyCode === Key.ArrowLeft) {
    event.preventDefault();
    moveLeft();
  } else if(event.keyCode === Key.ArrowRight ) {
      event.preventDefault();
      moveRight();
  } else if(event.keyCode === Key.SpaceBar) {
      event.preventDefault();
      fireLaser();
  }
}

function moveLeft() {
  let leftPosition = getComputedStyle(yourShip).getPropertyValue('left');
  if(leftPosition === "0px") {
    return
  } else {
      let position = parseInt(leftPosition);
      position -= 50;
      yourShip.style.left = `${position}px`;
  }
}

function moveRight() {
  let leftPosition = getComputedStyle(yourShip).getPropertyValue('left');
  if(leftPosition === "550px") {
    return
  } else {
      let position = parseInt(leftPosition);
      position += 50;
      yourShip.style.left = `${position}px`;
  }
}

function fireLaser() {
  
  let laser = createLaserElement();
  playArea.appendChild(laser);
  moveLaser(laser);
}

function createLaserElement() {
  let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
  let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('bottom'));
  let newLaser = document.createElement('img');
  newLaser.src = './rocket-icon.png';
  newLaser.classList.add('laser');
  newLaser.style.left = `${xPosition}px`;
  newLaser.style.bottom = `${yPosition +10 }px`;
  return newLaser;
}

function moveLaser(laser) {
  let laserInterval = setInterval(() => {
    let xPosition = parseInt(laser.style.bottom);
    let aliens = document.querySelectorAll('.alien');

    aliens.forEach((alien) => {
      if(checkLaserCollision(laser, alien)) {
        
        score++;
        scoreboardRefresh();
        alien.src = './rocket-icon.png';
        alien.classList.remove('alien');
        alien.classList.add('dead-alien');
      }
    })
    
    if (xPosition === 0) {
      laser.remove();
    } else {
        laser.style.bottom = `${xPosition + 8}px`;
    }
  }, 10);
}

function createAliens() {
  let newAlien = document.createElement('img');
  let alienSprite = aliensImg[Math.floor(Math.random() * aliensImg.length)];
  newAlien.src = alienSprite;
  newAlien.classList.add('alien');
  newAlien.classList.add('alien-transition');
  newAlien.style.left = '370px';
  newAlien.style.top = `${Math.floor(Math.random() * 330) + 30}px`;
  playArea.appendChild(newAlien);
  moveAlien(newAlien);
}

function moveAlien(alien){
  let moveAlienInterval = setInterval(() => {
    let xPosition = parseInt(window.getComputedStyle(alien).getPropertyValue('bottom'));

    if (xPosition <= 50) {
      if(Array.from(alien.classList).includes('dead-alien')) {
        alien.remove();
      } else {
          gameOver();
      } 
    } else {
        alien.style.bottom = `${xPosition - 4}px`;
    }
  }, 30);
}

function checkLaserCollision(laser, alien) {
  let laserTop = parseInt(laser.style.top);
  let laserLeft = parseInt(laser.style.left);
  let laserCenter = laserTop + 15;
  let laserBottom = laserTop - 20;
  
  let alienTop = parseInt(alien.style.top);
  let alienLeft = parseInt(alien.style.left);
  let alienBottom = alienTop - 30;
  
  if (laserLeft != 340 && laserLeft + 40 >= alienLeft) {
    if (laserTop <= alienTop && laserTop >= alienBottom || laserCenter <= alienTop && laserCenter >= alienBottom || laserBottom <= alienTop && laserTop >= alienBottom) {
      return true
    } else {
        return false;
    }
  } else {
      return false;
  }
}

startButton.addEventListener('click', (event) => {
  playGame();
})

function playGame() {
  scoreboardRefresh();
  startButton.style.display = 'none';
  instructionsText.style.display = 'none';
  window.addEventListener('keydown', playerMovement);
  alienInterval = setInterval(() => {
    createAliens();
  }, 2000);
}

let scoreboardRefresh = () => {
  document.getElementById("score").innerHTML = "Score: " + score;
}

function gameOver() {
  score = 0;
  window.removeEventListener('keydown', playerMovement);
  clearInterval(alienInterval);
  let aliens = document.querySelectorAll('.alien');
  aliens.forEach((alien) => alien.remove());
  let lasers = document.querySelectorAll('.laser');
  lasers.forEach((laser) => laser.remove());
  setTimeout(() => {
    document.getElementById("restart-button").innerHTML = "RESTART";
    document.getElementById("game-over").innerHTML = "You Fail , Try Again Hero!";
    yourShip.style.top = "250px";
    startButton.style.display = "block";
    instructionsText.style.display = "block";
  });
}

