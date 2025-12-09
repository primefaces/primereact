/**
 *
 * CommandMenuGroup is a component that displays a group in a command menu.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module commandmenugroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CommandMenuInstance } from './CommandMenu.types';

/**
 * Defines passthrough(pt) options type in CommandMenuGroup component.
 */
export type CommandMenuGroupPassThroughType<E> = PassThroughType<CommandMenuGroupInstance, E>;

/**
 * Defines passthrough(pt) options of CommandMenuGroup component.
 */
export interface CommandMenuGroupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CommandMenuGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CommandMenuGroup component.
 */
export interface CommandMenuGroupProps extends BaseComponentProps<CommandMenuGroupInstance, unknown, CommandMenuGroupPassThrough> {
    /**
     * Value of the group.
     */
    value?: string | undefined;
}

/**
 * Defines valid state in CommandMenuGroup component.
 */
export interface CommandMenuGroupState {}

/**
 * Defines the methods and properties exposed by CommandMenuGroup component.
 */
export interface CommandMenuGroupExposes {
    /**
     * The CommandMenu component instance.
     */
    commandmenu: CommandMenuInstance | undefined | null;
}

/**
 * Instance of CommandMenuGroup component.
 */
export type CommandMenuGroupInstance = ComponentInstance<CommandMenuGroupProps, CommandMenuGroupState, CommandMenuGroupExposes>;
