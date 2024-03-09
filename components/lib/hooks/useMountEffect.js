/* eslint-disable */
import * as React from 'react';

/**
 * Custom hook to run a mount effect only once.
 * @param {*} fn the callback function
 * @returns the hook
 */
export const useMountEffect = (fn) => {
    const mounted = React.useRef(false);
    return React.useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return fn && fn();
        }
    }, []);
};
/* eslint-enable */
