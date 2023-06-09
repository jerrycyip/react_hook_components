import { useState, useEffect } from 'react';

// this custom hook serves as practice for creating custom hooks
// it would plug into the CounterPage component as an alternative to the useReducer code
// (e.g. import useCounter from '../components/useCounter/ etc...)
function useCounter(initialCount) {
  const [ count, setCount ] = useState(initialCount);

  useEffect(() => {
    console.log(count);

  }, [count]);

  function incrementCount(){
    setCount(count + 1);
  };

  return { count, incrementCount }; // key names same as value names, so can just return key (vs { count: count...})
}

export default useCounter;