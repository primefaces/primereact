/**
 *
 * MenuRadioItem is a component that displays a radio item.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menuradioitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';
import type { MenuLevelContextInterface } from './MenuLevel.types';
import type { MenuPortalInstance } from './MenuPortal.types';
import type { MenuRadioGroupContextInterface } from './MenuRadioGroup.types';
import type { MenuSubInstance } from './MenuSub.types';

/**
 * Defines passthrough(pt) options type in MenuRadioItem component.
 */
export type MenuRadioItemPassThroughType<E> = PassThroughType<MenuRadioItemInstance, E>;

/**
 * Defines passthrough(pt) options of MenuRadioItem component.
 */
export interface MenuRadioItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuRadioItemPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in MenuRadioItem component.
 */
export interface MenuRadioItemProps extends BaseComponentProps<MenuRadioItemInstance, unknown, MenuRadioItemPassThrough> {
    /**
     * Value of the radio item.
     */
    value?: unknown;
    /**
     * When present, it specifies that the item should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
}

/**
 * Defines valid state in MenuRadioItem component.
 */
export interface MenuRadioItemState {}

/**
 * Defines the methods and properties exposed by MenuRadioItem component.
 */
export interface MenuRadioItemExposes {
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
     * Context value of the MenuRadioGroup.
     */
    radioGroup: MenuRadioGroupContextInterface | null;
    /**
     * Whether the radio item is checked or not.
     */
    checked: boolean;
    /**
     * Handler to select this radio item.
     */
    handleValueChange: () => void;
}

/**
 * Instance of MenuRadioItem component.
 */
export type MenuRadioItemInstance = ComponentInstance<MenuRadioItemProps, MenuRadioItemState, MenuRadioItemExposes>;
