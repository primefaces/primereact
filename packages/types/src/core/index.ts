export type * from './Component.types';
export type * from './Config.types';
export type * from './Headless.types';
export type * from './Icon.types';
export type * from './Locale.types';
export type * from './PassThrough.types';
export type * from './Theme.types';

/**
 * Global PrimeReact Context
 * @todo - define more specific types for the configuration properties.
 */
export interface Contexts {
    config?: unknown;
    locale?: unknown;
    passthrough?: unknown;
    theme?: unknown;
}

/**
 * Global PrimeReact Instance
 *
 * @template P - The type of the component props.
 * @template I - The type of the base component props that are passed by the user.
 * @template T - The type of the parent component instance.
 * @template R - The type of the component reference.
 */
export declare type Instance<P = Record<PropertyKey, unknown>, I = Record<PropertyKey, unknown>, T = unknown, R = unknown> = {
    /**
     * The reference to the component.
     */
    ref: React.Ref<R>;
    /**
     * The base component name.
     */
    name?: string | undefined;
    /**
     * The base component props.
     */
    props: P;
    /**
     * The base component attributes.
     */
    attrs: Omit<Record<PropertyKey, unknown>, keyof P>;
    /**
     * The component state.
     */
    state?: Record<PropertyKey, unknown>;
    /**
     * The parent component instance.
     */
    parent?: T | undefined;
    /**
     * The base component props that are passed by the user.
     */
    inProps?: I | undefined;
    /**
     * The PrimeReact contexts.
     */
    $primereact?: Contexts;
};
