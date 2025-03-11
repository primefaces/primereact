import { ComponentInstance } from './Component.types';

export declare type HeadlessInstance<R = unknown, P = Record<string, unknown>, E = HTMLElement> = {
    /**
     * The reference to the component.
     */
    ref?: React.Ref<R> | undefined;
    /**
     * The reference to the element.
     */
    elementRef?: React.Ref<E> | undefined;
    /**
     * The ID of the component.
     */
    id?: string | undefined;
    /**
     * The base component name.
     */
    name?: string | undefined;
    /**
     * The base component props.
     */
    props?: P | undefined;
    /**
     * The base component attributes.
     */
    attrs?: Omit<Record<string, unknown>, keyof P> | undefined;
    /**
     * The component state.
     */
    state?: Record<string, unknown> | undefined;
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
    $primereact?:
        | {
              config?: unknown;
              locale?: unknown;
          }
        | undefined;
} & Record<string, unknown>;

export declare type WithHeadlessCallback = (instance: HeadlessInstance) => Record<string, unknown> | undefined;
