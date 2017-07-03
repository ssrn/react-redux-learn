/**
 * Created by bookason on 20/06/17.
 */

import * as ActionTypes from './constants';

// В таком случае мы всегда можем проверить, если action.error - true, то в payload лежит ошибка и ее можно или как-то отобразить пользователю
// Или обработать внутри приложения

export const getInputValue = (value) => {
  return {
    type: ActionTypes.GET_INPUT_VALUE,
    payload: value,
  }
};

export const fetchUserSuccess = (value, touched, userId, userName, userImg) => {
  return {
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload: { value, touched, userId, userName, userImg },
  }
};

// Так как этот action creator создает экшн обозначающий ошибку при загрузке юзера
// то аргументом должен быть текст или код ошибки
// payload в таком случае будет объектом ошибки
export const fetchUserFail = (errorMsg) => {
  return {
    type: ActionTypes.FETCH_USER_FAIL,
    // payload: userId,
    payload: new Error(errorMsg),
    error: true,
  }
};
