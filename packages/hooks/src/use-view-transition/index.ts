import * as React from 'react';

/**
 * Starts a view transition.
 *
 * @returns A function that starts a view transition.
 *
 * @example
 * ```tsx
 * const Component = () => {
 *     const startTransition = useViewTransition();
 *
 *     const handleClick = () => {
 *         startTransition(() => {
 *             // Perform some work
 *         });
 *     };
 *
 *     return <button onClick={handleClick}>Click me</button>;
 * };
 */
export function useViewTransition() {
    const startTransition = React.useCallback((callback: () => void) => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                callback();
            });
        } else {
            callback();
        }
    }, []);

    return startTransition;
}
