/**
 *
 * CommandMenuGroupHeading is a component that displays a heading in a command menu group.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module commandmenugroupheading
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CommandMenuInstance } from './CommandMenu.types';

/**
 * Defines passthrough(pt) options type in CommandMenuGroupHeading component.
 */
export type CommandMenuGroupHeadingPassThroughType<E> = PassThroughType<CommandMenuGroupHeadingInstance, E>;

/**
 * Defines passthrough(pt) options of CommandMenuGroupHeading component.
 */
export interface CommandMenuGroupHeadingPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CommandMenuGroupHeadingPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CommandMenuGroupHeading component.
 */
export interface CommandMenuGroupHeadingProps extends BaseComponentProps<CommandMenuGroupHeadingInstance, unknown, CommandMenuGroupHeadingPassThrough> {}

/**
 * Defines valid state in CommandMenuGroupHeading component.
 */
export interface CommandMenuGroupHeadingState {}

/**
 * Defines the methods and properties exposed by CommandMenuGroupHeading component.
 */
export interface CommandMenuGroupHeadingExposes {
    /**
     * The CommandMenu component instance.
     */
    commandmenu: CommandMenuInstance | undefined | null;
}

/**
 * Instance of CommandMenuGroupHeading component.
 */
export type CommandMenuGroupHeadingInstance = ComponentInstance<CommandMenuGroupHeadingProps, CommandMenuGroupHeadingState, CommandMenuGroupHeadingExposes>;
