import React, { useState } from 'react'

export default function App2() {
    const [count,setCount]= useState(0)
    const decrement=()=>{
      setCount(count-1)
    }
    const increment=()=>{
      setCount(count+1)
    }
  return (
    <div>
        <button onClick={decrement}>-</button>
        &nbsp;&nbsp;{count}&nbsp;&nbsp;
        <button onClick={increment}>+</button>
        <hr />
    </div>
  )
}
