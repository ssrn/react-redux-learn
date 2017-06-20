/**
 * Created by bookason on 16/06/17.
 */

import React, { PropTypes } from 'react'

const Lookup = ({ onSubmit }) => (
  <form>
    <input type="text" ref="login" value="" />
    <button className="btn btn-primary" onClick={() => onSubmit(this.refs.login.value) }>Submit</button>
  </form>
);

Lookup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Lookup;