import { useBase } from '@primereact/core/base';
import type { ComponentInstance, useBaseOptions, useComponentOptions } from '@primereact/types/core';
import * as React from 'react';
import { globalProps } from './Component.props';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = <IProps, DProps, PInstance, RData extends Record<PropertyKey, unknown>>(name: string = 'UnknownComponent', options: useComponentOptions<IProps, DProps, PInstance, RData> = {}) => {
    const defaultProps = React.useMemo(() => ({ ...globalProps, ...options.defaultProps }), [options.defaultProps]);
    const baseInstance = useBase(name, {
        inProps: options.inProps,
        defaultProps,
        setup: options.setup
    } as useBaseOptions<IProps & { id?: string; ref?: React.Ref<unknown> }, typeof defaultProps, PInstance, RData>);

    const { ref, props, parent } = baseInstance;

    const ptx = useComponentPT(baseInstance);
    const stx = useComponentStyle(baseInstance, props.styles || options.styles);

    const instance = React.useMemo<ComponentInstance<typeof props, IProps, typeof parent, RData>>(
        () => ({
            ...baseInstance,
            ...ptx,
            ...stx,
            $pc: parent
                ? {
                      ...parent.$pc,
                      [parent.name!]: parent
                  }
                : {}
        }),
        [baseInstance, ptx, stx, parent]
    );

    React.useImperativeHandle(ref as React.Ref<ComponentInstance<typeof props, IProps, typeof parent, RData>>, () => instance, [instance]);

    return instance;
};
