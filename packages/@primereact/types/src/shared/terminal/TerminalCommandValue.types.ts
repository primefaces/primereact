/**
 *
 * TerminalCommandValue displays the command text entered by the user in the Terminal.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalcommandvalue
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TerminalCommandItem } from './useTerminal.types';
import type { TerminalRootInstance } from './TerminalRoot.types';

/**
 * Defines passthrough(pt) options type in TerminalCommandValue component.
 */
export type TerminalCommandValuePassThroughType<E> = PassThroughType<TerminalCommandValueInstance, E>;

/**
 * Defines passthrough(pt) options of TerminalCommandValue component.
 */
export interface TerminalCommandValuePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalCommandValuePassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in TerminalCommandValue component.
 */
export interface TerminalCommandValueProps extends BaseComponentProps<TerminalCommandValueInstance, unknown, TerminalCommandValuePassThrough> {}

/**
 * Defines valid state in TerminalCommandValue component.
 */
export interface TerminalCommandValueState {}

/**
 * Defines the methods and properties exposed by TerminalCommandValue component.
 */
export interface TerminalCommandValueExposes {
    /**
     * The Terminal component instance.
     */
    terminal: TerminalRootInstance | undefined | null;
    /**
     * The current command item.
     */
    command: TerminalCommandItem | undefined | null;
}

/**
 * Instance of TerminalCommandValue component.
 */
export type TerminalCommandValueInstance = ComponentInstance<TerminalCommandValueProps, TerminalCommandValueState, TerminalCommandValueExposes>;
