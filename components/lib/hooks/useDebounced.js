import * as React from 'react';
import { useTimeout } from './useTimeout';

export const useDebounced = (initialValue, delay) => {
    const [inputValue, setInputValue] = React.useState(initialValue);
    const [debouncedValue, setDebouncedValue] = React.useState(initialValue);
    const timeout = useTimeout(
        () => {
            setDebouncedValue(inputValue);
        },
        delay,
        inputValue !== debouncedValue
    );

    return [inputValue, debouncedValue, setInputValue];
};
