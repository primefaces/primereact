import type { Contexts, Instance } from '.';

/**
 * Headless Instance
 *
 * @template E - The type of the element reference.
 */
export declare type HeadlessInstance<P = Record<PropertyKey, unknown>, I = Record<PropertyKey, unknown>, E = HTMLElement> = Instance<P, I> & {
    /**
     * The reference to the element.
     */
    elementRef: React.Ref<E>;
    /**
     * The ID of the component.
     */
    id: string;
    /**
     * The PrimeReact contexts in the headless mode.
     */
    $primereact: Omit<Contexts, 'passthrough' | 'theme'>;
} & Record<PropertyKey, unknown>;

/**
 * The setup callback function or options.
 */
export declare type withHeadlessSetup<S, D> = S | ((instance: HeadlessInstance<D>) => S) | undefined;

/**
 * The withHeadless options.
 *
 * @template D - The type of the default properties.
 * @template S - The return type of the setup callback.
 */
export interface withHeadlessOptions<S, D> {
    /**
     * The name of headless component.
     */
    name?: string | undefined;
    /**
     * The setup callback function or options.
     */
    setup?: withHeadlessSetup<S, D>;
    /**
     * The default properties.
     */
    defaultProps?: D | undefined;
}

export interface useHeadlessOptions<I, D, S> {
    inProps?: I;
    defaultProps?: D;
    setup?: withHeadlessSetup<S, unknown>;
}
