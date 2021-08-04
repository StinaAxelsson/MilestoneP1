const player = document.getElementById('player');
const board = document.getElementById('gameboard');

let Key = {
    ArrowLeft: 39,
    ArrowRight: 37,
}


document.addEventListener('mousemove', handleMouseEvent);

function handleMouseEvent(e) {
    player.style.left = (e.pageX - player.width / 2) + 'px';
}



window.addEventListener("keydown", (e) => {
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > 0) {
      player.style.left = left - 10 + "px";
    }
    //460  =>  board width - jet width
    else if (e.key == "ArrowRight" && left <= 460) {
      player.style.left = left + 10 + "px";
    }
});