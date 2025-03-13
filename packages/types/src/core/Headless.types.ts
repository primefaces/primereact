import { ComponentInstance } from './Component.types';

export declare type HeadlessInstance<R = unknown, P = Record<string, unknown>, E = HTMLElement> = {
    /**
     * The reference to the component.
     */
    ref: React.Ref<R>;
    /**
     * The reference to the element.
     */
    elementRef: React.Ref<E>;
    /**
     * The ID of the component.
     */
    id: string;
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
    attrs: Omit<Record<string, unknown>, keyof P>;
    /**
     * The component state.
     */
    state: Record<string, unknown>;
    /**
     * The parent component instance.
     */
    parent?: ComponentInstance<R, P, E> | undefined;
    /**
     * The base component props that are passed by the user.
     */
    inProps?: (P & Record<string, unknown>) | undefined;
    /**
     * The PrimeReact configurations
     */
    $primereact: {
        config: unknown;
        locale: unknown;
    };
} & Record<PropertyKey, unknown>;

export declare type WithHeadlessCallback<R, D> = (instance: HeadlessInstance<R, D>) => Record<PropertyKey, unknown> | undefined;
