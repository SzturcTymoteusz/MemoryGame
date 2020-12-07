import music from './music.js';
import {level} from './level.js';
import button_operation from './buttonOperation.js'
import fetch_pictures from './fetchPictures.js'
import {set_up_local_storage} from './setupLocalStorage.js'

const init = async () => {
    const pictures = await fetch_pictures();
    set_up_local_storage(pictures);
    button_operation();
    level();
    music();
}

window.addEventListener('load', init);

