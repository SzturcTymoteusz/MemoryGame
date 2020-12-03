import music from './music.js';
import {level} from './level.js';
import buttonOperation from './buttonOperation.js'
import fetchPictures from './fetchPictures.js'
import {setUpLocalStorage} from './setupLocalStorage.js'

const init = async () => {
    const pictures = await fetchPictures();
    setUpLocalStorage(pictures);
    buttonOperation();
    level();
    music();
}

window.addEventListener('DOMContentLoaded', init);

