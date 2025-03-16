import type { StylesOptions } from '@primereact/types/styles';
import * as React from 'react';
import { ComponentProvider } from './Component.context';
import { useComponent } from './useComponent';

export const withComponent = <P,>({ setup, render, defaultProps, styles }: { setup?: any; render?: any; defaultProps?: any; styles?: StylesOptions }): React.FC<React.PropsWithChildren<P>> => {
    return (inProps?: P) => {
        const instance = useComponent(inProps, defaultProps, styles, setup);
        const { props } = instance;

        return (
            <ComponentProvider pIf={props.pIf} instance={instance}>
                {render?.(instance)}
            </ComponentProvider>
        );
    };
};
