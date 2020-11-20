import music from './music.js';
import {level} from './level.js';
import buttonOperation from './buttonOperation.js'
import fetchPictures from './fetchPictures.js'
import {setUpStore} from './store.js'

const init = async () => {
    buttonOperation();
    level();
    music();

    const pictures = await fetchPictures();
    setUpStore(pictures);
}

window.addEventListener('DOMContentLoaded', init)
