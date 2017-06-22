/**
 * Created by bookason on 21/06/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showUserAction, userNotFoundAction } from '../UserForm/actions';
import Input from '../../components/Input';
import Button from '../../components/Button';
import UserInfo from '../../components/UserInfo';

class UserForm extends Component {

  fetchData = (login) => {
    console.log("In fetch data: " + login);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => {
      console.log(response);
        if (response.status === 200) {
          return response.json()
        }
        throw new Error("Not found");
      })
      .then((user) => {
        user.id ? this.props.showUser(user.name, user.avatar_url) : this.props.userNotFound()
      })
      .catch((error) => {
        console.log("Lookup error");
        this.props.userNotFound();
      });
  };

  inputValue = '';

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => { e.preventDefault(); console.log("OnSubmit: " + this.inputValue); return this.fetchData(this.inputValue) }}>
          <Input
            inputValue={this.props.login}
            onChange={(value) => { console.log("On change: " + value); this.inputValue = value; }}
          />
          <Button
            text="Submit"
          />
        </form>
        <UserInfo
          userName={this.props.userName}
          userImg={this.props.userImg}
          found={this.props.found}
        />
      </div>
    );
  }
}

UserForm.propTypes = {
  login: PropTypes.string,
  userName: PropTypes.string,
  userImg: PropTypes.string,
  found: PropTypes.bool,
};

const mapStateToProps = (state) => {
  console.log("Map state");
  console.dir(state);
  return {
    login: state.login,
    found: state.found,
    userName: state.userName,
    userImg: state.userImg,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUser: (userName, userImg) => {
      console.log("In show user: " + userName);
      return dispatch(showUserAction(userName, userImg))
    },
    userNotFound: () => dispatch(userNotFoundAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)