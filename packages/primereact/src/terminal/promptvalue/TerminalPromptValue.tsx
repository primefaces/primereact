'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { defaultPromptValueProps } from './TerminalPromptValue.props';

export const TerminalPromptValue = withComponent({
    name: 'Terminal.PromptValue',
    defaultProps: defaultPromptValueProps,
    setup() {
        const terminal = useTerminalContext();

        return { terminal };
    },
    render(instance) {
        const { ptmi, terminal } = instance;

        const rootProps = mergeProps(
            {
                ref: terminal?.inputRef,
                value: terminal?.state.commandText,
                type: 'text',
                className: terminal?.cx('promptValue'),
                autoComplete: 'off',
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => terminal?.onInputChange(event),
                onKeyDown: terminal?.onKeyDown
            },
            terminal?.ptm('promptValue'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} />;
    }
});
