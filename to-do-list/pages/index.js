// pages/index.js
import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import CreateTaskButton from '../components/CreateTaskButton';
import Header from '../components/Header';
import Title from '../components/Title';
import Link from 'next/link';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    } else {
      setTasks(['Tarefa 1', 'Tarefa 2', 'Tarefa 3']); //Usa esses nomes de padrão, caso não haja itens na lista
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Função para contar o número de tarefas marcadas
  const countCompletedTasks = () => {
    return tasks.filter(task => task.completed).length;
  };

  return (
    <div>
      <Header />
      <Title tasksCompleted={countCompletedTasks()} totalTasks={tasks.length} />
      <TodoList tasks={tasks} />
      <Link href="/add-task">
        <CreateTaskButton />
      </Link>
    </div>
  );
};

export default Home;
