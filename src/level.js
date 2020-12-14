import {reset_best_time} from './timer.js'

const level_btn = [...document.querySelectorAll('.level__circle')];
let game_level = 'easy';

const level = () => {
    level_btn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            level_btn.forEach((btn)=>{
                btn.classList.remove('level__circle--selected');
            });
            e.target.classList.add('level__circle--selected');
            game_level = e.target.dataset.id;
            reset_best_time();
        })
    });
};


export {level, game_level};