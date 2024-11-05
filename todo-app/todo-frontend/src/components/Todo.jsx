import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <p>{todo.text}</p>
      <p>{todo.done ? 'Done' : 'Not Done'}</p>
    </div>
  );
};

export default Todo;