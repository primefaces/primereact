import type { ComponentProps, GlobalComponentProps } from '@primereact/types/core';

export const globalProps = {
    ref: undefined,
    pIf: true,
    as: undefined,
    asChild: false,
    pt: undefined,
    ptOptions: undefined,
    unstyled: undefined,
    dt: undefined,
    template: undefined,
    children: undefined
} satisfies GlobalComponentProps;

export const defaultProps = {
    instance: undefined,
    options: undefined
} satisfies ComponentProps;
