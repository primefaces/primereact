'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { useTerminalCommandContext } from '../command/TerminalCommand.context';
import { defaultCommandValueProps } from './TerminalCommandValue.props';

export const TerminalCommandValue = withComponent({
    name: 'Terminal.CommandValue',
    defaultProps: defaultCommandValueProps,
    setup() {
        const terminal = useTerminalContext();
        const commandInstance = useTerminalCommandContext();

        return { terminal, command: commandInstance?.command };
    },
    render(instance) {
        const { props, ptmi, terminal, command } = instance;

        const commandValueProps = mergeProps(
            {
                className: terminal?.cx('commandValue')
            },
            terminal?.ptm('commandValue'),
            ptmi('root')
        );

        const content = props.children ?? command?.text;

        return <Component instance={instance} attrs={commandValueProps} children={content} />;
    }
});
