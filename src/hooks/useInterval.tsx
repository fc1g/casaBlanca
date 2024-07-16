import { useEffect, useState } from 'react';

interface UseActOnIntervalProps {
  maxLength: number;
  sec: number;
}

export default function useInterval({ maxLength, sec }: UseActOnIntervalProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value === maxLength - 1 ? 0 : value + 1);
    }, sec * 1000);

    return () => clearInterval(interval);
  }, [value, setValue, maxLength, sec]);
  return { value, setValue };
}
