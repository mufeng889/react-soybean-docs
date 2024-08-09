import { createContext, useContext } from 'react';

export const DarkContext = createContext(false);

export default function useDark() {
  return useContext(DarkContext);
}
