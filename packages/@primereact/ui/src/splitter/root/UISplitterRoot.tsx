'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/splitter';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { SplitterRoot, defaultRootProps } from 'primereact/splitter';
import * as React from 'react';

export const UISplitterRoot = withComponent({
    name: 'SplitterRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={SplitterRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
