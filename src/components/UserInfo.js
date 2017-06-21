/**
 * Created by bookason on 16/06/17.
 */

//рендерит аватар и имя, если нету сообщение об отсутсвии

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInfo extends Component {
  renderUserInfo() {
    if (!this.props.found) {
      return (
        <div className="user">
          Not found
        </div>
      );
    } else {
      return (
        <div className="user">
          <div className="user-name">{ this.props.userName ? this.props.userName : "Data empty" }</div>
          <div className="user-image">{ this.props.userImg ? (
            <img src={ this.props.userImg }  alt={ this.props.userName}/>
          ) : (
            "Data empty"
          ) } </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="user-info">
        {this.renderUserInfo()}
      </div>
    )
  }
}

UserInfo.propTypes = {
  found: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
};

export default UserInfo;

