'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/progressspinner';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ProgressSpinner, defaultProps } from 'primereact/progressspinner';
import * as React from 'react';

export const UIProgressSpinner = withComponent({
    name: 'ProgressSpinner',
    defaultProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ProgressSpinner} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
