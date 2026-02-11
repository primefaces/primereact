/**
 *
 * Toaster Root component is used to display messages.
 *
 * [Live Demo](https://www.primereact.org/toast/)
 *
 * @module toasterroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import { ToastVariant } from '@primereact/types/shared/toaster';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useToasterExposes, useToasterProps, useToasterState } from './useToaster.types';

/**
 * Defines passthrough(pt) options type in Toaster component.
 */
export type ToasterRootPassThroughType<E> = PassThroughType<ToasterRootInstance, E>;

/**
 * Defines passthrough(pt) options of Toaster component.
 */
export interface ToasterRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToasterRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Toaster component.
 */
export interface ToasterRootProps extends BaseComponentProps<ToasterRootInstance, useToasterProps, ToasterRootPassThrough> {
    /**
     * Whether to show rich colors
     * @default false
     */
    richColors?: boolean;
    /**
     * Custom icons for each toast variant
     * @default {}
     * @type {Partial<Record<ToastVariant, React.ReactNode | string | number | boolean | null | undefined>>}
     * @example
     * {
     *     success: <Check />,
     *     error: <Times />,
     *     warning: <ExclamationTriangle />,
     *     info: <Info />
     * }
     */
    icons?: Partial<Record<ToastVariant, React.ReactNode>>;
}

/**
 * Defines valid state in Toaster component.
 * @extends useToasterState
 */
export interface ToasterRootState extends useToasterState {}

/**
 * Defines the methods and properties exposed by Toaster Root component.
 * @extends useToasterExposes
 */
export interface ToasterRootExposes extends useToasterExposes {
    /**
     * Reference to the parent Toaster instance.
     */
    toaster?: ToasterRootInstance | undefined | null;
}

/**
 * Instance of Toaster Root component.
 */
export type ToasterRootInstance = ComponentInstance<ToasterRootProps, ToasterRootState, ToasterRootExposes>;
