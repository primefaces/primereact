'use client';
import { useProps } from '@primereact/hooks';
import type { ThemeProps } from '@primereact/types/core';
import { Theme } from '@primeuix/styled';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultThemeProps } from './Theme.props';

export const ThemeContext = React.createContext<ThemeProps | null>(null);

export const ThemeProvider = (inProps: ThemeProps = {}) => {
    const { props } = useProps(inProps, defaultThemeProps);
    const { stylesheet, preset, ...rest } = props;

    const value = {
        preset,
        stylesheet,
        ...rest
    };

    Theme.setTheme({ preset, options: rest });

    return <ThemeContext.Provider value={value}>{resolve(inProps.children, value)}</ThemeContext.Provider>;
};
