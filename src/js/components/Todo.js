import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => (
  <li>
    <label htmlFor="hoge">
      <input type="checkbox" checked={props.completed} />
      {props.text}
    </label>
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
