'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTerminal } from '@primereact/headless/terminal';
import { styles } from '@primereact/styles/terminal';
import { CommandItem } from '@primereact/types/shared/terminal';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './Terminal.props';
import { TerminalWelcomeMessage } from './welcomemessage';

export const Terminal = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const terminal = useTerminal(instance.inProps);

        return terminal;
    },
    render: (instance) => {
        const {
            id,
            props,
            ptmi,
            ptm,
            cx,
            // element refs
            elementRef,
            inputRef,
            //state
            commandsState,
            commandTextState,
            //methods
            onClick,
            onKeyDown,
            onInputChange
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                onClick
            },
            ptmi('root')
        );

        const promptLabelProps = mergeProps(
            {
                className: cx('promptLabel')
            },
            ptm('promptLabel')
        );

        const createCommandList = () => {
            const content = commandsState.map(createCommand);
            const commandListProps = mergeProps(
                {
                    className: cx('commandList')
                },
                ptm('commandList')
            );

            return <div {...commandListProps}>{content}</div>;
        };

        const createCommand = (command: CommandItem, index: number) => {
            const { text, response } = command;
            const key = text + '_' + index;
            const commandsProps = mergeProps({}, ptm('commands'));
            const commandProps = mergeProps(
                {
                    className: cx('commandValue')
                },
                ptm('commandValue')
            );
            const responseProps = mergeProps(
                {
                    className: cx('commandResponse'),
                    'aria-live': 'polite'
                },
                ptm('commandResponse')
            );

            return (
                <div key={key} {...commandsProps}>
                    <span {...promptLabelProps}>{props.prompt}&nbsp;</span>
                    <span {...commandProps}>{text}</span>
                    <div {...responseProps}>{response}</div>
                </div>
            );
        };

        const createPrompt = () => {
            const promptProps = mergeProps(
                {
                    className: cx('prompt')
                },
                ptm('prompt')
            );

            const promptValueProps = mergeProps(
                {
                    ref: inputRef,
                    value: commandTextState,
                    type: 'text',
                    className: cx('promptValue'),
                    autoComplete: 'off',
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => onInputChange(event),
                    onKeyDown
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

        const commandList = createCommandList();
        const prompt = createPrompt();

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
                {commandList}
                {prompt}
            </Component>
        );
    },
    components: {
        WelcomeMessage: TerminalWelcomeMessage
    }
});
