'use client';
import * as React from 'react';

export interface MenuLevelContextValue {
    level: number; // Current nesting level (0 for root)
    path: number[]; // Array representing the path [parentIndex, ...]
    itemCounter: React.RefObject<number>; // Counter for items at this level
    getNextItemIndex(): number; // Get next item index at this level
    totalItems: number; // Total number of items at this level (stable value)
}

export const MenuLevelContext = React.createContext<MenuLevelContextValue | null>(null);

export const useMenuLevelContext = () => React.useContext(MenuLevelContext);

export const MenuLevelProvider: React.FC<{
    parentPath: number[];
    parentIndex: number | null;
    children: React.ReactNode;
}> = ({ parentPath, parentIndex, children }) => {
    const itemCounter = React.useRef(0);
    const [totalItems, setTotalItems] = React.useState(0);

    const level = parentPath.length;

    // For root list: children are at level 0, path = []
    // For submenu list: children are at parent's level + 1, path = [...parentPath, triggerIndex]
    const path = parentIndex !== null ? [...parentPath, parentIndex] : parentPath;

    const getNextItemIndex = React.useCallback(() => {
        const index = itemCounter.current++;

        return index;
    }, []);

    React.useEffect(() => {
        setTotalItems(itemCounter.current);
    }, []);

    const value = React.useMemo(
        () => ({
            level,
            path,
            itemCounter,
            getNextItemIndex,
            totalItems
        }),
        [level, path, getNextItemIndex, totalItems]
    );

    return <MenuLevelContext.Provider value={value}>{children}</MenuLevelContext.Provider>;
};
