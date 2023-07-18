import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, dencrement } from './CounterSlice'
const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(dencrement())}>-</button>
        </div>
    )
}

export default Counter
