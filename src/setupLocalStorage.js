import {game_level} from './level.js';

const set_up_local_storage = (pictures) => {
    localStorage.setItem('pictures', JSON.stringify(pictures))
}

const get_random_pictures = () => {
    const pictures = JSON.parse(localStorage.getItem('pictures'));
    const number_pair_cards = (game_level === "easy")? 6 : 10;
    let random_indexs = [];


    // get random pictures
    for(let i = 0; i < number_pair_cards; i++){
        let random_number = Math.floor(Math.random()*pictures.length);

        if(random_indexs.find((index) =>index === random_number) === undefined){
            random_indexs.push(random_number);
        } else {
            i--;
        }
    }

    const random_pictures = random_indexs.map((index) => pictures[index]);

    return random_pictures;
}


export {
    set_up_local_storage,
    get_random_pictures
}