import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { ComponentContext } from './Component.context';
import type { ComponentProps } from './Component.types';

export const Component = (inProps: ComponentProps = {}) => {
    const context = React.useContext(ComponentContext);

    if (inProps.pIf === false) return null;

    const { as, asChild, pIf, instance = context, children, options, ...rest } = inProps || {};
    const AsComponent = asChild ? React.Fragment : as;

    return AsComponent ? <AsComponent {...rest}>{resolve(children, { ...rest, ...options }, instance)}</AsComponent> : null;
};
