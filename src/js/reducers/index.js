import { combineReducers } from 'redux';
import todos from './todos';

const reduxTodo = combineReducers({
  todos,
});

export default reduxTodo;
