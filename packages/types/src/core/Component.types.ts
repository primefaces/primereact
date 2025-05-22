import { Instance, useBaseOptions } from '.';
import { StylesOptions } from '../styles';
import type { PassThroughOptions, PassThroughProps } from './PassThrough.types';

/**
 * Defines the global props of the components.
 */
export interface GlobalComponentProps<T extends React.ElementType = React.ElementType, R = unknown, D = unknown> {
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
     * @todo remove this
     */
    template?: unknown;
    /**
     * The children to render.
     * @todo update this to ReactNode
     */
    children?: React.ReactNode | undefined;
}

export declare type withComponentOptions<IProps, DProps, Exposes, CData> = {
    name?: string | undefined;
    defaultProps?: DProps | undefined;
    styles?: StylesOptions | undefined;
    components?: CData | undefined;
    setup?: useComponentOptions<IProps, DProps, Exposes>['setup'];
    render?: React.FC<InComponentInstance<DProps, IProps, Record<PropertyKey, unknown>, Exposes>>;
};

export declare type useComponentOptions<IProps, DProps, Exposes> = useBaseOptions<IProps, DProps, Exposes> & {
    styles?: StylesOptions | undefined;
};

export type InComponentInstance<Props = Record<PropertyKey, unknown>, IProps = Record<PropertyKey, unknown>, State = Record<PropertyKey, unknown>, Exposes = Record<PropertyKey, unknown>> = Instance<Props, IProps, State, Exposes> & {
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

export type ComponentInstance<Props = Record<PropertyKey, unknown>, State = Record<PropertyKey, unknown>, Exposes = Record<PropertyKey, unknown>> = InComponentInstance<Props, Props, State, Exposes>;

export type InferComponentInstance<I> =
    I extends ComponentInstance<infer Props, infer State, infer Exposes>
        ? {
              /**
               * Defines valid properties.
               */
              props: Props | undefined;
              /**
               * Defines current inline state.
               */
              state: State;
              /**
               * Defines valid attributes.
               */
              attrs: Exposes | undefined;
          }
        : {
              props: undefined;
              state: undefined;
              attrs: undefined;
          };
