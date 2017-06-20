/**
 * Created by bookason on 19/06/17.
 */

import { createStore } from 'redux';

let store = createStore();

store.dispatch({
  type: 'GET_USER_DATA',
});