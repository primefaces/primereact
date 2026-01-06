'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/card';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { CardRoot, defaultRootProps } from 'primereact/card';
import * as React from 'react';

export const UICardRoot = withComponent({
    name: 'CardRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={CardRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
