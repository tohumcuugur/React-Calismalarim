import {useState} from 'react'


function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        setCount(count - 1);
    };

  return (
    <div id ="container">
        <h1>{count}</h1>
        {/* <button onClick={()=>setCount(count + 1)}>İncrease</button>
        <button onClick={()=>setCount(count - 1)}>Decrease</button> */}

        <button onClick={increase}>İncrease</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
} 

export default Counter
