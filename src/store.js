import {gameLevel} from './level.js';

const setUpStore = (pictures) => {
    localStorage.setItem('pictures', JSON.stringify(pictures))
}

const getRandomPictures = () => {
    const pictures = JSON.parse(localStorage.getItem('pictures'));
    let numberPairCards = 0;
    let randomIndexs = [];

    if(gameLevel === "easy"){
        numberPairCards = 6
    } else{
        numberPairCards = 10
    }

    // get random pictures
    for(let i = 0; i < numberPairCards; i++){
        let randomNumber = Math.floor(Math.random()*pictures.length);

        if(randomIndexs.find((index) =>index === randomNumber) === undefined){
            randomIndexs.push(randomNumber);
        } else {
            i--;
        }
    }

    const randomPictures = randomIndexs.map((index) => {
        return pictures[index];
    });

    return randomPictures;

}


export {
    setUpStore,
    getRandomPictures
}