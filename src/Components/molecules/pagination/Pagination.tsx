import React from 'react';
import styles from './Pagination.module.scss';

const Pagination: React.FC = () => {
  return (
    <div className={styles.paginationContainer}>
      <button className={styles.pageButton}>&lt;</button>
      <button className={`${styles.pageButton} ${styles.active}`}>1</button>
      <button className={styles.pageButton}>2</button>
      <button className={styles.pageButton}>3</button>
      <button className={styles.pageButton}>4</button>
      <button className={styles.pageButton}>5</button>
      <button className={styles.pageButton}>&gt;</button>
    </div>
  );
};

export default Pagination;
