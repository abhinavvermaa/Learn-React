import React from 'react'
import { useState } from 'react'
const CounterData = (props) => {
  const [count, setCount] = useState(0)
  const handleClick = ()=>{
    setCount(count+1);
  }
  const handleClicksub = ()=>{
    setCount(count-1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleClick}>Clicked {count} times</button>
      <button onClick={handleClicksub}>Sub</button>
      <h2>The count is {count}</h2>
      <h3>counter id is {props.counterid}</h3>
    </div>
  )
}

export default CounterData
