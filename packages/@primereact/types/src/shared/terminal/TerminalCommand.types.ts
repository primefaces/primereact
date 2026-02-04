/**
 *
 * TerminalCommand is a container component that wraps each command item in a Terminal.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalcommand
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TerminalCommandItem } from './useTerminal.types';
import type { TerminalRootInstance } from './TerminalRoot.types';

/**
 * Defines passthrough(pt) options type in TerminalCommand component.
 */
export type TerminalCommandPassThroughType<E> = PassThroughType<TerminalCommandInstance, E>;

/**
 * Defines passthrough(pt) options of TerminalCommand component.
 */
export interface TerminalCommandPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalCommandPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TerminalCommand component.
 */
export interface TerminalCommandProps extends BaseComponentProps<TerminalCommandInstance, unknown, TerminalCommandPassThrough> {
    /**
     * Index of the command in the list.
     */
    index?: number;
}

/**
 * Defines valid state in TerminalCommand component.
 */
export interface TerminalCommandState {}

/**
 * Defines the methods and properties exposed by TerminalCommand component.
 */
export interface TerminalCommandExposes {
    /**
     * The Terminal component instance.
     */
    terminal: TerminalRootInstance | undefined | null;
    /**
     * The command item data.
     */
    command: TerminalCommandItem | undefined;
    /**
     * The index of the command in the list.
     */
    index: number | undefined;
}

/**
 * Instance of TerminalCommand component.
 */
export type TerminalCommandInstance = ComponentInstance<TerminalCommandProps, TerminalCommandState, TerminalCommandExposes>;
