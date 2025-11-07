/**
 *
 * PasswordPortal is a component that displays a portal.
 *
 * [Live Demo](https://www.primereact.org/password/)
 *
 * @module passwordportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PasswordInstance } from './Password.types';

/**
 * Defines passthrough(pt) options type in PasswordPortalcomponent.
 */
export type PasswordPortalPassThroughType<E> = PassThroughType<PasswordPortalInstance, E>;

/**
 * Defines passthrough(pt) options of PasswordPortalcomponent.
 */
export interface PasswordPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PasswordPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: PasswordPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PasswordPortalcomponent.
 */
export interface PasswordPortalProps extends BaseComponentProps<PasswordPortalInstance, unknown, PasswordPortalPassThrough> {}

/**
 * Defines valid state in PasswordPortalcomponent.
 */
export interface PasswordPortalState {}

/**
 * Defines the methods and properties exposed by PasswordPortalcomponent.
 */
export interface PasswordPortalExposes {
    /**
     * Instance of the Password component.
     */
    password: PasswordInstance | undefined | null;
}

/**
 * Instance of PasswordPortalcomponent.
 */
export type PasswordPortalInstance = ComponentInstance<PasswordPortalProps, PasswordPortalState, PasswordPortalExposes>;
