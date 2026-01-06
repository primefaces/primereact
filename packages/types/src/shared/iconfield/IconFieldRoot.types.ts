/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.primereact.org/iconfield/)
 *
 * @module iconfieldroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useIconFieldExposes, useIconFieldProps, useIconFieldState } from './useIconField.types';

/**
 * Defines passthrough(pt) options type in IconFieldRoot component.
 */
export type IconFieldRootPassThroughType<E> = PassThroughType<IconFieldRootInstance, E>;

/**
 * Defines passthrough(pt) options of IconFieldRoot component.
 */
export interface IconFieldRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: IconFieldRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: IconFieldRootPassThroughType<React.InputHTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in IconFieldRoot component.
 */
export interface IconFieldRootProps extends BaseComponentProps<IconFieldRootInstance, useIconFieldProps, IconFieldRootPassThrough> {}

/**
 * Defines valid state in IconFieldRoot component.
 * @extends useIconFieldState
 */
export interface IconFieldRootState extends useIconFieldState {}

/**
 * Defines the methods and properties exposed by IconFieldRoot component.
 * @extends useIconFieldExposes
 */
export interface IconFieldRootExposes extends useIconFieldExposes {}

/**
 * Instance of IconFieldRoot component.
 */
export type IconFieldRootInstance = ComponentInstance<IconFieldRootProps, IconFieldRootState, IconFieldRootExposes>;
