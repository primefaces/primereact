import { useProps } from '@primereact/hooks';
import type { PassThroughProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './PassThrough.props';

export const PassThroughContext = React.createContext<PassThroughProps | undefined>(undefined);

export const PassThroughProvider = (inProps: React.PropsWithChildren<PassThroughProps> = {}) => {
    const { attrs } = useProps(inProps, defaultProps as PassThroughProps);
    const value = undefined;

    return <PassThroughContext.Provider value={value}>{resolve(attrs.children, value)}</PassThroughContext.Provider>;
};
