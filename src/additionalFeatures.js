import {game_level} from './level.js'

const result__level = document.querySelector('.result__level');
const result__steps = document.querySelector('.result__steps');


const display_level = () => {
    result__level.textContent = game_level;
};

const display_steps = () => {
    let curren_number_steps = parseInt(result__steps.textContent);

    curren_number_steps++;
    result__steps.textContent = curren_number_steps
};


export {
    display_level,
    display_steps,
}