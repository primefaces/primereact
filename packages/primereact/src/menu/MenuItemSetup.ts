import * as React from 'react';
import { useMenuContext } from './Menu.context';
import { useMenuLevelContext } from './MenuLevel.context';
import { useMenuPortalContext } from './portal/MenuPortal.context';
import { useMenuSubContext } from './sub/MenuSub.context';

export const MenuItemSetup = (props: { disabled?: boolean }) => {
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

        if (level.path.length === 0) {
            itemIdRef.current = `${menu.id}_${index}`;
        } else {
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
            return focusedOptionId.includes(itemId);
        }

        return focusedOptionId === itemId;
    }, [menu?.state.focusedOptionId, itemId]);

    const ariaLevel = level ? level.level + 1 : 1;
    const ariaPosInSet = itemIndex !== undefined ? itemIndex + 1 : undefined;
    const ariaSetSize = level && level.totalItems > 0 ? level.totalItems : undefined;

    return {
        menu,
        submenu,
        portal,
        level,
        itemRef,
        itemId,
        focused,
        ariaLevel,
        ariaPosInSet,
        ariaSetSize
    };
};
