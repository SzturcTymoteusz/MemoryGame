import {gameLevel} from './level.js'

const levelContainerText = document.querySelector('.levelContainerText');
const stepsContainerText = document.querySelector('.stepsContainerText');
const timeContainerText = document.querySelector('.timeContainerText');
const scoreText = document.querySelector('.scoreText');
const bestScoreText = document.querySelector('.bestScore');





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


let bestScore = {
    secs: 0,
    mins: 0,
    steps: 0
}



const displayBestScore = ({secs, mins, steps}) =>{
    const bestScoreSecs = bestScore.mins * 60 + bestScore.secs;
    const lastScoreSecs = mins * 60 + secs;

    if(lastScoreSecs < bestScoreSecs || (bestScore.secs === 0 && bestScore.mins === 0)){
        bestScore.secs = secs;
        bestScore.mins = mins;
        bestScore.steps = steps;

        bestScoreText.innerHTML = `<strong>The best score </strong><span class="timeContainerText">Time: <strong>${mins}:${secs<10?`0${secs}`:secs}</strong> Steps: <strong>${steps}</strong></span>`
    }
}




const displayScore = () => {
    const steps = stepsContainerText.textContent;
    const time = `${mins}:${secs<10?`0${secs}`:secs}`;

    scoreText.innerHTML = `<strong>Time:</strong> ${time}  <strong>Steps:</strong> ${steps}`;

    displayBestScore({secs ,mins ,steps});
}

const initBestTime = () => {
    bestScoreText.innerHTML = `<strong>The best score </strong><span class="timeContainerText">Time: <strong>${bestScore.mins}:${bestScore.secs<10?`0${bestScore.secs}`:bestScore.secs}</strong> Steps: <strong>${bestScore.steps}</strong></span>`
}

const resetBestTime = () => {
    bestScore = {
        secs: 0,
        mins: 0,
        steps: 0
    }
}





export {
    displayLevel,
    displaySteps,
    displayTimer,
    timerStop,
    displayScore,
    resetBestTime,
    initBestTime
}