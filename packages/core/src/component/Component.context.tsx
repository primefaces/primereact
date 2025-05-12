import type { ComponentInstance, ComponentProviderProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';

export const ComponentContext = React.createContext<ComponentInstance | undefined>(undefined);

export const ComponentProvider = (inProps: ComponentProviderProps = {}) => {
    const { pIf = true, instance, children } = inProps;

    return pIf ? <ComponentContext.Provider value={instance}>{resolve(children, instance)}</ComponentContext.Provider> : null;
};
