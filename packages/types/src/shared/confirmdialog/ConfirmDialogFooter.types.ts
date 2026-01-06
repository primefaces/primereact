/**
 *
 * ConfirmDialogFooter is a component that displays footer.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogRootInstance } from '@primereact/types/shared/dialog';
import type { ConfirmDialogRootInstance } from './ConfirmDialogRoot.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogFooter component.
 */
export type ConfirmDialogFooterPassThroughType<E> = PassThroughType<ConfirmDialogFooterInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogFooter component.
 */
export interface ConfirmDialogFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ConfirmDialogFooter component.
 */
export interface ConfirmDialogFooterProps extends BaseComponentProps<ConfirmDialogFooterInstance, unknown, ConfirmDialogFooterPassThrough> {}

/**
 * Defines valid state in ConfirmDialogFooter component.
 */
export interface ConfirmDialogFooterState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogFooter component.
 */
export interface ConfirmDialogFooterExposes {
    /**
     * The ConfirmDialog component instance.
     */
    confirmdialog: ConfirmDialogRootInstance | undefined | null;
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogRootInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogFooter component.
 */
export type ConfirmDialogFooterInstance = ComponentInstance<ConfirmDialogFooterProps, ConfirmDialogFooterState, ConfirmDialogFooterExposes>;
