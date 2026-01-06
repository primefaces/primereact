'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/scrollarea';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ScrollAreaRoot, defaultRootProps } from 'primereact/scrollarea';
import * as React from 'react';

export const UIScrollAreaRoot = withComponent({
    name: 'ScrollAreaRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ScrollAreaRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
