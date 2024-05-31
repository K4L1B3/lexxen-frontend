import React from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  text: string;
  color: string;
}

const Tag: React.FC<TagProps> = ({ text, color }) => {
  return (
    <span className={styles.tag} style={{ backgroundColor: color }}>
      {text}
    </span>
  );
};

export default Tag;
