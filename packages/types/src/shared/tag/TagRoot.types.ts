/**
 *
 * Tag component is used to categorize content.
 *
 * [Live Demo](https://www.primereact.org/tag/)
 *
 * @module tagroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useTagExposes, useTagProps, useTagState } from './useTag.types';

/**
 * Defines passthrough(pt) options type in Tag component.
 */
export type TagRootPassThroughType<E> = PassThroughType<TagRootInstance, E>;

/**
 * Defines passthrough(pt) options of Tag component.
 */
export interface TagRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TagRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: TagRootPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: TagRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Tag component.
 */
export interface TagRootProps extends BaseComponentProps<TagRootInstance, useTagProps, TagRootPassThrough> {
    /**
     * Severity type of the tag.
     */
    severity?: 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast' | undefined;
    /**
     * Whether the corners of the tag are rounded.
     * @default false
     */
    rounded?: boolean | undefined;
}

/**
 * Defines valid state in Tag component.
 * @extends useTagState
 */
export interface TagRootState extends useTagState {}

/**
 * Defines the methods and properties exposed by Tag component.
 * @extends useTagExposes
 */
export interface TagRootExposes extends useTagExposes {}

/**
 * Instance of Tag component.
 */
export type TagRootInstance = ComponentInstance<TagRootProps, TagRootState, TagRootExposes>;
