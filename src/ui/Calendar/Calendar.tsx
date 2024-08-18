/* eslint-disable no-nested-ternary */
import './Calendar.css';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameMonth,
  startOfToday,
  endOfWeek,
  getDay,
  parse,
  add,
  startOfWeek,
  addDays,
} from 'date-fns';
import { pl, es, enGB } from 'date-fns/locale';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useGlobal from '../../hooks/useGlobal';
import getAllBookedDates from '../../services/apiCalendar';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LOCALS from '../../lib/i18n/constants';

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];

function Calendar() {
  const {
    isPending,
    error,
    data: bookedDates,
  } = useQuery({
    queryKey: ['bookedDates'],
    queryFn: getAllBookedDates,
  });
  const { t, currLang } = useGlobal()!;

  const lang = currLang === LOCALS.PL ? pl : currLang === LOCALS.SP ? es : enGB;

  const today = startOfToday();
  const [currMonth, setCurrMonth] = useState(format(today, 'MMM-yyyy'));
  const firstDayCurrentMonth = parse(currMonth, 'MMM-yyyy', new Date());
  const newDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  function prevMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }
  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  return (
    <>
      {isPending && <Loader />}
      {error && <ErrorMessage errorMessage={error.message} />}
      {bookedDates && (
        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col rounded-xl border border-gray-200">
            <div className="flex items-center justify-between px-6 pb-2 pt-6">
              <p className="text-2xl font-medium text-dark dark:text-white">
                {format(firstDayCurrentMonth, 'MMMM yyyy', {
                  locale: lang,
                })}
              </p>
              <div className="flex items-center justify-center space-x-6">
                <button
                  onClick={prevMonth}
                  className="inline-flex items-center"
                  type="button"
                >
                  <ChevronLeftIcon className="h-8 w-8 cursor-pointer rounded-full p-1 text-dark transition duration-300 hover:bg-lightGrayish dark:text-white hover:dark:bg-dark" />
                  <span className="sr-only">{t('contacts.calendar.prev')}</span>
                </button>
                <button
                  onClick={nextMonth}
                  className="inline-flex items-center"
                  type="button"
                >
                  <ChevronRightIcon className="h-8 w-8 cursor-pointer rounded-full p-1 text-dark transition duration-300 hover:bg-lightGrayish dark:text-white hover:dark:bg-dark" />
                  <span className="sr-only">{t('contacts.calendar.next')}</span>
                </button>
              </div>
            </div>

            <div id="calendar-body" className="p-5">
              <ul className="flex justify-around text-center font-medium text-lightDark dark:text-gray-300">
                {Array.from({ length: 7 }, (_, i) => (
                  <li key={i}>
                    {format(
                      addDays(startOfWeek(firstDayCurrentMonth), i),
                      'E',
                      { locale: lang }
                    )}
                  </li>
                ))}
              </ul>
              <ul className="calendarDaysList mb-5 mt-8 grid grid-cols-7 gap-4 text-center [&>li]:px-2 [&>li]:py-1">
                {newDays.map((day, i) => (
                  <li
                    className={`${i === 0 && colStartClasses[getDay(day)]} ${
                      isSameMonth(day, firstDayCurrentMonth)
                        ? 'valid relative z-20 cursor-pointer text-dark transition duration-300 dark:text-white'
                        : 'cursor-not-allowed text-gray-400'
                    }`}
                    key={day.toString()}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Calendar;
