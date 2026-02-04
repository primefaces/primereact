'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { useTerminalCommandContext } from '../command/TerminalCommand.context';
import { defaultCommandResponseProps } from './TerminalCommandResponse.props';

export const TerminalCommandResponse = withComponent({
    name: 'Terminal.CommandResponse',
    defaultProps: defaultCommandResponseProps,
    setup() {
        const terminal = useTerminalContext();
        const commandInstance = useTerminalCommandContext();

        return { terminal, command: commandInstance?.command };
    },
    render(instance) {
        const { props, ptmi, terminal, command } = instance;

        const responseProps = mergeProps(
            {
                className: terminal?.cx('commandResponse'),
                'aria-live': 'polite'
            },
            terminal?.ptm('commandResponse'),
            ptmi('root')
        );

        const content = props.children ?? command?.response;

        return <Component instance={instance} attrs={responseProps} children={content} />;
    }
});
