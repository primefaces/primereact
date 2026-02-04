/**
 *
 * TerminalCommandResponse displays the response/output of a command in the Terminal.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalcommandresponse
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TerminalCommandItem } from './useTerminal.types';
import type { TerminalRootInstance } from './TerminalRoot.types';

/**
 * Defines passthrough(pt) options type in TerminalCommandResponse component.
 */
export type TerminalCommandResponsePassThroughType<E> = PassThroughType<TerminalCommandResponseInstance, E>;

/**
 * Defines passthrough(pt) options of TerminalCommandResponse component.
 */
export interface TerminalCommandResponsePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalCommandResponsePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TerminalCommandResponse component.
 */
export interface TerminalCommandResponseProps extends BaseComponentProps<TerminalCommandResponseInstance, unknown, TerminalCommandResponsePassThrough> {}

/**
 * Defines valid state in TerminalCommandResponse component.
 */
export interface TerminalCommandResponseState {}

/**
 * Defines the methods and properties exposed by TerminalCommandResponse component.
 */
export interface TerminalCommandResponseExposes {
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
 * Instance of TerminalCommandResponse component.
 */
export type TerminalCommandResponseInstance = ComponentInstance<TerminalCommandResponseProps, TerminalCommandResponseState, TerminalCommandResponseExposes>;
