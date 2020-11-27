import { randomSetupCard, openCard } from './cardOperation.js';
import {getRandomPictures} from './store.js';
import {displayLevel} from './additionalFeatures.js'


const btns = [...document.querySelectorAll('.btn')];
const startGame = document.querySelector('.startGame');
const help = document.querySelector('.help');
const settings = document.querySelector('.settings');
const game = document.querySelector('.game');
const startWindow = document.querySelector('.start');
const tryAgainWindow = document.querySelector('.score');
const stepsContainerText = document.querySelector('.stepsContainerText');



const buttonOperation = () => {btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('newGameBtn')){
            game.classList.toggle('show');
            startGame.classList.toggle('show');
            startWindow.classList.remove('hidden');
            const randomPictures = getRandomPictures();
            randomSetupCard(randomPictures);
            displayLevel();

            stepsContainerText.textContent = '0';
        }

        if(btn.classList.contains('settingsBtn')){
            settings.classList.toggle('show');
            startGame.classList.toggle('show');
        }

        if(btn.classList.contains('helpBtn')){
            help.classList.toggle('show');
            startGame.classList.toggle('show');
        }

        if(btn.classList.contains('backBtn')){
            help.classList.toggle('show');
            startGame.classList.toggle('show');
        }

        if(btn.classList.contains('backSettingsBtn')){
            settings.classList.toggle('show');
            startGame.classList.toggle('show');
        }

        if(btn.classList.contains('startBtn')){
            startWindow.classList.add('hidden');
            openCard();
        }

        if(btn.classList.contains('tryAgain')){
            tryAgainWindow.classList.add('hidden');
            const randomPictures = getRandomPictures();
            randomSetupCard(randomPictures);
            openCard();
            stepsContainerText.textContent = '0';
        }

        if(btn.classList.contains('backToMenu')){
            game.classList.toggle('show');
            startGame.classList.toggle('show');
            tryAgainWindow.classList.add('hidden');
        }
    })
})};

export default buttonOperation;