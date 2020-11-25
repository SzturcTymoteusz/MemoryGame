import { randomSetupCard, openCard } from './cardOperation.js';
import {getRandomPictures} from './store.js';


const btns = [...document.querySelectorAll('.btn')];
const startGame = document.querySelector('.startGame');
const help = document.querySelector('.help');
const settings = document.querySelector('.settings');
const game = document.querySelector('.game');
const startWindow = document.querySelector('.start');
const tryAgainWindow = document.querySelector('.score');

console.log(btns);

const buttonOperation = () => {btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('newGameBtn')){
            game.classList.toggle('show');
            startGame.classList.toggle('show');
            const randomPictures = getRandomPictures();
            randomSetupCard(randomPictures);
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
            console.log('work');
            tryAgainWindow.classList.add('hidden');
            const randomPictures = getRandomPictures();
            randomSetupCard(randomPictures);
            openCard();
        }
    })
})};

export default buttonOperation;