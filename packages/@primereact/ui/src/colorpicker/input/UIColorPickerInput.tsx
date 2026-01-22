'use client';
import { Component, withComponent } from '@primereact/core/component';
import { InputText } from '@primereact/ui/inputtext';
import { mergeDefaultProps } from '@primeuix/utils';
import { ColorPickerInput, defaultInputProps } from 'primereact/colorpicker';
import * as React from 'react';

export const UIColorPickerInput = withComponent({
    name: 'UIColorPickerInput',
    defaultProps: defaultInputProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: InputText }, instance.inProps);

        return <Component as={ColorPickerInput} attrs={rootProps} />;
    }
});
