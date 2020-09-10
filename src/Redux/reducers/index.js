import {combineReducers} from 'redux';
import {default as cabinetReducer} from './cabinet';
import {default as locationReduser} from './location';
import {default as userReduser} from './user';
import {default as loaderReduser} from './loader';
import {default as answerReduser} from './answer';
import {default as cityReduser} from './city';
import {default as advertisingReduser} from './advertising';
import {default as groupReduser} from './group';
import {default as mayViewCategories} from './mayViewCategories';

const reducer = combineReducers({
        cabinet: cabinetReducer,
        location : locationReduser,
        user: userReduser,
        loader: loaderReduser,
        answer : answerReduser,
        city: cityReduser,
        advertising: advertisingReduser,
        group: groupReduser,
        mayViewCategories : mayViewCategories
});

export default reducer;
