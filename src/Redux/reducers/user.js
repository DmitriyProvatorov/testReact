import {LOGIN_USER} from '../actions';


function reducer(state = false, action){

    switch (action.type) {


        case LOGIN_USER:

            if(action.data.isRemember) {
                state = action.data.isRemember;
            }
            else {

                let password= localStorage.getItem(action.data.email);
                if (password === action.data.password){
                    state = true;
                }


            }

            console.log(state)

            return state;

            break;

            default:
            return state;
    }
};

export default reducer;
