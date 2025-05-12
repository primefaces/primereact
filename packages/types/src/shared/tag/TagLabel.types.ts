/**
 *
 * TagLabel is a component that displays a label.
 *
 * [Live Demo](https://www.primereact.org/tag/)
 *
 * @module taglabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in TagLabel component.
 */
export type TagLabelPassThroughOptionType<E> = PassThroughOptionType<TagLabelInstance, E>;

/**
 * Defines passthrough(pt) options of TagLabel component.
 */
export interface TagLabelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TagLabelPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TagLabel component.
 */
export interface TagLabelProps extends BaseComponentProps {}

/**
 * Defines valid state in TagLabel component.
 */
export interface TagLabelState {}

/**
 * Defines the methods and properties exposed by TagLabel component.
 */
export interface TagLabelExposes {}

/**
 * Instance of TagLabel component.
 */
export type TagLabelInstance = ComponentInstance<TagLabelProps, TagLabelState, TagLabelExposes>;
