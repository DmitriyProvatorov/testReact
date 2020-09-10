import {CHANGE_GROUP_CABINET, EXIT} from '../actions';

function reducer(state = null, action){



    switch (action.type){

        case CHANGE_GROUP_CABINET:

            state = action.id;

            return state;

         //break;


        case EXIT:



            state = null;

            return state;

           // break;

        default:

            return state;

    }

};

export default reducer;
