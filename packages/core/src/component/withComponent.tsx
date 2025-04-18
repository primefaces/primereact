import type { ComponentInstance, withComponentOptions } from '@primereact/types/core';
import type { BaseComponentProps } from '@primereact/types/shared';
import * as React from 'react';
import { ComponentProvider } from './Component.context';
import { useComponent } from './useComponent';

export const withComponent = <I, D, S, C>({ name = 'UnknownComponent', defaultProps, styles, components, setup, render }: withComponentOptions<D, I, S, C>) => {
    const BaseComponent = <T extends React.ElementType>(inProps?: BaseComponentProps<I, T> & D) => {
        const instance = useComponent(name, { inProps, defaultProps, styles, setup });
        const { props } = instance;

        return (
            <ComponentProvider pIf={props.pIf} instance={instance}>
                {render?.(instance as ComponentInstance<D, I, ComponentInstance, S>)}
            </ComponentProvider>
        );
    };

    const Component = BaseComponent as typeof BaseComponent & C & React.FC;

    Component.displayName = `PrimeReact.${name}`;
    Object.entries(components || {}).forEach(([key, value]) => {
        (Component as Record<string, unknown>)[key] = value;
    });

    return Component;
};
