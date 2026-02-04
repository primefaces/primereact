'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { TerminalCommandProvider } from './TerminalCommand.context';
import { defaultCommandProps } from './TerminalCommand.props';

export const TerminalCommand = withComponent({
    name: 'Terminal.Command',
    defaultProps: defaultCommandProps,
    setup(instance) {
        const terminal = useTerminalContext();
        const commands = terminal?.state.commands;
        const index = instance.props?.index ?? -1;
        const command = commands?.[index];

        return { terminal, command, index };
    },
    render(instance) {
        const { props, ptmi, terminal } = instance;

        const commandsProps = mergeProps(
            {
                className: terminal?.cx('commands')
            },
            terminal?.ptm('commands'),
            ptmi('root')
        );

        return (
            <TerminalCommandProvider value={instance}>
                <Component instance={instance} attrs={commandsProps} children={props.children} />
            </TerminalCommandProvider>
        );
    }
});
