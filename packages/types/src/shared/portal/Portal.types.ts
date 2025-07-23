/**
 *
 * Portal component renders its children into a DOM node that exists outside the component's DOM hierarchy.
 *
 * [Live Demo](https://www.primereact.org/)
 *
 * @module portal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePortalExposes, usePortalProps, usePortalState } from './usePortal.types';

/**
 * Defines passthrough(pt) options type in Portal component.
 */
export type PortalPassThroughType<E> = PassThroughType<PortalInstance, E>;

/**
 * Defines passthrough(pt) options of Portal component.
 */
export interface PortalPassThrough {}

/**
 * Defines valid properties in Portal component.
 */
export interface PortalProps extends BaseComponentProps<PortalInstance, usePortalProps, PortalPassThrough> {
    /**
     * The element to be rendered as the portal.
     */
    element?: React.ReactNode;
    /**
     * The DOM element where the portal should be appended to.
     * @default 'body'
     */
    appendTo?: HTMLElement | 'body' | 'self' | undefined;
}

/**
 * Defines valid state in Portal component.
 * @extends usePortalState
 */
export interface PortalState extends usePortalState {}

/**
 * Defines the methods and properties exposed by Portal component.
 * @extends usePortalExposes
 */
export interface PortalExposes extends usePortalExposes {}

/**
 * Instance of Portal component.
 */
export type PortalInstance = ComponentInstance<PortalProps, PortalState, PortalExposes>;
