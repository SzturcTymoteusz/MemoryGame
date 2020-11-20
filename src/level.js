const levelBtn = [...document.querySelectorAll('.levelBtn')];
let gameLevel = 'easy';

const level = () => {
    levelBtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            levelBtn.forEach((btn)=>{
                btn.classList.remove('selected');
            });
            e.target.classList.add('selected');
            console.log(gameLevel);
            gameLevel = e.target.dataset.id;
            console.log(gameLevel);
        })
    });
}


export {level, gameLevel};