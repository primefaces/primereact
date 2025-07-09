/**
 *
 * FocusTrap component is used to trap focus within a specific element.
 *
 * [Live Demo](https://www.primereact.org/focus-trap/)
 *
 * @module tag
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useFocusTrapExposes, useFocusTrapProps, useFocusTrapState } from './useFocusTrap.types';

/**
 * Defines passthrough(pt) options type in FocusTrap component.
 */
export type FocusTrapPassThroughType<E> = PassThroughType<FocusTrapInstance, E>;

/**
 * Defines passthrough(pt) options of FocusTrap component.
 */
export interface FocusTrapPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FocusTrapPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in FocusTrap component.
 */
export interface FocusTrapProps extends BaseComponentProps<FocusTrapInstance, useFocusTrapProps, FocusTrapPassThrough> {}

/**
 * Defines valid state in FocusTrap component.
 * @extends useFocusTrapState
 */
export interface FocusTrapState extends useFocusTrapState {}

/**
 * Defines the methods and properties exposed by FocusTrap component.
 * @extends useFocusTrapExposes
 */
export interface FocusTrapExposes extends useFocusTrapExposes {}

/**
 * Defines the CSS class names used in the FocusTrap component.
 */
export const FocusTrapClassNames = {} as const;

/**
 * Type representing the CSS class names used in the FocusTrap component.
 */
export type FocusTrapClassNamesType = (typeof FocusTrapClassNames)[keyof typeof FocusTrapClassNames];

/**
 * Instance of FocusTrap component.
 */
export type FocusTrapInstance = ComponentInstance<FocusTrapProps, FocusTrapState, FocusTrapExposes>;
