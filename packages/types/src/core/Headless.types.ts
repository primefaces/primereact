import type { Instance, useBaseOptions } from '.';

/**
 * Headless Instance
 *
 * @template E - The type of the element reference.
 * @template T - The type of additional properties.
 */
export type HeadlessInstance<Props = Record<PropertyKey, unknown>, State = Record<PropertyKey, unknown>, Exposes = Record<PropertyKey, unknown>, Ref = unknown, ERef = HTMLElement> = Instance<Props, Props, State, Exposes, Ref, ERef>;

/**
 * The withHeadless options.
 *
 * @template D - The type of the default properties.
 * @template S - The return type of the setup callback.
 */

export type withHeadlessOptions<IProps, DProps, Exposes> = {
    /**
     * The name of headless component.
     */
    name?: string | undefined;
    /**
     * The default properties.
     */
    defaultProps?: DProps | undefined;
    /**
     * The setup callback function or options.
     */
    setup?: useHeadlessOptions<IProps, DProps, Exposes>['setup'];
};

export type useHeadlessOptions<IProps, DProps, Exposes> = useBaseOptions<IProps, DProps, Exposes>;
