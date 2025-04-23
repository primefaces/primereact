import type { Instance, useBaseOptions } from '.';

/**
 * Headless Instance
 *
 * @template E - The type of the element reference.
 * @template T - The type of additional properties.
 */
export declare type HeadlessInstance<
    Props = Record<PropertyKey, unknown>,
    IProps = Record<PropertyKey, unknown>,
    PInstance = unknown,
    RData extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    Ref = unknown,
    ERef = HTMLElement
> = Instance<Props, IProps, PInstance, RData, Ref, ERef>;
/**
 * The setup callback function or options.
 */
//export declare type withHeadlessSetup<D, I, S> = S | ((instance: HeadlessInstance<D, I>) => S) | undefined;

/**
 * The withHeadless options.
 *
 * @template D - The type of the default properties.
 * @template S - The return type of the setup callback.
 */

export declare type withHeadlessOptions<IProps, DProps, RData extends Record<PropertyKey, unknown>> = {
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
    setup?: useHeadlessOptions<IProps, DProps, unknown, RData>['setup'];
};

//export declare type HeadlessSetup<Props, IProps, PInstance, RData> = RData | ((instance: HeadlessInstance<Props, IProps, PInstance>) => RData);

export declare type useHeadlessOptions<IProps, DProps, PInstance, RData extends Record<PropertyKey, unknown>> = useBaseOptions<IProps, DProps, PInstance, RData>;
