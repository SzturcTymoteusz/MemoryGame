import {gameLevel} from './level.js';

const setUpLocalStorage = (pictures) => {
    localStorage.setItem('pictures', JSON.stringify(pictures))
}

const getRandomPictures = () => {
    const pictures = JSON.parse(localStorage.getItem('pictures'));
    const numberPairCards = (gameLevel === "easy")? 6 : 10;
    let randomIndexs = [];


    // get random pictures
    for(let i = 0; i < numberPairCards; i++){
        let randomNumber = Math.floor(Math.random()*pictures.length);

        if(randomIndexs.find((index) =>index === randomNumber) === undefined){
            randomIndexs.push(randomNumber);
        } else {
            i--;
        }
    }

    const randomPictures = randomIndexs.map((index) => pictures[index]);

    return randomPictures;
}


export {
    setUpLocalStorage,
    getRandomPictures
}