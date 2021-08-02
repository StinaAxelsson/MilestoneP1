const gameArea = document.querySelector('.gameArea');
let currentPlayerIndex = 68;
let width = 8;
let direction = 1;
let goingRight = true;



for (let i= 0; i < 72; i++){
    const comet = document.createElement('div')
    gameArea.appendChild(comet);
}

const comets = Array.from(document.querySelectorAll('.gameArea div'))

const cometFall = [
    1, 2, 3, 4, 5, 6,
    9, 10, 11, 12, 13, 14,
    17, 18, 19, 20, 21, 22
]

function drawComets() {
    for (let i = 0; i < cometFall.length; i++){
        comets[cometFall[i]].classList.add('comets');
    }
}
drawComets();

function remove() {
    for (let i = 0; i < cometFall.length; i++){
        comets[cometFall[i]].classList.remove('comets');
    }
}
remove();


comets[currentPlayerIndex].classList.add('player');

function movePlayer(e){
    comets[currentPlayerIndex].classList.remove('player');
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPlayerIndex % width !== 0) currentPlayerIndex -=1;
            break;
        case 'ArrowRight':
            if (currentPlayerIndex % width < width -1 ) currentPlayerIndex +=1;
            break;
    }
    comets[currentPlayerIndex].classList.add('player');
}
document.addEventListener('keydown', movePlayer);

function moveComets(){
    const leftWall = cometFall[1] % width === 0;
    const rightWall = cometFall[cometFall.length -1] % width === width -1;
    remove();

    if(rightWall && goingRight){
        for(let i = 0; i < cometFall.length; i++){
            cometFall[i] += width -1;
            direction = -1;
            goingRight = false;
        }
    }

    /* fortsätt här med leftWall 19.51 på videon*/ 

    for(let i = 0; i < cometFall.length; i++){
        cometFall[i] += direction;
    }
    drawComets();
}

cometId = setInterval(moveComets, 500);
