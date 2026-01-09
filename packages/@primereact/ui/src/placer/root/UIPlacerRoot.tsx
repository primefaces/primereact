'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/';
import { withComponent } from '@primereact/ui/base';
import { PanelRoot, defaultRootProps } from 'primereact/panel';
import * as React from 'react';

export const UIPlacerRoot = withComponent({
    name: 'UIPlacerRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={PanelRoot} attrs={rootProps} />;
    }
});
