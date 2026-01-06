/**
 *
 * MenuLevel is a context for managing nested menu levels.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menulevel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';

/**
 * Defines the value structure for MenuLevel context.
 */
export interface MenuLevelContextInterface {
    /**
     * Current nesting level (0 for root).
     */
    level: number;
    /**
     * Array representing the path to this level in the menu hierarchy.
     */
    path: number[];
    /**
     * Reference to the item counter for this level.
     */
    itemCounter: React.RefObject<number>;
    /**
     * Get the next item index at this level.
     */
    getNextItemIndex(): number;
    /**
     * Total number of items at this level.
     */
    totalItems: number;
}

/**
 * Defines the properties for MenuLevelProvider component.
 */
export interface MenuLevelProviderProps {
    /**
     * Parent path representing the hierarchy path.
     */
    parentPath: number[];
    /**
     * Index of the parent item, null for root level.
     */
    parentIndex: number | null;
    /**
     * The content to be rendered within the provider.
     */
    children: React.ReactNode;
}

/**
 * Defines valid state in MenuLevel component.
 */
export interface MenuLevelState {}

/**
 * Defines the methods and properties exposed by MenuLevel component.
 */
export interface MenuLevelExposes {
    /**
     * The context value for this menu level.
     */
    levelContext: MenuLevelContextInterface | undefined;
}

/**
 * Instance of MenuLevel component.
 */
export type MenuLevelInstance = ComponentInstance<MenuLevelProviderProps, MenuLevelState, MenuLevelExposes>;
