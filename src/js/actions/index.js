import axios from 'axios';

export const fetchTodos = todos => ({
  type: 'FETCH_TODOS',
  todos,
});

// eslint-disable-next-line
export const asyncFetchTodos = () => {
  return (dispatch) => {
    axios.get('/assets/json/todos.json')
      .then((response) => {
        dispatch(fetchTodos(response.data.todos));
      })
      .catch(() => ({}));
  };
};
