import type { ComponentProps } from './Component.types';

export const globalProps = {
    pIf: true,
    ref: undefined,
    as: undefined,
    asChild: false,
    pt: undefined,
    ptOptions: undefined,
    unstyled: undefined,
    dt: undefined,
    template: undefined,
    children: undefined
} satisfies ComponentProps;

/**
 * @alias globalProps
 */
export const defaultProps = globalProps as Partial<ComponentProps>;
