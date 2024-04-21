// components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css';
import foto from '../public/images/images.jpeg'; 

const Header = () => {
  const today = new Date();
  const dayOfWeek = today.toLocaleDateString('pt-BR', { weekday: 'long' });
  const formattedDate = today.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' }) + ' ' + today.getFullYear();

  return (
    <header className={styles.container}>
      <div>
        {/* Exibir o dia da semana com a classe específica */}
        <p className={styles.dayOfWeek}>{dayOfWeek}</p>
        {/* Exibir a data do sistema embaixo */}
        <p className={styles.date}>{formattedDate}</p>
      </div>
      {/* Div para conter a imagem 
      <div className={styles.imageContainer}>
         Imagem dentro da div 
        <img src={foto} alt="foto" />
      </div> */}
    </header>
  );
};

export default Header;
