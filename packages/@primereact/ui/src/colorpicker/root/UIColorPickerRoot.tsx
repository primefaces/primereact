'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/colorpicker';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { ColorPickerRoot, defaultRootProps } from 'primereact/colorpicker';
import * as React from 'react';

export const UIColorPickerRoot = withComponent({
    name: 'ColorPicker.Root',
    defaultProps: defaultRootProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={ColorPickerRoot} attrs={rootProps} />;
    }
});
