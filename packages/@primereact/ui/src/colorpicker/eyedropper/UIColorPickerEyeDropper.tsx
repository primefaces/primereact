'use client';
import { Component, withComponent } from '@primereact/core/component';
import { Button } from '@primereact/ui/button';
import { mergeDefaultProps } from '@primeuix/utils';
import { ColorPickerEyeDropper, defaultEyeDropperProps } from 'primereact/colorpicker';
import * as React from 'react';

export const UIColorPickerEyeDropper = withComponent({
    name: 'ColorPicker.EyeDropper',
    defaultProps: defaultEyeDropperProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: Button }, instance.inProps);

        return <Component as={ColorPickerEyeDropper} attrs={rootProps} />;
    }
});
