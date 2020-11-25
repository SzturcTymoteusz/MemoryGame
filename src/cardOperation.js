const cardContainer = document.querySelector('.card-container');


const randomSetupCard = (pictures) => {
    const doublePictures = pictures.concat(pictures);
    const doublePicturesLength = doublePictures.length
    const newDoublePictures = [];
    for(let i = 0; i < doublePicturesLength; i++){
        const randomIndex = Math.floor(Math.random()*doublePictures.length);
        newDoublePictures.push(doublePictures[randomIndex]);
        doublePictures.splice(randomIndex,1);
    }

    displayCard(newDoublePictures);
}

const displayCard = (pictures) => {
    cardContainer.innerHTML = pictures.map((picture) => {
        return `
        <div class="card" id="${picture.id}" data-opened = 'false' >
            <div class="face front">
                <span>Game</span>
            </div>
            <div class="face back">
                <img src=${picture.url}>
            </div>
        </div>
        `
    }).join('');

}

const openCard = () => {
    const cards = [...document.querySelectorAll('.card')];
    let firstClickedCard = undefined;
    let secondClickedCard = undefined;
    let canIClick = true;
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const clickedCard = e.currentTarget;

            if(clickedCard.dataset.opened === 'false' && canIClick){
                clickedCard.classList.add('openCard');

                if(!firstClickedCard){
                    firstClickedCard = clickedCard;

                } else{
                    secondClickedCard = clickedCard;
                    canIClick = false;

                    if(firstClickedCard.id === secondClickedCard.id){
                        firstClickedCard.dataset.opened = 'true';
                        secondClickedCard.dataset.opened = 'true';

                        firstClickedCard = undefined;
                        secondClickedCard = undefined;

                        canIClick = true

                        if(!cards.find((card) => card.dataset.opened === 'false')){
                            console.log('It is finish');
                        }

                    } else{
                        setTimeout(()=>{
                            firstClickedCard.classList.remove('openCard');
                            secondClickedCard.classList.remove('openCard');

                            firstClickedCard = undefined;
                            secondClickedCard = undefined;

                            canIClick = true


                        }, 1000)
                    }
                }

            }

        })
    })
}


export {
    randomSetupCard,
    openCard
};