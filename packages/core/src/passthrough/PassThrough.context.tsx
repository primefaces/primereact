import { useProps } from '@primereact/hooks';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './PassThrough.props';
import type { PassThroughProps } from './PassThrough.types';

export const PassThroughContext = React.createContext(null);

export const PassThroughProvider = (inProps: React.PropsWithChildren<PassThroughProps> = {}) => {
    const { props, attrs } = useProps(inProps, defaultProps);
    const value = null;

    return <PassThroughContext.Provider value={value}>{resolve(attrs.children, value)}</PassThroughContext.Provider>;
};
