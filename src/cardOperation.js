import {display_steps, display_timer, timer_stop, display_score, change_can_i_count} from './additionalFeatures.js';

const card_container = document.querySelector('.game__card-container');
const alert_score = document.querySelector('.score');




const random_setup_card = (pictures) => {
    const double_pictures = pictures.concat(pictures);
    const double_pictures_length = double_pictures.length
    const new_double_pictures = [];
    for(let i = 0; i < double_pictures_length; i++){
        const random_index = Math.floor(Math.random()*double_pictures.length);
        new_double_pictures.push(double_pictures[random_index]);
        double_pictures.splice(random_index,1);
    }
    console.log(new_double_pictures);
    display_card(new_double_pictures);
}

const display_card = (pictures) => {
    card_container.innerHTML = pictures.map((picture) => {
        return `
        <div class="card " id="${picture.id}" data-opened = 'false' >
            <div class="card__face card__face--front">
                <span class='card__logo'>Game</span>
            </div>
            <div class="card__face card__face--back">
                <img loading="eager" class="card__img" src='${picture.url}'>
            </div>
        </div>
        `
    }).join('');

};

const finish_game = (first_click) => {
    timer_stop();
    display_score();
    setTimeout(() => {
        alert_score.classList.remove('game__alert--hidden');
        first_click = false;

    }, 700)
}

const open_card = () => {
    const cards = [...document.querySelectorAll('.card')];
    let first_clicked_card = undefined;
    let second_clicked_card = undefined;
    let can_i_click = true;
    let first_click = false;

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const clicked_card = e.currentTarget;

            if(!can_i_click) return

            // first open card will start the counter
            if(!first_click){
                change_can_i_count();
                display_timer();
                first_click = true;
            }

            //opening cards and assigment them to variable
            if(clicked_card.dataset.opened === 'false' && can_i_click){
                clicked_card.classList.add('card--opened');

                second_clicked_card = (first_clicked_card) ? clicked_card : second_clicked_card;
                first_clicked_card = (!first_clicked_card) ? clicked_card : first_clicked_card;

            }

            // check value chosen cards
            if(!first_clicked_card || !second_clicked_card) return;

            can_i_click = false;
            display_steps()

            setTimeout(() => {

                // Match
                if(first_clicked_card.id === second_clicked_card.id){
                    first_clicked_card.dataset.opened = 'true';
                    second_clicked_card.dataset.opened = 'true';

                    //Check all cards, maybe user finished game
                    const closed_card = cards.filter(card => card.dataset.opened === 'false');
                    (closed_card[0] === undefined) ? finish_game(first_click) : null;

                    first_clicked_card = undefined;
                    second_clicked_card = undefined;

                    can_i_click = true;

                    return;
                }

                // No match
                first_clicked_card.classList.remove('card--opened');
                second_clicked_card.classList.remove('card--opened');

                first_clicked_card = undefined;
                second_clicked_card = undefined;

                can_i_click = true
            }, 700)
        })
    })
}



export {
    random_setup_card,
    open_card
};