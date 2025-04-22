import { ComponentProvider, useComponent } from '@primereact/core/component';
import type { ComponentInstance, useBaseOptions, withIconOptions } from '@primereact/types/core';
import * as React from 'react';
import { useIcon } from './useIcon';

export const withIcon = <IProps, DProps, RData>({ name = 'UnknownIcon', defaultProps, styles, render }: withIconOptions<IProps, DProps, RData>) => {
    const BaseIconComponent = (inProps?: IProps) => {
        const icon = useIcon(inProps);
        const setup = {
            test: 'test'
        };
        const instance = useComponent(name, {
            inProps,
            defaultProps,
            styles,
            setup
        } as useBaseOptions<IProps, DProps, ComponentInstance, { test: string }>);
        const { props } = instance;
        const { pIf = true } = props;

        type RenderedIconComponentProps = ComponentInstance<typeof props, IProps, ComponentInstance, RData>;

        const RenderedIconComponent = (render as React.FC<RenderedIconComponentProps>) ?? (() => null);

        return (
            <ComponentProvider pIf={pIf} instance={instance}>
                <RenderedIconComponent {...(instance as RenderedIconComponentProps)} />
            </ComponentProvider>
        );
    };

    const IconComponent = BaseIconComponent as typeof BaseIconComponent & React.FC;

    IconComponent.displayName = `PrimeReact.Icon.${name}`;

    return IconComponent;
};
