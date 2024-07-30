import { create } from 'zustand';
import BookedDate from '../types/BookedDate';
import Api from '../lib/Api';
import config from '../utils/config';
import STORE_STATE_STATUS from '../types/STORE_STATUS';

type State = {
  status: STORE_STATE_STATUS;
  errorMessage: string;
  currMonth: number;
  currYear: number;
  firstDayofMonth: number;
  lastDateofMonth: number;
  lastDateofLastMonth: number;
  bookedDates: BookedDate[];
};
type Action = {
  getAllDates: () => Promise<void>;
  prevBtnHandler: () => void;
  nextBtnHandler: () => void;
};

const useCalendar = create<State & Action>()(set => ({
  status: STORE_STATE_STATUS.START,
  errorMessage: '',
  currMonth: config.CUR_DATE.getMonth(),
  currYear: config.CUR_DATE.getFullYear(),
  firstDayofMonth: new Date(
    config.CUR_DATE.getFullYear(),
    config.CUR_DATE.getMonth(),
    1
  ).getDay(),
  lastDateofMonth: new Date(
    config.CUR_DATE.getFullYear(),
    config.CUR_DATE.getMonth() + 1,
    0
  ).getDate(),
  lastDateofLastMonth: new Date(
    config.CUR_DATE.getFullYear(),
    config.CUR_DATE.getMonth(),
    0
  ).getDate(),
  bookedDates: [],
  getAllDates: async () => {
    try {
      set({ status: STORE_STATE_STATUS.LOADING });

      const res = await fetch(`${Api.URL}bookedDates`);
      if (!res.ok) throw new Error('Something went wrong. Please try later!');

      const { data } = (await res.json()) as {
        status: string;
        data: {
          bookedDates: BookedDate[];
        };
      };

      set({ status: STORE_STATE_STATUS.READY, bookedDates: data.bookedDates });
    } catch (err) {
      set({
        status: STORE_STATE_STATUS.ERROR,
        errorMessage:
          err instanceof Error
            ? err.message
            : 'Failed to retrieve data from the server',
      });
    }
  },
  prevBtnHandler: () =>
    set(state => ({
      currMonth: new Date(state.currYear, state.currMonth - 1).getMonth(),
      currYear: new Date(state.currYear, state.currMonth + 1).getFullYear(),
    })),
  nextBtnHandler: () =>
    set(state => ({
      currMonth: new Date(state.currYear, state.currMonth + 1).getMonth(),
      currYear: new Date(state.currYear, state.currMonth + 1).getFullYear(),
    })),
}));

export default useCalendar;
