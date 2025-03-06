import * as React from 'react';

/**
 * Custom hook that runs an update effect whenever dependencies change.
 * This is similar to `useEffect`, but it does not run on mount.
 *
 * @param {React.EffectCallback} effect the callback function
 * @param {React.DependencyList} deps the dependencies
 * @returns {void}
 *
 * @example
 * ```tsx
 * const MyComponent = ({ value }) => {
 *     useUpdateEffect(() => {
 *         console.log('Updated');
 *     }, [value]);
 * };
 * ```
 */
export const useUpdateEffect = (effect: React.EffectCallback, deps?: React.DependencyList): void => {
    const mounted = React.useRef<boolean>(false);

    React.useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;

            return;
        }

        return effect?.();
    }, deps);
};
