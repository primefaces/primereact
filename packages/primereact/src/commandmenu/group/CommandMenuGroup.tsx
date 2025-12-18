'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/commandmenu';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCommandMenuContext } from '../CommandMenu.context';
import { CommandMenuGroupProvider } from './CommandMenuGroup.context';
import { defaultGroupProps } from './CommandMenuGroup.props';

export const CommandMenuGroup = withComponent({
    name: 'CommandMenuGroup',
    defaultProps: defaultGroupProps,
    styles,
    setup(instance) {
        const { props, id } = instance;
        const commandmenu = useCommandMenuContext();

        React.useLayoutEffect(() => {
            commandmenu?.store.registerValue(id!, props.value);
        }, [props.value]);

        React.useLayoutEffect(() => {
            return commandmenu?.store.registerGroup(id!);
        }, []);

        return {
            commandmenu
        };
    },
    render(instance) {
        const { id, props, ptmi, commandmenu } = instance;

        const isRender = commandmenu?.useCommandMenuStore((state) => (!state.search ? true : state.filtered.groups.has(id!)));

        const rootProps = mergeProps(
            {
                id,
                role: 'presentation',
                className: commandmenu?.cx('group'),
                'data-group': '',
                'data-value': props.value,
                hidden: !isRender
            },
            commandmenu?.ptm('group'),
            ptmi('root')
        );

        return (
            <CommandMenuGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </CommandMenuGroupProvider>
        );
    }
});
