import React, { useState } from 'react'
import './App5.css'

export default function App5() {
  const [count, SubCount] = useState(0)
  const increment = () => {
    SubCount(count + 1)
  }
  return (
    <div class="Container">
      <div>
        <h1>Count</h1>
        <p>{count}</p>
        <p>
          <button onClick={increment}>Click Me</button>
        </p>
      </div>
      <hr />
    </div>
  )
}
