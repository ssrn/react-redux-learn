/**
 * Created by bookason on 20/06/17.
 */

import * as ActionTypes from '../UserForm/constants';

const initialState = {
  userId: '',
};

const showUserInfo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_USER:
      return {
        userId: action.userId,
        userName: action.userName,
        userImg: action.userImg,
      };
    case ActionTypes.USER_NOT_FOUND:
      return {
        userId: 'Error',
      };
    default:
      return state;
  }
};

export default showUserInfo;