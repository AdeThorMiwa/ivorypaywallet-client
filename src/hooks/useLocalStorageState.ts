import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

export const useLocalStorageState = <T>(
  key: string,
  initialState?: T
): [T | undefined, Dispatch<SetStateAction<T>>] => {
  const [state, setter] = useState(initialState);

  useEffect(() => {
    // hydrate
    const storageValue = window.localStorage.getItem(key);
    if (storageValue && storageValue !== "undefined") {
      setter(JSON.parse(storageValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setState = useCallback((value: T) => {
    setter(value);
    window.localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [state, setState as Dispatch<SetStateAction<T>>];
};
