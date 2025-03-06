import * as React from 'react';
import { ComponentInstance } from './Component.types';
import { useComponentPT } from './useComponentPT';

export const useComponent = (inInstance: ComponentInstance, ref?: any, callback?: any): ComponentInstance => {
    const ptx = useComponentPT(inInstance);
    const common = {
        ...inInstance,
        ...ptx
    };

    const instance = { ...common, ...callback?.(common) };

    React.useImperativeHandle(ref, () => instance as any);

    return instance;
};
