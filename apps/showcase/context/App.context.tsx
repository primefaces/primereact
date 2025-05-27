'use client';
import type { AppContextProps, AppProviderProps } from '@/types/App.types';
import { toValue } from '@primeuix/utils';
import * as React from 'react';

export const AppContext = React.createContext<AppProviderProps | null>(null);

export function AppProvider(props: AppContextProps) {
    const [preset, setPreset] = React.useState(props.preset);
    const [primary, setPrimary] = React.useState(props.primary);
    const [surface, setSurface] = React.useState(props.surface);
    const [isDarkTheme, setDarkTheme] = React.useState(props.isDarkTheme ?? false);
    const [isNewsActive, setNewsActive] = React.useState(props.isNewsActive ?? false);
    const [isRTL, setRTL] = React.useState(props.isRTL ?? false);
    const storageKey = React.useRef(props.storageKey || '');

    const value = {
        preset,
        setPreset,
        primary,
        setPrimary,
        surface,
        setSurface,
        isDarkTheme,
        setDarkTheme,
        isNewsActive,
        setNewsActive,
        isRTL,
        setRTL,
        storageKey: toValue(storageKey) as string
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
