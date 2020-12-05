const music_btn = document.querySelector('.settings__music-btn');
const audio = document.querySelector('audio');

const music = () => {
    music_btn.addEventListener('click',(e)=>{
        const icon = e.currentTarget.children[0]
        icon.classList.toggle('settings__play-is-playing');
        if(icon.classList.contains('settings__play-is-playing')){
            audio.play();
        } else{
            audio.pause();
        }
    });
}


export default music;