import { isNotEmpty } from '@primeuix/utils';
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
export const useId = (initialValue?: string) => {
    const idx = React.useId();
    const [idState, setIdState] = React.useState(initialValue || `pr_id_${idx.replaceAll(':', '')}`);

    React.useEffect(() => {
        if (isNotEmpty(initialValue)) {
            setIdState(initialValue!);
        }
    }, [initialValue]);

    return idState;
};
