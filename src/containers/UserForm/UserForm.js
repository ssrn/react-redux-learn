/**
 * Created by bookason on 21/06/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showUser, lookupError, userNotFound } from '../UserForm/actions';
import Input from '../../components/Input';
import Button from '../../components/Button';
import UserInfo from '../../components/UserInfo';

let UserForm = ({ dispatch }) => {
  let fetchData = (login) => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        throw new Error("Not found");
      })
      .then((user) => {
        user.id ? dispatch(showUser(user.name, user.avatar_url)) : dispatch(userNotFound())
      })
      .catch((error) => {
        dispatch(lookupError());
      });
  };

  return (
    <div className="App">
      <form onSubmit={() => fetchData(this.props.login)}>
        <Input
          inputValue={this.props.login}
          onChange={this.handleInputChange}
        />
        <Button text="Submit" />
      </form>
      <UserInfo
        userName={this.props.userName}
        userImg={this.props.userImg}
      />
    </div>
  );
};


UserForm.propTypes = {
  login: PropTypes.string,
  userName: PropTypes.string,
  userImg: PropTypes.string,
};


const mapStateToProps = (state) => {
  return {
    login: state.login,
    found: state.found,
    userName: state.userName,
    userImg: state.userImg,
  }
};

export default connect(mapStateToProps)(UserForm)