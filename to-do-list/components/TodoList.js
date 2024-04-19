import React from 'react';
import Link from 'next/link';

const TodoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <Link href={`/edit-task?id=${index}`} passHref legacyBehavior>
            <a>Editar</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
