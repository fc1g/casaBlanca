import { create } from 'zustand';
import STORE_STATE_STATUS from '../types/STORE_STATUS';
import { VicinityPlace } from '../types/VcinityPlace';
import Api from '../lib/Api';

type State = {
  status: STORE_STATE_STATUS;
  errorMessage: string;
  currPlace: Partial<VicinityPlace>;
  vicinityPlaces: VicinityPlace[];
};
type Action = {
  getPlace: (id: string) => Promise<void>;
  getAllPlaces: (url?: string) => Promise<void>;
};

const useVicinity = create<State & Action>()(set => ({
  status: STORE_STATE_STATUS.START,
  errorMessage: '',
  currPlace: {},
  vicinityPlaces: [],
  getPlace: async id => {
    try {
      set({ status: STORE_STATE_STATUS.LOADING });

      const res = await fetch(`${Api.URL}vicinity/${id}`);
      if (!res.ok) throw new Error('Something went wrong. Please try later!');

      const { data } = (await res.json()) as {
        status: string;
        data: {
          vicinityPlace: VicinityPlace;
        };
      };

      set({ status: STORE_STATE_STATUS.READY, currPlace: data.vicinityPlace });
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
  getAllPlaces: async url => {
    try {
      set({ status: STORE_STATE_STATUS.LOADING });

      const res = await fetch(`${Api.URL}vicinity${url}`);
      if (!res.ok) throw new Error('Something went wrong. Please try later!');

      const { data } = (await res.json()) as {
        status: string;
        data: {
          vicinityPlaces: VicinityPlace[];
        };
      };

      set({
        status: STORE_STATE_STATUS.READY,
        vicinityPlaces: data.vicinityPlaces,
      });
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
}));

export default useVicinity;
