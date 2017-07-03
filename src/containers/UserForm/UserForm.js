/**
 * Created by bookason on 21/06/17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInputValue, fetchUserSuccess, fetchUserFail } from '../UserForm/actions';
import Input from '../../components/Input';
import Button from '../../components/Button';
import UserInfo from '../../components/UserInfo';
import './UserForm.css';

class UserForm extends Component {

  checkInputIsValid = () => (this.props.value.match(/^[a-z0-9-]+$/) != null);

  handleInputChange = (event) => {
    this.props.getInputValue(event.target.value)
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    return this.fetchData(this.props.value)
  };

  fetchData = (login) => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
        throw new Error("Not found");
      })
      .then((user) => {
        this.props.showUser(user.id, user.name, user.avatar_url);
      })
      .catch((error) => {
        this.props.userNotFound(error.message);
      });
  };

  render() {
    return (
      <div className="App">
        <form className="search" onSubmit={this.handleOnSubmit}>
          <Input
            value={this.props.value}
            onChange={this.handleInputChange}
            isValid={!this.props.touched || this.checkInputIsValid()}
          />
          <Button disabled={!this.checkInputIsValid()} />
        </form>
        <UserInfo
          userId={this.props.userId}
          userName={this.props.userName}
          userImg={this.props.userImg}
        />
      </div>
    );
  }
}


UserForm.propTypes = {
  value: PropTypes.string,
  touched: PropTypes.bool,
  userId: PropTypes.number,
  userName: PropTypes.string,
  userImg: PropTypes.string,
  error: PropTypes.bool,
};

UserForm.defaultProps = {
  value: null,
  touched: false,
  userId: null,
  userName: null,
  userImg: null,
  error: false,
};

const mapStateToProps = (state) => {
  return {
    value: state.value,
    touched: state.touched,
    userId: state.userId,
    userName: state.userName,
    userImg: state.userImg,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInputValue: (value, touched) => dispatch(getInputValue(value, touched)),
    showUser: (userId, userName, userImg) => {
      return dispatch(fetchUserSuccess(userId, userName, userImg))
    },
    userNotFound: (error) => dispatch(fetchUserFail(error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)
