/**
 * Created by bookason on 20/06/17.
 */

import * as ActionTypes from '../UserForm/constants';

const initialState = {
  found: true,
  userName: ' ',
};

const showUserInfo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_USER:
      console.log("Show User Reducer: " + action.userName);
      return {
        userName: action.userName,
        userImg: action.userImg,
        found: true,
      };
    case ActionTypes.USER_NOT_FOUND:
      console.log("Not found Reducer");
      return {
        found: false,
      };
    case ActionTypes.SUBMIT_VALUE:
      console.log("Submit Reducer: " + action.value);
      return {
        login: action.value,
      };
    default:
      return state;
  }
};

export default showUserInfo;