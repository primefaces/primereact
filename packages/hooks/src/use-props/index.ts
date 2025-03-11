import * as React from 'react';

/**
 * Used to merge and differentiate incoming props with the default props.
 * - Keys that exist in both `props1` and `props2` are placed in `props`, with values from `props1`.
 * - Keys that exist in `props1` but not in `props2` are placed in `attrs`.
 *
 * @template P1 The type of the incoming set of props.
 * @template P2 The type of the default set of props.
 *
 * @param props1 The incoming set of props (e.g., user-defined or dynamic props).
 * @param props2 The default set of props (e.g., default props).
 * @returns An object containing:
 *   - `props`: A new object containing keys that exist in both `props1` and `props2`, using values from `props1`.
 *   - `attrs`: A new object containing keys that exist only in `props1`, excluding any keys from `props2`.
 *
 * @example
 * ```ts
 * const { props, attrs } = useProps({ id: 'foo', className: 'bar' }, { className: 'baz' });
 *
 * console.log(props); // { className: 'bar' }
 * console.log(attrs); // { id: 'foo' }
 * ```
 */
export function useProps<P1 extends Record<string, unknown>, P2 extends Record<string, unknown>>(props1: P1 = {} as P1, props2: P2 = {} as P2) {
    type Props = Pick<P1 & P2, keyof P2>;
    type Attrs = Omit<P1, keyof P2> & Record<string, unknown>;
    type Result = { props: Props; attrs: Attrs };

    return React.useMemo(() => {
        const result: Result = { props: { ...props2 } as Props, attrs: {} as Attrs };

        Object.entries(props1).forEach(([key, value]) => {
            if (key in props2) {
                (result.props as Record<string, unknown>)[key] = value;
            } else {
                (result.attrs as Record<string, unknown>)[key] = value;
            }
        });

        return result;
    }, [props1, props2]);
}
