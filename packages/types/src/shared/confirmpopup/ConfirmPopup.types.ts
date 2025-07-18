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
export type ConfirmPopupPassThroughType<E> = PassThroughType<ConfirmPopupInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopup component.
 */
export interface ConfirmPopupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the trigger's DOM element.
     */
    trigger?: ConfirmPopupPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: ConfirmPopupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: ConfirmPopupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ConfirmPopupPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the message's DOM element.
     */
    message?: ConfirmPopupPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: ConfirmPopupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the reject's DOM element.
     */
    reject?: ConfirmPopupPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the accept's DOM element.
     */
    accept?: ConfirmPopupPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopup component.
 */
export interface ConfirmPopupProps extends BaseComponentProps<ConfirmPopupInstance, useConfirmPopupProps, ConfirmPopupPassThrough> {}

/**
 * Defines valid state in ConfirmPopup component.
 * @extends useConfirmPopupState
 */
export interface ConfirmPopupState extends useConfirmPopupState {}

/**
 * Defines the methods and properties exposed by ConfirmPopup component.
 * @extends useConfirmPopupExposes
 */
export interface ConfirmPopupExposes extends useConfirmPopupExposes {}

/**
 * Defines the CSS class names used in the ConfirmPopup component.
 */
export const ConfirmPopupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-confirmpopup',
    /**
     * Class name of the content element
     */
    content: 'p-confirmpopup-content',
    /**
     * Class name of the icon element
     */
    icon: 'p-confirmpopup-icon',
    /**
     * Class name of the message element
     */
    message: 'p-confirmpopup-message',
    /**
     * Class name of the footer element
     */
    footer: 'p-confirmpopup-footer',
    /**
     * Class name of the reject element
     */
    reject: 'p-confirmpopup-reject-button',
    /**
     * Class name of the accept element
     */
    accept: 'p-confirmpopup-accept-button'
} as const;

/**
 * Type representing the CSS class names used in the ConfirmPopup component.
 */
export type ConfirmPopupClassNamesType = (typeof ConfirmPopupClassNames)[keyof typeof ConfirmPopupClassNames];

/**
 * Instance of ConfirmPopup component.
 */
export type ConfirmPopupInstance = ComponentInstance<ConfirmPopupProps, ConfirmPopupState, ConfirmPopupExposes>;
