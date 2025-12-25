'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/tooltip';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { TooltipRoot, defaultRootProps } from 'primereact/tooltip';
import * as React from 'react';

export const UITooltipRoot = withComponent({
    name: 'TooltipRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={TooltipRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
