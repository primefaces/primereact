'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { TerminalWelcomeProvider } from './TerminalWelcome.context';
import { defaultCenterProps } from './TerminalWelcome.props';

export const TerminalWelcome = withComponent({
    name: 'TerminalWelcome',
    defaultProps: defaultCenterProps,
    setup() {
        const terminal = useTerminalContext();

        return { terminal };
    },
    render(instance) {
        const { props, ptmi, terminal } = instance;

        const rootProps = mergeProps(
            {
                className: terminal?.cx('welcome')
            },
            terminal?.ptm('welcome'),
            ptmi('root')
        );

        return (
            <TerminalWelcomeProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TerminalWelcomeProvider>
        );
    }
});
