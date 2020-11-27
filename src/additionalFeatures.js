import {gameLevel} from './level.js'

const levelContainerText = document.querySelector('.levelContainerText');
const stepsContainerText = document.querySelector('.stepsContainerText');

const displayLevel = () => {
    levelContainerText.textContent = gameLevel;
}

const displaySteps = () => {
    const currentNumberSteps = parseInt(stepsContainerText.textContent);

    stepsContainerText.textContent++;
}

const displayTimer = () => {

}


export {
    displayLevel,
    displaySteps,
    displayTimer
}