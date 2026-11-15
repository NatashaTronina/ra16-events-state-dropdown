import type { CSSProperties } from 'react';

interface DropdownItemProps {
  label: string;
  active: boolean;
  onSelect: () => void;
}

const activeStyle: CSSProperties = { color: '#5380F7', fontWeight: 700 };

function DropdownItem({ label, active, onSelect }: DropdownItemProps) {
  return (
    <li style={active ? activeStyle : undefined}>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onSelect();
        }}
      >
        {label}
      </a>
    </li>
  );
}

export default DropdownItem;
