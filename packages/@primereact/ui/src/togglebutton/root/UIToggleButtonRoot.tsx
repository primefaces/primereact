'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/togglebutton';
import { withComponent } from '@primereact/ui/base';
import { ToggleButtonRoot, defaultRootProps } from 'primereact/togglebutton';
import * as React from 'react';

export const UIToggleButtonRoot = withComponent({
    name: 'UIToggleButtonRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ToggleButtonRoot} attrs={rootProps} />;
    }
});
