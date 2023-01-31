import React, { useState } from 'react';

export const useCounter = (initialValue = 0, options = { step: 1 }) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        if (count >= options?.max) {
            return null;
        }

        setCount(count + options.step);
    };

    const decrement = () => {
        if (count <= options?.min) {
            return null;
        }

        setCount(count - options.step);
    };

    const reset = () => {
        setCount(0);
    };

    return {
        count,
        increment,
        decrement,
        reset
    };
};

export default useCounter;
