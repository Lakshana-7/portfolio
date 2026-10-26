import { useEffect, useRef } from 'react';

export function useInterval(callback, delay, isRunning = true) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isRunning || delay === null || delay === undefined) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay, isRunning]);
}
