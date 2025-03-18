import { ComponentProvider, useComponent } from '@primereact/core/component';
import type { StylesOptions } from '@primereact/types/styles';
import * as React from 'react';
import { useIcon } from './useIcon';

export const withIcon = <P,>({ render, defaultProps, styles }: { render?: any; defaultProps?: any; styles?: StylesOptions }): React.FC<React.PropsWithChildren<P>> => {
    return (inProps?: P) => {
        const icon = useIcon(inProps);
        const instance = useComponent(inProps, defaultProps, styles, icon);
        const { props } = instance;

        return (
            <ComponentProvider pIf={props.pIf} instance={instance}>
                {render?.(instance)}
            </ComponentProvider>
        );
    };
};
