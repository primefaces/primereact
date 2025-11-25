'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { useMenuLevelContext } from '../MenuLevel.context';
import { useMenuPortalContext } from '../portal/MenuPortal.context';
import { useMenuSubContext } from '../sub/MenuSub.context';
import { defaultItemProps } from './MenuItem.props';

export const MenuItem = withComponent({
    name: 'MenuItem',
    defaultProps: defaultItemProps,
    setup({ props }) {
        const menu = useMenuContext();
        const submenu = useMenuSubContext();
        const portal = useMenuPortalContext();
        const level = useMenuLevelContext();

        const itemRef = React.useRef<HTMLElement>(null);
        const itemIndexRef = React.useRef<number | undefined>(undefined);
        const itemIdRef = React.useRef<string | undefined>(undefined);

        if (itemIndexRef.current === undefined && level && menu) {
            const index = level.getNextItemIndex();

            itemIndexRef.current = index;

            // Build hierarchical ID: menuId_0, menuId_1_0, menuId_1_0_0, etc.
            if (level.path.length === 0) {
                // Root level
                itemIdRef.current = `${menu.id}_${index}`;
            } else {
                // Nested level
                itemIdRef.current = `${menu.id}_${level.path.join('_')}_${index}`;
            }
        }

        const itemId = itemIdRef.current;
        const itemIndex = itemIndexRef.current;

        React.useEffect(() => {
            if (itemRef.current && !props.disabled && itemId !== undefined) {
                menu?.registerItem(itemId, itemRef.current);
            }

            return () => {
                if (itemId !== undefined) {
                    menu?.unregisterItem(itemId);
                }
            };
        }, [itemId, menu?.registerItem, menu?.unregisterItem, props.disabled]);

        const focused = React.useMemo(() => {
            const focusedOptionId = menu?.state.focusedOptionId;

            if (!focusedOptionId || itemId === undefined) return false;

            if (Array.isArray(focusedOptionId)) {
                // For composite mode, check if itemId is the last element
                return focusedOptionId.includes(itemId);
            }

            return focusedOptionId === itemId;
        }, [menu?.state.focusedOptionId, itemId]);

        const ariaLevel = level ? level.level + 1 : 1;
        const ariaPosInSet = itemIndex !== undefined ? itemIndex + 1 : undefined;
        const ariaSetSize = level && level.totalItems > 0 ? level.totalItems : undefined;

        return { menu, submenu, portal, level, itemRef, itemId, focused, ariaLevel, ariaPosInSet, ariaSetSize };
    },
    render(instance) {
        const { props, ptmi, menu, submenu, portal, itemRef, itemId, focused, ariaLevel, ariaPosInSet, ariaSetSize } = instance;
        const isDisabled = !props.disabled;

        const onItemMouseDown = (event: React.MouseEvent) => {
            if (isDisabled && itemId !== undefined) {
                menu?.changeFocusedOptionId(itemId);
            }

            // For keyboard events (synthetic mousedown from useMenu), trigger click for router support
            if (isDisabled && event.detail === 0 && itemRef.current) {
                itemRef.current?.click();
            }

            if (isDisabled && portal && menu?.props.composite && event.detail > 0) {
                menu?.onItemClick?.(event);
            } else if (isDisabled && portal && !menu?.props.composite) {
                menu?.onItemClick?.(event);
            }
        };

        const onItemMouseMove = () => {
            if (isDisabled && itemId !== undefined && menu?.state.focused) {
                menu?.changeFocusedOptionId(itemId);
            }
        };

        const onItemMouseEnter = () => {
            if (menu?.props.composite && isDisabled && itemId !== undefined && menu?.state.focused) {
                menu?.hideSubmenusAfterLevel?.(itemId);
                menu?.changeFocusedOptionId(itemId);
            }
        };

        const rootProps = mergeProps(
            {
                id: itemId,
                className: menu?.cx('item', { disabled: props.disabled, focused }),
                role: 'menuitem',
                tabIndex: props.disabled ? -1 : focused ? 0 : -1,
                'aria-disabled': props.disabled,
                'aria-level': ariaLevel,
                'aria-posinset': ariaPosInSet,
                'aria-setsize': ariaSetSize,
                'aria-expanded': submenu ? submenu.state.opened : undefined,
                'data-p-focused': focused,
                'data-p-disabled': props.disabled,
                onMouseDown: onItemMouseDown,
                onMouseMove: onItemMouseMove,
                onMouseEnter: menu?.props.composite ? onItemMouseEnter : undefined
            },
            menu?.ptm('item'),
            ptmi('root')
        );

        return <Component ref={itemRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
