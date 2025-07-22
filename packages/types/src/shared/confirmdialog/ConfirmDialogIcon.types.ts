/**
 *
 * ConfirmDialogIcon is a component that displays an icon.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmDialogInstance } from './ConfirmDialog.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogIcon component.
 */
export type ConfirmDialogIconPassThroughType<E> = PassThroughType<ConfirmDialogIconInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogIcon component.
 */
export interface ConfirmDialogIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogIconPassThroughType<React.HTMLAttributes<HTMLLegendElement>>;
}

/**
 * Defines valid properties in ConfirmDialogIcon component.
 */
export interface ConfirmDialogIconProps extends BaseComponentProps<ConfirmDialogIconInstance, unknown, ConfirmDialogIconPassThrough> {}

/**
 * Defines valid state in ConfirmDialogIcon component.
 */
export interface ConfirmDialogIconState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogIcon component.
 */
export interface ConfirmDialogIconExposes {
    /**
     * The ConfirmDialog component instance.
     */
    confirmdialog: ConfirmDialogInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogIcon component.
 */
export type ConfirmDialogIconInstance = ComponentInstance<ConfirmDialogIconProps, ConfirmDialogIconState, ConfirmDialogIconExposes>;
