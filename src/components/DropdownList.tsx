import { useState } from 'react';
import DropdownItem from './DropdownItem';

interface DropdownListProps {
  items: string[];
}

function DropdownList({ items }: DropdownListProps) {
  const [selected, setSelected] = useState(items[0]);

  return (
    <ul className="dropdown">
      {items.map((item) => (
        <DropdownItem key={item} label={item} active={item === selected} onSelect={() => setSelected(item)} />
      ))}
    </ul>
  );
}

export default DropdownList;
