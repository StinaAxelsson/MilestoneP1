const player = document.getElementById('player');
const gameArea = document.getElementById('gameArea');
const startScreen =document.getElementById('start');



/* key event, make the player go left and right when press left and righ arrow */
window.addEventListener('keydown', (e) =>{
    var left =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > 0){
        player.style.left = left - 10 + "px";
    } 
    else if (e.key == "ArrowRight" && left <=250){
        player.style.left = left + 10 + "px";
    }
    if (e.key == "ArrowUp" || e.key == "Space") {
        //32 is for space key
        var bullet = document.createElement("div");
        bullet.classList.add("bullets");
        gameArea.appendChild(bullet);

        var movebullet = setInterval(() => {
            var newEnemies = document.getElementsByClassName("newEnemies");
      
            for (var i = 0; i < newEnemies.length; i++) {
              var enemie = newEnemies[i];
              if (enemie != undefined) {
                var enemiebound = enemie.getBoundingClientRect();
                var bulletbound = bullet.getBoundingClientRect();
      
                //Condition to check whether the rock/alien and the bullet are at the same position..!
                //If so,then we have to destroy that rock
      
                if (
                  bulletbound.left >= enemiebound.left &&
                  bulletbound.right <= enemiebound.right &&
                  bulletbound.top <= enemiebound.top &&
                  bulletbound.bottom <= enemiebound.bottom
                ) {
                  enemie.parentElement.removeChild(enemie); //Just removing that particular rock;
                  
                  
                    
                }
              }
            }
            var bulletbottom = parseInt(
              window.getComputedStyle(bullet).getPropertyValue("bottom")
            );
      
            //Stops the bullet from moving outside the gamebox
            if (bulletbottom >= 400) {
              clearInterval(movebullet);
            }
      
            bullet.style.left = left + "px"; //bullet should always be placed at the top of my jet..!
            bullet.style.bottom = bulletbottom + 3 + "px";
          });
        }
      });



/*Makes new enemies and place it in random places*/ 

 var makeEnemies = setInterval(() =>{

    var enemie = document.createElement('div');
    enemie.classList.add('newEnemies');

    var enemieleft = parseInt(
        window.getComputedStyle(enemie).getPropertyValue('left'));
    enemie.style.left = Math.floor(Math.random() * 250) + "px";

    gameArea.appendChild(enemie);

}, 1500);


// Make the enemies falling down and set the game over alert if it touch the bottom


var moveEnemies = setInterval(() =>{
var newEnemies = document.getElementsByClassName("newEnemies");


    if(newEnemies != undefined) {
        for(var i=0 ; i < newEnemies.length; i++ ) {

            var enemie = newEnemies[i];
            var enemieTop = parseInt(window.getComputedStyle(enemie).getPropertyValue("top")
            );
            
            if (enemieTop >= 350) {
                alert("Game Over");
                clearInterval(moveEnemies);
                window.location.reload();
            }

            enemie.style.top = enemieTop + 20 + 'px';
        }
    }
    
}, 250);



/* start game */ 
startScreen.addEventListener("click",start);
function gamePlay(){
    if(player.start){
        newEnemies();

        window.requestAnimationFrame(start);
    }
}

function start(){
    startScreen.classList.add('hide');
    gameArea.innerHTML="";

    player.start =true;
    window.requestAnimationFrame(gamePlay);
}
