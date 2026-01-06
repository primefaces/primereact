/**
 *
 * The useTerminal manages the state and functionality of a terminal component.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module useterminal
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Represents a command item in the terminal history.
 */
export interface TerminalCommandItem {
    /**
     * The command text entered by the user.
     */
    text: string;
    /**
     * Optional response or output from the command execution.
     */
    response?: string;
}

/**
 * Defines valid properties in useTerminal.
 */
export interface useTerminalProps {
    /**
     * Prompt text for each command.
     */
    prompt?: string | undefined;
}

/**
 * Defines valid state in useTerminal.
 */
export interface useTerminalState {
    /**
     * Current command text being typed.
     */
    commandText: string;
    /**
     * Array of commands and their responses.
     */
    commands: TerminalCommandItem[];
}

/**
 * Defines the methods and properties exposed by useTerminal.
 */
export interface useTerminalExposes {
    /**
     * State of the terminal.
     */
    state: useTerminalState;
    /**
     * Reference to the input element.
     */
    inputRef: React.RefObject<HTMLInputElement | null>;
    /**
     * Click handler for terminal container.
     */
    onClick: () => void;
    /**
     * Key down handler for input element.
     */
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Input change handler.
     */
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Instance of useTerminal headless.
 */
export type useTerminalInstance = HeadlessInstance<useTerminalProps, useTerminalState, useTerminalExposes>;
