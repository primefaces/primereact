/**
 *
 * TerminalPrompt is a container component for the input area of a Terminal.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalprompt
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TerminalRootInstance } from './TerminalRoot.types';

/**
 * Defines passthrough(pt) options type in TerminalPrompt component.
 */
export type TerminalPromptPassThroughType<E> = PassThroughType<TerminalPromptInstance, E>;

/**
 * Defines passthrough(pt) options of TerminalPrompt component.
 */
export interface TerminalPromptPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalPromptPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TerminalPrompt component.
 */
export interface TerminalPromptProps extends BaseComponentProps<TerminalPromptInstance, unknown, TerminalPromptPassThrough> {}

/**
 * Defines valid state in TerminalPrompt component.
 */
export interface TerminalPromptState {}

/**
 * Defines the methods and properties exposed by TerminalPrompt component.
 */
export interface TerminalPromptExposes {
    /**
     * The Terminal component instance.
     */
    terminal: TerminalRootInstance | undefined | null;
}

/**
 * Instance of TerminalPrompt component.
 */
export type TerminalPromptInstance = ComponentInstance<TerminalPromptProps, TerminalPromptState, TerminalPromptExposes>;
