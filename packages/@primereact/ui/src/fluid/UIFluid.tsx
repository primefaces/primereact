'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/fluid';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { Fluid, defaultProps } from 'primereact/fluid';
import * as React from 'react';

export const UIFluid = withComponent({
    name: 'Fluid',
    defaultProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={Fluid} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
