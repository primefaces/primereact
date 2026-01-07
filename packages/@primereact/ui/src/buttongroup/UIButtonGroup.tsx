'use client';
import { Component, withComponent } from '@primereact/core/component';
import { styles } from '@primereact/styles/buttongroup';
import { mergeProps } from '@primeuix/utils';
import { ButtonGroup, defaultProps } from 'primereact/buttongroup';
import * as React from 'react';

export const UIButtonGroup = withComponent({
    name: 'UIButtonGroup',
    defaultProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ButtonGroup} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
