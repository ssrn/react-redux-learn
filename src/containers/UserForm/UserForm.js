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
  // Тоже самое, что и на 39 строке, но в другом стиле
  // Разницы по сути никакой, но в ивентифае используется такой стиль, поэтому к нему лучше привыкать
  // constructor(props) {
  //   super(props);
  //
  //   this.value = '';
  // }

  constructor(props) {
    super(props);
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
        user.id ? this.props.showUser(user.id, user.name, user.avatar_url) : this.props.userNotFound()
      })
      .catch((error) => {
        this.props.userNotFound();
      });
  };

  // Инициализация статических переменных класса должны быть в начале класса или после конструктора, если он есть
  // value лучше хранить в стейте компонента, иначе может случится ситуация когда value меняется, но компонент не перерендеривается
  // value = '';

  render() {
    return (
      <div className="App">
        <form className="search" onSubmit={(e) => { e.preventDefault(); return this.fetchData(this.value) }}>
          <Input
            // лучше назвать просто value, из названия компонента понятно что value для инпута
            // value={this.props.login}
            // Такие функции onChange={(value) => { this.value = value; }} надо описывать как методы класса, иначе при каждом рендере компонента
            // создается новая стрелочная функция и реакт считает, что пропсы изменились и надо перерендерить компонент
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

// Всегда нужно определять propTypes, если вдруг в компонент будут переданы невалидные данные, реакт кинет ворнинг в консоль
UserForm.propTypes = {
  login: PropTypes.string,
  userId: PropTypes.string,
  userName: PropTypes.string,
  userImg: PropTypes.string,
};

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
    userNotFound: () => dispatch(fetchUserFail()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)