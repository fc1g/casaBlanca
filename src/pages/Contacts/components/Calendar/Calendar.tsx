import './Calendar.css';
import { useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

/* Components */
import Loader from '../../../../components/Loader/Loader';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';

/* Hooks */
import useGlobal from '../../../../hooks/globalStore';
import useCalendar from '../../../../hooks/calendarStore';

import STORE_STATE_STATUS from '../../../../types/STORE_STATUS';
import config from '../../../../utils/config';

function Calendar() {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();
  const getAllDates = useCalendar(store => store.getAllDates);
  const status = useCalendar(store => store.status);
  const errorMessage = useCalendar(store => store.errorMessage);
  const bookedDates = useCalendar(store => store.bookedDates);
  const currYear = useCalendar(store => store.currYear);
  const currMonth = useCalendar(store => store.currMonth);
  const prevBtnHandler = useCalendar(store => store.prevBtnHandler);
  const nextBtnHandler = useCalendar(store => store.nextBtnHandler);
  const firstDayofMonth = useCalendar(store => store.firstDayofMonth);
  const lastDateofLastMonth = useCalendar(store => store.lastDateofLastMonth);
  const lastDateofMonth = useCalendar(store => store.lastDateofMonth);

  useEffect(() => {
    getAllDates();
  }, [getAllDates]);

  return (
    <>
      {status === STORE_STATE_STATUS.LOADING && <Loader />}
      {status === STORE_STATE_STATUS.ERROR && (
        <ErrorMessage errorMessage={errorMessage} />
      )}
      {status === STORE_STATE_STATUS.READY && bookedDates && (
        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col rounded-xl border border-gray-200">
            <div className="flex items-center justify-between px-6 pb-2 pt-6">
              <p className="text-2xl font-medium text-dark dark:text-white">
                {t(
                  `contacts.months.long.${config.MONTHS[currMonth].toLowerCase()}`
                )}{' '}
                {currYear}
              </p>
              <div className="flex items-center justify-center space-x-6">
                <button
                  onClick={prevBtnHandler}
                  className="inline-flex items-center"
                  type="button"
                >
                  <ChevronLeftIcon className="h-8 w-8 cursor-pointer rounded-full p-1 text-dark transition duration-300 hover:bg-lightGrayish dark:text-white hover:dark:bg-dark" />
                  <span className="sr-only">{t('contacts.calendar.prev')}</span>
                </button>
                <button
                  onClick={nextBtnHandler}
                  className="inline-flex items-center"
                  type="button"
                >
                  <ChevronRightIcon className="h-8 w-8 cursor-pointer rounded-full p-1 text-dark transition duration-300 hover:bg-lightGrayish dark:text-white hover:dark:bg-dark" />
                  <span className="sr-only">{t('contacts.calendar.next')}</span>
                </button>
              </div>
            </div>

            <div className="p-5">
              <ul className="flex justify-around text-center font-medium text-lightDark dark:text-gray-300">
                <li>{t('contacts.weeks.abbr.monday')}</li>
                <li>{t('contacts.weeks.abbr.tuesday')}</li>
                <li>{t('contacts.weeks.abbr.wednesday')}</li>
                <li>{t('contacts.weeks.abbr.thursday')}</li>
                <li>{t('contacts.weeks.abbr.friday')}</li>
                <li>{t('contacts.weeks.abbr.saturday')}</li>
                <li>{t('contacts.weeks.abbr.Sunday')}</li>
              </ul>

              <ul className="calendarDaysList mb-5 mt-8 grid grid-cols-7 gap-4 text-center [&>li]:px-2 [&>li]:py-1">
                {Array.from({ length: firstDayofMonth }, (_, i) => (
                  <li key={i} className="cursor-not-allowed text-gray-400">
                    {lastDateofLastMonth - (firstDayofMonth - i - 1)}
                  </li>
                ))}

                {Array.from({ length: lastDateofMonth }, (_, i) => {
                  return (
                    <li
                      className="relative z-20 cursor-pointer text-dark transition duration-300 dark:text-white"
                      key={i}
                    >
                      {i + 1}
                    </li>
                  );
                })}

                {Array.from(
                  { length: 42 - firstDayofMonth - lastDateofMonth },
                  (_, i) => (
                    <li key={i} className="cursor-not-allowed text-gray-400">
                      {i + 1}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Calendar;
