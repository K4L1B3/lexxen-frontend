import React from 'react';
import {TableRow} from '../../molecules/table-row/index';
import styles from './Table.module.scss';

interface TableProps {
  rows: {
    name: string;
    description: string;
    date: string;
    tag: { text: string; color: string };
    isActive: boolean;
    onToggle: () => void;
  }[];
}

const Table: React.FC<TableProps> = ({ rows }) => {
  
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Tag</th>
            <th>Ativo</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              name={row.name}
              description={row.description}
              date={row.date}
              tag={row.tag}
              isActive={row.isActive}
              onToggle={row.onToggle}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
