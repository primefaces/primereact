'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/togglebuttongroup';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ToggleButtonGroup, defaultProps } from 'primereact/togglebuttongroup';
import * as React from 'react';

export const UIToggleButtonGroup = withComponent({
    name: 'ToggleButtonGroup',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ToggleButtonGroup} attrs={rootProps} />;
    }
});
