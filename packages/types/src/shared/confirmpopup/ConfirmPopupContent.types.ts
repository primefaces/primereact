/**
 *
 * ConfirmPopupContent is a component that displays a content.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopupcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmPopupInstance } from './ConfirmPopup.types';

/**
 * Defines passthrough(pt) options type in ConfirmPopupContent component.
 */
export type ConfirmPopupContentPassThroughType<E> = PassThroughType<ConfirmPopupContentInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopupContent component.
 */
export interface ConfirmPopupContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupContentPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopupContent component.
 */
export interface ConfirmPopupContentProps extends BaseComponentProps<ConfirmPopupContentInstance, unknown, ConfirmPopupContentPassThrough> {}

/**
 * Defines valid state in ConfirmPopupContent component.
 */
export interface ConfirmPopupContentState {}

/**
 * Defines the methods and properties exposed by ConfirmPopupContent component.
 */
export interface ConfirmPopupContentExposes {
    /**
     * Instance of the ConfirmPopup component.
     */
    confirmpopup: ConfirmPopupInstance | undefined | null;
}

/**
 * Instance of ConfirmPopupContent component.
 */
export type ConfirmPopupContentInstance = ComponentInstance<ConfirmPopupContentProps, ConfirmPopupContentState, ConfirmPopupContentExposes>;
