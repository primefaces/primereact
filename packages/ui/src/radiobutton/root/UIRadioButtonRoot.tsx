'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/radiobutton';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { RadioButtonRoot, defaultRootProps } from 'primereact/radiobutton';
import * as React from 'react';

export const UIRadioButtonRoot = withComponent({
    name: 'RadioButtonRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={RadioButtonRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
