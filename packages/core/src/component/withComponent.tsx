import { ComponentInstance, withComponentProps } from '@primereact/types/core';
import * as React from 'react';
import { ComponentProvider } from './Component.context';
import { useComponent } from './useComponent';

export const withComponent = <I, D extends { __TYPE?: string }, S>({ setup, render, defaultProps, styles }: withComponentProps<D, I, S>) => {
    return ((inProps?: I) => {
        const instance = useComponent(inProps, defaultProps, styles, setup);
        const { props } = instance;

        return (
            <ComponentProvider pIf={props.pIf} instance={instance}>
                {render?.(instance as ComponentInstance<D, I, unknown, S>)}
            </ComponentProvider>
        );
    }) as React.FC<React.PropsWithChildren<I>> & Record<string, unknown>;
};
