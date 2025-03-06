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
 * @todo - update the globalProps object to include default values for any missing properties.
 */
export const defaultProps = globalProps as Partial<ComponentProps>;
