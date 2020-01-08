import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count => count + 1);
    };
    const decreaseCount = () => {
        setCount(count => count - 1);
    };
    return (
        <div>
            <h1>Increase/decrease counter using useState</h1>
            <p>Count: {count}</p>
            <div>
                <button type="button" onClick={increaseCount}>
                    +
                </button>
                <button type="button" onClick={decreaseCount}>
                    -
                </button>
            </div>
        </div>
    );
};
export default Counter;
