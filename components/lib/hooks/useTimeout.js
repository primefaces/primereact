/* eslint-disable */
import { useCallback, useEffect, useRef } from 'react';
import { useUnmountEffect } from './useUnmountEffect';

export const useTimeout = (fn, delay = 0, when = true) => {
    const timeout = useRef(null);
    const savedCallback = useRef(null);

    const clear = useCallback(() => clearTimeout(timeout.current), [timeout.current]);

    useEffect(() => {
        savedCallback.current = fn;
    });

    useEffect(() => {
        function callback() {
            savedCallback.current();
        }

        if (when) {
            timeout.current = setTimeout(callback, delay);
            return clear;
        }
        else {
            clear();
        }
    }, [delay, when]);

    useUnmountEffect(() => {
        clear();
    });

    return [clear];
}
/* eslint-enable */
