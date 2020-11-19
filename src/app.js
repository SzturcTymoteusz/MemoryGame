const btns = [...document.querySelectorAll('.btn')];

const startGame = document.querySelector('.startGame');
const help = document.querySelector('.help');
const settings = document.querySelector('.settings');

const levelBtn = [...document.querySelectorAll('.levelBtn')];
const musicBtn = document.querySelector('.musicBtn');
const audio = document.querySelector('audio');


let level = 'easy';

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('newGameBtn')){
            console.log('NewGame');
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
    })
})

levelBtn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        levelBtn.forEach((btn)=>{
            btn.classList.remove('selected');
        });
        e.target.classList.add('selected');
        level = e.target.dataset.id;
    })
});

musicBtn.addEventListener('click',(e)=>{
    const icon = e.currentTarget.children[0]
    icon.classList.toggle('playMusic');
    if(icon.classList.contains('playMusic')){
        audio.play();
    } else{
        audio.pause();
    }
})