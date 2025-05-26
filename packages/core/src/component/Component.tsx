import type { ComponentProps } from '@primereact/types/core';
import { cn, resolve } from '@primeuix/utils';
import * as React from 'react';

export const Component = (inProps: ComponentProps = {}) => {
    const { pIf = true, style, className, as, asChild, instance, ...props } = inProps;

    if (pIf === false) return null;

    const AsComponent = (as || instance?.props?.as || React.Fragment) as React.ElementType;
    const renderAsChild = asChild || instance?.props?.asChild;
    const isFragment = AsComponent === React.Fragment;

    //if (!renderAsChild && !AsComponent) return null;

    const { ref = instance?.elementRef, children, attrs: inAttrs, ...restAttrs } = props;
    const attrs = { ...inAttrs, ...restAttrs };
    const content = resolve(children, instance, attrs) as React.ReactNode;
    const styles = resolve(style || instance?.props?.style, instance) as React.CSSProperties | undefined;
    const classNames = resolve(className || instance?.props?.className, instance) as string | undefined;

    return renderAsChild || isFragment ? (
        <React.Fragment>{content}</React.Fragment>
    ) : (
        <AsComponent {...attrs} ref={ref} style={{ ...attrs.style, ...styles }} className={cn(attrs.className, classNames)}>
            {content}
        </AsComponent>
    );
};

Component.displayName = 'PrimeReact.Component';
