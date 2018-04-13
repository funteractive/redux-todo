import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

class TodoList extends React.Component {
  componentWillMount() {
    this.props.asyncFetchTodos();
  }

  render() {
    return (
      <div>
        <h1>New</h1>
        <ul>
          {this.props.new_todos.map(
            (todo, key) => (
              <Todo key={key.toString()} {...todo} />
            ),
          )}
        </ul>
        <h1>Done</h1>
        <ul>
          {this.props.done_todos.map(
            (todo, key) => (
              <Todo key={key.toString()} {...todo} />
            ),
          )}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  asyncFetchTodos: PropTypes.func.isRequired,
  new_todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  done_todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TodoList;
