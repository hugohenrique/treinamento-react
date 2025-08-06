import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, decrementar } from '../features/counterSlice';

export default function Counter() {
    const contador = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h4>Contador: {contador}</h4>
            <button onClick={() => dispatch(incrementar())}>Incrementar +</button>
            <button onClick={() => dispatch(decrementar())}>Decrementar -</button>
        </div>
    );
}
