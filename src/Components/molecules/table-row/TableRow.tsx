import React from 'react';
import {Tag} from '../../atoms/tag/index';
import {ToggleSwitch} from '../../atoms/ToggleSwitch/index';
import { FaPen, FaEllipsisV } from 'react-icons/fa';
import styles from './TableRow.module.scss';

interface TableRowProps {
  name: string;
  description: string;
  date: string;
  tag: { text: string; color: string };
  isActive: boolean;
  onToggle: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ name, description, date, tag, isActive, onToggle }) => {
  return (
    <tr className={styles.tableRow}>
      <td>
        <div className={styles.productInfo}>
          <img src="https://via.placeholder.com/50" alt={name} className={styles.productImage} />
          <div>
            <div>{name}</div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </td>
      <td>{date}</td>
      <td><Tag text={tag.text} color={tag.color} /></td>
      <td><ToggleSwitch checked={isActive} onChange={onToggle} /></td>
      <td>
        <div className={styles.actions}>
          <FaPen className={styles.icon} />
          <FaEllipsisV className={styles.icon} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
