'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/confirmdialog';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ConfirmDialogRoot, defaultRootProps } from 'primereact/confirmdialog';
import * as React from 'react';

export const UIConfirmDialogRoot = withComponent({
    name: 'ConfirmDialogRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ConfirmDialogRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
