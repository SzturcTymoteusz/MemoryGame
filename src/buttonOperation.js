import { randomSetupCard, openCard } from './cardOperation.js';
import {getRandomPictures} from './setupLocalStorage.js';
import {displayLevel, initBestTime} from './additionalFeatures.js'


const allBtns = [...document.querySelectorAll('.btn')];
const allViews = [...document.querySelectorAll('.view')]

const readyWindow = document.querySelector('.start');
const tryAgainWindow = document.querySelector('.score');
const stepsContainerText = document.querySelector('.stepsContainerText');
const timeContainerText = document.querySelector('.timeContainerText');





const displayView = (clickedView) => {
    allViews.forEach(item => item.classList.remove('show'));

    const view = document.querySelector(`.${clickedView.dataset.id}`);

    view.classList.add('show');
}

const displayCurrentScore = () => {
    displayLevel();
    initBestTime();

    stepsContainerText.textContent = '0';
    timeContainerText.textContent = '0:00';
}


const buttonOperation = () => {
    allBtns.forEach((btn)=>{
        btn.addEventListener('click', () => {

            // menu view btns
            if(btn.classList.contains('newGameBtn')){
                displayView(btn);
                readyWindow.classList.remove('hidden');

                const randomPictures = getRandomPictures();
                randomSetupCard(randomPictures);

                displayCurrentScore();
            }

            if(btn.classList.contains('settingsBtn')) displayView(btn);

            if(btn.classList.contains('helpBtn')) displayView(btn);

            // help view btns
            if(btn.classList.contains('backBtnHelp')) displayView(btn);

            // settings view btns
            if(btn.classList.contains('backBtnSettings')) displayView(btn);

            // game view btns
            if(btn.classList.contains('startBtn')){
                readyWindow.classList.add('hidden');
                openCard();
            }

            if(btn.classList.contains('tryAgain')){
                tryAgainWindow.classList.add('hidden');

                const randomPictures = getRandomPictures();
                randomSetupCard(randomPictures);

                openCard();
            }

            if(btn.classList.contains('backToMenu')){
                displayView(btn);
                tryAgainWindow.classList.add('hidden');
            }
        })
    });
}

export default buttonOperation;