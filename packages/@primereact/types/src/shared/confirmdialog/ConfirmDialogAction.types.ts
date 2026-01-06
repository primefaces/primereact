/**
 *
 * ConfirmDialogAction is a component that displays a action button.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogaction
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { DialogRootInstance } from '@primereact/types/shared/dialog';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmDialogRootInstance } from './ConfirmDialogRoot.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogAction component.
 */
export type ConfirmDialogActionPassThroughType<E> = PassThroughType<ConfirmDialogActionInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogAction component.
 */
export interface ConfirmDialogActionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogActionPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in ConfirmDialogAction component.
 */
export interface ConfirmDialogActionProps extends BaseComponentProps<ConfirmDialogActionInstance, unknown, ConfirmDialogActionPassThrough> {}

/**
 * Defines valid state in ConfirmDialogAction component.
 */
export interface ConfirmDialogActionState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogAction component.
 */
export interface ConfirmDialogActionExposes {
    /**
     * Instance of the ConfirmDialog component.
     */
    confirmdialog: ConfirmDialogRootInstance | undefined | null;
    /**
     * Instance of the Dialog component.
     */
    dialog: DialogRootInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogAction component.
 */
export type ConfirmDialogActionInstance = ComponentInstance<ConfirmDialogActionProps, ConfirmDialogActionState, ConfirmDialogActionExposes>;
