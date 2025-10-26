import { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

function increment(){
        if(count < 10){
        setCount(count + 1);
    }
}

function decrement(){
    if(count > 0){
        setCount(count - 1);
    }
}

  return (
    <div className='m-auto mb-1 text-center w-50 border rounded shadow '>

        <p>{count}</p>

        <button className="rounded m-1 p-05" onClick={decrement}>-</button>

        <button className="rounded m-1 p-05" onClick={increment}>+</button>

        {count > 0 ? 
        <button className="rounded m-1 p-05" onClick={() => setCount(0)}>reset</button>
        :
        null 
        }

    
    </div>
  );

}


export default Counter;