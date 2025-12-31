'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/inputtext';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { InputText, defaultProps } from 'primereact/inputtext';
import * as React from 'react';

export const UIInputTextRoot = withComponent({
    name: 'InputTextRoot',
    defaultProps: defaultProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={InputText} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
