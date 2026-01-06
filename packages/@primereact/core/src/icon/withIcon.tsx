import { withComponent } from '@primereact/core/component';
import type { BaseSetup, IconExposes, withComponentOptions } from '@primereact/types/core';
import type { StylesOptions } from '@primereact/types/styles';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { useIcon } from './useIcon';

/**
 * Higher-order component for enhancing icon components.
 *
 * @template IProps - The interface for the icon component's props.
 * @template DProps - The interface for the default properties of the icon component.
 * @template Exposes - The interface for the properties exposed by the icon component.
 * @template Styles - The styles options for the icon component.
 * @template CData - The context data for the icon component.
 *
 * @param options - The options for the icon component.
 * @param options.name - The name of the icon component.
 * @param options.defaultProps - The default properties for the icon component.
 * @param options.styles - The styles options for the icon component.
 * @param options.components - The components to be used within the icon component.
 * @param options.setup - The setup function for the icon component.
 * @param options.render - The render function for the icon component.
 * @returns A React component wrapped with the specified options.
 */
export function withIcon<IProps, DProps, Exposes extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, Styles = StylesOptions, CData = Record<string, unknown>>({
    name,
    defaultProps,
    styles,
    components,
    setup,
    render
}: withComponentOptions<IProps, DProps, Exposes & IconExposes, Styles, CData>) {
    return withComponent<IProps, DProps, Exposes & IconExposes, Styles, CData>({
        name: `${name ?? 'Unknown'}Icon`,
        defaultProps,
        styles,
        components,
        setup(instance) {
            const icon = useIcon(instance?.inProps);
            const computedSetup = resolve(setup as BaseSetup<typeof instance.props, IProps, Exposes>, instance) as Exposes;

            return React.useMemo(
                () => ({
                    ...icon,
                    ...computedSetup
                }),
                [icon, computedSetup]
            );
        },
        render
    });
}
