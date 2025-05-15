import type { ComponentProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';

export const Component = (inProps: ComponentProps = {}) => {
    const { pIf = true, as, asChild, instance, ...props } = inProps;

    if (pIf === false) return null;

    const AsComponent = (as || instance?.props?.as) as React.ElementType;
    const renderAsChild = asChild || instance?.props?.asChild;

    if (!renderAsChild && !AsComponent) return null;

    const { ref = instance?.elementRef, children, attrs: inAttrs, ...attrs } = props;
    const content = resolve(children, { ...inAttrs, ...attrs }) as React.ReactNode;

    return renderAsChild ? (
        <React.Fragment>{content}</React.Fragment>
    ) : AsComponent ? (
        <AsComponent {...inAttrs} {...attrs} ref={ref}>
            {content}
        </AsComponent>
    ) : null;
};

Component.displayName = 'PrimeReact.Component';
