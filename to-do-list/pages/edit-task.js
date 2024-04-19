import React, { useState } from 'react';
import { useRouter } from 'next/router';

const EditTask = () => {
  const router = useRouter();
  const { id } = router.query; // Obtém o índice da tarefa da query string

  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Atualiza o nome da tarefa no array de tarefas
    tasks[id] = taskName;

    // Salva o array de tarefas atualizado no localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Redireciona de volta para a página inicial
    router.push('/');
  };

  return (
    <div>
      <h2>Editar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Novo Nome da Tarefa:
          <input
            type="text"
            value={taskName}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditTask;
