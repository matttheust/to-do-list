// components/Title.js
import React from 'react';
import styles from '../styles/Title.module.css'; // Importa os estilos CSS

const Title = ({ tasksCompleted, totalTasks }) => {
  return (
    <div className={styles.titleContainer}>
      <h1>Task</h1>
      <h1>List</h1>
    </div>
  );
};

export default Title;
