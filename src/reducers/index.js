// import { combineReducers } from 'redux'
// import { GET_DATA } from './actions'

const getDate = (state, action) => {
  switch (action.type) {
    case 'GET_USER_DATA':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    default:
      return state
  }
};

