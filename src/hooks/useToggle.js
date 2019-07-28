import { useState } from "react";

function useToggle(initialValue = false) {
  // call useState to "reserve a piece of state"
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
  };
  // return a piece of state and a function to toggle it
  return [state, toggle];
}

export default useToggle;
