/* eslint-disable */
import * as React from 'react';

/**
 * Custom hook to run a mount effect only once. Accounts for React 18 Strict Mode by making sure it only runs exactly once.
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

        return;
    }, []);
};
/* eslint-enable */
