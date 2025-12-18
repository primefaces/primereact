/**
 *
 * CommandMenuInput is a component that displays an input in a command menu.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module commandmenuinput
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CommandMenuInstance } from './CommandMenu.types';

/**
 * Defines passthrough(pt) options type in CommandMenuInput component.
 */
export type CommandMenuInputPassThroughType<E> = PassThroughType<CommandMenuInputInstance, E>;

/**
 * Defines passthrough(pt) options of CommandMenuInput component.
 */
export interface CommandMenuInputPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CommandMenuInputPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CommandMenuInput component.
 */
export interface CommandMenuInputProps extends BaseComponentProps<CommandMenuInputInstance, unknown, CommandMenuInputPassThrough> {
    /**
     * Value of the input.
     */
    value?: string | undefined;
    /**
     * Callback function that is called when the value changes.
     */
    onValueChange?: (value: string) => void;
}

/**
 * Defines valid state in CommandMenuInput component.
 */
export interface CommandMenuInputState {}

/**
 * Defines the methods and properties exposed by CommandMenuInput component.
 */
export interface CommandMenuInputExposes {
    /**
     * The CommandMenu component instance.
     */
    commandmenu: CommandMenuInstance | undefined | null;
}

/**
 * Instance of CommandMenuInput component.
 */
export type CommandMenuInputInstance = ComponentInstance<CommandMenuInputProps, CommandMenuInputState, CommandMenuInputExposes>;
