'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useTerminalContext } from '../Terminal.context';
import { defaultPromptLabelProps } from './TerminalPromptLabel.props';

export const TerminalPromptLabel = withComponent({
    name: 'Terminal.PromptLabel',
    defaultProps: defaultPromptLabelProps,
    setup() {
        const terminal = useTerminalContext();

        return { terminal };
    },
    render(instance) {
        const { props, ptmi, terminal } = instance;

        const rootProps = mergeProps(
            {
                className: terminal?.cx('promptLabel')
            },
            terminal?.ptm('promptLabel'),
            ptmi('root')
        );

        const content = props.children ?? <>{terminal?.props.prompt}&nbsp;</>;

        return <Component instance={instance} attrs={rootProps} children={content} />;
    }
});
