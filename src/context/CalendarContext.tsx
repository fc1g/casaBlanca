import { createContext, useCallback, useReducer, useState } from 'react';
import Children from '../types/Children';
import BookedDate from '../types/BookedDate';
import { REDUCER_ACTION_TYPE, REDUCER_STATE_STATUS } from '../types/reducer';
import Api from '../lib/Api';
import config from '../utils/config';

/* Reducer */
type Action =
  | { type: REDUCER_ACTION_TYPE.DATA_FETCHING }
  | { type: REDUCER_ACTION_TYPE.DATA_FAILED; payload: string }
  | { type: REDUCER_ACTION_TYPE.DATA_RECEIVED; payload: BookedDate }
  | { type: REDUCER_ACTION_TYPE.ALL_DATA_RECEIVED; payload: BookedDate[] };
type State = {
  status: REDUCER_STATE_STATUS;
  errorMessage: string;
  bookedDates: BookedDate[];
  currDate: Partial<BookedDate>;
};

const initState: State = {
  status: REDUCER_STATE_STATUS.START,
  bookedDates: [],
  currDate: {},
  errorMessage: '',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.DATA_FETCHING:
      return { ...state, status: REDUCER_STATE_STATUS.LOADING };

    case REDUCER_ACTION_TYPE.DATA_FAILED:
      return {
        ...state,
        status: REDUCER_STATE_STATUS.ERROR,
        errorMessage: action.payload,
      };

    case REDUCER_ACTION_TYPE.DATA_RECEIVED:
      return {
        ...state,
        status: REDUCER_STATE_STATUS.READY,
        currDate: action.payload,
      };

    case REDUCER_ACTION_TYPE.ALL_DATA_RECEIVED:
      return {
        ...state,
        status: REDUCER_STATE_STATUS.READY,
        bookedDates: action.payload,
      };
    default:
      throw new Error('Unkown action');
  }
}

/* Context */

type CalendarContextProps = {
  status: REDUCER_STATE_STATUS;
  errorMessage: string;
  bookedDates: BookedDate[];
  getAllDates: () => Promise<void>;
  getDate: (id: string) => Promise<void>;
  prevBtnHandler: () => void;
  nextBtnHandler: () => void;
  firstDayofMonth: number;
  lastDateofMonth: number;
  lastDateofLastMonth: number;
  month: string;
  currYear: number;
  currMonth: number;
};

export const CalendarContext = createContext<CalendarContextProps | null>(null);

/* Provider */

export default function CalendarProvider({ children }: Children) {
  const [{ status, errorMessage, bookedDates }, dispatch] = useReducer(
    reducer,
    initState
  );

  const [currMonth, setCurrMonth] = useState(config.CUR_DATE.getMonth());
  const [currYear, setCurrYear] = useState(config.CUR_DATE.getFullYear());

  const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  const month = config.MONTHS[currMonth].toLowerCase();

  function prevBtnHandler() {
    setCurrMonth(new Date(currYear, currMonth - 1).getMonth());
    setCurrYear(new Date(currYear, currMonth - 1).getFullYear());
  }

  function nextBtnHandler() {
    setCurrMonth(new Date(currYear, currMonth + 1).getMonth());
    setCurrYear(new Date(currYear, currMonth + 1).getFullYear());
  }

  const getAllDates = useCallback(async function getAllDates() {
    try {
      dispatch({ type: REDUCER_ACTION_TYPE.DATA_FETCHING });

      const res = await fetch(`${Api.URL}bookedDates`);
      if (!res.ok) throw new Error('Something went wrong. Please try later!');

      const { data } = (await res.json()) as {
        status: string;
        data: {
          bookedDates: BookedDate[];
        };
      };

      dispatch({
        type: REDUCER_ACTION_TYPE.ALL_DATA_RECEIVED,
        payload: data.bookedDates,
      });
    } catch (err) {
      dispatch({
        type: REDUCER_ACTION_TYPE.DATA_FAILED,
        payload:
          err instanceof Error
            ? err.message
            : 'Failed to retrieve data from the server',
      });
    }
  }, []);

  const getDate = useCallback(async function getDate(id: string) {
    try {
      dispatch({ type: REDUCER_ACTION_TYPE.DATA_FETCHING });

      const res = await fetch(`${Api.URL}bookedDates/${id}`);
      if (!res.ok) throw new Error('Something went wrong. Please try later!');

      const { data } = (await res.json()) as {
        status: string;
        data: {
          bookedDate: BookedDate;
        };
      };

      dispatch({
        type: REDUCER_ACTION_TYPE.DATA_RECEIVED,
        payload: data.bookedDate,
      });
    } catch (err) {
      dispatch({
        type: REDUCER_ACTION_TYPE.DATA_FAILED,
        payload:
          err instanceof Error
            ? err.message
            : 'Failed to retrieve data from the server',
      });
    }
  }, []);

  return (
    <CalendarContext.Provider
      value={{
        status,
        errorMessage,
        bookedDates,
        getAllDates,
        getDate,
        prevBtnHandler,
        nextBtnHandler,
        firstDayofMonth,
        lastDateofMonth,
        lastDateofLastMonth,
        month,
        currYear,
        currMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
