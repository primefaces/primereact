/**
 *
 * TerminalCommandPromptLabel displays the prompt label for a command in the Terminal.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalcommandpromptlabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TerminalRootInstance } from './TerminalRoot.types';

/**
 * Defines passthrough(pt) options type in TerminalCommandPromptLabel component.
 */
export type TerminalCommandPromptLabelPassThroughType<E> = PassThroughType<TerminalCommandPromptLabelInstance, E>;

/**
 * Defines passthrough(pt) options of TerminalCommandPromptLabel component.
 */
export interface TerminalCommandPromptLabelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalCommandPromptLabelPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in TerminalCommandPromptLabel component.
 */
export interface TerminalCommandPromptLabelProps extends BaseComponentProps<TerminalCommandPromptLabelInstance, unknown, TerminalCommandPromptLabelPassThrough> {}

/**
 * Defines valid state in TerminalCommandPromptLabel component.
 */
export interface TerminalCommandPromptLabelState {}

/**
 * Defines the methods and properties exposed by TerminalCommandPromptLabel component.
 */
export interface TerminalCommandPromptLabelExposes {
    /**
     * The Terminal component instance.
     */
    terminal: TerminalRootInstance | undefined | null;
}

/**
 * Instance of TerminalCommandPromptLabel component.
 */
export type TerminalCommandPromptLabelInstance = ComponentInstance<TerminalCommandPromptLabelProps, TerminalCommandPromptLabelState, TerminalCommandPromptLabelExposes>;
