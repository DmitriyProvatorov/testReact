import {combineReducers} from 'redux';

import {default as userReduser} from './user';


const reducer = combineReducers({

        user: userReduser,

});

export default reducer;
