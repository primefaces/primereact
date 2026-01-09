import * as React from 'react';

/**
 * Used to merge and differentiate incoming props with the default props.
 * - Keys that exist in both `props1` and `props2` are placed in `props`, with values from `props2`.
 * - Keys that exist in `props2` but not in `props1` are placed in `attrs`.
 *
 * @template P1 The type of the default set of props.
 * @template P2 The type of the incoming set of props.
 *
 * @param props1 The default set of props (e.g., default props).
 * @param props2 The incoming set of props (e.g., user-defined or dynamic props).
 * @returns An object containing:
 *   - `props`: A new object containing keys that exist in both `props1` and `props2`, using values from `props2`.
 *   - `attrs`: A new object containing keys that exist only in `props2`, excluding any keys from `props1`.
 *
 * @example
 * ```ts
 * const { props, attrs } = useProps({ className: 'baz' }, { id: 'foo', className: 'bar' });
 *
 * console.log(props); // { className: 'bar' }
 * console.log(attrs); // { id: 'foo' }
 * ```
 */
export function useProps<P1, P2>(props1: P1 = {} as P1, props2: P2 = {} as P2) {
    type Props = Pick<P1 & P2, keyof P1>;
    type Attrs = Omit<P2, keyof P1>;
    type Result = { props: Props; attrs: Attrs };

    return React.useMemo(() => {
        const result: Result = { props: { ...props1 } as Props, attrs: {} as Attrs };

        Object.entries(props2 as Record<string, unknown>).forEach(([key, value]) => {
            if (key in (props1 as Record<string, unknown>)) {
                (result.props as Record<string, unknown>)[key] = value;
            } else {
                (result.attrs as Record<string, unknown>)[key] = value;
            }
        });

        return result;
    }, [props1, props2]);
}
