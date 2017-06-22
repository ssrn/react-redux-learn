/**
 * Created by bookason on 20/06/17.
 */

import * as ActionTypes from './constants';

export const showUserAction = (userName, userImg) => {
  return {
    type: ActionTypes.SHOW_USER,
    userName,
    userImg,
  }
};

export const userNotFoundAction = () => {
  return {
    type: ActionTypes.USER_NOT_FOUND,
    text: 'User not found',
  }
};

/* action creators (const changeInput = () => { return { ... } })
 */
