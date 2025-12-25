'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTerminal } from '@primereact/headless/terminal';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { TerminalProvider } from '../Terminal.context';
import { defaultRootProps } from './TerminalRoot.props';

export const TerminalRoot = withComponent({
    name: 'TerminalRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const terminal = useTerminal(instance.inProps);

        return terminal;
    },
    render(instance) {
        const { id, props, ptmi, ptm, cx, onKeyDown, onClick, onInputChange, inputRef, state } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        const createPrompt = () => {
            const promptProps = mergeProps(
                {
                    className: cx('prompt')
                },
                ptm('prompt')
            );

            const promptLabelProps = mergeProps(
                {
                    className: cx('promptLabel')
                },
                ptm('promptLabel')
            );

            const promptValueProps = mergeProps(
                {
                    ref: inputRef,
                    value: state.commandText,
                    type: 'text',
                    className: cx('promptValue'),
                    autoComplete: 'off',
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => onInputChange(event),
                    onKeyDown,
                    onClick
                },
                ptm('promptValue')
            );

            return (
                <div {...promptProps}>
                    <span {...promptLabelProps}>{props.prompt}&nbsp;</span>
                    <input {...promptValueProps} />
                </div>
            );
        };

        const prompt = createPrompt();

        return (
            <TerminalProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {resolve(props.children, instance)}
                    {prompt}
                </Component>
            </TerminalProvider>
        );
    }
});
