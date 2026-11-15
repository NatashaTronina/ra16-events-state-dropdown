import { useState } from 'react';
import DropdownList from './DropdownList';

interface DropdownProps {
  items: string[];
}

function Dropdown({ items }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={open ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
      <button type="button" className="btn" onClick={() => setOpen(!open)}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList items={items} />
    </div>
  );
}

export default Dropdown;
