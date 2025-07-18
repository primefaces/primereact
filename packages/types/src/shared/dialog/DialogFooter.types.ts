/**
 *
 * DialogFooter is a component that displays footer.
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 *
 * @module dialogfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DialogInstance } from './Dialog.types';

/**
 * Defines passthrough(pt) options type in DialogFooter component.
 */
export type DialogFooterPassThroughType<E> = PassThroughType<DialogFooterInstance, E>;

/**
 * Defines passthrough(pt) options of DialogFooter component.
 */
export interface DialogFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DialogFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DialogFooter component.
 */
export interface DialogFooterProps extends BaseComponentProps<DialogFooterInstance, unknown, DialogFooterPassThrough> {}

/**
 * Defines valid state in DialogFooter component.
 */
export interface DialogFooterState {}

/**
 * Defines the methods and properties exposed by DialogFooter component.
 */
export interface DialogFooterExposes {
    /**
     * The Dialog component instance.
     */
    dialog: DialogInstance | undefined | null;
}

/**
 * Instance of DialogFooter component.
 */
export type DialogFooterInstance = ComponentInstance<DialogFooterProps, DialogFooterState, DialogFooterExposes>;
