const cardArray = [
    {
        name: 'shrek',
        img: 'images/shrek.jpg',
    },
    {
        name: 'florida',
        img: 'images/florida.png',
    },
    {
        name: 'gallo pinto',
        img: 'images/gallopinto.jpg',
    },
    {
        name: 'cat',
        img: 'images/cat.png',
    },
    {
        name: 'travel',
        img: 'images/travel.png',
    },
    {
        name: 'music',
        img: 'images/music.jpg',
    },
    {
        name: 'shrek',
        img: 'images/shrek.jpg',
    },
    {
        name: 'florida',
        img: 'images/florida.png',
    },
    {
        name: 'gallo pinto',
        img: 'images/gallopinto.jpg',
    },
    {
        name: 'cat',
        img: 'images/cat.png',
    },
    {
        name: 'travel',
        img: 'images/travel.png',
    },
    {
        name: 'music',
        img: 'images/music.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

// function createBoard(){
//     for(let i = 0; i < cardArray.length; i++){
//         const card = document.createElement('img')
//         card.setAttribute('src', 'images/blank.png')
//         card.setAttribute('data-id', i)
//         card.addEventListener('click', flipCard)
//         gridDisplay.appendChild(card)
//     }
// }

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.classList.add('card-img'); // add the class here
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        card.style.width = "250px";
        card.style.height = "250px";
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img') // can use just img if notplanning on adding imgs later
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    
    if(optionOneId == optionTwoId){
        alert('You have clicked on the same image!')
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length // can use innerHTML > textContent
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations! You found them all!'
    }

}
    
function flipCard(){
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
   
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
