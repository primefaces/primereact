import { omit } from '@primeuix/utils';
import * as React from 'react';
import { ComponentInstance } from './Component.types';
import { useComponentPT } from './useComponentPT';
import { useComponentStyle } from './useComponentStyle';

export const useComponent = (inInstance: ComponentInstance, ref?: any, styles?: any, callback?: any): ComponentInstance => {
    const ptx = useComponentPT(inInstance);
    const stx = useComponentStyle(inInstance, styles);
    const common = {
        ...inInstance,
        ...ptx,
        ...stx
    };

    const instance = {
        ...common,
        ...callback?.(common)
    };

    React.useImperativeHandle(ref, () => omit(instance, 'ref') as any, []);

    return instance;
};
