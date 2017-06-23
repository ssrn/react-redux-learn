/**
 * Created by bookason on 20/06/17.
 */

import * as ActionTypes from '../UserForm/constants';

const initialState = {
  userId: '',
};

// Можно написать
// export default (state = initialState, action) => {
// И убрать последнюю строку
// было: const showUserInfo = (state = initialState, action) => {
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_INPUT_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case ActionTypes.FETCH_USER_SUCCESS:
      // Все правильно с точки зрения логики кода, но всегда надо мерджить новые данные со старым стейтом
      // Это нужно, чтобы случайно не потерять какие-то данные и не потратить несколько часов на поиск ошибки
      // return {
      //   ...state,
      //   userId: action.userId,
      //   userName: action.userName,
      //   userImg: action.userImg,
      // };
      return {
        ...state,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userImg: action.payload.userImg,
      };
    case ActionTypes.FETCH_USER_FAIL:
      return {
        ...state,
        userId: 'Error',
      };
    default:
      return state;
  }
};

// export default showUserInfo;
