import { useProps } from '@primereact/hooks';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Theme.props';
import type { ThemeProps } from './Theme.types';

export const ThemeContext = React.createContext<ThemeProps | null>(null);

export const ThemeProvider = (inProps: React.PropsWithChildren<ThemeProps> = {}) => {
    const { props, attrs } = useProps(inProps, defaultProps);
    const value = null;

    return <ThemeContext.Provider value={value}>{resolve(attrs.children, value)}</ThemeContext.Provider>;
};
