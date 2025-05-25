import type { ComponentProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';

export const Component = (inProps: ComponentProps = {}) => {
    const { pIf = true, style, className, as, asChild, instance, ...props } = inProps;

    if (pIf === false) return null;

    const AsComponent = (as || instance?.props?.as || React.Fragment) as React.ElementType;
    const renderAsChild = asChild || instance?.props?.asChild;
    const isFragment = AsComponent === React.Fragment;

    //if (!renderAsChild && !AsComponent) return null;

    const { ref = instance?.elementRef, children, attrs: inAttrs, ...attrs } = props;
    const content = resolve(children, instance, { ...inAttrs, ...attrs }) as React.ReactNode;
    const styles = resolve(style, instance) as React.CSSProperties | undefined;
    const classNames = resolve(className, instance) as string | undefined;

    return renderAsChild || isFragment ? (
        <React.Fragment>{content}</React.Fragment>
    ) : (
        <AsComponent {...inAttrs} {...attrs} ref={ref} style={styles} className={classNames}>
            {content}
        </AsComponent>
    );
};

Component.displayName = 'PrimeReact.Component';
