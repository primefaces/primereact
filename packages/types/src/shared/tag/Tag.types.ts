/**
 *
 * Tag component is used to categorize content.
 *
 * [Live Demo](https://www.primereact.org/tag/)
 *
 * @module tag
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useTagExposes, useTagProps, useTagState } from './useTag.types';

/**
 * Defines passthrough(pt) options type in Tag component.
 */
export type TagPassThroughOptionType<E> = PassThroughOptionType<TagInstance, E>;

/**
 * Defines passthrough(pt) options of Tag component.
 */
export interface TagPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TagPassThroughOptionType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Tag component.
 */
export interface TagProps extends BaseComponentProps<TagInstance, useTagProps> {
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
export interface TagState extends useTagState {}

/**
 * Defines the methods and properties exposed by Tag component.
 * @extends useTagExposes
 */
export interface TagExposes extends useTagExposes {}

/**
 * Defines the CSS class names used in the Tag component.
 */
export const TagClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-tag',
    /**
     * Class name of the icon element
     */
    icon: 'p-tag-icon',
    /**
     * Class name of the label element
     */
    label: 'p-tag-label'
} as const;

/**
 * Type representing the CSS class names used in the Tag component.
 */
export type TagClassNamesType = (typeof TagClassNames)[keyof typeof TagClassNames];

/**
 * Instance of Tag component.
 */
export type TagInstance = ComponentInstance<TagProps, TagState, TagExposes>;
