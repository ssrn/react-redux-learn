/**
 * Created by bookason on 19/06/17.
 */

import { createStore } from 'redux';
import rootReducer from './reducer';

const configureStore = preloadedState => createStore(
  rootReducer,
  // preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configureStore;