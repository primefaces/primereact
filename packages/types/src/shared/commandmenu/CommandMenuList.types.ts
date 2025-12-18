/**
 *
 * CommandMenuList is a component that displays a list in a command menu.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module commandmenulist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CommandMenuInstance } from './CommandMenu.types';

/**
 * Defines passthrough(pt) options type in CommandMenuList component.
 */
export type CommandMenuListPassThroughType<E> = PassThroughType<CommandMenuListInstance, E>;

/**
 * Defines passthrough(pt) options of CommandMenuList component.
 */
export interface CommandMenuListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CommandMenuListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CommandMenuList component.
 */
export interface CommandMenuListProps extends BaseComponentProps<CommandMenuListInstance, unknown, CommandMenuListPassThrough> {}

/**
 * Defines valid state in CommandMenuList component.
 */
export interface CommandMenuListState {}

/**
 * Defines the methods and properties exposed by CommandMenuList component.
 */
export interface CommandMenuListExposes {
    /**
     * The CommandMenu component instance.
     */
    commandmenu: CommandMenuInstance | undefined | null;
}

/**
 * Instance of CommandMenuList component.
 */
export type CommandMenuListInstance = ComponentInstance<CommandMenuListProps, CommandMenuListState, CommandMenuListExposes>;
