'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/contextmenu';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ContextMenuRoot, defaultRootProps } from 'primereact/contextmenu';
import * as React from 'react';

export const UIContextMenuRoot = withComponent({
    name: 'ContextMenuRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ContextMenuRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
