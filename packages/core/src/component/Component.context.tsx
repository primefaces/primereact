import { useProps } from '@primereact/hooks';
import * as React from 'react';
import { defaultProps } from './Component.props';

export const ComponentContext = React.createContext(undefined);

export const ComponentProvider = (inProps: Record<string, unknown> = {}) => {
    const parent = React.useContext(ComponentContext);
    const { props, attrs } = useProps(inProps, defaultProps);
    const { pIf = true, instance: currentInstance, children } = props;

    if (!pIf) return null;

    const instance = {
        ...currentInstance,
        $pc: {
            ...parent?.$pc,
            [`${currentInstance?.name}`]: currentInstance
        }
    };

    return <ComponentContext.Provider value={instance}>{children}</ComponentContext.Provider>;
};
