var player = document.getElementById('player');
var gameArea = document.getElementById('gameArea')


/* key event, make the player go left and right when press left and righ arrow */
window.addEventListener('keydown', (e) =>{
    var left =parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > 0){
        player.style.left = left - 10 + "px";
    } 
    else if (e.key == "ArrowRight" && left <=250){
        player.style.left = left + 10 + "px";
    }
})

/*Makes new enemies and place it in random places*/ 
var makeEnemies = setInterval(() =>{

    var enemie = document.createElement('div');
    enemie.classList.add('newEnemies');

    var enemieLeft = parseInt(window.getComputedStyle(enemie).getPropertyValue('left'));
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
