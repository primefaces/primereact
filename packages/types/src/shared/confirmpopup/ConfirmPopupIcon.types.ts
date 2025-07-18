/**
 *
 * ConfirmPopupIcon is a component that displays a icon.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopupicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmPopupInstance } from './ConfirmPopup.types';

/**
 * Defines passthrough(pt) options type in ConfirmPopupIcon component.
 */
export type ConfirmPopupIconPassThroughType<E> = PassThroughType<ConfirmPopupIconInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopupIcon component.
 */
export interface ConfirmPopupIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupIconPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopupIcon component.
 */
export interface ConfirmPopupIconProps extends BaseComponentProps<ConfirmPopupIconInstance, unknown, ConfirmPopupIconPassThrough> {}

/**
 * Defines valid state in ConfirmPopupIcon component.
 */
export interface ConfirmPopupIconState {}

/**
 * Defines the methods and properties exposed by ConfirmPopupIcon component.
 */
export interface ConfirmPopupIconExposes {
    /**
     * Instance of the ConfirmPopup component.
     */
    confirmpopup: ConfirmPopupInstance | undefined | null;
}

/**
 * Instance of ConfirmPopupIcon component.
 */
export type ConfirmPopupIconInstance = ComponentInstance<ConfirmPopupIconProps, ConfirmPopupIconState, ConfirmPopupIconExposes>;
