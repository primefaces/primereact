'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/terminal';
import { withComponent } from '@primereact/ui/base';
import { mergeProps } from '@primeuix/utils';
import { TerminalRoot, defaultRootProps } from 'primereact/terminal';
import * as React from 'react';

export const UITerminalRoot = withComponent({
    name: 'TerminalRoot',
    defaultProps: defaultRootProps,
    render(instance) {
        const { props, inProps } = instance;

        const rootProps = mergeProps({ styles }, inProps);

        return <Component as={TerminalRoot} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
