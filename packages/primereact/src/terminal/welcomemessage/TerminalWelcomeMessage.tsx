'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './TerminalWelcomeMessage.props';

export const TerminalWelcomeMessage = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, getParent } = instance;
        const terminal = getParent('Terminal');

        const welcomeMessageProps = mergeProps(
            {
                className: terminal?.cx('welcomeMessage')
            },
            terminal?.ptm('welcomeMessage')
        );

        return (
            <Component as={props.as || 'div'} {...welcomeMessageProps}>
                {props.children}
            </Component>
        );
    }
});
