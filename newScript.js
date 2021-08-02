const gameArea = document.querySelector('.gameArea');
const result = document.querySelector('.result');
let currentPlayerIndex = 68;
let width = 8;
let direction = 1;
let cometId;
let goingRight = true;
let cometRemove = [];
let results = 0;



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
        if(!cometRemove.includes(i)){
        comets[cometFall[i]].classList.add('comets');
    }
    }
}
drawComets();

function remove() {
    for (let i = 0; i < cometFall.length; i++){
        comets[cometFall[i]].classList.remove('comets');
    }
}



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
    const leftWall = cometFall[0] % width === 0;
    const rightWall = cometFall[cometFall.length -1] % width === width -1;
    remove();

    if(rightWall && goingRight){
        for(let i = 0; i < cometFall.length; i++){
            cometFall[i] += width +1;
            direction = -1;
            goingRight = false;
        }
    }

    if(leftWall && !goingRight){
        for( let i = 0; i < cometFall.length; i++){
            cometFall[i] += width -1;
            direction = 1;
            goingRight = true;
        }
    } 

    for(let i = 0; i < cometFall.length; i++){
        cometFall[i] += direction;
    }
    drawComets();

    if ( comets[currentPlayerIndex].classList.contains('comets', 'player')){
        result.innerHTML = 'GAME OVER';
        clearInterval(cometId);
    }
    for (let i = 0; i < cometFall.length; i++) {
        if(cometFall[i] > (comets.length)){
            result.innerHTML = "GAME OVER";
            clearInterval(cometId);
        }
    }
    if ( cometRemove.length === cometFall.length){
        result.innerHTML = "YOU WIN";
        clearInterval(cometId);
    }

}
cometId = setInterval(moveComets, 500);

function shoot(e) {
    let fireId;
    let currentFireIndex = currentPlayerIndex;

    function moveFire(){
        comets[currentFireIndex].classList.remove('shoot');
        currentFireIndex -= width;
        comets[currentFireIndex].classList.add('shoot');

        if (comets[currentFireIndex].classList.contains('comets')){
            comets[currentFireIndex].classList.remove('shoot');
            comets[currentFireIndex].classList.remove('comets');
            comets[currentFireIndex].classList.add('boom');

            setTimeout(() => comets[currentFireIndex].classList.remove('boom'), 300);
            clearInterval(fireId);

            const cometsRemove = cometFall.indexOf(currentFireIndex);
            cometRemove.push(cometsRemove);
            results++;
            result.innerHTML = results;
        }
    }
    switch(e.key) {
        case 'ArrowUp':
            fireId = setInterval(moveFire, 100);
            
    }
}
document.addEventListener('keydown', shoot);