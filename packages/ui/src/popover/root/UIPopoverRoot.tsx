'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/popover';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { PopoverRoot, defaultRootProps } from 'primereact/popover';
import * as React from 'react';

export const UIPopoverRoot = withComponent({
    name: 'PopoverRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={PopoverRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
