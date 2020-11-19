const btns = [...document.querySelectorAll('.btn')];

const startGame = document.querySelector('.startGame');
const help = document.querySelector('.help');
const settings = document.querySelector('.settings');





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