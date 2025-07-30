/**
 *
 * Terminal is a text based user interface.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useTerminalExposes, useTerminalProps, useTerminalState } from './useTerminal.types';

/**
 * Defines passthrough(pt) options type in Terminal component.
 */
export type TerminalPassThroughType<E> = PassThroughType<TerminalInstance, E>;

/**
 * Defines passthrough(pt) options of Terminal component.
 */
export interface TerminalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the commandList's DOM element.
     */
    commandList?: TerminalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the commands' DOM element.
     */
    commands?: TerminalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the command value's DOM element.
     */
    commandValue?: TerminalPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the command response's DOM element.
     */
    commandResponse?: TerminalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the prompt's DOM element.
     */
    prompt?: TerminalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the prompt value's DOM element.
     */
    promptValue?: TerminalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the prompt label's DOM element.
     */
    promptLabel?: TerminalPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Terminal component.
 */
export interface TerminalProps extends BaseComponentProps<TerminalInstance, useTerminalProps, TerminalPassThrough> {}

/**
 * Defines valid state in Terminal component.
 * @extends useTerminalState
 */
export interface TerminalState extends useTerminalState {}

/**
 * Defines the methods and properties exposed by Terminal component.
 * @extends useTerminalExposes
 */
export interface TerminalExposes extends useTerminalExposes {}

/**
 * Defines the CSS class names used in the Terminal component.
 */
export const TerminalClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-terminal',
    /**
     * Class name of the welcome element
     */
    welcome: 'p-terminal-welcome-message',
    /**
     * Class name of the command list element
     */
    commandList: 'p-terminal-command-list',
    /**
     * Class name of the command element
     */
    command: 'p-terminal-command',
    /**
     * Class name of the command value element
     */
    commandValue: 'p-terminal-command-value',
    /**
     * Class name of the command response element
     */
    commandResponse: 'p-terminal-command-response',
    /**
     * Class name of the prompt element
     */
    prompt: 'p-terminal-prompt',
    /**
     * Class name of the prompt label element
     */
    promptLabel: 'p-terminal-prompt-label',
    /**
     * Class name of the prompt value element
     */
    promptValue: 'p-terminal-prompt-value'
} as const;

/**
 * Type representing the CSS class names used in the Terminal component.
 */
export type TerminalClassNamesType = (typeof TerminalClassNames)[keyof typeof TerminalClassNames];

/**
 * Instance of Terminal component.
 */
export type TerminalInstance = ComponentInstance<TerminalProps, TerminalState, TerminalExposes>;
