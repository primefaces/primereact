/* eslint-disable */
import * as React from 'react';
import { useUnmountEffect } from './useUnmountEffect';

export const useInterval = (fn, delay = 0, when = true) => {
    const timeout = React.useRef(null);
    const savedCallback = React.useRef(null);

    const clear = React.useCallback(() => clearInterval(timeout.current), [timeout.current]);

    React.useEffect(() => {
        savedCallback.current = fn;
    });

    React.useEffect(() => {
        function callback() {
            savedCallback.current();
        }

        if (when) {
            timeout.current = setInterval(callback, delay);
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
