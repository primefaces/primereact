import type { ComponentProps, GlobalComponentProps } from '@primereact/types/core';
import { omit } from '@primeuix/utils';

export const globalProps: GlobalComponentProps = {
    ref: undefined,
    pIf: true,
    style: undefined,
    className: undefined,
    as: undefined,
    asChild: false,
    pt: undefined,
    ptOptions: undefined,
    unstyled: undefined,
    dt: undefined,
    children: undefined
};

export const defaultComponentProps: ComponentProps = {
    ...(omit(globalProps, 'pt', 'ptOptions', 'dt', 'styles') as Record<PropertyKey, unknown>),
    instance: undefined,
    attrs: undefined
};
