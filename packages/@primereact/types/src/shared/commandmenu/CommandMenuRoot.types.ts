/**
 *
 * CommandMenu represents a command menu component.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module commandmenuroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useCommandMenuExposes, useCommandMenuProps, useCommandMenuState } from './useCommandMenu.types';

/**
 * Defines passthrough(pt) options type in  CommandMenu component.
 */
export type CommandMenuRootPassThroughType<E> = PassThroughType<CommandMenuRootInstance, E>;

/**
 * Defines passthrough(pt) options of CommandMenu component.
 */
export interface CommandMenuRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CommandMenuRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: CommandMenuRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the group's DOM element.
     */
    group?: CommandMenuRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the group heading's DOM element.
     */
    groupHeading?: CommandMenuRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: CommandMenuRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the empty's DOM element.
     */
    empty?: CommandMenuRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: CommandMenuRootPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in CommandMenu component.
 */
export interface CommandMenuRootProps extends BaseComponentProps<CommandMenuRootInstance, useCommandMenuProps, CommandMenuRootPassThrough> {}

/**
 * Defines valid state in CommandMenu component.
 * @extends useCommandMenuState
 */
export interface CommandMenuRootState extends useCommandMenuState {}

/**
 * Defines the methods and properties exposed by CommandMenu component.
 * @extends useCommandMenuExposes
 */
export interface CommandMenuRootExposes extends useCommandMenuExposes {}

/**
 * Instance of CommandMenu component.
 */
export type CommandMenuRootInstance = ComponentInstance<CommandMenuRootProps, CommandMenuRootState, CommandMenuRootExposes>;
