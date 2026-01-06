import * as React from 'react';

/**
 * Generates a unique identifier.
 *
 * @param initialValue Optional initial value for the ID.
 * @returns The generated or provided ID.
 *
 * @example
 * ```tsx
 * const id = useId('foo');
 * console.log(id); // 'foo'
 * ```
 *
 * @example
 * ```tsx
 * const defaultId = useId();
 * console.log(defaultId); // e.g., 'pr_id_0'
 * ```
 */
export function useId(initialValue?: string): string {
    const idx = React.useId();
    const [idState, setIdState] = React.useState<string>(initialValue || `pr_id_${idx.replaceAll(/:|«|»/g, '')}`);

    React.useEffect(() => {
        setIdState(initialValue || `pr_id_${idx.replaceAll(/:|«|»/g, '')}`);
    }, [initialValue, idx]);

    return idState;
}
