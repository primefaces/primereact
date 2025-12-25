'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/checkbox';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { CheckboxRoot, defaultRootProps } from 'primereact/checkbox';
import * as React from 'react';

export const UICheckboxRoot = withComponent({
    name: 'CheckboxRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={CheckboxRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
