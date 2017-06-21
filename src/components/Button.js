/**
 * Created by bookason on 16/06/17.
 */

// получает через props функцию onClick и текст кнопки

import React, { Component  } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return <input className="btn" type="submit" value={ this.props.value } />;
  }
}

// const Lookup = ({ onSubmit }) => (
//   <form>
//     <input type="text" ref="login" value="" />
//     <button className="btn btn-primary" onClick={() => onSubmit(this.refs.login.value) }>Submit</button>
//   </form>
// );
//
// Lookup.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

Button.propTypes = {
  value: PropTypes.string.isRequired,
};


export default Button;