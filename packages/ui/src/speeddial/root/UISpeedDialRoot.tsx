'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/speeddial';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { SpeedDialRoot, defaultRootProps } from 'primereact/speeddial';
import * as React from 'react';

export const UISpeedDialRoot = withComponent({
    name: 'SpeedDialRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={SpeedDialRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
