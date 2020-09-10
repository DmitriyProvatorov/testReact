import {CHANGE_CITY, CHANGE_URL} from '../actions';

let listPages = ['home', 'problems', 'questions', 'discussions', 'programs'];
let _state;
let lastZip;

function reducer(state = null, action){



    switch (action.type){

        case CHANGE_CITY:

            state = action.data;

            _state = state;

            return state;

           // break;

        case   CHANGE_URL:


            let list = window.location.pathname.split("/");



            if(listPages.includes(list[2])){

                if(lastZip == list[1]){

                    state = _state;
                    return state;
                }

                state = {
                    zip_code: list[1],
                    center: {lat: 47.097735, lng:  37.538385},
                    name: 'Мариуполь',
                    nameUa: 'Мариуполь'
                };
                lastZip = list[1];
                _state = state;
            }
            else{

                state = _state
            }

            return state;

           // break;

        default:

            state = {
                zip_code: lastZip || 87500,
                center: {lat: 47.097735, lng:  37.538385},
                name: 'Мариуполь',
                nameUa: 'Мариуполь'
            };

            _state = state;

            lastZip = state.zip_code;

            return state;

    }

};

export default reducer;
