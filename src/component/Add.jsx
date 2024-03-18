import React, { useState } from 'react'

const Add = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
      setCount(count + 1);
    };
  
    const Decrement = () => {
      setCount(count - 1);
    };
  return (
    <div>
  <div className="App">
  <div class="card" >
  <div class="card-body">
  <h1>Counter </h1>
      <p> {count}</p>
   </div>
</div>
    


      <button className="btn btn-success" onClick={Increment}> + </button>
      
      <button className="btn btn-success" onClick={Decrement}> - </button>
      
     
    </div>


    </div>
  )
}

export default Add