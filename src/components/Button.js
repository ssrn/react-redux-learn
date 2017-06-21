/**
 * Created by bookason on 16/06/17.
 */

// получает через props функцию onClick и текст кнопки

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return <input className="btn" type="submit" value={this.props.text} />;
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};


export default Button;