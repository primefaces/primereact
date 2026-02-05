/**
 *
 * ConfirmDialogTitle is a component that displays title.
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 *
 * @module confirmdialogtitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ConfirmDialogRootInstance } from './ConfirmDialogRoot.types';

/**
 * Defines passthrough(pt) options type in ConfirmDialogTitle component.
 */
export type ConfirmDialogTitlePassThroughType<E> = PassThroughType<ConfirmDialogTitleInstance, E>;

/**
 * Defines passthrough(pt) options of ConfirmDialogTitle component.
 */
export interface ConfirmDialogTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ConfirmDialogTitlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ConfirmDialogTitle component.
 */
export interface ConfirmDialogTitleProps extends BaseComponentProps<ConfirmDialogTitleInstance, unknown, ConfirmDialogTitlePassThrough> {}

/**
 * Defines valid state in ConfirmDialogTitle component.
 */
export interface ConfirmDialogTitleState {}

/**
 * Defines the methods and properties exposed by ConfirmDialogTitle component.
 */
export interface ConfirmDialogTitleExposes {
    /**
     * The ConfirmDialog component instance.
     */
    confirmdialog: ConfirmDialogRootInstance | undefined | null;
}

/**
 * Instance of ConfirmDialogTitle component.
 */
export type ConfirmDialogTitleInstance = ComponentInstance<ConfirmDialogTitleProps, ConfirmDialogTitleState, ConfirmDialogTitleExposes>;
