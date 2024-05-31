import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './Dropdown.module.scss';
import { FaStore } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

interface DropdownProps {
  label: string;
  items: { label: string; onClick: () => void }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>
        <FaStore className={styles.icon} />
        <span className={styles.label}>{label}</span>
        <IoMdArrowDropdown className={styles.icon} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={styles.content}>
        {items.map((item, index) => (
          <DropdownMenu.Item
            key={index}
            className={styles.item}
            onSelect={item.onClick}
          >
            {item.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
