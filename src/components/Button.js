/**
 * Created by bookason on 16/06/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    console.log('disabled: ' + this.props.disabled);
    return (
      <button
        className="btn"
        type="submit"
        disabled={this.props.disabled}
      >Submit</button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: true,
};
