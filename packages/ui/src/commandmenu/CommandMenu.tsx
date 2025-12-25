'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCommandMenu } from '@primereact/headless/commandmenu';
import { styles } from '@primereact/styles/commandmenu';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CommandMenuProvider } from './CommandMenu.context';
import { defaultProps } from './CommandMenu.props';
import { CommandMenuEmpty } from './empty';
import { CommandMenuGroup } from './group';
import { CommandMenuGroupHeading } from './groupheading';
import { CommandMenuInput } from './input';
import { CommandMenuItem } from './item';
import { CommandMenuList } from './list';

export const CommandMenu = withComponent({
    name: 'CommandMenu',
    defaultProps,
    styles,
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
    },
    components: {
        List: CommandMenuList,
        Group: CommandMenuGroup,
        GroupHeading: CommandMenuGroupHeading,
        Item: CommandMenuItem,
        Input: CommandMenuInput,
        Empty: CommandMenuEmpty
    }
});
