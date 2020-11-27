import music from './music.js';
import {level} from './level.js';
import buttonOperation from './buttonOperation.js'
import fetchPictures from './fetchPictures.js'
import {setUpStore} from './store.js'

const init = async () => {
    const pictures = await fetchPictures();
    setUpStore(pictures);
    buttonOperation();
    level();
    music();
}

window.addEventListener('DOMContentLoaded', init);

