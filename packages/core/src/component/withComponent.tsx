import type { ComponentInstance, InComponentInstance, useComponentOptions, withComponentOptions } from '@primereact/types/core';
import type { BaseComponentProps } from '@primereact/types/shared';
import type { StylesOptions } from '@primereact/types/styles';
import { isObject } from '@primeuix/utils';
import * as React from 'react';
import { useComponent } from './useComponent';

/**
 * A higher-order component for enhancing a component with additional features.
 *
 * @template IProps The interface for the component's input properties.
 * @template DProps The interface for the component's default properties.
 * @template Exposes The interface for the properties that the component exposes.
 * @template Styles The styles options for the component.
 * @template CData Additional data to expose on the component.
 *
 * @param options The options for the component.
 * @param options.name The name of the component, used for debugging and identification.
 * @param options.defaultProps The default properties for the component.
 * @param options.styles The styles to apply to the component.
 * @param options.components Additional components to include in the component.
 * @param options.setup A setup function for additional configuration of the component.
 * @param options.render A render function for the component.
 * @returns A React component wrapped with the specified options.
 */
export function withComponent<IProps, DProps, Exposes extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, Styles = StylesOptions, CData = Record<string, unknown>>({
    name = 'UnknownComponent',
    defaultProps,
    styles,
    components,
    setup,
    render
}: withComponentOptions<IProps, DProps, Exposes, Styles, CData>) {
    type InProps<I extends ComponentInstance, T extends React.ElementType> = BaseComponentProps<I, IProps, unknown, T> & DProps;

    const BaseComponent = <I extends ComponentInstance, T extends React.ElementType>(inProps?: InProps<I, T>) => {
        const instance = useComponent(name, { inProps, defaultProps, styles, setup } as useComponentOptions<InProps<I, T>, DProps, Exposes, Styles>);

        type RenderedComponentProps = InComponentInstance<typeof instance.props, InProps<I, T>, typeof instance.state, Exposes>;

        const RenderedComponent = (render as React.FC<RenderedComponentProps>) ?? (() => null);

        return instance.props.pIf ? <RenderedComponent {...(instance as RenderedComponentProps)} /> : null;
    };

    const Component = React.memo(BaseComponent, (prevProps, nextProps) => {
        if (!isObject(prevProps) || !isObject(nextProps)) {
            return false;
        }

        // Compare shallow equality for all defaultProps keys
        return prevProps === nextProps && Object.keys(defaultProps || {}).every((key) => (prevProps as Record<string, unknown>)[key] === (nextProps as Record<string, unknown>)[key]);
    }) as unknown as typeof BaseComponent & CData & React.FC;

    Component.displayName = `PrimeReact.${name}`;
    Object.entries(components || {}).forEach(([key, value]) => {
        (Component as Record<string, unknown>)[key] = value;
    });

    return Component;
}
