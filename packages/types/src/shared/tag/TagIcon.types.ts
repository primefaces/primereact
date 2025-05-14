/**
 *
 * TagIcon is a component that displays an icon.
 *
 * [Live Demo](https://www.primereact.org/tag/)
 *
 * @module tagicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import { TagInstance } from './Tag.types';

/**
 * Defines passthrough(pt) options type in TagIcon component.
 */
export type TagIconPassThroughOptionType<E> = PassThroughOptionType<TagIconInstance, E>;

/**
 * Defines passthrough(pt) options of TagIcon component.
 */
export interface TagIconPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TagIconPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in TagIcon component.
 */
export interface TagIconProps extends BaseComponentProps {}

/**
 * Defines valid state in TagIcon component.
 */
export interface TagIconState {}

/**
 * Defines the methods and properties exposed by TagIcon component.
 */
export interface TagIconExposes {
    /**
     * The Tag component instance.
     */
    tag: TagInstance | undefined | null;
}

/**
 * Instance of TagIcon component.
 */
export type TagIconInstance = ComponentInstance<TagIconProps, TagIconState, TagIconExposes>;
