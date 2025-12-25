'use client';
import { Component, withComponent } from '@primereact/core/component';
import { TerminalCommandItem } from '@primereact/types/shared/terminal';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { TerminalCommandListProvider } from './TerminalCommandList.context';
import { defaultCenterProps } from './TerminalCommandList.props';

export const TerminalCommandList = withComponent({
    name: 'TerminalCommandList',
    defaultProps: defaultCenterProps,
    setup() {
        const terminal = useTerminalContext();

        return { terminal };
    },
    render(instance) {
        const { ptmi, terminal } = instance;

        const rootProps = mergeProps(
            {
                className: terminal?.cx('commandList')
            },
            terminal?.ptm('commandList'),
            ptmi('root')
        );

        const createCommand = (command: TerminalCommandItem, index: number) => {
            const { text, response } = command;
            const key = text + '_' + index;

            const promptLabelProps = mergeProps(
                {
                    className: terminal?.cx('promptLabel')
                },
                terminal?.ptm('promptLabel')
            );

            const commandsProps = mergeProps({}, terminal?.ptm('commands'));

            const commandProps = mergeProps(
                {
                    className: terminal?.cx('commandValue')
                },
                terminal?.ptm('commandValue')
            );
            const responseProps = mergeProps(
                {
                    className: terminal?.cx('commandResponse'),
                    'aria-live': 'polite'
                },
                terminal?.ptm('commandResponse')
            );

            return (
                <div key={key} {...commandsProps}>
                    <span {...promptLabelProps}>{terminal?.props.prompt}&nbsp;</span>
                    <span {...commandProps}>{text}</span>
                    <div {...responseProps}>{response}</div>
                </div>
            );
        };

        const content = terminal?.state.commands.map(createCommand);

        return (
            <TerminalCommandListProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={content} />
            </TerminalCommandListProvider>
        );
    }
});
