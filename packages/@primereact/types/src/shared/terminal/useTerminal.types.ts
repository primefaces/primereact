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
 * Response type for terminal commands.
 * - React.ReactNode: Display as response
 * - null: Clear the terminal
 * - undefined: No response (command only)
 */
export type TerminalResponse = React.ReactNode | null | undefined;

/**
 * Callback function for handling terminal commands.
 */
export type TerminalCommandHandler = (text: string) => TerminalResponse | Promise<TerminalResponse>;

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
    response?: React.ReactNode;
}

/**
 * Defines valid properties in useTerminal.
 */
export interface useTerminalProps {
    /**
     * Prompt text for each command.
     */
    prompt?: string | undefined;
    /**
     * Callback function invoked when a command is entered.
     * Return value determines the response:
     * - React.ReactNode: Displayed as command response
     * - null: Clears the terminal
     * - undefined: No response shown
     * Supports async functions for delayed responses.
     */
    onCommand?: TerminalCommandHandler | undefined;
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
    /**
     * Clears all commands from the terminal.
     */
    clear: () => void;
}

/**
 * Instance of useTerminal headless.
 */
export type useTerminalInstance = HeadlessInstance<useTerminalProps, useTerminalState, useTerminalExposes>;
