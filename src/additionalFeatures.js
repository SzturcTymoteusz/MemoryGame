import {game_level} from './level.js'

const result__level = document.querySelector('.result__level');
const result__steps = document.querySelector('.result__steps');
const result__time = document.querySelector('.result__time');
const score_text = document.querySelector('.score__display');
const best_score_text = document.querySelector('.result__best-score');






const display_level = () => {
    result__level.textContent = game_level;
}





const display_steps = () => {
    let curren_number_steps = parseInt(result__steps.textContent);

    curren_number_steps++;
    result__steps.textContent = curren_number_steps
}


const clear_timer = () => {
    result__steps.textContent = '0';
    result__time.textContent = '0:00';
    secs = 0;
    mins = 0;
}



let secs = 0;
let mins = 0;
let can_i_count = true

const change_can_i_count = () => {
    can_i_count = true
};

const display_timer = () => {
    const time = setInterval(() => {
        if(!can_i_count){
            clearInterval(time);
            can_i_count = true;
            return;
        }

        result__time.textContent = `${mins}:${secs<10?`0${secs}`:secs}`;

        if(secs === 60){
            secs = 0;
            mins++;
        }
        secs++;
    }, 1000)
}

const timer_stop = () => {
    can_i_count = false;
}


let best_score = {
    secs: 0,
    mins: 0,
    steps: 0
}



const display_best_score = ({secs, mins, steps}) =>{
    const best_score_secs = best_score.mins * 60 + best_score.secs;
    const last_score_secs = mins * 60 + secs;

    if(last_score_secs < best_score_secs || (best_score.secs === 0 && best_score.mins === 0)){
        best_score.secs = secs;
        best_score.mins = mins;
        best_score.steps = steps;

        best_score_text.innerHTML = `
        Time: <strong>${mins}:${secs<10?`0${secs}`:secs}</strong>
        Steps: <strong>${steps}</strong>
        `
    }
}




const display_score = () => {
    const steps = result__steps.textContent;
    const time = `${result__time.textContent}`;

    score_text.innerHTML = `
        <strong>Time:</strong> ${time} <strong>Steps:</strong> ${steps}
        `;

    display_best_score({secs: secs - 1 ,mins ,steps});
}

const init_best_time = () => {
    best_score_text.innerHTML = `
    Time: <strong>${best_score.mins}:${best_score.secs<10?`0${best_score.secs}`:best_score.secs}</strong>
    Steps: <strong>${best_score.steps}</strong>
    `
}

const reset_best_time = () => {
    best_score = {
        secs: 0,
        mins: 0,
        steps: 0
    }
}





export {
    display_level,
    display_steps,
    display_timer,
    timer_stop,
    display_score,
    reset_best_time,
    init_best_time,
    clear_timer,
    change_can_i_count
}