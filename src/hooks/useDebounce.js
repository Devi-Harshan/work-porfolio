import { useState, useEffect } from "react";
const useDebounce = (input, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(input);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(input), delay);

    return clearTimeout(timer);
  }, [input, delay]);
};

export default useDebounce;
