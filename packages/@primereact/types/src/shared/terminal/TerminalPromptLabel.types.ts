/**
 *
 * TerminalPromptLabel displays the prompt label in the Terminal input area.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalpromptlabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TerminalRootInstance } from './TerminalRoot.types';

/**
 * Defines passthrough(pt) options type in TerminalPromptLabel component.
 */
export type TerminalPromptLabelPassThroughType<E> = PassThroughType<TerminalPromptLabelInstance, E>;

/**
 * Defines passthrough(pt) options of TerminalPromptLabel component.
 */
export interface TerminalPromptLabelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalPromptLabelPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in TerminalPromptLabel component.
 */
export interface TerminalPromptLabelProps extends BaseComponentProps<TerminalPromptLabelInstance, unknown, TerminalPromptLabelPassThrough> {}

/**
 * Defines valid state in TerminalPromptLabel component.
 */
export interface TerminalPromptLabelState {}

/**
 * Defines the methods and properties exposed by TerminalPromptLabel component.
 */
export interface TerminalPromptLabelExposes {
    /**
     * The Terminal component instance.
     */
    terminal: TerminalRootInstance | undefined | null;
}

/**
 * Instance of TerminalPromptLabel component.
 */
export type TerminalPromptLabelInstance = ComponentInstance<TerminalPromptLabelProps, TerminalPromptLabelState, TerminalPromptLabelExposes>;
