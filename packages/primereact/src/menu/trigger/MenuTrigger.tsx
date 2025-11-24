'use client';
import { Component } from '@primereact/core/component';
import { mergeProps, resolve } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { useMenuLevelContext } from '../MenuLevel.context';
import { useMenuPortalContext } from '../portal/MenuPortal.context';
import { useMenuSubContext } from '../sub/MenuSub.context';
import { defaultTriggerProps } from './MenuTrigger.props';

export const MenuTrigger = withComponent({
    name: 'MenuTrigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const menu = useMenuContext();
        const submenu = useMenuSubContext();
        const portal = useMenuPortalContext();
        const level = useMenuLevelContext();

        const itemIndexRef = React.useRef<number | undefined>(undefined);
        const itemIdRef = React.useRef<string | undefined>(undefined);

        // the trigger itself is an item in the parent menu
        if (itemIdRef.current === undefined && submenu && level && menu) {
            const index = level.getNextItemIndex();

            itemIndexRef.current = index;

            if (level.path.length === 0) {
                // Root level submenu trigger
                itemIdRef.current = `${menu.id}_${index}`;
            } else {
                // Nested submenu trigger
                itemIdRef.current = `${menu.id}_${level.path.join('_')}_${index}`;
            }
        }

        const itemId = itemIdRef.current;
        const itemIndex = itemIndexRef.current;

        React.useEffect(() => {
            if (submenu && itemId && !submenu?.props.disabled) {
                menu?.registerItem(itemId, submenu.triggerRef.current as HTMLElement);
            }

            return () => {
                menu?.unregisterItem(itemId as string);
            };
        }, [itemId, menu?.registerItem, menu?.unregisterItem, submenu?.props.disabled]);

        const focused = React.useMemo(() => {
            if (!submenu) return false;

            const focusedOptionId = menu?.state.focusedOptionId;

            if (!focusedOptionId || itemId === undefined) return false;

            if (Array.isArray(focusedOptionId)) {
                // For composite mode, check if itemId is the last element
                return focusedOptionId.includes(itemId);
            }

            return focusedOptionId === itemId;
        }, [submenu, menu?.state.focusedOptionId, itemId]);

        const disabled = submenu ? submenu.inProps?.disabled : false;
        const ariaLevel = level ? level.level + 1 : 1;
        const ariaPosInSet = itemIndex !== undefined ? itemIndex + 1 : undefined;
        const ariaSetSize = level && level.totalItems > 0 ? level.totalItems : undefined;

        return { menu, submenu, portal, level, itemId, focused, disabled, ariaLevel, ariaPosInSet, ariaSetSize };
    },
    render(instance) {
        const { props, ptmi, menu, submenu, portal, level, itemId, focused, disabled, ariaLevel, ariaPosInSet, ariaSetSize } = instance;

        const onItemMouseMove = () => {
            if (!disabled && itemId !== undefined && menu?.state.focused) {
                menu?.changeFocusedOptionId(itemId);
            }
        };

        const onItemMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
            if (!disabled && itemId !== undefined) {
                menu?.changeFocusedOptionId(itemId);
            }

            if (menu?.props.composite && portal && submenu) {
                submenu.toggle();
            }

            if (menu?.props.composite && !portal && level?.level === 0 && submenu) {
                event?.preventDefault();

                submenu.toggle();

                if (!submenu.state.opened && menu?.listRef?.current) {
                    menu?.listRef?.current.focus();
                }
            } else if (!menu?.props.composite && submenu) {
                submenu.toggle();
            }
        };

        const onItemMouseEnter = () => {
            if (menu?.props.composite && !disabled && itemId !== undefined && menu?.state.focused) {
                menu?.hideSubmenusAfterLevel?.(itemId);
                menu?.changeFocusedOptionId(itemId);

                if (level?.level === 0 && submenu && !submenu.state.opened) {
                    setTimeout(() => {
                        if (!submenu.state.opened) {
                            submenu.open();
                        }
                    }, 0);
                }
            }
        };

        const onItemMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
            if (menu?.props.composite && submenu && submenu.state.opened && itemId !== undefined) {
                const relatedTarget = event.relatedTarget as HTMLElement;

                if (relatedTarget) {
                    const submenuList = submenu.listRef.current;

                    if (submenuList && submenuList.contains(relatedTarget)) {
                        return;
                    }
                }

                submenu.close();
            }
        };

        const computedProps = submenu
            ? mergeProps({
                  id: itemId,
                  className: menu?.cx('submenuLabel', { disabled, focused, active: submenu.state.opened }),
                  role: 'menuitem',
                  tabIndex: disabled ? -1 : focused ? 0 : -1,
                  'aria-expanded': submenu.state.opened,
                  'aria-disabled': disabled,
                  'aria-level': ariaLevel,
                  'aria-posinset': ariaPosInSet,
                  'aria-setsize': ariaSetSize,
                  'data-p-focused': focused,
                  'data-p-disabled': disabled,
                  onMouseDown: onItemMouseDown,
                  onMouseMove: onItemMouseMove,
                  onMouseEnter: onItemMouseEnter,
                  onMouseLeave: onItemMouseLeave
              })
            : mergeProps({
                  className: menu?.cx('trigger'),
                  'aria-haspopup': 'true',
                  'aria-expanded': menu?.state.opened,
                  onClick: menu?.onTriggerClick
              });

        const rootProps = mergeProps(computedProps, ptmi('root'));

        return submenu ? (
            <div ref={submenu?.triggerRef} {...rootProps}>
                {resolve(props.children, instance)}
            </div>
        ) : (
            // @ts-expect-error: Button expects a type prop, but we are using it as a trigger.
            <Component ref={menu?.triggerRef} as={Button} instance={instance} attrs={{ ...props, ...rootProps }} pt={menu?.ptm('trigger')} children={props.children} />
        );
    }
});
