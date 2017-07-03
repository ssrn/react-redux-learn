/**
 * Created by bookason on 16/06/17.
 */

// получает через props функцию onClick и текст кнопки

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    // 1. Button лучше написать через тег button, либо дать возможность задавать тэг через props

    // 2. Если много пропсов в теге, стоит переносить каждый на новою строку
    //
    // ! Важно не смешивать стили написания пропсов, иначе будет каша
    //
    // Так не правильно:
    // return (
    //   <input className="btn"
    //     type="submit"
    //     value={this.props.text}
    //     disabled={this.props.disabled} />
    // );
    return (
      <input
        className="btn"
        type="submit"
        value={this.props.text}
        disabled={this.props.disabled}
      />
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

// Для необязательных пропсов (disabled) желательно определять значения по-умолчанию через defaultProps
// Button.defaultProps = { ....
