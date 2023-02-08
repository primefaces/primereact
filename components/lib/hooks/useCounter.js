import * as React from 'react';

export const useCounter = (initialValue = 0, options = { step: 1 }) => {
    const [count, setCount] = React.useState(initialValue);

    const increment = () => {
        if (options.max && count >= options.max) {
            return;
        }

        setCount(count + options.step);
    };

    const decrement = () => {
        if (options.min || (options.min === 0 && count <= options.min)) {
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
