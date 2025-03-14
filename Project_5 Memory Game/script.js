cardsArray = [
    {name:'hippo',
    icon: '<i class="fa-solid fa-hippo"></i>'
    },
    {name:'dog',
    icon: '<i class="fa-solid fa-dog"></i>'
    },
    {name:'fish',
    icon: '<i class="fa-solid fa-fish"></i>'
    },
    {name:'dragon',
    icon: '<i class="fa-solid fa-dragon"></i>'
    },
    {name:'kiwi-bird',
    icon: '<i class="fa-solid fa-kiwi-bird"></i>'
    },
    {name:'spider',
    icon: '<i class="fa-solid fa-spider"></i>'
    },
    {name:'hippo',
    icon: '<i class="fa-solid fa-hippo"></i>'
    },
    {name:'dog',
    icon: '<i class="fa-solid fa-dog"></i>'
    },
    {name:'fish',
    icon: '<i class="fa-solid fa-fish"></i>'
    },
    {name:'dragon',
    icon: '<i class="fa-solid fa-dragon"></i>'
    },
    {name:'kiwi-bird',
    icon: '<i class="fa-solid fa-kiwi-bird"></i>'
    },
    {name:'spider',
    icon: '<i class="fa-solid fa-spider"></i>'
    }
]

shuffleCards()
displayCards()

let flippedCards = []
let cardPaired = 0


function shuffleCards(){
    for (let i=0; i<cardsArray.length; i++){
        const randIndex = Math.floor(Math.random()*cardsArray.length);
        [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]]
    }
}

function displayCards(){
    cardsArray.forEach((curr, index, arr) => {
        const card = document.createElement('div')
        card.setAttribute('id', index)
        card.classList.add('cardBack')
        card.classList.add('active')
        gameBoard.appendChild(card)
        card.addEventListener('click', flipcard)
    });
}

function flipcard(){
    if(flippedCards.length < 2 && this.classList.contains('active')){
        const cardId = this.getAttribute('id')
        flippedCards.push(this)
        this.classList.remove('cardBack')
        this.innerHTML = cardsArray[cardId].icon
        if(flippedCards.length == 2){
            setTimeout(checkStatus,1000)
        }
    }
}

function checkStatus(){
    const card1Id = flippedCards[0].getAttribute('id')
    const card2Id = flippedCards[1].getAttribute('id')

    if(cardsArray[card1Id].name == cardsArray[card2Id].name){
        flippedCards[0].style.border = 'none'
        flippedCards[0].style.backgroundColor = 'blanchedalmond'
        flippedCards[0].innerHTML = ''
        flippedCards[0].classList.remove('active')
        flippedCards[1].classList.remove('active')
        flippedCards[1].style.border = 'none'
        flippedCards[1].style.backgroundColor = 'blanchedalmond'
        flippedCards[1].innerHTML = ''
        cardPaired++
        gameOver()
    }
    else{
        flippedCards[0].innerHTML = ''
        flippedCards[0].classList.add('cardBack')
        flippedCards[1].innerHTML = ''
        flippedCards[1].classList.add('cardBack')
    }
    flippedCards = []
}

function gameOver(){
    if(cardPaired == cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerText = 'You Won'
        gameBoard.classList.remove('game')
        gameBoard.classList.add('won')
    }
}
