


import { createStore, combineReducers } from 'redux';

import {reducer} from './count';

const allReducers = combineReducers({
  dummy: () => {
    return {};
  },
  countValue: reducer
})

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;