import { Instance } from '.';
import { StylesOptions } from '../styles';
import type { PassThroughOptions, PassThroughProps } from './PassThrough.types';

/**
 * Defines the global props of the components.
 */
export interface GlobalComponentProps<R = unknown, D = unknown> {
    /**
     * The reference to the component instance.
     */
    ref?: React.Ref<R> | undefined;
    /**
     * Whether the component should be rendered.
     * @default true
     */
    pIf?: boolean | undefined;
    /**
     * The component type to render.
     */
    as?: React.ElementType | undefined;
    /**
     * Whether the component should be rendered as a child component.
     * @default false
     */
    asChild?: boolean | undefined;
    /**
     * The pass-through props to pass to the component
     */
    pt?: Pick<PassThroughProps, 'value'> | undefined;
    /**
     * The pass-through options to pass to the component
     */
    ptOptions?: PassThroughOptions | undefined;
    /**
     * Whether the component should be rendered without classes.
     */
    unstyled?: boolean | undefined;
    /**
     * The design token to use for the component.
     */
    dt?: D | undefined;
    /**
     * The styles to use for the component.
     */
    styles?: StylesOptions | undefined;
    /**
     * The template to use for the component.
     */
    template?: unknown;
    /**
     * The children to render.
     */
    children?: React.ReactNode | undefined;
}

/**
 * Defines the props of the component.
 */
export interface ComponentProps<R = unknown, D = unknown> extends GlobalComponentProps<R, D> {
    /**
     * The component instance
     */
    instance?: ComponentInstance | undefined;
    /**
     * The options to pass to the component.
     */
    options?: Record<string, unknown> | undefined;
}

/**
 * Defines the props of the component context.
 */
export interface ComponentProviderProps {
    /**
     * The component instance.
     */
    instance?: ComponentInstance | undefined;
    /**
     * Whether the provider should be rendered.
     * @default true
     */
    pIf?: boolean | undefined;
    /**
     * The children to render.
     */
    children?: React.ReactNode | undefined;
}

/**
 * Component Instance.
 */
export declare type ComponentInstance<D = unknown> = Instance<unknown, D> & {
    /**
     * Finds parent instance of the component.
     *
     * @param type - The type of the parent instance to find.
     * @returns {Instance | undefined} - The found parent instance or undefined if not found.
     */
    getParent: (type?: string) => ComponentInstance | undefined;
} & {
    /**
     * Finds attributes of the component using the key in pass-through options.
     *
     * @param key - The key to find.
     * @param params - Additional parameters that can be passed for processing.
     * @returns {Record<string, unknown>} - The found attributes.
     */
    ptm: (key: string, params?: Record<string, unknown>) => Record<string, unknown>;
    /**
     * Finds root attributes of the component using the key in pass-through options.
     *
     * @param key - The key to find.
     * @param params - Additional parameters that can be passed for processing.
     * @returns {Record<string, unknown>} - The found attributes.
     */
    ptmi: (key: string, params?: Record<string, unknown>) => Record<string, unknown>;
    /**
     * Finds attributes of the component using key in the custom object.
     *
     * @param obj - The custom object holding component attributes.
     * @param key - The key to find within the object.
     * @param params - Additional parameters that can be passed for processing.
     * @returns {Record<string, unknown>} - The found attributes.
     */
    ptmo: (obj: Record<string, unknown>, key: string, params?: Record<string, unknown>) => Record<string, unknown>;
} & {
    /**
     * Finds class names using the key in styles options.
     *
     * @param key - The key to process.
     * @param params - Additional parameters for processing.
     * @returns {string} - The processed class name.
     */
    cx: (key: string, params?: Record<string, unknown>) => string | undefined;
    /**
     * A function that applies styles based on the key provided.
     *
     * @param key - The key for style processing.
     * @param when - A flag to conditionally apply styles.
     * @param params - Additional parameters for processing.
     * @returns {React.CSSProperties | undefined} - The processed styles.
     */
    sx: (key: string, when?: boolean, params?: Record<string, unknown>) => React.CSSProperties | undefined;
    /**
     * Whether the component should be rendered without classes.
     * @default false
     */
    isUnstyled: boolean | undefined;
    /**
     * The instance to load styles.
     */
    $styles: Record<string, unknown> | undefined;
} & {
    /**
     * Defines parent components instances.
     */
    $pc: Record<string, ComponentInstance>;
} & Record<PropertyKey, unknown>;

export declare type WithComponentCallback<R, D> = (instance: ComponentInstance<R, D>, ref?: React.Ref<R>) => unknown | undefined;
