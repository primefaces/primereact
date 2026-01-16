/**
 *
 * Divider is used to separate contents.
 *
 * [Live Demo](https://www.primereact.org/divider/)
 *
 * @module dividerroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDividerExposes, useDividerProps, useDividerState } from './useDivider.types';

/**
 * Defines passthrough(pt) options type in Divider component.
 */
export type DividerRootPassThroughType<E> = PassThroughType<DividerRootInstance, E>;

/**
 * Defines passthrough(pt) options of Divider component.
 */
export interface DividerRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DividerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: DividerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Divider component.
 */
export interface DividerRootProps extends BaseComponentProps<DividerRootInstance, useDividerProps, DividerRootPassThrough> {
    /**
     * Alignment of the content.
     */
    align?: 'left' | 'center' | 'right' | 'top' | 'center' | 'bottom' | undefined;
    /**
     * Specifies the orientation, valid values are 'horizontal' and 'vertical'.
     * @default horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
    /**
     * Border style type.
     * @default solid
     */
    type?: 'solid' | 'dashed' | 'dotted' | undefined;
}

/**
 * Defines valid state in Divider component.
 * @extends useDividerState
 */
export interface DividerRootState extends useDividerState {}

/**
 * Defines the methods and properties exposed by Divider component.
 * @extends useDividerExposes
 */
export interface DividerRootExposes extends useDividerExposes {}

/**
 * Instance of Divider component.
 */
export type DividerRootInstance = ComponentInstance<DividerRootProps, DividerRootState, DividerRootExposes>;
