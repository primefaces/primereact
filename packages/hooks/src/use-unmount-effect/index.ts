import * as React from 'react';

/**
 * Custom hook that runs an unmount effect only once.
 * This is similar to `useEffect`, but it only runs on unmount.
 *
 * @param {React.EffectCallback} effect the callback function
 * @returns {void}
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *     useUnmountEffect(() => {
 *         console.log('Unmounted');
 *     });
 * };
 * ```
 */
export const useUnmountEffect = (effect: React.EffectCallback): void => {
    React.useEffect(() => {
        return (() => effect?.()) as unknown as void;
    }, []);
};
