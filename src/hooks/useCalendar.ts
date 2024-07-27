import { useContext } from 'react';
import { CalendarContext } from '../context/CalendarContext';

export default function useCalendar() {
  const context = useContext(CalendarContext);

  if (context === undefined)
    throw new Error('CalendarContext was used outside of CalendarProvider');

  return context;
}
