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

    const handleChangePrimary = (primary: string) => {
        setPrimary(primary);
        window.localStorage.setItem('primary', primary);
    };

    const handleChangeSurface = (surface: string) => {
        setSurface(surface);
        window.localStorage.setItem('surface', surface);
    };

    const handleChangeDarkTheme = () => {
        const isDark = !isDarkTheme;

        setDarkTheme(isDark);
        window.localStorage.setItem('isDarkTheme', isDark.toString());
    };

    React.useEffect(() => {
        const isDark = window.localStorage.getItem('isDarkTheme');

        if (isDark) {
            setDarkTheme(isDark === 'true');
        }
    }, []);

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
        storageKey: toValue(storageKey) as string,
        handleChangePrimary,
        handleChangeSurface,
        handleChangeDarkTheme
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
