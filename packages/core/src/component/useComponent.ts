import { useBase } from '@primereact/core/base';
import type { InComponentInstance, useBaseOptions, useComponentOptions } from '@primereact/types/core';
import * as React from 'react';
import { globalProps } from './Component.props';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

/**
 * A hook for creating a component instance.
 * This hook initializes a component with properties, attributes, and styles, and provides methods for handling pass-through options and styles.
 * It also supports custom setup functions for additional configuration.
 * @param name The name of the component, used for debugging and identification.
 * @param options The options to customize the component instance.
 * @returns The component instance.
 */
export function useComponent<IProps, DProps, Exposes extends Record<PropertyKey, unknown>, Styles>(name: string = 'UnknownComponent', options: useComponentOptions<IProps, DProps, Exposes, Styles> = {}) {
    const defaultProps = React.useMemo(() => ({ ...globalProps, ...options.defaultProps }), [options.defaultProps]);
    const baseInstance = useBase(name, {
        inProps: options.inProps,
        defaultProps,
        setup: options.setup
    } as useBaseOptions<IProps & { id?: string; ref?: React.Ref<unknown> }, typeof defaultProps, Exposes>);

    const { ref, props } = baseInstance;
    const $params = React.useMemo(() => {
        return {
            instance: baseInstance,
            props: baseInstance.props,
            attrs: baseInstance.attrs,
            state: baseInstance.state
        };
    }, [baseInstance.props, baseInstance.attrs, baseInstance.state]);

    const ptx = useComponentPT(baseInstance, $params);
    const stx = useComponentStyle(baseInstance, props.styles || options.styles, $params);

    const instance = React.useMemo<InComponentInstance<typeof props, IProps, typeof baseInstance.state, Exposes>>(
        () => ({
            ...baseInstance,
            ...ptx,
            ...stx
        }),
        [baseInstance, ptx, stx]
    );

    React.useImperativeHandle(ref as React.Ref<InComponentInstance<typeof props, IProps, typeof baseInstance.state, Exposes>>, () => instance, [instance]);

    return instance;
}
