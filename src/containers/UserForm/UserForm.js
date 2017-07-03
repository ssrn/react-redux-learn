/**
 * Created by bookason on 21/06/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInputValue, fetchUserSuccess, fetchUserFail } from '../UserForm/actions';
import Input from '../../components/Input';
import Button from '../../components/Button';
import UserInfo from '../../components/UserInfo';
import './UserForm.css';

class UserForm extends Component {
  constructor(props) {
    super(props);

    // Хранение value надо перенести в state

    // Так же надо добавить в стейт булевое значение touched - менялся ли уже инпут или нет
    // Чтобы при открытии страницы инпут не был инвалидным и не пугал юзера
    this.value = '';
  }

  handleInputChange = (value) => {
    this.value = value;
    this.props.getInputValue(value);
    console.log('isValid: ' + this.value.match(/^[a-z0-9-]+$/));
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
        console.log(user);
        // Удаляем ненужную проверку, так как если респонс со статусом 200, значит все ок
        // user.id ? this.props.showUser(user.id, user.name, user.avatar_url) : this.props.userNotFound()

        this.props.showUser(user.id, user.name, user.avatar_url);
      })
      .catch((error) => {
        // Передаем месагу ошибки в action creator
        this.props.userNotFound(error.message);
      });
  };

  render() {
    // onSubmit - сделать методом компонента

    // isValid у инпута будет зависеть еще и от значения touched
    // isValid можно хранить в стейте компонента, тогда не придется каждый раз вычислять,
    // а только в момент когда инпут изменился

    // Дублируется валидирование value - в Input и в Button, надо вынести в отдельную функцию, лучше за пределы компонента,
    // Поскольку проверка довольно типовая и может понадобится еще где-то
    return (
      <div className="App">
        <form className="search" onSubmit={(e) => { e.preventDefault(); return this.fetchData(this.value) }}>
          <Input
            onChange={this.handleInputChange}
            isValid={this.value.match(/^[a-z0-9-]+$/)}
          />
          <Button
            text="Submit"
            disabled={!this.value || this.value === '' || !this.value.match(/^[a-z0-9-]+$/)}
          />
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

// userId делаем числом, см. UserInfo.js
UserForm.propTypes = {
  login: PropTypes.string,
  userId: PropTypes.number,
  userName: PropTypes.string,
  userImg: PropTypes.string,
};

// Нужны defaultProps как в случае с Button.js

const mapStateToProps = (state) => {
  return {
    value: state.value,
    login: state.login,
    userId: state.userId,
    userName: state.userName,
    userImg: state.userImg,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInputValue: (value) => dispatch(getInputValue(value)),
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
