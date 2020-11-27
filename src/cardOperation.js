import {displaySteps, displayTimer, timerStop} from './additionalFeatures.js';

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
                <img src=${picture.url}>
            </div>
        </div>
        `
    }).join('');

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

            if(!firstClick){displayTimer()}
            firstClick = true;

            if(clickedCard.dataset.opened === 'false' && canIClick){
                clickedCard.classList.add('openCard');

                if(!firstClickedCard){
                    firstClickedCard = clickedCard;

                } else{
                    secondClickedCard = clickedCard;
                    canIClick = false;

                    displaySteps();

                    if(firstClickedCard.id === secondClickedCard.id){
                        firstClickedCard.dataset.opened = 'true';
                        secondClickedCard.dataset.opened = 'true';

                        firstClickedCard = undefined;
                        secondClickedCard = undefined;

                        canIClick = true

                        if(!cards.find((card) => card.dataset.opened === 'false')){
                            setTimeout(() => {
                                tryAgainWindow.classList.remove('hidden');
                                timerStop();
                                firstClick = false;
                            }, 1000)
                        }

                    } else{
                        setTimeout(()=>{
                            firstClickedCard.classList.remove('openCard');
                            secondClickedCard.classList.remove('openCard');

                            firstClickedCard = undefined;
                            secondClickedCard = undefined;

                            canIClick = true


                        }, 1000)
                    }
                }

            }

        })
    })
}


export {
    randomSetupCard,
    openCard
};