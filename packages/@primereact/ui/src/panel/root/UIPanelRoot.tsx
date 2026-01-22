'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/panel';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { PanelRoot, defaultRootProps } from 'primereact/panel';
import * as React from 'react';

export const UIPanelRoot = withComponent({
    name: 'UIPanelRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={PanelRoot} attrs={rootProps} />;
    }
});
