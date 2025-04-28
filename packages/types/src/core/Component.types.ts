import { Instance, useBaseOptions } from '.';
import { StylesOptions } from '../styles';
import type { PassThroughOptions, PassThroughProps } from './PassThrough.types';

/**
 * Defines the global props of the components.
 */
export interface GlobalComponentProps<T extends React.ElementType = React.ElementType, R = unknown, D = unknown> {
    /**
     * The reference to the component instance.
     * @todo - React.Ref<R> | undefined;
     */
    ref?: unknown;
    /**
     * Whether the component should be rendered.
     * @default true
     */
    pIf?: boolean | undefined;
    /**
     * The component type to render.
     */
    as?: T | undefined;
    /**
     * Whether the component should be rendered as a child component.
     * @default false
     */
    asChild?: boolean | undefined;
    /**
     * The pass-through props to pass to the component
     */
    pt?: PassThroughProps['value'] | undefined;
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
export interface ComponentProps<R = unknown, D = unknown> extends GlobalComponentProps<React.ElementType, R, D> {
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
     * @todo - Update this to use the ComponentInstance type.
     */
    instance?: ComponentInstance<any, any> | undefined;
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
 *
 * @template P - The type of the component props.
 * @template I - The type of the base component props that are passed by the user.
 * @template T - The type of the parent component instance.
 */
export declare type ComponentInstance<Props = Record<PropertyKey, unknown>, IProps = Record<PropertyKey, unknown>, PInstance = unknown, RData extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>> = Instance<
    Props,
    IProps,
    PInstance,
    RData
> & {
    /**
     * Defines parent components instances.
     */
    $pc: Record<string, ComponentInstance>;
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
    $style: Record<string, unknown> | undefined;
};

/*export declare type CommonKeys = 'ref' | 'name' | 'props' | 'attrs' | 'parent' | 'inProps' | '$primereact' | 'getParent';
export declare type CommonComponentInstance<P, I, T> = Pick<ComponentInstance<P, I, T>, CommonKeys>;

export declare type ComputedKeys = CommonKeys | '$attrSelector' | 'state';
export declare type ComputedComponentInstance<P, I, T, S> = Pick<ComponentInstance<P, I, T>, ComputedKeys> & S;*/

/**
 * The setup callback function or options.
 */
//export declare type withComponentSetup<D, I, S> = S | ((instance: CommonComponentInstance<D, I, unknown>) => S) | undefined;

/*export declare type withComponentOptions<D, I, S, C = Record<string, unknown>> = {
    name?: string | undefined;
    defaultProps?: D | undefined;
    styles?: StylesOptions | undefined;
    components?: C | undefined;
    setup?: withComponentSetup<D, I, S>;
    render?: React.FC<ComponentInstance<D, I, ComponentInstance, S>>;
};*/

export declare type withComponentOptions<IProps, DProps, RData extends Record<PropertyKey, unknown>, CData = Record<string, unknown>> = {
    name?: string | undefined;
    defaultProps?: DProps | undefined;
    styles?: StylesOptions | undefined;
    components?: CData | undefined;
    setup?: useComponentOptions<IProps, DProps, unknown, RData>['setup'];
    render?: React.FC<ComponentInstance<DProps, IProps, ComponentInstance, RData>>;
};

export declare type useComponentOptions<IProps, DProps, PInstance, RData extends Record<PropertyKey, unknown>> = useBaseOptions<IProps, DProps, PInstance, RData> & {
    styles?: StylesOptions | undefined;
};
