'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/toast';
import { withComponent } from '@primereact/ui/base';
import { ToastRoot, defaultRootProps } from 'primereact/toast';
import * as React from 'react';

export const UIToastRoot = withComponent({
    name: 'UIToastRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ToastRoot} attrs={rootProps} />;
    }
});
