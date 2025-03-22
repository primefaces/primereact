import * as React from 'react';

/**
 * Returns the previous value of the provided value.
 *
 * @param value - The value to track.
 * @returns The previous value of the provided value.
 *
 * @example
 * ```tsx
 * const [count, setCount] = React.useState(5);
 * const prevCount = usePrevious(count);
 *
 * console.log(prevCount); // undefined
 *
 * setCount(10);
 *
 * console.log(prevCount); // 5
 * ```
 */
export function usePrevious<T>(value: T): T | null | undefined {
    const ref = React.useRef<T | null>(null);

    React.useEffect(() => {
        ref.current = value;

        return () => {
            ref.current = null;
        };
    }, [value]);

    return ref.current;
}
