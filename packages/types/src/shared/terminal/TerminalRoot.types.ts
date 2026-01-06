/**
 *
 * Terminal is a text based user interface.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useTerminalExposes, useTerminalProps, useTerminalState } from './useTerminal.types';

/**
 * Defines passthrough(pt) options type in Terminal component.
 */
export type TerminalRootPassThroughType<E> = PassThroughType<TerminalRootInstance, E>;

/**
 * Defines passthrough(pt) options of Terminal component.
 */
export interface TerminalRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the commandList's DOM element.
     */
    commandList?: TerminalRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the commands' DOM element.
     */
    commands?: TerminalRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the command value's DOM element.
     */
    commandValue?: TerminalRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the command response's DOM element.
     */
    commandResponse?: TerminalRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the prompt's DOM element.
     */
    prompt?: TerminalRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the prompt value's DOM element.
     */
    promptValue?: TerminalRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the prompt label's DOM element.
     */
    promptLabel?: TerminalRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Terminal component.
 */
export interface TerminalRootProps extends BaseComponentProps<TerminalRootInstance, useTerminalProps, TerminalRootPassThrough> {}

/**
 * Defines valid state in Terminal component.
 * @extends useTerminalState
 */
export interface TerminalRootState extends useTerminalState {}

/**
 * Defines the methods and properties exposed by Terminal component.
 * @extends useTerminalExposes
 */
export interface TerminalRootExposes extends useTerminalExposes {}

/**
 * Instance of Terminal component.
 */
export type TerminalRootInstance = ComponentInstance<TerminalRootProps, TerminalRootState, TerminalRootExposes>;
