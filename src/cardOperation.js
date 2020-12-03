import {displaySteps, displayTimer, timerStop, displayScore} from './additionalFeatures.js';

const cardContainer = document.querySelector('.card-container');
const tryAgainWindow = document.querySelector('.score');




const randomSetupCard = (pictures) => {
    const doublePictures = pictures.concat(pictures);
    const doublePicturesLength = doublePictures.length
    const newDoublePictures = [];
    for(let i = 0; i < doublePicturesLength; i++){
        const randomIndex = Math.floor(Math.random()*doublePictures.length);
        newDoublePictures.push(doublePictures[randomIndex]);
        doublePictures.splice(randomIndex,1);
    }

    displayCard(newDoublePictures);
}

const displayCard = (pictures) => {
    cardContainer.innerHTML = pictures.map((picture) => {
        return `
        <div class="card" id="${picture.id}" data-opened = 'false' >
            <div class="face front">
                <span>Game</span>
            </div>
            <div class="face back">
                <img class="img" src=${picture.url}>
            </div>
        </div>
        `
    }).join('');

};

const finishGame = (firstClick) => {
    console.log('stop');
    timerStop();
    setTimeout(() => {
        tryAgainWindow.classList.remove('hidden');
        firstClick = false;

        displayScore();
        return;
    }, 700)
}

const openCard = () => {
    const cards = [...document.querySelectorAll('.card')];
    let firstClickedCard = undefined;
    let secondClickedCard = undefined;
    let canIClick = true;
    let firstClick = false;

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const clickedCard = e.currentTarget;

            if(!canIClick) return

            // first open card will start the counter
            if(!firstClick){
                displayTimer()
                firstClick = true;
            }

            //opening cards and assigment them to variable
            if(clickedCard.dataset.opened === 'false' && canIClick){
                clickedCard.classList.add('openCard');

                secondClickedCard = (firstClickedCard) ? clickedCard : secondClickedCard;
                firstClickedCard = (!firstClickedCard) ? clickedCard : firstClickedCard;

            }

            // check value chosen cards
            if(!firstClickedCard || !secondClickedCard) return;

            canIClick = false;
            displaySteps()

            setTimeout(() => {

                // Match
                if(firstClickedCard.id === secondClickedCard.id){
                    firstClickedCard.dataset.opened = 'true';
                    secondClickedCard.dataset.opened = 'true';

                    //Check all cards, maybe user finished game
                    const closedCard = cards.filter(card => card.dataset.opened === 'false');
                    (closedCard[0] === undefined) ? finishGame(firstClick) : null;

                    firstClickedCard = undefined;
                    secondClickedCard = undefined;

                    canIClick = true;


                    return;
                }

                // No match
                firstClickedCard.classList.remove('openCard');
                secondClickedCard.classList.remove('openCard');

                firstClickedCard = undefined;
                secondClickedCard = undefined;

                canIClick = true
            }, 700)
        })
    })
}



export {
    randomSetupCard,
    openCard
};