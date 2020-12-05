import { random_setup_card, open_card } from './cardOperation.js';
import {get_random_pictures} from './setupLocalStorage.js';
import {display_level, init_best_time, clear_timer, timer_stop} from './additionalFeatures.js'


const all_btns = [...document.querySelectorAll('.btn')];
const all_views = [...document.querySelectorAll('.page__view')]


const alert_start = document.querySelector('.start');
const alert_score = document.querySelector('.score');
const result__steps = document.querySelector('.result__steps');
const result__time = document.querySelector('.result__time');



const display_view = (clicked_view) => {
    all_views.forEach(item => item.classList.remove('page__view--show'));

    const view = document.querySelector(`.${clicked_view.dataset.id}`);

    view.classList.add('page__view--show');
}

const display_current_score = () => {
    display_level();
    init_best_time();

    result__steps.textContent = '0';
    result__time.textContent = '0:00';
}


const button_operation = () => {
    all_btns.forEach((btn)=>{
        btn.addEventListener('click', () => {

            if(btn.dataset.id === 'game'){
                display_view(btn);
                alert_start.classList.remove('game__alert--hidden');
                alert_score.classList.add('game__alert--hidden');

                const random_pictures = get_random_pictures();
                random_setup_card(random_pictures);

                display_current_score();
                clear_timer();
            }

            if(btn.dataset.id === 'settings') display_view(btn);

            if(btn.dataset.id === 'help') display_view(btn);


            if(btn.dataset.id === 'menu') {
                display_view(btn);
                timer_stop();
                clear_timer();
                alert_score.classList.add('game__alert--hidden');
            };


            if(btn.classList.contains('start__btn')){
                alert_start.classList.add('game__alert--hidden');
                open_card();
            }


            if(btn.dataset.id === 'try_again'){
                if(!alert_start.classList.contains('game__alert--hidden')) return

                if(alert_score.classList.contains('game__alert--hidden')) timer_stop();
                clear_timer();

                alert_score.classList.add('game__alert--hidden');

                const random_pictures = get_random_pictures();
                random_setup_card(random_pictures);

                open_card();
            }

        })
    });
}

export default button_operation;