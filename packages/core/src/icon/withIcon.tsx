import { useComponent } from '@primereact/core/component';
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

        type RenderedIconComponentProps = ComponentInstance<typeof instance.props, IProps & DProps, ComponentInstance, RData>;

        const RenderedIconComponent = (render as React.FC<RenderedIconComponentProps>) ?? (() => null);

        return <RenderedIconComponent {...(instance as RenderedIconComponentProps)} />;
    };

    const IconComponent = BaseIconComponent as typeof BaseIconComponent & React.FC;

    IconComponent.displayName = `PrimeReact.Icon.${name}`;

    return IconComponent;
};
