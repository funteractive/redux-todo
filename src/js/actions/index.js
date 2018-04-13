// eslint-disable-next-line
export const fetchTodos = (data) => {
  const todos = data.todos ? data.todos : [];
  return ({
    type: 'FETCH_TODOS',
    todos,
  });
};
