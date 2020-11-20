const musicBtn = document.querySelector('.musicBtn');
const audio = document.querySelector('audio');

const music = () => {
    musicBtn.addEventListener('click',(e)=>{
        const icon = e.currentTarget.children[0]
        icon.classList.toggle('playMusic');
        if(icon.classList.contains('playMusic')){
            audio.play();
        } else{
            audio.pause();
        }
    });
}


export default music;