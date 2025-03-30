import type { ComponentInstance, ComponentProviderProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';

export const ComponentContext = React.createContext<ComponentInstance | undefined>(undefined);

export const ComponentProvider = (inProps: ComponentProviderProps = {}) => {
    const parent = React.useContext(ComponentContext);
    const { pIf = true, instance: currentInstance, children } = inProps;

    // @todo: This is a hack to get the parent component instance
    const instance: ComponentInstance = {
        ...currentInstance
        /*$pc: {
            ...parent?.$pc,
            [`${currentInstance?.name}`]: currentInstance
        }*/
    };

    //React.useImperativeHandle(instance.ref, () => instance);

    return pIf ? <ComponentContext.Provider value={instance}>{resolve(children, instance)}</ComponentContext.Provider> : null;
};
