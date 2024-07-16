import { useEffect, useState } from 'react';
import Api from '../lib/Api';

export default function useData<T>(url: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(`${Api.URL}${url}`);
        if (!res.ok) throw new Error();

        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { data } = (await res.json()) as {
          status: string;
          results: number;
          data: T;
        };

        setData(data);
      } catch (err) {
        let errorMessage: string = 'Something went wrong with fetching data';
        if (typeof err === 'string') errorMessage = err;
        if (err instanceof Error) errorMessage = err.message;

        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);
  return { data, isLoading, error };
}
