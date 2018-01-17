import * as ActionTypes from './constants';

export const getInputValue = (value, touched) => {
  return {
    type: ActionTypes.GET_INPUT_VALUE,
    payload: { value, touched }
  }
};

export const fetchUserSuccess = (userId, userName, userImg) => {
  return {
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload: { userId, userName, userImg },
  }
};

export const fetchUserFail = (errorMsg) => {
  console.log("Fetch fail action", errorMsg);
  return {
    type: ActionTypes.FETCH_USER_FAIL,
    payload: new Error(errorMsg),
    fetchError: true,
  }
};
