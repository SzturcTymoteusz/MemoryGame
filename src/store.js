import {gameLevel} from './level.js';

const setUpStore = (pictures) => {
    localStorage.setItem('pictures', JSON.stringify(pictures))
}

const getRandomPictures = () => {
    const pictures = JSON.parse(localStorage.getItem('pictures'));
    let numberPairCards = 0;

    if(gameLevel === "easy"){
        numberPairCards = 6
    } else{
        numberPairCards = 10
    }
    console.log(pictures);


}


export {
    setUpStore,
    getRandomPictures
}