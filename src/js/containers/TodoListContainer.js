import { connect } from 'react-redux';
import { fetchTodos } from '../actions';

import TodoList from '../components/TodoList';

const filter = (todos, isCompleted = true) => {
  if (isCompleted) return todos.filter(t => t.completed);
  return todos.filter(t => !t.completed);
};

const mapStateToProps = state => ({
  todos: state.todos,
  new_todos: filter(state.todos, false),
  done_todos: filter(state.todos, true),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: todos => dispatch(fetchTodos(todos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
