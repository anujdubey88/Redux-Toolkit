import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Feature/Counter/CounterSlice'

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

  return (
    <div>
      <div className="Counter">
        <h1>Counter: {counter}</h1>
        <div className="buttoninc">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  )
}
