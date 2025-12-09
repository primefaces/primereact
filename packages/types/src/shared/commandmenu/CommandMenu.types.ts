/**
 *
 * CommandMenu represents a command menu component.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module commandmenu
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useCommandMenuExposes, useCommandMenuProps, useCommandMenuState } from './useCommandMenu.types';

/**
 * Defines passthrough(pt) options type in  CommandMenu component.
 */
export type CommandMenuPassThroughType<E> = PassThroughType<CommandMenuInstance, E>;

/**
 * Defines passthrough(pt) options of CommandMenu component.
 */
export interface CommandMenuPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CommandMenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: CommandMenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the group's DOM element.
     */
    group?: CommandMenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the group heading's DOM element.
     */
    groupHeading?: CommandMenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: CommandMenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the empty's DOM element.
     */
    empty?: CommandMenuPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: CommandMenuPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in CommandMenu component.
 */
export interface CommandMenuProps extends BaseComponentProps<CommandMenuInstance, useCommandMenuProps, CommandMenuPassThrough> {}

/**
 * Defines valid state in CommandMenu component.
 * @extends useCommandMenuState
 */
export interface CommandMenuState extends useCommandMenuState {}

/**
 * Defines the methods and properties exposed by CommandMenu component.
 * @extends useCommandMenuExposes
 */
export interface CommandMenuExposes extends useCommandMenuExposes {}

/**
 * Defines the CSS class names used in the CommandMenu component.
 */
export const CommandMenuClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-commandmenu',
    /**
     * Class name of the list element
     */
    list: 'p-commandmenu-list',
    /**
     * Class name of the group element
     */
    group: 'p-commandmenu-group',
    /**
     * Class name of the group heading element
     */
    groupHeading: 'p-commandmenu-group-heading',
    /**
     * Class name of the item element
     */
    item: 'p-commandmenu-item',
    /**
     * Class name of the empty element
     */
    empty: 'p-commandmenu-empty',
    /**
     * Class name of the input element
     */
    input: 'p-commandmenu-input'
} as const;

/**
 * Type representing the CSS class names used in the CommandMenu component.
 */
export type CommandMenuClassNamesType = (typeof CommandMenuClassNames)[keyof typeof CommandMenuClassNames];

/**
 * Instance of CommandMenu component.
 */
export type CommandMenuInstance = ComponentInstance<CommandMenuProps, CommandMenuState, CommandMenuExposes>;
