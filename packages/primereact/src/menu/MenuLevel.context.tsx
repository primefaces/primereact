'use client';
import { MenuLevelContextInterface } from '@primereact/types/shared/menu/';
import * as React from 'react';

export const MenuLevelContext = React.createContext<MenuLevelContextInterface | null>(null);

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

    const context = React.useMemo(
        () => ({
            level,
            path,
            itemCounter,
            getNextItemIndex,
            totalItems
        }),
        [level, path, getNextItemIndex, totalItems]
    );

    return <MenuLevelContext.Provider value={context}>{children}</MenuLevelContext.Provider>;
};
