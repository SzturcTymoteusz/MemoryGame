const result__time = document.querySelector('.result__time');
const score_text = document.querySelector('.score__display');
const best_score_text = document.querySelector('.result__best-score');
const result__steps = document.querySelector('.result__steps');



let time = {
    secs: 0,
    mins: 0,
    can_i_count: true
};

let best_score = {
    secs: 0,
    mins: 0,
    steps: 0
};

const start_timer = () => {
    const timer = setInterval(() => {
        if(!time.can_i_count) {
            clearInterval(timer);
            return;
        }

        time.secs++;

        if(time.secs === 60){
            time.secs = 0;
            time.mins++;
        }

        result__time.textContent = `${time.mins}:${time.secs<10?`0${time.secs}`:time.secs}`;

    } , 1000);
};


const stop_timer = () => {
    time.can_i_count = false
};


const display_score = () => {
    const steps = result__steps.textContent;
    const time_text = `${result__time.textContent}`;

    score_text.innerHTML = `
    <strong>Time:</strong> ${time_text} <strong>Steps:</strong> ${steps}
    `;

    display_best_score(time.secs,time.mins ,steps);
};

const clear_score = () => {
    result__time.textContent = '0:00';
    result__steps.textContent = '0';
    time.secs = 0;
    time.mins = 0;
};


const display_best_score = (secs, mins, steps) =>{
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
};

const reset_best_time = () => {
    best_score = {
        secs: 0,
        mins: 0,
        steps: 0
    };
    best_score_text.innerHTML = `
    Time: <strong>${best_score.mins}:${best_score.secs<10?`0${best_score.secs}`:best_score.secs}</strong>
    Steps: <strong>${best_score.steps}</strong>
    `;
};

export {
    start_timer,
    stop_timer,
    display_score,
    clear_score,
    time,
    reset_best_time
}















