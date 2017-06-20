/**
 * Created by bookason on 20/06/17.
 */

export const showUser = (userName, userImg) => {
  return {
    type: 'SHOW_USER',
    userName,
    userImg,
  }
};

export const userNotFound = () => {
  return {
    type: 'USER_NOT_FOUND',
    text: 'User not found',
  }
};

export const lookupError = () => {
  return {
    type: 'ERROR',
    text: 'Error',
  }
};
