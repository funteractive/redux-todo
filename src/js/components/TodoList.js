import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Todo from './Todo';

// eslint-disable-next-line
class TodoList extends React.Component {
  componentWillMount() {
    if (this.props.todos.length === 0) {
      axios.get('/assets/json/todos.json')
        .then((response) => {
          console.log(response.data);
          this.props.fetchTodos(response.data);
        })
        .catch(() => ({}));
    }
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
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
  })).isRequired,
  new_todos: PropTypes.arrayOf().isRequired,
  done_todos: PropTypes.arrayOf().isRequired,
};

export default TodoList;
