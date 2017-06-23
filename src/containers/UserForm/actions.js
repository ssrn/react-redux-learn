/**
 * Created by bookason on 20/06/17.
 */

import * as ActionTypes from './constants';

// Action в конце названия не нужен, лишняя информация, которая понятна из контекста кода
// В дальнейшем будем использовать Flux Standard Action (https://github.com/acdlite/flux-standard-action/blob/master/README.md)
// По сути это означает, что любой action должен содержать type,
// payload(содержит любую полезную нагрузку в любом виде или объект ошибки, если таковая имеется),
// и error(если action содержит инфу об ошибке).

// В таком случае мы всегда можем проверить, если action.error - true, то в payload лежит ошибка и ее можно или как-то отобразить пользователю
// Или обработать внутри приложения

// Для названий экшн криэйторов будем использовать паттерн <глагол><Существительное> (addTodo, pushNotification, etc)
// Это не аксиома, просто соглашение, которое позволит проще читать код, поэтому иногда это правило можно игнорировать

// Следующие экшн криэйторы нужно отрефакторить, в соответствии с предыдущими комментариями

export const getInputValue = (value) => {
  return {
    type: ActionTypes.GET_INPUT_VALUE,
    payload: value,
  }
};

// Еще из названия не понятно, что описывает action, логичнее было бы назвать fetchUserSuccess или fetchUserComplete
export const fetchUserSuccess = (userId, userName, userImg) => {
  return {
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload: {userId, userName, userImg},
  }
};

// Еще из названия не понятно, что описывает action, логичнее было бы назвать fetchUserFail или fetchUserError
export const fetchUserFail = (userId) => {
  return {
    type: ActionTypes.FETCH_USER_FAIL,
    payload: userId
  }
};
