/**
 * Created by bookason on 16/06/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserInfo extends Component {
  renderNameWithImage() {
    const { userName, userImg } = this.props;

    const userHasName = typeof userName === 'string' && userName.length;
    const userHasImg = typeof userImg === 'string' && userImg.length;

    return (
      <div className="user">
        <div className="user-name">
          {userHasName ? userName : "Username is empty"}
        </div>
        <div className="user-image">
          {userHasImg
            ? <img src={userImg}  alt={userName} />
            : "User does not have avatar"
          }
        </div>
      </div>
    );
  }

  renderErrorMessage() {
    return (
      <div className="user">Not found</div>
    );
  }

  render() {
    const { userId, error } = this.props;

    return typeof userId === 'number' ? (
      <div className="user-info">
        {error ? this.renderErrorMessage() : this.renderNameWithImage()}
      </div>
    ) : null;
  }
}

UserInfo.propTypes = {
  userId: PropTypes.number,
  userName: PropTypes.string,
  userImg: PropTypes.string,
  error: PropTypes.bool,
};

UserInfo.defaultProps = {
  userId: null,
  userName: null,
  userImg: null,
  error: false,
};
