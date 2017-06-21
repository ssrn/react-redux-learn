/**
 * Created by bookason on 20/06/17.
 */

//получает через props функцию onChange, value и placeholder

import React, { Component  } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { value, onChange } = this.props;
    return <input type="text" value={value} onChange={onChange} />;
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
