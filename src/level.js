import {resetBestTime} from './additionalFeatures.js'

const levelBtn = [...document.querySelectorAll('.levelBtn')];
let gameLevel = 'easy';

const level = () => {
    levelBtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            levelBtn.forEach((btn)=>{
                btn.classList.remove('selected');
            });
            e.target.classList.add('selected');
            gameLevel = e.target.dataset.id;
            resetBestTime();
        })
    });
}


export {level, gameLevel};