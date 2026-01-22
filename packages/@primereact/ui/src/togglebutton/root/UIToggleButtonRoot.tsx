'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/togglebutton';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ToggleButtonRoot, defaultRootProps } from 'primereact/togglebutton';
import * as React from 'react';

export const UIToggleButtonRoot = withComponent({
    name: 'ToggleButton.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ToggleButtonRoot} attrs={rootProps} />;
    }
});
