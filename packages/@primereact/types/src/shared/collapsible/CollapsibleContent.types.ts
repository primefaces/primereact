/**
 *
 * CollapsibleContent is a component that displays a content of a collapsible.
 *
 * [Live Demo](https://www.primereact.org/collapsible/)
 *
 * @module collapsiblecontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CollapsibleRootInstance } from './CollapsibleRoot.types';

/**
 * Defines passthrough(pt) options type in CollapsibleContent component.
 */
export type CollapsibleContentPassThroughType<E> = PassThroughType<CollapsibleContentInstance, E>;

/**
 * Defines passthrough(pt) options of CollapsibleContent component.
 */
export interface CollapsibleContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CollapsibleContentPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in CollapsibleContent component.
 */
export interface CollapsibleContentProps extends BaseComponentProps<CollapsibleContentInstance, unknown, CollapsibleContentPassThrough> {}

/**
 * Defines valid state in CollapsibleContent component.
 */
export interface CollapsibleContentState {}

/**
 * Defines the methods and properties exposed by CollapsibleContent component.
 */
export interface CollapsibleContentExposes {
    /**
     * The Collapsible component instance.
     */
    collapsible: CollapsibleRootInstance | undefined | null;
}

/**
 * Instance of CollapsibleContent component.
 */
export type CollapsibleContentInstance = ComponentInstance<CollapsibleContentProps, CollapsibleContentState, CollapsibleContentExposes>;
