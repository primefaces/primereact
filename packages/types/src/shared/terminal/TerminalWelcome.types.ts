/**
 *
 * TerminalWelcome is a container component that displays content at the welcome of a Terminal.
 *
 * [Live Demo](https://www.primereact.org/terminal/)
 *
 * @module terminalwelcome
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { TerminalInstance } from './Terminal.types';

/**
 * Defines passthrough(pt) options type in TerminalWelcome component.
 */
export type TerminalWelcomePassThroughType<E> = PassThroughType<TerminalWelcomeInstance, E>;

/**
 * Defines passthrough(pt) options of TerminalWelcome component.
 */
export interface TerminalWelcomePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TerminalWelcomePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TerminalWelcome component.
 */
export interface TerminalWelcomeProps extends BaseComponentProps<TerminalWelcomeInstance, unknown, TerminalWelcomePassThrough> {}

/**
 * Defines valid state in TerminalWelcome component.
 */
export interface TerminalWelcomeState {}

/**
 * Defines the methods and properties exposed by TerminalWelcome component.
 */
export interface TerminalWelcomeExposes {
    /**
     * The Terminal component instance.
     */
    terminal: TerminalInstance | undefined | null;
}

/**
 * Instance of TerminalWelcome component.
 */
export type TerminalWelcomeInstance = ComponentInstance<TerminalWelcomeProps, TerminalWelcomeState, TerminalWelcomeExposes>;
