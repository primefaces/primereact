/**
 *
 * ConfirmPopupFooter is a component that displays a footer.
 *
 * [Live Demo](https://www.primereact.org/confirmpopup/)
 *
 * @module confirmpopupfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmPopupInstance } from './ConfirmPopup.types';

/**
 * Defines passthrough(pt) options type in ConfirmPopupFooter component.
 */
export type ConfirmPopupFooterPassThroughType<E> = PassThroughType<ConfirmPopupFooterInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmPopupFooter component.
 */
export interface ConfirmPopupFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmPopupFooterPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmPopupFooter component.
 */
export interface ConfirmPopupFooterProps extends BaseComponentProps<ConfirmPopupFooterInstance, unknown, ConfirmPopupFooterPassThrough> {}

/**
 * Defines valid state in ConfirmPopupFooter component.
 */
export interface ConfirmPopupFooterState {}

/**
 * Defines the methods and properties exposed by ConfirmPopupFooter component.
 */
export interface ConfirmPopupFooterExposes {
    /**
     * Instance of the ConfirmPopup component.
     */
    confirmpopup: ConfirmPopupInstance | undefined | null;
}

/**
 * Instance of ConfirmPopupFooter component.
 */
export type ConfirmPopupFooterInstance = ComponentInstance<ConfirmPopupFooterProps, ConfirmPopupFooterState, ConfirmPopupFooterExposes>;
