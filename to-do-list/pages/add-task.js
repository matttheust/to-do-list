import React, { useState } from 'react';
import { useRouter } from 'next/router';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = [...tasks, taskName];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    router.push('/');
  };

  return (
    <div>
      <h2>Adicionar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Tarefa:
          <input
            type="text"
            value={taskName}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
};

export default AddTask;
