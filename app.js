const board = document.querySelector('#board');
const colors = ['pink', 'green', 'blue', 'aqua', 'blueviolet', 'orange', 'yellow', 'springgreen', 'red', 'purpule', 'crimson', 'dippink']
const SQUARES_NUMBER = 1000;

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event){
    const element = event.target
    const color = getRendomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 50px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRendomColor(){
    //const index = Math.floor(Math.random() * colors.length)
    return colors[Math.floor(Math.random() * colors.length)]
}
