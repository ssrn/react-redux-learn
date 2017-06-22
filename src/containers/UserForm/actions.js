/**
 * Created by bookason on 20/06/17.
 */

import * as ActionTypes from './constants';

export const showUserAction = (userId, userName, userImg) => {
  return {
    type: ActionTypes.SHOW_USER,
    userId,
    userName,
    userImg,
  }
};

export const userNotFoundAction = (userId) => {
  return {
    type: ActionTypes.USER_NOT_FOUND,
    userId
  }
};
