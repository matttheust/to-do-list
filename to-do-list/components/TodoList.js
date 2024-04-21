import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/TodoList.module.css'; // Importando os estilos CSS

const TodoList = ({ tasks }) => {
  const [checkedTasks, setCheckedTasks] = useState(new Array(tasks.length).fill(false));
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  // Atualiza o número de tarefas finalizadas sempre que o estado checkedTasks muda
  useEffect(() => {
    const completedCount = checkedTasks.filter(task => task).length;
    setTasksCompleted(completedCount);
  }, [checkedTasks]);

  // Função para lidar com a marcação/desmarcação de uma tarefa
  const handleTaskToggle = (index) => {
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[index] = !updatedCheckedTasks[index];
    setCheckedTasks(updatedCheckedTasks);

    const updatedSelectedTasks = [...selectedTasks];
    if (updatedCheckedTasks[index]) {
      updatedSelectedTasks.push(index);
    } else {
      const selectedIndex = updatedSelectedTasks.indexOf(index);
      if (selectedIndex !== -1) {
        updatedSelectedTasks.splice(selectedIndex, 1);
      }
    }
    setSelectedTasks(updatedSelectedTasks);
  };

  return (
    <div className={styles.taskContainer}> {/* Container pai */}
      <div>
      <p className={styles.taskStatus}>{`${tasksCompleted}/${tasks.length} tasks finalizadas`}</p>
        <ul className={styles.taskList}>
          {tasks.map((task, index) => (
            <li key={index} className={`${styles.task} ${selectedTasks.includes(index) ? styles.selectedTask : ''}`}>
              <input
                type="checkbox"
                checked={checkedTasks[index]}
                onChange={() => handleTaskToggle(index)}
              />
              <span className={styles.taskName}>{task}</span>
              <Link href={`/edit-task?id=${index}`} passHref>
                <span className={styles.taskArrow}><FontAwesomeIcon icon={faChevronRight} /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
