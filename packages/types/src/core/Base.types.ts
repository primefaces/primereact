import { PassThroughOptions } from './PassThrough.types';

/**
 * PrimeReact Contexts
 * @todo - define more specific types for the configuration properties.
 */
export interface Contexts {
    config?: {
        pt?: Record<string, unknown>;
        ptOptions?: PassThroughOptions;
        csp?: {
            nonce?: string;
        };
        ripple?: boolean;
        unstyled?: boolean;
        inputVariant?: string;
        stylesheet?: unknown;
    };
    locale?: unknown;
    passthrough?: unknown;
    theme?: unknown;
    parent?: unknown;
}

export type BaseSetup<Props, IProps, Exposes> = Exposes | ((instance: CommonInstance<Props, IProps>) => Exposes) | (() => Exposes);

export interface useBaseOptions<IProps, DProps, Exposes> {
    inProps?: IProps;
    defaultProps?: DProps;
    setup?: BaseSetup<DProps, IProps, Exposes>;
}

export type CommonInstance<Props = Record<PropertyKey, unknown>, IProps = Props, Ref = unknown, ERef = HTMLElement> = {
    /**
     * The reference to the component.
     */
    ref: React.Ref<Ref>;
    /**
     * The reference to the element.
     */
    elementRef: React.RefObject<ERef | null>;
    /**
     * The component id.
     */
    id?: string | undefined;
    /**
     * The headless/component name.
     */
    name?: string | undefined;
    /**
     * The headless/component props.
     */
    props: Props;
    /**
     * The headless/component attributes.
     */
    attrs: Omit<IProps & Record<PropertyKey, unknown>, keyof Props>;
    /**
     * The headless/component props that are passed by the user.
     */
    inProps?: (IProps & Record<PropertyKey, unknown>) | undefined;
    /**
     * The unique attribute selector.
     */
    $attrSelector?: string | undefined;
    /**
     * The PrimeReact contexts.
     */
    $primereact: Contexts;
};

/**
 * Base PrimeReact Instance
 *
 * @template Props - The type of the headless/component props.
 * @template IProps - The type of the base income props that are passed by the user.
 * @template PInstance - The type of the parent component instance.
 * @template RData - The type of the return data.
 * @template Ref - The type of the component reference.
 * @template ERef - The type of the element reference.
 */
export type Instance<Props = Record<PropertyKey, unknown>, IProps = Record<PropertyKey, unknown>, State = Record<PropertyKey, unknown>, Exposes = Record<PropertyKey, unknown>, Ref = unknown, ERef = HTMLElement> = CommonInstance<
    Props,
    IProps,
    Ref,
    ERef
> & {
    /**
     * The component state.
     */
    state: State;
    /**
     * The computed setup data.
     */
    $computedSetup: Exposes;
} & Exposes;
