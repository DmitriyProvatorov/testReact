import {
   SET_LOADER,
    REMOVE_LOADER

} from '../actions';





function reducer(state = false, action){

    switch (action.type) {


        case SET_LOADER:


            state = true;
            return state;

          //  break;

        case REMOVE_LOADER:
            state = false;

            return state;
          //  break;

        default:
            return state;

    }





};

export default reducer;
