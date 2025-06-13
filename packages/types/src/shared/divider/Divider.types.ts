/**
 *
 * Divider is used to separate contents.
 *
 * [Live Demo](https://www.primereact.org/divider/)
 *
 * @module divider
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDividerExposes, useDividerProps, useDividerState } from './useDivider.types';

/**
 * Defines passthrough(pt) options type in Divider component.
 */
export type DividerPassThroughType<E> = PassThroughType<DividerInstance, E>;

/**
 * Defines passthrough(pt) options of Divider component.
 */
export interface DividerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DividerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: DividerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Divider component.
 */
export interface DividerProps extends BaseComponentProps<DividerInstance, useDividerProps> {
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
export interface DividerState extends useDividerState {}

/**
 * Defines the methods and properties exposed by Divider component.
 * @extends useDividerExposes
 */
export interface DividerExposes extends useDividerExposes {}

/**
 * Defines the CSS class names used in the Divider component.
 */
export const DividerClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-divider',
    /**
     * Class name of the content element
     */
    content: 'p-divider-content'
} as const;

/**
 * Type representing the CSS class names used in the Divider component.
 */
export type DividerClassNamesType = (typeof DividerClassNames)[keyof typeof DividerClassNames];

/**
 * Instance of Divider component.
 */
export type DividerInstance = ComponentInstance<DividerProps, DividerState, DividerExposes, DividerPassThrough>;
