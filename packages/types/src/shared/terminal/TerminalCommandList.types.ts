/**
 *
 * TerminalCommandList is a container component that displays content at the command list of a Terminal.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalcommandlist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TerminalInstance } from './Terminal.types';

/**
 * Defines passthrough(pt) options type in TerminalCommandList component.
 */
export type TerminalCommandListPassThroughType<E> = PassThroughType<TerminalCommandListInstance, E>;

/**
 * Defines passthrough(pt) options of TerminalCommandList component.
 */
export interface TerminalCommandListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalCommandListPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TerminalCommandList component.
 */
export interface TerminalCommandListProps extends BaseComponentProps<TerminalCommandListInstance, unknown, TerminalCommandListPassThrough> {}

/**
 * Defines valid state in TerminalCommandList component.
 */
export interface TerminalCommandListState {}

/**
 * Defines the methods and properties exposed by TerminalCommandList component.
 */
export interface TerminalCommandListExposes {
    /**
     * The Terminal component instance.
     */
    terminal: TerminalInstance | undefined | null;
}

/**
 * Instance of TerminalCommandList component.
 */
export type TerminalCommandListInstance = ComponentInstance<TerminalCommandListProps, TerminalCommandListState, TerminalCommandListExposes>;
