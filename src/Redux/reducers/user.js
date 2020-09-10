import {
    GET_AUTH,
    EXIT,
    CHANGE_USER_DATA

} from '../actions';





function reducer(state = {}, action){





    switch (action.type) {


        case GET_AUTH:





            state = action.data;





            return state;

            break;

        case EXIT:
            state = {};

            return state;

            break;

        case CHANGE_USER_DATA:

            state = action.data;




            return state;

            break;

        default:



            return state;
    }





};

export default reducer;
