/**
 * Created by bookason on 20/06/17.
 */

//получает через props функцию onChange, value и placeholder

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { isValid, onChange } = this.props;
    // 1. Value инпута должен приходить из props (https://facebook.github.io/react/docs/forms.html#controlled-components)
    // 2. onChange - должен быть методом класса, иначе в инпут всегда будет приходить новая стрелочная функция, следовательно будет перерисовка инпута
    // 3. Ref не нужен, новое значение инпута будет в event.target.value в коллбэке onChange
    //    Напиши, если непонятен смысл и логика работы ref
    // 4. Стиль передачи пропсов, см. коммент в Button.js
    return <input type="text" ref="text" onChange={() => onChange(this.refs.text.value)} className={isValid ? "validated" : "error"} />;
  }
}

Input.propTypes = {
  isValid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

// defaultProps как в Button.js
