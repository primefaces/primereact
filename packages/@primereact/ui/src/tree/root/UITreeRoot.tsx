'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/tree';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { TreeRoot, defaultRootProps } from 'primereact/tree';
import * as React from 'react';

export const UITreeRoot = withComponent({
    name: 'TreeRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={TreeRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
