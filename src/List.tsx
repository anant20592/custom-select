import { createRef, FC, useEffect, useRef } from 'react';
import { OptionI } from './Select';

export interface ListProps {
  onChange?: (item: OptionI) => void;
  list: Array<OptionI>;
}
const List: FC<ListProps> = ({ onChange, list }: ListProps) => {
  const handeChange = (selectedItem: OptionI) => {
    onChange?.(selectedItem);
  };

  const ref = useRef(null);
 // console.log(ref.current?.focus())
  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    console.log(e.target)
  }
  return (
    <ul style={{ border: '1px solid #ccc', cursor: 'pointer' }} role={'list'} onKeyDown={handleKeyDown}>
      {list?.map((item) => (
        <li
          tabIndex={0}
          value={item.value}
          key={item.value}
          onClick={() => handeChange(item)}
          role="button"
          aria-pressed={false}
          id={`li_${item.value}`}
          ref={ref}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default List;
