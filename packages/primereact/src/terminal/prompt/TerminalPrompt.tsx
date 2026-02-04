'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { TerminalPromptLabel } from '../promptlabel';
import { TerminalPromptValue } from '../promptvalue';
import { useTerminalContext } from '../Terminal.context';
import { defaultPromptProps } from './TerminalPrompt.props';

export const TerminalPrompt = withComponent({
    name: 'Terminal.Prompt',
    defaultProps: defaultPromptProps,
    setup() {
        const terminal = useTerminalContext();

        return { terminal };
    },
    render(instance) {
        const { props, ptmi, terminal } = instance;

        const promptProps = mergeProps(
            {
                className: terminal?.cx('prompt')
            },
            terminal?.ptm('prompt'),
            ptmi('root')
        );

        const createPromptElement = () => {
            return (
                <>
                    <TerminalPromptLabel />
                    <TerminalPromptValue />
                </>
            );
        };

        return <Component instance={instance} attrs={promptProps} children={props.children ?? createPromptElement()} />;
    }
});
