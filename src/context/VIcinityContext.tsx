import { createContext, useCallback, useReducer } from 'react';
import Children from '../types/Children';
import { VicinityPlace } from '../types/VcinityPlace';
import Api from '../lib/Api';
import { REDUCER_ACTION_TYPE, REDUCER_STATE_STATUS } from '../types/reducer';

/* Reducer */
type Action =
  | { type: REDUCER_ACTION_TYPE.DATA_FETCHING }
  | { type: REDUCER_ACTION_TYPE.DATA_FAILED; payload: string }
  | { type: REDUCER_ACTION_TYPE.DATA_RECEIVED; payload: VicinityPlace }
  | { type: REDUCER_ACTION_TYPE.ALL_DATA_RECEIVED; payload: VicinityPlace[] };
type State = {
  status: REDUCER_STATE_STATUS;
  errorMessage: string;
  vicinityPlaces: VicinityPlace[];
  currPlace: Partial<VicinityPlace>;
};

const initState: State = {
  status: REDUCER_STATE_STATUS.START,
  vicinityPlaces: [],
  currPlace: {},
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
        currPlace: action.payload,
      };

    case REDUCER_ACTION_TYPE.ALL_DATA_RECEIVED:
      return {
        ...state,
        status: REDUCER_STATE_STATUS.READY,
        vicinityPlaces: action.payload,
      };
    default:
      throw new Error('Unkown action');
  }
}

/* Context */

type VicinityContextProps = {
  status: REDUCER_STATE_STATUS;
  errorMessage: string;
  currPlace: Partial<VicinityPlace>;
  vicinityPlaces: VicinityPlace[];
  getPlace: (id: string) => Promise<void>;
  getAllPlaces: (url?: string) => Promise<void>;
};

export const VicinityContext = createContext<VicinityContextProps | null>(null);

/* Provider */

export default function VicinityProvider({ children }: Children) {
  const [{ status, errorMessage, currPlace, vicinityPlaces }, dispatch] =
    useReducer(reducer, initState);

  const getPlace = useCallback(async function getPlace(id: string) {
    try {
      dispatch({ type: REDUCER_ACTION_TYPE.DATA_FETCHING });

      const res = await fetch(`${Api.URL}vicinity/${id}`);
      if (!res.ok) throw new Error('Something went wrong. Please try later!');

      const { data } = (await res.json()) as {
        status: string;
        data: {
          vicinityPlace: VicinityPlace;
        };
      };

      dispatch({
        type: REDUCER_ACTION_TYPE.DATA_RECEIVED,
        payload: data.vicinityPlace,
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

  const getAllPlaces = useCallback(async function getAllPlaces(url?: string) {
    try {
      dispatch({ type: REDUCER_ACTION_TYPE.DATA_FETCHING });

      const res = await fetch(`${Api.URL}vicinity${url}`);
      if (!res.ok) throw new Error('Something went wrong. Please try later!');

      const { data } = (await res.json()) as {
        status: string;
        data: {
          vicinityPlaces: VicinityPlace[];
        };
      };

      dispatch({
        type: REDUCER_ACTION_TYPE.ALL_DATA_RECEIVED,
        payload: data.vicinityPlaces,
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
    <VicinityContext.Provider
      value={{
        status,
        errorMessage,
        currPlace,
        vicinityPlaces,
        getPlace,
        getAllPlaces,
      }}
    >
      {children}
    </VicinityContext.Provider>
  );
}
