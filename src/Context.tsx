import { createContext, useReducer } from 'react';
interface SelectContextType {
  open: boolean;
  selectedItem: { label: string; value: string | number } | null;
}
interface SelectContextActionType {
  payload: SelectContextType;
  type: string;
}
const initialTasks: SelectContextType = {
  open: true,
  selectedItem: null,
};
export const SelectContext = createContext<SelectContextType>(null);
export const SelectDispatchContext = createContext(null);

export function SelectContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <SelectContext.Provider value={tasks}>
      <SelectDispatchContext.Provider value={dispatch}>
        {children}
      </SelectDispatchContext.Provider>
    </SelectContext.Provider>
  );
}
function tasksReducer(
  state: SelectContextType,
  action: SelectContextActionType
) {
  console.log('SSSS- ', action);
  switch (action.type) {
    case 'OPEN_DROPDOWN': {
      return { ...state, open: action.payload.open };
    }
    case 'CLOSE_DROPDOWN': {
      return { ...state, open: false };
    }
    default:
      return state;
  }
}
