/* eslint-disable */
import * as React from 'react';
import { useUnmountEffect } from './useUnmountEffect';

export const useTimeout = (fn, delay = 0, when = true) => {
    const timeout = React.useRef(null);
    const savedCallback = React.useRef(null);

    const clear = React.useCallback(() => clearTimeout(timeout.current), [timeout.current]);

    React.useEffect(() => {
        savedCallback.current = fn;
    });

    React.useEffect(() => {
        function callback() {
            savedCallback.current();
        }

        if (when) {
            timeout.current = setTimeout(callback, delay);
            return clear;
        } else {
            clear();
        }
    }, [delay, when]);

    useUnmountEffect(() => {
        clear();
    });

    return [clear];
};
/* eslint-enable */
