'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/commandmenu';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useCommandMenuContext } from '../CommandMenu.context';
import { useCommandMenuGroupContext } from '../group';
import { defaultItemProps } from './CommandMenuItem.props';

export const CommandMenuItem = withComponent({
    name: 'CommandMenuItem',
    defaultProps: defaultItemProps,
    styles,
    setup(instance) {
        const { id, props } = instance;
        const commandmenu = useCommandMenuContext();
        const groupContext = useCommandMenuGroupContext();

        React.useLayoutEffect(() => {
            commandmenu?.store.registerValue(id!, props.value, props.keywords);
        }, [props.value, props.keywords]);

        React.useLayoutEffect(() => {
            return commandmenu?.store.registerItem(id!, groupContext?.id);
        }, []);

        return {
            commandmenu
        };
    },
    render(instance) {
        const { id, props, ptmi, commandmenu } = instance;

        const isSelected = commandmenu?.useCommandMenuStore((state) => state.selected && state.selected === props.value);
        const isRender = commandmenu?.useCommandMenuStore((state) => (!state.search ? true : (state.filtered.items.get(id!) ?? 0) > 0));

        const rootProps = mergeProps(
            {
                id,
                role: 'option',
                className: commandmenu?.cx('item'),
                onClick: (e: React.MouseEvent<HTMLDivElement>) => commandmenu?.handleItemClick(e, props?.onSelect),
                onPointerMove: commandmenu?.handleItemPointerMove,
                'aria-disabled': props.disabled,
                'aria-selected': Boolean(isSelected),
                'data-disabled': props.disabled,
                'data-selected': Boolean(isSelected),
                'data-value': props.value,
                'data-item': ''
            },
            commandmenu?.ptm('item'),
            ptmi('root')
        );

        return <Component pIf={isRender} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
