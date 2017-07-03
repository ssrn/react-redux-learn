/**
 * Created by bookason on 20/06/17.
 */

import * as ActionTypes from '../UserForm/constants';

// Добавляем состояние ошибки - fetchError
// Добавляем недостающие поля в начальное состояние - userName, userImg
const initialState = {
  userId: null,
  userName: null,
  userImg: null,
  fetchError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_INPUT_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case ActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userImg: action.payload.userImg,
        fetchError: false,
      };
    case ActionTypes.FETCH_USER_FAIL:
      return {
        ...state,
        userId: null,
        fetchError: true,
      };
    default:
      return state;
  }
};
