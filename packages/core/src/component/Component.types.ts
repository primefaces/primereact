import type { PassThroughOptions, PassThroughProps } from '@primereact/core/passthrough';

/**
 * Defines the props of the component.
 */
export interface ComponentProps<R = unknown, D = unknown> {
    ref?: React.Ref<R> | undefined;
    pIf?: boolean | undefined;
    as?: React.ElementType | undefined;
    asChild?: boolean | undefined;
    pt?: Pick<PassThroughProps, 'value'> | undefined;
    ptOptions?: PassThroughOptions | undefined;
    unstyled?: boolean | undefined;
    dt?: D | undefined;
    template?: unknown;
    children?: React.ReactNode;
}

export declare type ComponentInstance<R = unknown, E = HTMLElement> = {
    ref?: React.Ref<R> | undefined;
    elementRef?: React.Ref<E> | undefined;
    id?: string | undefined;
    name?: string | undefined;
    props?: Record<string, unknown> | undefined;
    attrs?: Record<string, unknown> | undefined;
    state?: Record<string, unknown> | undefined;
    style?: string | undefined;
    parent?: unknown;
    $el: E;
    $primereact?:
        | {
              config?: unknown;
              locale?: unknown;
              theme?: unknown;
              passthrough?: unknown;
          }
        | undefined;
    $attrSelector?: string | undefined;
} & {
    ptm?: () => void;
    ptmi?: () => void;
    ptmo?: () => void;
} & {
    cx?: () => void;
    sx?: () => void;
    isUnstyled?: boolean | undefined;
} & {
    $pc?: Record<string, unknown>;
};
