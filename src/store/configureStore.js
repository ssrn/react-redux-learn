/**
 * Created by bookason on 19/06/17.
 */

//здесь импортируем /src/store/reducer.js и передаем в createStore

import { createStore } from 'redux';
import rootReducer from './reducer';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
);

export default configureStore;