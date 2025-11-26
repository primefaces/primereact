'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { MenuItemHandlers } from '../MenuItemHandlers';
import { MenuItemSetup } from '../MenuItemSetup';
import { MenuCheckboxItemProvider } from './MenuCheckboxItem.context';
import { defaultCheckboxItemProps } from './MenuCheckboxItem.props';

export const MenuCheckboxItem = withComponent({
    name: 'MenuCheckboxItem',
    defaultProps: defaultCheckboxItemProps,
    setup({ props }) {
        const itemSetup = MenuItemSetup(props);

        const [checkedState, setCheckedState] = React.useState(props.checked !== undefined ? props.checked : (props.defaultChecked ?? false));

        React.useEffect(() => {
            if (props.checked !== undefined) {
                setCheckedState(props.checked);
            }
        }, [props.checked]);

        const handleCheckedChange = (checked: boolean) => {
            setCheckedState(checked);
            props.onCheckedChange?.({ value: checked });
        };

        return { ...itemSetup, checked: checkedState, handleCheckedChange };
    },
    render(instance) {
        const { props, ptmi, menu, submenu, portal, itemRef, itemId, focused, ariaLevel, ariaPosInSet, ariaSetSize, checked, handleCheckedChange } = instance;
        const isDisabled = !props.disabled;

        const { onItemMouseDown, onItemMouseMove, onItemMouseEnter } = MenuItemHandlers({
            isDisabled,
            itemId,
            itemRef,
            menu,
            portal
        });

        const handleMouseDown = (event: React.MouseEvent) => {
            onItemMouseDown(event);

            if (isDisabled) {
                handleCheckedChange(!checked);
            }
        };

        const rootProps = mergeProps(
            {
                id: itemId,
                className: menu?.cx('checkboxItem', { disabled: props.disabled, focused }),
                role: 'menuitemcheckbox',
                tabIndex: props.disabled ? -1 : focused ? 0 : -1,
                'aria-disabled': props.disabled,
                'aria-checked': checked,
                'aria-level': ariaLevel,
                'aria-posinset': ariaPosInSet,
                'aria-setsize': ariaSetSize,
                'aria-expanded': submenu ? submenu.state.opened : undefined,
                'data-p-focused': focused,
                'data-p-disabled': props.disabled,
                'data-p-checked': checked,
                onMouseDown: handleMouseDown,
                onMouseMove: onItemMouseMove,
                onMouseEnter: menu?.props.composite ? onItemMouseEnter : undefined
            },
            menu?.ptm('checkboxItem'),
            ptmi('root')
        );

        return (
            <MenuCheckboxItemProvider value={instance}>
                <Component ref={itemRef} instance={instance} attrs={rootProps} children={props.children} />
            </MenuCheckboxItemProvider>
        );
    }
});
