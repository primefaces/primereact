'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/inputnumber';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { InputNumber, defaultProps } from 'primereact/inputnumber';
import * as React from 'react';

export const UIInputNumber = withComponent({
    name: 'UIInputNumber',
    defaultProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={InputNumber} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
