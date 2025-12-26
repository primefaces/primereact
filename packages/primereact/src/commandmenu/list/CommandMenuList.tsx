'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCommandMenuContext } from '../CommandMenu.context';
import { defaultListProps } from './CommandMenuList.props';

export const CommandMenuList = withComponent({
    name: 'CommandMenuList',
    defaultProps: defaultListProps,
    setup() {
        const commandmenu = useCommandMenuContext();

        return {
            commandmenu
        };
    },
    render(instance) {
        const { props, ptmi, commandmenu } = instance;

        const rootProps = mergeProps(
            {
                role: 'listbox',
                tabIndex: -1,
                className: commandmenu?.cx('list')
            },
            commandmenu?.ptm('list'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={commandmenu?.listRef} />;
    }
});
