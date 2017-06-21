/**
 * Created by bookason on 20/06/17.
 */

//получает через props функцию onChange, value и placeholder

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { inputValue, onChange } = this.props;
    return <input type="text" value={inputValue} onChange={onChange} />;
  }
}

Input.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
