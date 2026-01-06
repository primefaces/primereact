import { isValidElement } from '@primereact/core/utils';
import type { ComponentInstance, ComponentProps } from '@primereact/types/core';
import { cn, resolve } from '@primeuix/utils';
import * as React from 'react';

/**
 * A component wrapper for rendering elements with additional props and attributes.
 * @param inProps The properties to pass to the component.
 * @returns A React element or null if `pIf` is false.
 */
export function Component<I extends ComponentInstance = ComponentInstance>(inProps: ComponentProps<I> = {}) {
    const { pIf = true, style, className, as, asChild, instance, ...props } = inProps;

    if (pIf === false) return null;

    const AsComponent = (as || instance?.props?.as || React.Fragment) as React.ElementType;
    const renderAsChild = asChild || instance?.props?.asChild;
    const isFragment = AsComponent === React.Fragment;

    const { ref = instance?.elementRef, children, attrs: inAttrs, ...restAttrs } = props;
    const attrs = { ...inAttrs, ...restAttrs } as React.HTMLAttributes<HTMLElement>;
    // @ts-expect-error: Update resolve to handle attrs correctly
    const content = resolve(children, instance, attrs) as React.ReactNode;
    const styles = resolve(style || instance?.props?.style, instance) as React.CSSProperties | undefined;
    const classNames = resolve(className || instance?.props?.className, instance) as string | undefined;

    return renderAsChild || isFragment ? (
        <React.Fragment>{content}</React.Fragment>
    ) : isValidElement(AsComponent) ? (
        resolve(AsComponent, instance)
    ) : (
        <AsComponent {...attrs} ref={ref} style={{ ...attrs.style, ...styles }} className={cn(attrs.className, classNames)}>
            {content}
        </AsComponent>
    );
}

Component.displayName = 'PrimeReact.Component';
