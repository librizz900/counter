import React from 'react'
import './count.css'
import {useState} from 'react'
const Count = () => {
    const[count, setCount]=  useState(0)
    const first= () => {
        setCount(count + 5)
    }
    const second= () => {
        setCount(count - 5)
    }
    const third= () => {
        setCount(0)
    }
  return (
    <div>
      <div className="count">
      <h1>Counting in five =<span>{count}</span> </h1>

      <div className='button'>
      <button onClick={first}>
        Increase</button>
      <button onClick={second} id='red'>Decrease</button>
      <button onClick={third} id='yellow'>Reset</button>
      </div>
      </div>
    </div>
  )
}

export default Count
