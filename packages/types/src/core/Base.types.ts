import { ComponentInstance } from '.';

/**
 * PrimeReact Contexts
 * @todo - define more specific types for the configuration properties.
 */
export interface Contexts {
    config?: unknown;
    locale?: unknown;
    passthrough?: unknown;
    theme?: unknown;
    parent?: unknown;
}

export declare type BaseSetup<Props, IProps, PInstance, RData extends Record<PropertyKey, unknown>> = RData | ((instance: CommonInstance<Props, IProps, PInstance>) => RData) | (() => RData);

export interface useBaseOptions<IProps, DProps, PInstance, RData extends Record<PropertyKey, unknown>> {
    inProps?: IProps;
    defaultProps?: DProps;
    setup?: BaseSetup<DProps, IProps, PInstance, RData>;
}

export declare type CommonInstance<Props = Record<PropertyKey, unknown>, IProps = Record<PropertyKey, unknown>, PInstance = unknown, Ref = unknown, ERef = HTMLElement> = {
    /**
     * The reference to the component.
     */
    ref: React.Ref<Ref>;
    /**
     * The reference to the element.
     */
    elementRef: React.Ref<ERef>;
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
     * The parent component instance.
     */
    parent?: PInstance | undefined;
    /**
     * The headless/component props that are passed by the user.
     */
    inProps?: IProps | undefined;
    /**
     * The unique attribute selector.
     */
    $attrSelector?: string | undefined;
    /**
     * The PrimeReact contexts.
     */
    $primereact: Contexts;
    /**
     * Finds parent instance of the component.
     *
     * @param type - The type of the parent instance to find.
     * @returns {Instance | undefined} - The found parent instance or undefined if not found.
     */
    getParent: (type?: string) => ComponentInstance | undefined;
};

export declare type ComputedInstance<
    Props = Record<PropertyKey, unknown>,
    IProps = Record<PropertyKey, unknown>,
    PInstance = unknown,
    RData extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    Ref = unknown,
    ERef = HTMLElement
> = CommonInstance<Props, IProps, PInstance, Ref, ERef> & {
    /**
     * The component state.
     */
    state: Record<PropertyKey, unknown>;
    /**
     * The computed setup data.
     */
    $computedSetup: RData;
} & RData;

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
export declare type Instance<
    Props = Record<PropertyKey, unknown>,
    IProps = Record<PropertyKey, unknown>,
    PInstance = unknown,
    RData extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    Ref = unknown,
    ERef = HTMLElement
> = ComputedInstance<Props, IProps, PInstance, RData, Ref, ERef> & {
    /**
     * The parent component instances.
     */
    $pc: Record<string, ComponentInstance>;
};
