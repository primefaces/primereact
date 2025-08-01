/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.primereact.org/iconfield/)
 *
 * @module iconfield
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useIconFieldExposes, useIconFieldProps, useIconFieldState } from './useIconField.types';

/**
 * Defines passthrough(pt) options type in IconField component.
 */
export type IconFieldPassThroughType<E> = PassThroughType<IconFieldInstance, E>;

/**
 * Defines passthrough(pt) options of IconField component.
 */
export interface IconFieldPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: IconFieldPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: IconFieldPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in IconField component.
 */
export interface IconFieldProps extends BaseComponentProps<IconFieldInstance, useIconFieldProps, IconFieldPassThrough> {}

/**
 * Defines valid state in IconField component.
 * @extends useIconFieldState
 */
export interface IconFieldState extends useIconFieldState {}

/**
 * Defines the methods and properties exposed by IconField component.
 * @extends useIconFieldExposes
 */
export interface IconFieldExposes extends useIconFieldExposes {}

/**
 * Defines the CSS class names used in the IconField component.
 */
export const IconFieldClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-iconfield',
    /**
     * Class name of the icon element
     */
    icon: 'p-inputicon'
} as const;

/**
 * Type representing the CSS class names used in the IconField component.
 */
export type IconFieldClassNamesType = (typeof IconFieldClassNames)[keyof typeof IconFieldClassNames];

/**
 * Instance of IconField component.
 */
export type IconFieldInstance = ComponentInstance<IconFieldProps, IconFieldState, IconFieldExposes>;
