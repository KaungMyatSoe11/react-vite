import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   let count = 0;
  console.log(count);
  
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Counter {count}
    </button>
  );
};

export default Counter;
