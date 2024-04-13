import { useEffect, useRef } from 'react';

export const usePrevious = <T>(value: T): T => {
  const currentRef = useRef<T>(value);

  useEffect(() => {
    if (currentRef.current !== value) {
      currentRef.current = value;
    }
  }, [value]);

  return currentRef.current;
};
