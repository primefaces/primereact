'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/colorpicker';
import { withComponent } from '@primereact/ui/base';
import { ColorPickerRoot, defaultRootProps } from 'primereact/colorpicker';
import * as React from 'react';

export const UIColorPickerRoot = withComponent({
    name: 'UIColorPickerRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ColorPickerRoot} attrs={rootProps} />;
    }
});
