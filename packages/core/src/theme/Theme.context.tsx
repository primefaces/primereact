import { useProps } from '@primereact/hooks';
import type { ThemeProps } from '@primereact/types/core';
import { Theme } from '@primeuix/styled';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Theme.props';

export const ThemeContext = React.createContext<ThemeProps | null>(null);

export const ThemeProvider = (inProps: React.PropsWithChildren<ThemeProps> = {}) => {
    const { props, attrs } = useProps(inProps, defaultProps);

    const value = {
        preset: props.preset,
        stylesheet: props.stylesheet
    };

    Theme.setTheme({ preset: props.preset });

    return <ThemeContext.Provider value={value}>{resolve(attrs.children, value)}</ThemeContext.Provider>;
};
