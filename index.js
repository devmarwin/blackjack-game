
let player = {
    name: "Pinoy",
    chips: 1000
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let start = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let aceSpade = document.createElement('img');
aceSpade.src = 'cards/acespades.png';

let twoSpade = document.createElement('img');
twoSpade.src = 'cards/2spades.png';

let threeSpade = document.createElement('img');
threeSpade.src = 'cards/3spades.png';

let fourSpade = document.createElement('img');
fourSpade.src = 'cards/4spades.png';

let fiveSpade = document.createElement('img');
fiveSpade.src = 'cards/5spades.png';

let sixSpade = document.createElement('img');
sixSpade.src = 'cards/6spades.png';

let sevenSpade = document.createElement('img');
sevenSpade.src = 'cards/7spades.png';

let eightSpade = document.createElement('img');
eightSpade.src = 'cards/8spades.png';

let nineSpade = document.createElement('img');
nineSpade.src = 'cards/9spades.png';

let tenSpade = document.createElement('img');
tenSpade.src = 'cards/10spades.png';




playerEl.textContent = player.name + ": PHP " + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if (!start) {
        return;
    }
    isAlive = true
    let firstCard = getRandomCard()
    cards = [firstCard]
    sum = firstCard
    renderGame()

    if (firstCard === 11) {
        cardsEl.appendChild(aceSpade)
        start = false
    } else if (firstCard === 2) {
        cardsEl.appendChild(twoSpade)
        start = false
    } else if (firstCard === 3) {
        cardsEl.appendChild(threeSpade)
        start = false
    } else if (firstCard === 4) {
        cardsEl.appendChild(fourSpade)
        start = false
    } else if (firstCard === 5) {
        cardsEl.appendChild(fiveSpade)
        start = false
    } else if (firstCard === 6) {
        cardsEl.appendChild(sixSpade)
        start = false
    } else if (firstCard === 7) {
        cardsEl.appendChild(sevenSpade)
        start = false
    } else if (firstCard === 8) {
        cardsEl.appendChild(eightSpade)
        start = false
    } else if (firstCard === 9) {
        cardsEl.appendChild(nineSpade)
        start = false
    } else {
        cardsEl.appendChild(tenSpade)
        start = false
    }
}




function renderGame() {

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let nextCard = getRandomCard()
        sum += nextCard
        cards.push(nextCard)
        renderGame()
        if (nextCard === 11) {
            return cardsEl.appendChild(aceSpade);
        } else if (nextCard === 2) {
            return cardsEl.appendChild(twoSpade);
        } else if (nextCard === 3) {
            return cardsEl.appendChild(threeSpade);
        } else if (nextCard === 4) {
            return cardsEl.appendChild(fourSpade);
        } else if (nextCard === 5) {
            return cardsEl.appendChild(fiveSpade);
        } else if (nextCard === 6) {
            return cardsEl.appendChild(sixSpade);
        } else if (nextCard === 7) {
            return cardsEl.appendChild(sevenSpade);
        } else if (nextCard === 8) {
            return cardsEl.appendChild(eightSpade);
        } else if (nextCard === 9) {
            return cardsEl.appendChild(nineSpade);
        } else {
            return cardsEl.appendChild(tenSpade);
        }
    }
}
