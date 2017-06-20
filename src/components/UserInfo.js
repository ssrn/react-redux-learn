/**
 * Created by bookason on 16/06/17.
 */

import React, {PropTypes} from 'react';

const UserInfo = ({userName, userImg}) => (
  <div className="user-info">
    <div className="user">
      <div className="user-name">{ userName ? userName : "Data empty" }</div>
      <div className="user-image">{ userImg ? (
        <img src={ userImg }/>
      ) : (
        "Data empty"
      ) } </div>
    </div>
  </div>
);

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
};

export default UserInfo;

