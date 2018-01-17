import * as ActionTypes from '../UserForm/constants';

const initialState = {
  value: '',
  touched: false,
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
        value: action.payload.value,
        touched: true,
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
      console.log("Reducer", state, action);
      return {
        ...state,
        userId: null,
        fetchError: true,
      };
    default:
      return state;
  }
};
