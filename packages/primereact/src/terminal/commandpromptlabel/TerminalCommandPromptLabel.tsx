'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { defaultCommandPromptLabelProps } from './TerminalCommandPromptLabel.props';

export const TerminalCommandPromptLabel = withComponent({
    name: 'Terminal.CommandPromptLabel',
    defaultProps: defaultCommandPromptLabelProps,
    setup() {
        const terminal = useTerminalContext();

        return { terminal };
    },
    render(instance) {
        const { props, ptmi, terminal } = instance;

        const promptLabelProps = mergeProps(
            {
                className: terminal?.cx('promptLabel')
            },
            terminal?.ptm('promptLabel'),
            ptmi('root')
        );

        const content = props.children ?? <>{terminal?.props.prompt}&nbsp;</>;

        return <Component instance={instance} attrs={promptLabelProps} children={content} />;
    }
});
