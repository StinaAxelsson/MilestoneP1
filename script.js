var player = document.getElementById('player');


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

function startGame(){

}

