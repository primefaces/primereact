/**
 *
 * ConfirmPopupPortal is a component that displays a portal.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopupportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmPopupInstance } from './ConfirmPopup.types';

/**
 * Defines passthrough(pt) options type in ConfirmPopupPortal component.
 */
export type ConfirmPopupPortalPassThroughType<E> = PassThroughType<ConfirmPopupPortalInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopupPortal component.
 */
export interface ConfirmPopupPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupPortalPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopupPortal component.
 */
export interface ConfirmPopupPortalProps extends BaseComponentProps<ConfirmPopupPortalInstance, unknown, ConfirmPopupPortalPassThrough> {}

/**
 * Defines valid state in ConfirmPopupPortal component.
 */
export interface ConfirmPopupPortalState {}

/**
 * Defines the methods and properties exposed by ConfirmPopupPortal component.
 */
export interface ConfirmPopupPortalExposes {
    /**
     * Instance of the ConfirmPopup component.
     */
    confirmpopup: ConfirmPopupInstance | undefined | null;
}

/**
 * Instance of ConfirmPopupPortal component.
 */
export type ConfirmPopupPortalInstance = ComponentInstance<ConfirmPopupPortalProps, ConfirmPopupPortalState, ConfirmPopupPortalExposes>;
