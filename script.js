let gameArea = document.getElementById('canvas')
let score = document.getElementById('score-div')
let startButton = document.getElementById('start')

startButton.addEventListener("click", start);

function start(){
    startButton.classList.add('hide');
}