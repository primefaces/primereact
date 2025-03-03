import { useProps } from '@primereact/hooks';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Locale.props';
import type { LocaleProps } from './Locale.types';

export const LocaleContext = React.createContext(undefined);

export const LocaleProvider = (inProps: React.PropsWithChildren<LocaleProps> = {}) => {
    const { props, attrs } = useProps(inProps, defaultProps as LocaleProps);
    const value = null;

    return <LocaleContext.Provider value={value}>{resolve(attrs.children, value)}</LocaleContext.Provider>;
};
