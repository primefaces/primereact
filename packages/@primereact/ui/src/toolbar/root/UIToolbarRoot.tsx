'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/toolbar';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ToolbarRoot, defaultRootProps } from 'primereact/toolbar';
import * as React from 'react';

export const UIToolbarRoot = withComponent({
    name: 'UIToolbarRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ToolbarRoot} attrs={rootProps} />;
    }
});
