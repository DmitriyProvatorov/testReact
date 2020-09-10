import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import state from '../state';
import reducer from '../../reducers';


const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

//const store = createStore(reducer);


const store = createStore(reducer, state, composeEnhancers(
    applyMiddleware(promise, thunk)));

export default store;