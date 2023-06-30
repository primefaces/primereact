/* eslint-disable */
import * as React from 'react';

/**
 * Custom hook to run a mount effect only once.
 * @param {*} fn the callback function
 * @returns the hook
 */
export const useMountEffect = (fn) => React.useEffect(fn, []);
/* eslint-enable */
