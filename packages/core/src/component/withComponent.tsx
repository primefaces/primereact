import { ComponentInstance, withComponentProps } from '@primereact/types/core';
import * as React from 'react';
import { ComponentProvider } from './Component.context';
import { useComponent } from './useComponent';

export const withComponent = <I, D extends { __TYPE?: string }, S, C>({ name, defaultProps, styles, components, setup, render }: withComponentProps<D, I, S, C>) => {
    const ComponentBase: React.FC<React.PropsWithChildren<I & D>> = (inProps?: I) => {
        const instance = useComponent(inProps, defaultProps, styles, setup);
        const { props } = instance;

        return (
            <ComponentProvider pIf={props.pIf} instance={instance}>
                {render?.(instance as ComponentInstance<D, I, unknown, S>)}
            </ComponentProvider>
        );
    };

    const Component = ComponentBase as typeof ComponentBase & C;

    Component.displayName = `PrimeReact.${name || defaultProps?.__TYPE || 'UnknownComponent'}`;
    Object.entries(components || {}).forEach(([key, value]) => {
        (Component as Record<string, unknown>)[key] = value;
    });

    return Component;
};
