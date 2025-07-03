import { useProps } from '@primereact/hooks';
import type { PassThroughProps } from '@primereact/types/core';
import { resolve } from '@primeuix/utils';
import * as React from 'react';
import { defaultPTProps } from './PassThrough.props';

export const PassThroughContext = React.createContext<PassThroughProps | undefined>(undefined);

export const PassThroughProvider = (inProps: React.PropsWithChildren<PassThroughProps> = {}) => {
    const { props, attrs } = useProps(inProps, defaultPTProps as PassThroughProps);
    const { value, ...rest } = props;

    const pt = {
        value,
        options: rest
    };

    return <PassThroughContext.Provider value={pt}>{resolve(attrs.children, pt)}</PassThroughContext.Provider>;
};
