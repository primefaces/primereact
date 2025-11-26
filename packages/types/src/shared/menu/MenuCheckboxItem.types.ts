/**
 *
 * MenuCheckboxItem is a component that displays a checkbox item.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menucheckboxitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';
import type { MenuLevelContextInterface } from './MenuLevel.types';
import type { MenuPortalInstance } from './MenuPortal.types';
import type { MenuSubInstance } from './MenuSub.types';

/**
 * Defines passthrough(pt) options type in MenuCheckboxItem component.
 */
export type MenuCheckboxItemPassThroughType<E> = PassThroughType<MenuCheckboxItemInstance, E>;

/**
 * Defines passthrough(pt) options of MenuCheckboxItem component.
 */
export interface MenuCheckboxItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuCheckboxItemPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Event object for the onCheckedChange callback.
 */
export interface MenuCheckboxItemCheckedChangeEvent {
    /**
     * The new checked state value.
     */
    value: boolean;
}

/**
 * Defines valid properties in MenuCheckboxItem component.
 */
export interface MenuCheckboxItemProps extends BaseComponentProps<MenuCheckboxItemInstance, unknown, MenuCheckboxItemPassThrough> {
    /**
     * Whether the checkbox item is checked or not.
     */
    checked?: boolean | undefined;
    /**
     * Default checked state of the checkbox item.
     */
    defaultChecked?: boolean | undefined;
    /**
     * When present, it specifies that the item should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Callback to invoke when checked state changes.
     */
    onCheckedChange?: (event: MenuCheckboxItemCheckedChangeEvent) => void;
}

/**
 * Defines valid state in MenuCheckboxItem component.
 */
export interface MenuCheckboxItemState {}

/**
 * Defines the methods and properties exposed by MenuCheckboxItem component.
 */
export interface MenuCheckboxItemExposes {
    /**
     * Instance of the Menu component.
     */
    menu: MenuInstance | undefined | null;
    /**
     * Instance of the MenuSub component.
     */
    submenu: MenuSubInstance | undefined | null;
    /**
     * Instance of the MenuPortal component.
     */
    portal: MenuPortalInstance | undefined | null;
    /**
     * Context value of the MenuLevel.
     */
    level: MenuLevelContextInterface | undefined | null;
    /**
     * Reference to the item element.
     */
    itemRef: React.RefObject<HTMLElement | null> | null;
    /**
     * ID of the item element.
     */
    itemId: string | undefined;
    /**
     * Whether the item is focused or not.
     */
    focused: boolean;
    /**
     * Aria level of the item.
     */
    ariaLevel: number;
    /**
     * Aria position in set of the item.
     */
    ariaPosInSet: number | undefined;
    /**
     * Aria set size of the item.
     */
    ariaSetSize: number | undefined;
    /**
     * Whether the checkbox is checked or not.
     */
    checked: boolean;
    /**
     * Handler to change checked state.
     */
    handleCheckedChange: (checked: boolean) => void;
}

/**
 * Instance of MenuCheckboxItem component.
 */
export type MenuCheckboxItemInstance = ComponentInstance<MenuCheckboxItemProps, MenuCheckboxItemState, MenuCheckboxItemExposes>;
