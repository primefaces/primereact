import type { ComponentInstance, useBaseOptions, withComponentOptions } from '@primereact/types/core';
import type { BaseComponentProps } from '@primereact/types/shared';
import * as React from 'react';
import { ComponentProvider } from './Component.context';
import { useComponent } from './useComponent';

export const withComponent = <IProps, DProps, RData extends Record<PropertyKey, unknown>, CData>({ name = 'UnknownComponent', defaultProps, styles, components, setup, render }: withComponentOptions<IProps, DProps, RData, CData>) => {
    const BaseComponent = React.memo(<T extends React.ElementType>(inProps?: BaseComponentProps<IProps, T> & DProps) => {
        const instance = useComponent(name, { inProps, defaultProps, styles, setup } as useBaseOptions<BaseComponentProps<IProps, T> & DProps, DProps, ComponentInstance, RData>);
        const { props } = instance;
        const { pIf = true } = props;

        type RenderedComponentProps = ComponentInstance<typeof props, BaseComponentProps<IProps, T> & DProps, ComponentInstance, RData>;

        const RenderedComponent = (render as React.FC<RenderedComponentProps>) ?? (() => null);

        return (
            <ComponentProvider pIf={pIf} instance={instance}>
                <RenderedComponent {...(instance as RenderedComponentProps)} />
            </ComponentProvider>
        );
    });

    const Component = BaseComponent as typeof BaseComponent & CData & React.FC;

    Component.displayName = `PrimeReact.${name}`;
    Object.entries(components || {}).forEach(([key, value]) => {
        (Component as Record<string, unknown>)[key] = value;
    });

    return Component;
};
