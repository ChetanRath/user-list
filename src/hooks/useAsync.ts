import { useState } from 'react';
import { AsyncFn, InitType } from './types';

export function useAsyncFn<T>(fn: AsyncFn<T>) {
  const [state, setState] = useState<InitType>({
    isLoading: false,
    err: null,
    res: null,
  });
  const asyncFunc = async (...args: Array<T>) => {
    setState({ isLoading: true, err: null, res: null });
    try {
      const { data } = await fn(args as T);
      setState({ ...state, isLoading: false, res: data });
    } catch (err: unknown) {
      setState({ ...state, isLoading: false, err });
    }
  };

  return { ...state, asyncFunc };
}

export default useAsyncFn;
