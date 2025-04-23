import { ComponentProvider, useComponent } from '@primereact/core/component';
import type { ComponentInstance, withIconOptions } from '@primereact/types/core';
import * as React from 'react';
import { useIcon } from './useIcon';

export const withIcon = <IProps, DProps, RData extends Record<PropertyKey, unknown>>({ name = 'UnknownIcon', defaultProps, styles, render }: withIconOptions<IProps, DProps, RData>) => {
    const BaseIconComponent = (inProps?: IProps & DProps) => {
        const instance = useComponent(name, {
            inProps,
            defaultProps,
            styles,
            setup: () => {
                return useIcon(inProps);
            }
        });
        const { props } = instance;
        const { pIf = true } = props;

        type RenderedIconComponentProps = ComponentInstance<typeof props, IProps & DProps, ComponentInstance, RData>;

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
