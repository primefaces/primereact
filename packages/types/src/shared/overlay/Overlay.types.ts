/**
 *
 * Overlay is a container component that displays content in an absolutely positioned layer with features like auto z-index management, positioning relative to a target element, and outside click handling.
 *
 * [Live Demo](https://www.primereact.org/overlay/)
 *
 * @module overlay
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useOverlayExposes, useOverlayProps, useOverlayState } from './useOverlay.types';

/**
 * Defines passthrough(pt) options type in Overlay component.
 */
export type OverlayPassThroughType<E> = PassThroughType<OverlayInstance, E>;

/**
 * Defines passthrough(pt) options of Overlay component.
 */
export interface OverlayPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: OverlayPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Overlay component.
 */
export interface OverlayProps extends BaseComponentProps<OverlayInstance, useOverlayProps, OverlayPassThrough> {}

/**
 * Defines valid state in Overlay component.
 * @extends useOverlayState
 */
export interface OverlayState extends useOverlayState {}

/**
 * Defines the methods and properties exposed by Overlay component.
 * @extends useOverlayExposes
 */
export interface OverlayExposes extends useOverlayExposes {}

/**
 * Instance of Overlay component.
 */
export type OverlayInstance = ComponentInstance<OverlayProps, OverlayState, OverlayExposes>;
