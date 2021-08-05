
//CONST variables
const player = document.getElementById('player');
const board = document.getElementById('gameboard');


let score = 0;


// Touchevent and function for playing on a touch screen, for moving the player.
document.addEventListener('touchstart', handleTouchEvent, true);
document.addEventListener('touchmove', handleTouchEvent, true);
document.addEventListener('touchend', handleTouchEvent, true);
document.addEventListener('touchcancel', handleTouchEvent, true);

function handleTouchEvent(e) {
    if (e.touches.length === 0 ) return;
    let touch = e.touches[0];
    player.style.left = (touch.pageX - player.width / 2) + 'px';
    player.style.top = (touch.pageY - player.width / 2) + 'px';
}

// Add an Keyevent for when play on desktop, using the up, down, left and right arrown in the gameboard for moving the player.
window.addEventListener("keydown", (e) => {

    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left >=0) {
      player.style.left = left - 20 + "px";
    }
    else if (e.key == "ArrowRight" && left <= 350) {
      player.style.left = left + 20 + "px";
    }
    let top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    if (e.key == "ArrowUp" && top > 0) {
        player.style.top = top - 20 + "px";
      }
      else if (e.key == "ArrowDown" && top <= 400) {
        player.style.top = top + 20 + "px";
      }
});
// This function create an interval of new divs with new comets that randomly will appaere on the gameboard.
const createObstacle = setInterval(() =>{
  const comet = document.createElement('div');
  comet.classList.add('comets');
  comet.style.left = Math.floor(Math.random() * 350) + 'px';

  gameboard.appendChild(comet);
}, 2000);

//This function make the new created divs/comets to move from top to bottom.
const MoveObstacle = setInterval(() => {
  const comets = document.getElementsByClassName('comets');
  if (comets != undefined) {
    for (let i = 0; i < comets.length; i++){
      let comet = comets[i];
      let cometTop = parseInt(window.getComputedStyle(comet).getPropertyValue('top'));

      comet.style.top = cometTop + 25 + 'px';
    }
  }
}, 400);

function checkCollision(){
  let playerbound = player.getBoundingClientRect();
   cometbound = comets.getBoundingClientRect();
  if (
    cometbound.left >= playerbound.left &&
    cometbound.right <= playerbound.right &&
    cometbound.top <= playerbound.top &&
    cometbound.bottom <= playerbound.bottom
  ) {
    console.log('game over');
}
}
function setScore(){

}


function startGame(){

}

function GameOver(){

}