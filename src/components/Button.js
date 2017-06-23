/**
 * Created by bookason on 16/06/17.
 */

// получает через props функцию onClick и текст кнопки

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    return <input className="btn" type="submit" value={this.props.text} disabled={this.props.disabled} />;
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};