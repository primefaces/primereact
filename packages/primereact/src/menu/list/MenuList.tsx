'use client';
import { Component } from '@primereact/core/component';
import { defaultProps } from '@primereact/headless/menu';
import { mergeProps, nestedPosition, omit, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { MenuLevelProvider, useMenuLevelContext } from '../MenuLevel.context';
import { useMenuSubContext } from '../sub/MenuSub.context';
import { defaultListProps } from './MenuList.props';

export const MenuList = withComponent({
    name: 'MenuList',
    defaultProps: defaultListProps,
    setup() {
        const menu = useMenuContext();
        const submenu = useMenuSubContext();
        const parentLevel = useMenuLevelContext();
        const triggerIndexRef = React.useRef<number | null>(null);

        if (submenu && triggerIndexRef.current === null && parentLevel) {
            triggerIndexRef.current = parentLevel.itemCounter.current - 1;
        }

        // For root list: children are at level 0, path = []
        // For submenu list: children are at parent's level + 1, path = [...parentPath, triggerIndex]
        const newParentPath = submenu && parentLevel ? [...parentLevel.path, triggerIndexRef.current!] : (parentLevel?.path ?? []);
        const listLevel = submenu && parentLevel ? parentLevel.level + 1 : 0;

        const listId = React.useMemo(() => {
            if (!menu) return undefined;

            if (newParentPath.length === 0) {
                // Root level
                return `${menu.id}_list`;
            } else {
                // Nested level
                return `${menu.id}_${newParentPath.join('_')}_list`;
            }
        }, [menu?.id, newParentPath.join('_')]);

        React.useEffect(() => {
            if (submenu?.listRef?.current && submenu?.state.opened) {
                nestedPosition(submenu.listRef.current as HTMLUListElement, submenu?.parentLevel?.level as number);
            }
        }, [submenu?.state.opened, submenu?.listRef?.current]);

        return { menu, submenu, parentLevel, listLevel, listId, triggerIndex: triggerIndexRef.current };
    },
    render(instance) {
        const { props, ptmi, menu, submenu, listId, parentLevel, triggerIndex } = instance;

        const computedProps = submenu
            ? mergeProps({
                  style: !submenu.state.opened ? { display: 'none' } : undefined
              })
            : mergeProps({
                  onFocus: menu?.onListFocus,
                  onBlur: menu?.onListBlur
              });

        const rootProps = mergeProps(
            {
                id: listId,
                className: menu?.cx('list'),
                role: 'menu',
                'aria-activedescendant': menu?.state.focusedOptionId || undefined,
                tabIndex: menu?.props.tabIndex,
                onKeyDown: menu?.onListKeyDown
            },
            computedProps,
            menu?.ptm('list'),
            ptmi('root')
        );

        const menuProps = mergeProps(
            {
                className: menu?.cx('root')
            },
            {
                ...(omit(menu?.inProps, ...Object.keys(defaultProps)) as Record<PropertyKey, unknown>)
            },
            menu?.ptm('root')
        );

        const childrenWithLevel = submenu ? (
            <MenuLevelProvider parentPath={parentLevel?.path as number[]} parentIndex={triggerIndex}>
                {resolve(props.children, instance)}
            </MenuLevelProvider>
        ) : (
            props.children
        );

        if (submenu) {
            const submenuList = <Component ref={submenu?.listRef} instance={instance} attrs={rootProps} children={childrenWithLevel} />;

            if (menu?.props.composite) {
                return submenu?.state.opened ? submenuList : null;
            }

            return submenuList;
        }

        return (
            <div {...menuProps}>
                <Component ref={menu?.listRef} instance={instance} attrs={rootProps} children={childrenWithLevel} />
            </div>
        );
    }
});
