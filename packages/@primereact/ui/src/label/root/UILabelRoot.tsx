'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/label';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { LabelRoot, defaultRootProps } from 'primereact/label';
import * as React from 'react';

export const UILabelRoot = withComponent({
    name: 'LabelRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={LabelRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
