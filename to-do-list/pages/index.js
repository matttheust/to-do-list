import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import CreateTaskButton from '../components/CreateTaskButton';
import Link from 'next/link';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    } else {
      setTasks(['Tarefa 1', 'Tarefa 2', 'Tarefa 3']);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TodoList tasks={tasks} />
      <Link href="/add-task">
        <CreateTaskButton />
      </Link>
    </div>
  );
};

export default Home;
