import { useState } from 'react';

export const useField = (init) => {
  let [value, setValue] = useState(init);
  const handleValue = (event) => {
    setValue(event.target.value);
  }

  return [value, handleValue]
}