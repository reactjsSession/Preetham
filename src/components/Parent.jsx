import React, { useState } from 'react';
import Child from './Child.jsx';
function Parent() {
  const [count, setCount] = useState(0);
  const addtocount = () => {
    setCount(count + 1);
  }
  const removefromcount = () => {
    setCount(count - 1);
  }
  return (
    <center>
      <div>
        <Child count={count} />
        <br />
        <div>
          <button onClick={addtocount}> Increment </button>
          <button onClick={removefromcount}> Decrement </button>
        </div>
      </div>
    </center>
  );
}
export default Parent;
