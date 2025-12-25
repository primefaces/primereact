'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/metergroup';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { MeterGroupRoot, defaultRootProps } from 'primereact/metergroup';
import * as React from 'react';

export const UIMeterGroupRoot = withComponent({
    name: 'MeterGroupRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={MeterGroupRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
