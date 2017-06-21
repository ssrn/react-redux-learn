/**
 * Created by bookason on 20/06/17.
 */

import * as ActionTypes from '../UserForm/constants';


const showUserInfo = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SHOW_USER:
      return {
        userName: action.userName,
        userImg: action.userImg,
        found: true,
      };
    case ActionTypes.USER_NOT_FOUND:
      return {
        found: false,
      };
    default:
      return state;
  }
};

export default showUserInfo;