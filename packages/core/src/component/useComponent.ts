import { useBase } from '@primereact/core/base';
import type { ComponentInstance, useBaseOptions, useComponentOptions } from '@primereact/types/core';
import * as React from 'react';
import { globalProps } from './Component.props';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = <IProps, DProps, PInstance, RData>(name: string = 'UnknownComponent', options: useComponentOptions<IProps, DProps, PInstance, RData> = {}) => {
    const defaultProps = { ...globalProps, ...options.defaultProps };
    const baseInstance = useBase(name, {
        inProps: options.inProps,
        defaultProps,
        setup: options.setup
    } as useBaseOptions<IProps & { id?: string; ref?: React.Ref<unknown> }, typeof defaultProps, PInstance, RData>);

    const { ref, props, parent } = baseInstance;
    const { styles } = options;

    const ptx = useComponentPT(baseInstance);
    const stx = useComponentStyle(baseInstance, props.styles || styles);

    const instance: ComponentInstance<typeof props, IProps, typeof parent> = {
        ...baseInstance,
        ...ptx,
        ...stx,
        $pc: {}
    };

    // Inject parent component instances and self instance
    instance.$pc = {
        ...parent?.$pc,
        [name]: instance as ComponentInstance // @todo - update type
    };

    React.useImperativeHandle(ref, () => instance, [instance]);

    return instance;
};
