import React, { useState } from 'react';
import Child from './Child.jsx';
function Parent() {
  const [count, setCount] = useState(0);
  const addtocount = () => {
    setCount(count + 1);
  }
  const removefromcount = () => {
    if(count>0){
      setCount(count - 1);
    }else if(0>count){
      alert("Count cannot be negative")
    }
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
