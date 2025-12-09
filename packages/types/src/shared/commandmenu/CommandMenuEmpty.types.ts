/**
 *
 * CommandMenuEmpty is a component that displays an empty message in a command menu.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module commandmenuempty
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CommandMenuInstance } from './CommandMenu.types';

/**
 * Defines passthrough(pt) options type in CommandMenuEmpty component.
 */
export type CommandMenuEmptyPassThroughType<E> = PassThroughType<CommandMenuEmptyInstance, E>;

/**
 * Defines passthrough(pt) options of CommandMenuEmpty component.
 */
export interface CommandMenuEmptyPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CommandMenuEmptyPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CommandMenuEmpty component.
 */
export interface CommandMenuEmptyProps extends BaseComponentProps<CommandMenuEmptyInstance, unknown, CommandMenuEmptyPassThrough> {}

/**
 * Defines valid state in CommandMenuEmpty component.
 */
export interface CommandMenuEmptyState {}

/**
 * Defines the methods and properties exposed by CommandMenuEmpty component.
 */
export interface CommandMenuEmptyExposes {
    /**
     * The CommandMenu component instance.
     */
    commandmenu: CommandMenuInstance | undefined | null;
}

/**
 * Instance of CommandMenuEmpty component.
 */
export type CommandMenuEmptyInstance = ComponentInstance<CommandMenuEmptyProps, CommandMenuEmptyState, CommandMenuEmptyExposes>;
