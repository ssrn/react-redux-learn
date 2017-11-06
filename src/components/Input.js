/**
 * Created by bookason on 20/06/17.
 */

//получает через props функцию onChange, value и placeholder

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { value, onChange, isValid } = this.props;
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={isValid ? "validated" : "error"}
      />
    );
  }
}

Input.propTypes = {
  isValid: PropTypes.bool,
};

Input.defaultProps = {
  isValid: true,
};
