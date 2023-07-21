import { useEffect, useState } from "react";

function toBoolean(value: string) {
  if (value === "true") {
    return true;
  } else {
    return false;
  }
}

function saveValue(key: string, value: boolean) {
  localStorage.setItem(key, value.toString());
}

const prefix = "analysis-boolean-option-";

export function useLocalStorage(key: string, initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(prefix + key);

    if (item !== null) {
      setValue(toBoolean(item));
    }
  }, [key]);

  useEffect(() => {
    saveValue(prefix + key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
