import Api from './Api';
import BookedDate from '../types/BookedDate';

const getAllBookedDates = async () => {
  const res = await fetch(`${Api.URL}bookedDates`);
  if (!res.ok) throw new Error('Something went wrong during data fetching!');

  const { data } = (await res.json()) as {
    status: string;
    data: {
      bookedDates: BookedDate[];
    };
  };

  return data.bookedDates;
};

export default getAllBookedDates;
