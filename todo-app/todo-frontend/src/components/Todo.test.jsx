import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders todo text and status', () => {
  const todo = { text: 'Test todo', done: false };
  render(<Todo todo={todo} />);
  expect(screen.getByText('Test todo')).toBeInTheDocument();
  expect(screen.getByText('Not Done')).toBeInTheDocument();
});