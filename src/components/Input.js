/**
 * Created by bookason on 20/06/17.
 */

//получает через props функцию onChange, value и placeholder

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { isValid, onChange } = this.props;
    return <input type="text" ref="text" onChange={() => onChange(this.refs.text.value)} className={isValid ? "validated" : "error"} />;
  }
}

Input.propTypes = {
  isValid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
