'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/toast';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ToastRoot, defaultRootProps } from 'primereact/toast';
import * as React from 'react';

export const UIToastRoot = withComponent({
    name: 'Toast.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ToastRoot} attrs={rootProps} />;
    }
});
