import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import {
  SelectContext,
  SelectContextProvider,
  SelectDispatchContext,
} from './Context';
import List from './List';

export interface OptionI {
  value: string | number;
  label: string;
}
export interface SelectProps {
  value?: string;
  onChange?: (item: string) => void;
  isMulti?: boolean;
  width?: 'auto' | 'sm' | 'md' | 'lg';
  options: Array<OptionI>;
}

const Select: FC<SelectProps> = ({
  value = '',
  onChange,
  width = 'auto',
  options,
  isMulti = false,
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [val, setVal] = useState<OptionI>();
  const handleChange = (item: any) => {
    setVal(item);
    dispatch({ type: 'CLOSE_DROPDOWN' });
  };

  const dispatch = useContext(SelectDispatchContext);
  const selectcontext = useContext(SelectContext);

  useEffect(() => {
    options.forEach((option) => {
      if (option.value === value) {
        setVal(option);
      }
    });
  }, [options.length]);
  useEffect(() => {
    // list.forEach((item, indx) => {
    if (selectcontext?.open)
      document.getElementById(`li_${options[0].value}`).focus();
    //})
  }, [selectcontext?.open]);

  return (
    <div>
      <div
        style={{ border: '1px solid #ccc', position: 'relative' }}
        onClick={() =>
          dispatch({
            type: 'OPEN_DROPDOWN',
            payload: { open: !selectcontext?.open },
          })
        }
        role={'button'}
        tabIndex={0}
      >
        {val?.label}
      </div>
      {selectcontext?.open && (
        <div style={{ position: 'absolute', width: 'inherited' }}>
          <List
            list={options}
            onChange={(item: OptionI) => handleChange(item)}
          />
        </div>
      )}
    </div>
  );
};

export default Select;
