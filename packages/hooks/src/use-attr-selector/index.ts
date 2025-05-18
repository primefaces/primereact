import * as React from 'react';

/**
 * Generates a unique attribute selector based on the provided prefix.
 *
 * @param prefix - The prefix to prepend to the generated selector.
 * @returns A unique string combining the prefix and the selector.
 *
 * @example
 * ```ts
 * const selector = useAttrSelector('foo');
 * console.log(selector); // e.g., 'foo0'
 * ```
 */
export function useAttrSelector(prefix: string = ''): string {
    const id = React.useId();

    return React.useMemo(() => `${prefix}${id.replaceAll(/:|«|»/g, '')}`.trim().toLowerCase(), [id, prefix]);
}
