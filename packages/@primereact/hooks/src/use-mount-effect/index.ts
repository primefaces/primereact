import * as React from 'react';

/**
 * Custom hook that runs a mount effect only once.
 * This is similar to `useEffect`, but it only runs on mount.
 *
 * @param {React.EffectCallback} effect the callback function
 * @returns {void}
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *     useMountEffect(() => {
 *         console.log('Mounted');
 *     });
 * };
 * ```
 */
export function useMountEffect(effect: React.EffectCallback): void {
    const mounted = React.useRef<boolean>(false);

    React.useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;

            effect?.();
        }
    }, []);
}
