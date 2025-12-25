'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/confirmpopup';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ConfirmPopupRoot, defaultRootProps } from 'primereact/confirmpopup';
import * as React from 'react';

export const UIConfirmPopupRoot = withComponent({
    name: 'ConfirmPopupRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ConfirmPopupRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
