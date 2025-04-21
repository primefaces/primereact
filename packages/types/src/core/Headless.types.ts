import type { Instance, useBaseOptions } from '.';

/**
 * Headless Instance
 *
 * @template E - The type of the element reference.
 * @template T - The type of additional properties.
 */
export declare type HeadlessInstance<Props = Record<PropertyKey, unknown>, IProps = Record<PropertyKey, unknown>, PInstance = unknown, RData = Record<PropertyKey, unknown>, Ref = unknown, ERef = HTMLElement> = Instance<
    Props,
    IProps,
    PInstance,
    RData,
    Ref,
    ERef
>;
/**
 * The setup callback function or options.
 */
export declare type withHeadlessSetup<D, I, S> = S | ((instance: HeadlessInstance<D, I>) => S) | undefined;

/**
 * The withHeadless options.
 *
 * @template D - The type of the default properties.
 * @template S - The return type of the setup callback.
 */
export interface withHeadlessOptions_REMOVE<D, I, S> {
    /**
     * The name of headless component.
     */
    name?: string | undefined;
    /**
     * The setup callback function or options.
     */
    setup?: withHeadlessSetup<D, I, S>;
    /**
     * The default properties.
     */
    defaultProps?: D | undefined;
}

export declare type withHeadlessOptions<IProps, DProps, RData> = {
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

export declare type useHeadlessOptions<IProps, DProps, PInstance, RData> = useBaseOptions<IProps, DProps, PInstance, RData>;
