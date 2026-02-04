'use client';
import { Component, withComponent } from '@primereact/core/component';
import { TerminalCommandItem } from '@primereact/types/shared/terminal';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { TerminalCommand } from '../command';
import { TerminalCommandPromptLabel } from '../commandpromptlabel';
import { TerminalCommandResponse } from '../commandresponse';
import { TerminalCommandValue } from '../commandvalue';
import { defaultCommandListProps } from './TerminalCommandList.props';

export const TerminalCommandList = withComponent({
    name: 'Terminal.CommandList',
    defaultProps: defaultCommandListProps,
    setup() {
        const terminal = useTerminalContext();

        return { terminal };
    },
    render(instance) {
        const { props, ptmi, terminal } = instance;

        const rootProps = mergeProps(
            {
                className: terminal?.cx('commandList')
            },
            terminal?.ptm('commandList'),
            ptmi('root')
        );

        const createDefaultCommands = () => {
            return terminal?.state.commands?.map((command: TerminalCommandItem, index: number) => {
                return (
                    <TerminalCommand key={`${command.text}_${index}`} index={index}>
                        <TerminalCommandPromptLabel />
                        <TerminalCommandValue />
                        <TerminalCommandResponse />
                    </TerminalCommand>
                );
            });
        };

        const content = props.children ?? createDefaultCommands();

        return <Component instance={instance} attrs={rootProps} children={content} />;
    }
});
