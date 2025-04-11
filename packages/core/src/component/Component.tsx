import type { ComponentProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { ComponentContext } from './Component.context';

export const Component = (inProps: ComponentProps = {}) => {
    const context = React.useContext(ComponentContext);
    const { pIf = true, ...props } = inProps;

    if (pIf === false || (!props.asChild && !props.as)) return null;

    const { as: AsComponent, asChild, instance = context, children, options, ...rest } = props;
    const content = resolve(children, { ...rest, ...options, ...instance }) as React.ReactNode;

    return asChild ? <React.Fragment>{content}</React.Fragment> : AsComponent ? <AsComponent {...rest}>{content}</AsComponent> : null;
};

Component.displayName = 'PrimeReact.Component';
