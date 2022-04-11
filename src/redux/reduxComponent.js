import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "./actions/";

function ReduxComponent() {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const selector = useSelector(state => state.AllCount.count);
    return (
        <div>
            <h1>{selector}</h1>
            <button onClick={() => {
                dispatch(increment(count));
            }}>Increment</button>
            <button onClick={() => {
                dispatch(decrement(count));
            }}>Decrement</button>
            <h1>{selector}</h1>
        </div>
    )
}

export default ReduxComponent
