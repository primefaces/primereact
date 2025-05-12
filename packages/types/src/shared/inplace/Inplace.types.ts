/**
 *
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 *
 * [Live Demo](https://www.primereact.org/inplace/)
 *
 * @module inplace
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useInplaceChangeEvent, useInplaceExposes, useInplaceProps, useInplaceState } from './useInplace.types';

/**
 * Defines passthrough(pt) options type in Inplace component.
 */
export type InplacePassThroughOptionType<E> = PassThroughOptionType<InplaceInstance, E>;

/**
 * Defines passthrough(pt) options of Inplace component.
 */
export interface InplacePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InplacePassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the Inplace's checked state changes.
 * @extends useInplaceChangeEvent
 */
export interface InplaceChangeEvent extends useInplaceChangeEvent {
    /**
     * Value of the Inplace.
     */
    value?: unknown | undefined;
}

/**
 * Defines valid properties in Inplace component.
 */
export interface InplaceProps extends BaseComponentProps<useInplaceProps> {
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
}

/**
 * Defines valid state in Inplace component.
 * @extends useInplaceState
 */
export interface InplaceState extends useInplaceState {}

/**
 * Defines the methods and properties exposed by Inplace component.
 * @extends useInplaceExposes
 */
export interface InplaceExposes extends useInplaceExposes {}

/**
 * Instance of Inplace component.
 */
export type InplaceInstance = ComponentInstance<InplaceProps, InplaceState, InplaceExposes>;
