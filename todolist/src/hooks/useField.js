import { useState } from 'react';

export const useField = () => {
  let [value, setValue] = useState("");
  const handleValue = (event) => {
    setValue(event.target.value);
  }

  return [value, handleValue]
}