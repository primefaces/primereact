'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTerminal } from '@primereact/headless/terminal';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { TerminalProvider } from '../Terminal.context';
import { defaultRootProps } from './TerminalRoot.props';

export const TerminalRoot = withComponent({
    name: 'Terminal.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const terminal = useTerminal(instance.inProps);

        return terminal;
    },
    render(instance) {
        const { id, props, ptmi, cx, onClick } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                onClick
            },
            ptmi('root')
        );

        return (
            <TerminalProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={resolve(props.children, instance)} />
            </TerminalProvider>
        );
    }
});
