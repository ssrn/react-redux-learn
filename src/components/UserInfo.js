/**
 * Created by bookason on 16/06/17.
 */

//рендерит аватар и имя, если нету сообщение об отсутсвии

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Из названия метода renderUserInfo непонятно что будет выведено,
// потому что компонент называется UserInfo, значит renderUserInfo должен быть в методе render.
// Логичнее назвать renderNameWithImage, "user" в названии не нужен, из названия компонента это понятно

// 1. Немного сложные условия в renderUserInfo, метод сразу не читается
// 2. В проп userId должен передаваться либо id, либо ничего,
//    передача состояния (error) в проп с id запутывает код, лучше сделать под это отдельный булевый проп 'error'

// Отрефакторил, чтобы было наглядно

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

    // userId лучше сделать числом,
    // чтобы исключить лишние проверки (например на пустую строку) и преобразования типов
    // К тому же с api github'a userId приходит числом

    // Если id валидный - рендерим инфу, иначе возвращаем null

    // В случае, когда ничего не надо рендерить, стоит возвращать null (не пустую строку)
    // Это семантичнее и исключает лишние проверки на уровне js движка
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
