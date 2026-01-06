'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/message';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { MessageRoot, defaultRootProps } from 'primereact/message';
import * as React from 'react';

export const UIMessageRoot = withComponent({
    name: 'MessageRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={MessageRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
