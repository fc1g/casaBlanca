import { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

export default function useGlobal() {
  const context = useContext(GlobalContext);

  if (context === undefined)
    throw new Error('GlobalContext was used outside of GlobalProvider');

  return context;
}
