import { FC } from 'react';
import { SelectContextProvider } from './Context';
import Select from './Select';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const handleChange = (selectedOption: string) => {
    console.log('Selected option - ', selectedOption);
  };
  return (
    <div>
      <SelectContextProvider>
        <Select
          options={[
            { label: 'Please select', value: '' },
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two' },
            { label: 'Three', value: 'three' },
          ]}
          value={'one'}
          onChange={(item: string) => handleChange(item)}
        />
      </SelectContextProvider>
    </div>
  );
};
