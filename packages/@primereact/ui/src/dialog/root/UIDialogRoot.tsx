'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/dialog';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { DialogRoot, defaultRootProps } from 'primereact/dialog';
import * as React from 'react';

export const UIDialogRoot = withComponent({
    name: 'DialogRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={DialogRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
