'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { MenuItemHandlers } from '../MenuItemHandlers';
import { MenuItemSetup } from '../MenuItemSetup';
import { useMenuRadioGroupContext } from '../radiogroup/MenuRadioGroup.context';
import { MenuRadioItemProvider } from './MenuRadioItem.context';
import { defaultRadioItemProps } from './MenuRadioItem.props';

export const MenuRadioItem = withComponent({
    name: 'MenuRadioItem',
    defaultProps: defaultRadioItemProps,
    setup({ props }) {
        const itemSetup = MenuItemSetup(props);
        const radioGroupInstance = useMenuRadioGroupContext();

        if (!radioGroupInstance) {
            // eslint-disable-next-line no-console
            console.warn('MenuRadioItem must be used within a MenuRadioGroup');
        }

        const radioGroup = radioGroupInstance?.context ?? null;
        const checked = React.useMemo(() => radioGroup?.value === props.value, [radioGroup?.value, props.value]);

        const handleValueChange = () => {
            if (props.value !== undefined && radioGroup) {
                radioGroup.onValueChange(props.value);
            }
        };

        return { ...itemSetup, radioGroup, checked, handleValueChange };
    },
    render(instance) {
        const { props, ptmi, menu, submenu, portal, itemRef, itemId, focused, ariaLevel, ariaPosInSet, ariaSetSize, checked, handleValueChange } = instance;
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
                handleValueChange();
            }
        };

        const rootProps = mergeProps(
            {
                id: itemId,
                className: menu?.cx('radioItem', { disabled: props.disabled, focused }),
                role: 'menuitemradio',
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
            menu?.ptm('radioItem'),
            ptmi('root')
        );

        return (
            <MenuRadioItemProvider value={instance}>
                <Component ref={itemRef} instance={instance} attrs={rootProps} children={props.children} />
            </MenuRadioItemProvider>
        );
    }
});
