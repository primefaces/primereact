import type { InComponentInstance, useBaseOptions, withComponentOptions } from '@primereact/types/core';
import type { BaseComponentProps } from '@primereact/types/shared';
import * as React from 'react';
import { useComponent } from './useComponent';

export const withComponent = <IProps, DProps, Exposes extends Record<PropertyKey, unknown>, CData>({ name = 'UnknownComponent', defaultProps, styles, components, setup, render }: withComponentOptions<IProps, DProps, Exposes, CData>) => {
    const BaseComponent = <T extends React.ElementType>(inProps?: BaseComponentProps<IProps, T> & DProps) => {
        const instance = useComponent(name, { inProps, defaultProps, styles, setup } as useBaseOptions<BaseComponentProps<IProps, T> & DProps, DProps, Exposes>);

        type RenderedComponentProps = InComponentInstance<typeof instance.props, BaseComponentProps<IProps, T> & DProps, typeof instance.state, Exposes>;

        const RenderedComponent = (render as React.FC<RenderedComponentProps>) ?? (() => null);

        return instance.props.pIf ? <RenderedComponent {...(instance as RenderedComponentProps)} /> : null;
    };

    const Component = React.memo(BaseComponent, (prevProps, nextProps) => {
        return prevProps === nextProps && Object.keys(defaultProps || {}).every((key) => prevProps?.[key] === nextProps?.[key]);
    }) as unknown as typeof BaseComponent & CData & React.FC;

    Component.displayName = `PrimeReact.${name}`;
    Object.entries(components || {}).forEach(([key, value]) => {
        (Component as Record<string, unknown>)[key] = value;
    });

    return Component;
};
