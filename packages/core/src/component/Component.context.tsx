import { useProps } from '@primereact/hooks';
import * as React from 'react';
import { defaultProps } from './Component.props';

export const ComponentContext = React.createContext(undefined);

export const ComponentProvider = (inProps: Record<string, unknown> = {}) => {
    const parent = React.useContext(ComponentContext);
    const { props } = useProps(inProps, defaultProps);
    const { pIf = true, instance: currentInstance, children } = inProps;

    const instance = {
        ...currentInstance,
        $pc: {
            ...parent?.$pc,
            [`${currentInstance?.name}`]: currentInstance
        }
    };

    React.useImperativeHandle(instance.ref, () => instance as any);

    return pIf ? <ComponentContext.Provider value={instance}>{children}</ComponentContext.Provider> : null;
};
