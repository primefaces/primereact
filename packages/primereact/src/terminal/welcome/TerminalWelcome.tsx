'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { TerminalWelcomeProvider } from './TerminalWelcome.context';
import { defaultWelcomeProps } from './TerminalWelcome.props';

export const TerminalWelcome = withComponent({
    name: 'TerminalWelcome',
    defaultProps: defaultWelcomeProps,
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
