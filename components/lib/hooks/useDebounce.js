import * as React from 'react';
import { useMountEffect, useUnmountEffect } from './Hooks';

export const useDebounce = (initialValue, delay) => {
    const [inputValue, setInputValue] = React.useState(initialValue);
    const [debouncedValue, setDebouncedValue] = React.useState(initialValue);
    const mountedRef = React.useRef(false);
    const timeoutRef = React.useRef(null);
    const cancelTimer = () => window.clearTimeout(timeoutRef.current);

    useMountEffect(() => {
        mountedRef.current = true;
    });

    useUnmountEffect(() => {
        cancelTimer();
    });

    React.useEffect(() => {
        if (!mountedRef.current) {
            return;
        }

        cancelTimer();
        timeoutRef.current = window.setTimeout(() => {
            setDebouncedValue(inputValue);
        }, delay);
    }, [inputValue, delay]);

    return [inputValue, debouncedValue, setInputValue];
};
