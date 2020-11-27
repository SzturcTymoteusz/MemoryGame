import {gameLevel} from './level.js'

const levelContainerText = document.querySelector('.levelContainerText');
const stepsContainerText = document.querySelector('.stepsContainerText');
const timeContainerText = document.querySelector('.timeContainerText');

const displayLevel = () => {
    levelContainerText.textContent = gameLevel;
}

const displaySteps = () => {
    let currentNumberSteps = parseInt(stepsContainerText.textContent);

    currentNumberSteps++;
    stepsContainerText.textContent = currentNumberSteps
}

let secs = 0;
let mins = 0;
let canICount = true

const displayTimer = () => {
    const time = setInterval(() => {
        timeContainerText.textContent = `${mins}:${secs<10?`0${secs}`:secs}`;

        if(!canICount){
            clearInterval(time);
            canICount = true;
            secs = 0;
            mins = 0;
        }

        if(secs === 60){
            secs = 0;
            mins++;
        }
        secs++;
    }, 1000)
}

const timerStop = () => {
    canICount = false;
}





export {
    displayLevel,
    displaySteps,
    displayTimer,
    timerStop
}