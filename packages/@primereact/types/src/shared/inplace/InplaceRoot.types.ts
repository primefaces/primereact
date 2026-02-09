/**
 *
 * Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.
 *
 * [Live Demo](https://www.primereact.org/inplace/)
 *
 * @module inplaceroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useInplaceChangeEvent, useInplaceExposes, useInplaceProps, useInplaceState } from './useInplace.types';

/**
 * Defines passthrough(pt) options type in Inplace component.
 */
export type InplaceRootPassThroughType<E> = PassThroughType<InplaceRootInstance, E>;

/**
 * Defines passthrough(pt) options of Inplace component.
 */
export interface InplaceRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InplaceRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: InplaceRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the display's DOM element.
     */
    display?: InplaceRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the close's DOM element.
     */
    close?: InplaceRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the Inplace's checked state changes.
 * @extends useInplaceChangeEvent
 */
export interface InplaceRootChangeEvent extends useInplaceChangeEvent {
    /**
     * Value of the Inplace.
     */
    value?: unknown | undefined;
}

/**
 * Defines valid properties in Inplace component.
 */
export interface InplaceRootProps extends BaseComponentProps<InplaceRootInstance, Omit<useInplaceProps, 'onActiveChange'>, InplaceRootPassThrough> {
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Callback fired when the Inplace's active state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new active state of the Inplace.
     * @returns void
     */
    onActiveChange?: (event: InplaceRootChangeEvent) => void;
}

/**
 * Defines valid state in Inplace component.
 * @extends useInplaceState
 */
export interface InplaceRootState extends useInplaceState {}

/**
 * Defines the methods and properties exposed by Inplace component.
 * @extends useInplaceExposes
 */
export interface InplaceRootExposes extends useInplaceExposes {}

/**
 * Instance of Inplace component.
 */
export type InplaceRootInstance = ComponentInstance<InplaceRootProps, InplaceRootState, InplaceRootExposes>;
