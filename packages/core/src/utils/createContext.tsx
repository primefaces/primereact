import { resolve } from '@primeuix/utils';
import * as React from 'react';

function createContext<T>(defaultValue?: T, fallback?: () => never | T | undefined) {
    const Context = React.createContext<T | undefined>(defaultValue);

    const useContext = () => {
        const context = React.useContext(Context);

        if (context === undefined) {
            return fallback?.();
        }

        return context;
    };

    const Provider = ({ value, children }: { value: T; children: React.ReactNode }) => <Context.Provider value={value}>{resolve(children, value)}</Context.Provider>;

    return [Provider, useContext] as const;
}

export function createSafeContext<T>(defaultValue?: T, message?: string) {
    return createContext<T>(defaultValue, () => {
        throw new Error(message || 'Context must be used within a Provider');
    });
}

export function createOptionalContext<T>(defaultValue?: T) {
    return createContext<T>(defaultValue, () => {
        return defaultValue;
    });
}
