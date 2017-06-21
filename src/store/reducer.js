/**
 * Created by bookason on 20/06/17.
 */

import { combineReducers } from 'redux';
import showUserInfo from '../containers/UserForm/reducer';

const rootReducer = combineReducers({
  showUserInfo,
});

export default rootReducer;