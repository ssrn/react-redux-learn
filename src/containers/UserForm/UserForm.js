/**
 * Created by bookason on 20/06/17.
 */

//контейнер который рендерит инпут, кнопку, юзера и подключается к store через connect

import React from 'react';
import { connect } from 'react-redux'
import { showUser, lookupError, userNotFound } from '../UserForm/actions'
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
        {/*<Lookup onSubmit={(login) => this.fetchData(login)}/>*/}
        <form onSubmit={() => fetchData(this.props.value)}>
          <Input />
          <Button />
        </form>
        <UserInfo />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    value: state.value,
    found: state.found,
    userName: state.userName,
    userImg: state.userImg,
  }
};

export default connect(mapStateToProps)(UserForm)