import Api from './Api';
import { Place, VicinityPlace } from '../types/VcinityPlace';

export const getPlace = async (id: string) => {
  const res = await fetch(`${Api.URL}vicinity/${id}`);

  if (!res.ok) throw new Error('Something went wrong during data fetching!');

  const { data } = (await res.json()) as {
    status: string;
    data: {
      vicinityPlace: Place;
    };
  };

  return data.vicinityPlace;
};

export const getAllPlaces = async (url: string) => {
  const res = await fetch(`${Api.URL}vicinity${url}`);
  if (!res.ok) throw new Error('Something went wrong during data fetching!');

  const {
    results,
    data: { vicinityPlaces: places },
  } = (await res.json()) as {
    status: string;
    results: number;
    data: {
      vicinityPlaces: VicinityPlace[];
    };
  };

  return { results, places };
};
