import type { ComponentInstance, InComponentInstance, useComponentOptions, withComponentOptions } from '@primereact/types/core';
import type { BaseComponentProps } from '@primereact/types/shared';
import type { StylesOptions } from '@primereact/types/styles';
import * as React from 'react';
import { useComponent } from './useComponent';

export const withComponent = <IProps, DProps, Exposes extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, Styles = StylesOptions, CData = Record<string, unknown>>({
    name = 'UnknownComponent',
    defaultProps,
    styles,
    components,
    setup,
    render
}: withComponentOptions<IProps, DProps, Exposes, Styles, CData>) => {
    const BaseComponent = <I extends ComponentInstance, T extends React.ElementType>(inProps?: BaseComponentProps<I, IProps, T> & DProps) => {
        const instance = useComponent(name, { inProps, defaultProps, styles, setup } as useComponentOptions<BaseComponentProps<I, IProps, T> & DProps, DProps, Exposes, Styles>);

        type RenderedComponentProps = InComponentInstance<typeof instance.props, BaseComponentProps<I, IProps, T> & DProps, typeof instance.state, Exposes>;

        const RenderedComponent = (render as React.FC<RenderedComponentProps>) ?? (() => null);

        return instance.props.pIf ? <RenderedComponent {...(instance as RenderedComponentProps)} /> : null;
    };

    const Component = React.memo(BaseComponent, (prevProps, nextProps) => {
        // @ts-expect-error prop types are not compatible
        return prevProps === nextProps && Object.keys(defaultProps || {}).every((key) => prevProps?.[key] === nextProps?.[key]);
    }) as unknown as typeof BaseComponent & CData & React.FC;

    Component.displayName = `PrimeReact.${name}`;
    Object.entries(components || {}).forEach(([key, value]) => {
        (Component as Record<string, unknown>)[key] = value;
    });

    return Component;
};
