import {CHANGE_ADVERTISING} from '../actions';
let _state;


function reducer(state = {}, action){



    switch (action.type){

        case CHANGE_ADVERTISING:

            state = action.data;

            _state = state;

            return state;

            break;


        default:

            state = {
                problems : [],
                programs : [],
                questions: [],
                discussions: [],
                advertisingPublications : [],
                raisedPublications : []
            };
            return state;

    }

};

export default reducer;
