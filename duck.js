const player = document.getElementById('player');
const board = document.getElementsByClassName('board');

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;
    player.style.left = x + 'px';
    player.style.top = y + 'px';
    console.log('mousemove')

    if(e.clientY === )

});