'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/progressbar';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ProgressBarRoot, defaultRootProps } from 'primereact/progressbar';
import * as React from 'react';

export const UIProgressBarRoot = withComponent({
    name: 'ProgressBarRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ProgressBarRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
