import {CHANGE_MAY_VIEW_CATEGORIES, EXIT} from '../actions';

function reducer(state = [], action){



  switch (action.type){

    case CHANGE_MAY_VIEW_CATEGORIES:



      state = action.categories;




      return state || {};

     // break;


    case EXIT:



      state = [];

      return state;

    //  break;

    default:

      return state;

  }

};

export default reducer;
