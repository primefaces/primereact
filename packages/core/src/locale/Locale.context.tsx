import { useProps } from '@primereact/hooks';
import type { LocaleProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultLocaleProps } from './Locale.props';

export const LocaleContext = React.createContext<LocaleProps | undefined>(undefined);

export const LocaleProvider = (inProps: React.PropsWithChildren<LocaleProps> = {}) => {
    const { attrs } = useProps(inProps, defaultLocaleProps as LocaleProps);
    const value = undefined;

    return <LocaleContext.Provider value={value}>{resolve(attrs.children, value)}</LocaleContext.Provider>;
};
