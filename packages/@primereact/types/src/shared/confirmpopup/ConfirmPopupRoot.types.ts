/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useConfirmPopupExposes, useConfirmPopupProps, useConfirmPopupState } from './useConfirmPopup.types';

/**
 * Defines passthrough(pt) options type in ConfirmPopup component.
 */
export type ConfirmPopupRootPassThroughType<E> = PassThroughType<ConfirmPopupRootInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopup component.
 */
export interface ConfirmPopupRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: ConfirmPopupRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: ConfirmPopupRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ConfirmPopupRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ConfirmPopupRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the message's DOM element.
     */
    message?: ConfirmPopupRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: ConfirmPopupRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the reject's DOM element.
     */
    reject?: ConfirmPopupRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the accept's DOM element.
     */
    accept?: ConfirmPopupRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopup component.
 */
export interface ConfirmPopupRootProps extends BaseComponentProps<ConfirmPopupRootInstance, useConfirmPopupProps, ConfirmPopupRootPassThrough> {}

/**
 * Defines valid state in ConfirmPopup component.
 * @extends useConfirmPopupState
 */
export interface ConfirmPopupRootState extends useConfirmPopupState {}

/**
 * Defines the methods and properties exposed by ConfirmPopup component.
 * @extends useConfirmPopupExposes
 */
export interface ConfirmPopupRootExposes extends useConfirmPopupExposes {}

/**
 * Instance of ConfirmPopup component.
 */
export type ConfirmPopupRootInstance = ComponentInstance<ConfirmPopupRootProps, ConfirmPopupRootState, ConfirmPopupRootExposes>;
