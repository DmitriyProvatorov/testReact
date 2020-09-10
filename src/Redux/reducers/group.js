import {CHANGE_GROUP_DATA, EXIT} from '../actions';

function reducer(state = null, action){



    switch (action.type){

        case CHANGE_GROUP_DATA:



            state = action.data;

            return state ||{};

            // break;
        case EXIT:
            state = null;

            return state;


        default:
            return state;




    }

};

export default reducer;
