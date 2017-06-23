/**
 * Created by bookason on 19/06/17.
 */

//здесь импортируем /src/store/reducer.js и передаем в createStore

import { createStore } from 'redux';
import rootReducer from './reducer';

const configureStore = preloadedState => createStore(
  rootReducer,
  // preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configureStore;