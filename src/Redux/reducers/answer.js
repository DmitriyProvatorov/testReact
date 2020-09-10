import {CHANGE_ANSWER} from '../actions';

function reducer(state = true, action){



    switch (action.type){

        case CHANGE_ANSWER:

            state = action.answer;

            return state;

          //  break;

        default:

            return state;

    }

};

export default reducer;
