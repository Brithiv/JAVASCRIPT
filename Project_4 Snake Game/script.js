const gameBoard = document.getElementById('gameBoard')
const context = gameBoard.getContext('2d')
const scoreVal = document.getElementById('scoreVal')

let WIDTH = gameBoard.width
let HEIGHT = gameBoard.height
let UNIT = 25
let foodX;
let foodY;
let xVel = 25
let yVel = 0
let score = 0
let active = true
let started = false

snake = [
    {x:UNIT*3, y:0},
    {x:UNIT*2, y:0},
    {x:UNIT, y:0},
    {x:0, y:0}
]

window.addEventListener('keydown',keypress)

startGame()

function startGame(){
    context.fillStyle = 'black'
    context.fillRect(0,0,WIDTH, HEIGHT)
    createFood()
    displayFood()
    drawSnake()

}

function createFood(){
    foodX = Math.floor(Math.random()*WIDTH/UNIT)*UNIT
    foodY = Math.floor(Math.random()*HEIGHT/UNIT)*UNIT
}

function displayFood(){
    context.fillStyle = 'red'
    context.fillRect(foodX,foodY,UNIT,UNIT)
}

function drawSnake(){
    context.fillStyle = 'aqua'
    context.strokeStyle = 'black'
    snake.forEach((snakePart) => {
        context.fillRect(snakePart.x, snakePart.y, UNIT, UNIT)
        context.strokeRect(snakePart.x, snakePart.y, UNIT, UNIT)
    });
}

function moveSnake(){
    const head = {x:snake[0].x+xVel, y:snake[0].y+yVel}
    snake.unshift(head)
    if(snake[0].x == foodX && snake[0].y == foodY){
        score += 1
        scoreVal.innerText = score
        createFood()
    }
    else{
        snake.pop()
    }
}

function clearBoard(){
    context.fillStyle = 'black'
    context.fillRect(0,0,WIDTH, HEIGHT)
}

function nextTip(){
    if(active==true){
        setTimeout(()=>{
            clearBoard()
            drawSnake()
            moveSnake()
            displayFood()
            gameOver()
            nextTip()
        },200)
    }
    else{
        clearBoard()
        context.fillStyle = 'white'
        context.font = '50px bold'
        context.textAlign = 'center'
        context.fillText('Game Over!!!', WIDTH/2, HEIGHT/2)
    }
}

function keypress(event){
    if(!started){
        started = true
        nextTip()

    }
    let LEFT = 37
    let UP = 38
    let RIGHT = 39
    let DOWN = 40

    switch(true){
        case(event.keyCode == LEFT && xVel != UNIT):
            xVel = -UNIT
            yVel = 0
            break
        case(event.keyCode == RIGHT && xVel != -UNIT):
            xVel = UNIT
            yVel = 0
            break
        case(event.keyCode == UP && yVel != UNIT):
            xVel = 0
            yVel = -UNIT
            break
        case(event.keyCode == DOWN && yVel != -UNIT):
            xVel = 0 
            yVel = UNIT
            break
    }
}

function gameOver(){
    switch(true){
        case(snake[0].x < 0 || snake[0].x >= WIDTH):
        case(snake[0].y <0 || snake[0].y >= HEIGHT):
            active = false
            break
    }
}

