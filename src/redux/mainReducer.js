import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard119168458Reducer from '../features/Dashboard119168458/redux/reducers'
import Dashboard220168457Reducer from '../features/Dashboard220168457/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard119168458: Dashboard119168458Reducer,
Dashboard220168457: Dashboard220168457Reducer,

});