import { useContext } from 'react';
import { VicinityContext } from '../context/VIcinityContext';

export default function useVicinity() {
  const context = useContext(VicinityContext);

  if (context === undefined)
    throw new Error('VicinityContext was used outside of VicinityProvider');

  return context;
}
