'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/chip';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { ChipRoot, defaultRootProps } from 'primereact/chip';
import * as React from 'react';

export const UIChipRoot = withComponent({
    name: 'ChipRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={ChipRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
