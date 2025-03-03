import { resolve } from '@primeuix/utils';
import * as React from 'react';

export function createSafeContext<T>(defaultValue: T) {
    const Context = React.createContext(defaultValue);

    const useContext = () => {
        const context = React.useContext(Context);
        if (context === undefined) {
            throw new Error('Context must be used within a Provider');
        }
        return context;
    };

    const Provider = ({ value, children }: React.ProviderProps<T>) => <Context.Provider value={value}>{resolve(children, value)}</Context.Provider>;

    return [Provider, useContext];
}
