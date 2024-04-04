import { useState, useEffect } from 'react';

function getStorageValue(key: string, defaultValue: string) {
  // getting stored value
  const saved: string | null = localStorage.getItem(key);
  let initial = defaultValue;
  if (saved) {
    initial = JSON.parse(saved);
  }
  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState<string>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
