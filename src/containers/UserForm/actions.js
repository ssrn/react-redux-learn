/**
 * Created by bookason on 20/06/17.
 */


import * as ActionTypes from './constants';

export const submitValue = (value) => {
  return {
    type: ActionTypes.SUBMIT_VALUE,
    value,
  }
};

export const showUser = (userName, userImg) => {
  return {
    type: ActionTypes.SHOW_USER,
    userName,
    userImg,
  }
};

export const userNotFound = () => {
  return {
    type: ActionTypes.USER_NOT_FOUND,
    text: 'User not found',
  }
};

export const lookupError = () => {
  return {
    type: ActionTypes.ERROR,
    text: 'Error',
  }
};

/* action creators (const changeInput = () => { return { ... } })
 */
