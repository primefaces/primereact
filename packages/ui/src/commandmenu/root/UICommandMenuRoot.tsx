'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/commandmenu';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { CommandMenuRoot, defaultRootProps } from 'primereact/commandmenu';
import * as React from 'react';

export const UICommandMenuRoot = withComponent({
    name: 'CommandMenuRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={CommandMenuRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
