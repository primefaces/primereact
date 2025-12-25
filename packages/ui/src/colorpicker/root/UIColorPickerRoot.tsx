'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/colorpicker';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ColorPickerRoot, defaultRootProps } from 'primereact/colorpicker';
import * as React from 'react';

export const UIColorPickerRoot = withComponent({
    name: 'ColorPickerRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ColorPickerRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
