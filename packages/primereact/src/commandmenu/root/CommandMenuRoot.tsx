'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCommandMenu } from '@primereact/headless/commandmenu';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CommandMenuProvider } from '../CommandMenu.context';
import { defaultRootProps } from './CommandMenuRoot.props';

export const CommandMenuRoot = withComponent({
    name: 'CommandMenuRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const commandmenu = useCommandMenu(instance.inProps);

        return commandmenu;
    },
    render(instance) {
        const { props, ptmi, cx, handleKeyDown } = instance;

        const rootProps = mergeProps(
            {
                tabIndex: -1,
                className: cx('root'),
                onKeyDown: handleKeyDown
            },
            ptmi('root')
        );

        return (
            <CommandMenuProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </CommandMenuProvider>
        );
    }
});
