import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserInfo extends Component {
  renderNameWithImage() {
    const { userId, userName, userImg } = this.props;

    const userHasName = typeof userName === 'string' && userName.length;
    const userHasImg = typeof userImg === 'string' && userImg.length;

    return typeof userId === 'number' ? (
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
    ) : null;
  }

  renderErrorMessage() {
    return (
      <div className="error">User not found</div>
    );
  }

  render() {
    const { fetchError } = this.props;

    console.log("Render UserInfo", this.props);
    return (
      <div>
        {fetchError ? this.renderErrorMessage() : this.renderNameWithImage()}
      </div>
    )
  }
}

UserInfo.propTypes = {
  userId: PropTypes.number,
  userName: PropTypes.string,
  userImg: PropTypes.string,
  fetchError: PropTypes.bool,
};

UserInfo.defaultProps = {
  userId: null,
  userName: null,
  userImg: null,
  fetchError: false,
};
