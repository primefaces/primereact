import type { MenuInstance, MenuPortalInstance } from '@primereact/types/shared/menu';
import * as React from 'react';

export const MenuItemHandlers = (params: { isDisabled: boolean; itemId: string | undefined; itemRef: React.RefObject<HTMLElement | null>; menu: MenuInstance | undefined; portal: MenuPortalInstance | undefined }) => {
    const { isDisabled, itemId, itemRef, menu, portal } = params;

    const onItemMouseDown = React.useCallback(
        (event: React.MouseEvent) => {
            if (isDisabled && itemId !== undefined) {
                setTimeout(() => {
                    menu?.changeFocusedOptionId(itemId);
                }, 0);
            }

            if (isDisabled && event.detail === 0 && itemRef.current) {
                itemRef.current?.click();
            }

            if (isDisabled && portal) {
                if ((menu?.props.composite && event.detail > 0) || !menu?.props.composite) {
                    menu?.onItemClick?.(event);
                }
            }
        },
        [isDisabled, itemId, itemRef, menu, portal]
    );

    const onItemMouseMove = React.useCallback(() => {
        if (isDisabled && itemId !== undefined && menu?.state.focused) {
            menu?.changeFocusedOptionId(itemId);
        }
    }, [isDisabled, itemId, menu]);

    const onItemMouseEnter = React.useCallback(() => {
        if (menu?.props.composite && isDisabled && itemId !== undefined && menu?.state.focused) {
            menu?.hideSubmenusAfterLevel?.(itemId);
            menu?.changeFocusedOptionId(itemId);
        }
    }, [menu, isDisabled, itemId]);

    return {
        onItemMouseDown,
        onItemMouseMove,
        onItemMouseEnter
    };
};
