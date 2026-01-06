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
