/* eslint-disable */
import { useEffect, useRef } from 'react';

export const useUpdateEffect = (fn, deps) => {
    const mounted = useRef(false);
    return useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }

        return fn && fn();
    }, deps);
}
/* eslint-enable */
