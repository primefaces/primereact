/**
 *
 * TerminalPromptValue is the input element for the Terminal.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalpromptvalue
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TerminalRootInstance } from './TerminalRoot.types';

/**
 * Defines passthrough(pt) options type in TerminalPromptValue component.
 */
export type TerminalPromptValuePassThroughType<E> = PassThroughType<TerminalPromptValueInstance, E>;

/**
 * Defines passthrough(pt) options of TerminalPromptValue component.
 */
export interface TerminalPromptValuePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalPromptValuePassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in TerminalPromptValue component.
 */
export interface TerminalPromptValueProps extends BaseComponentProps<TerminalPromptValueInstance, unknown, TerminalPromptValuePassThrough> {}

/**
 * Defines valid state in TerminalPromptValue component.
 */
export interface TerminalPromptValueState {}

/**
 * Defines the methods and properties exposed by TerminalPromptValue component.
 */
export interface TerminalPromptValueExposes {
    /**
     * The Terminal component instance.
     */
    terminal: TerminalRootInstance | undefined | null;
}

/**
 * Instance of TerminalPromptValue component.
 */
export type TerminalPromptValueInstance = ComponentInstance<TerminalPromptValueProps, TerminalPromptValueState, TerminalPromptValueExposes>;
