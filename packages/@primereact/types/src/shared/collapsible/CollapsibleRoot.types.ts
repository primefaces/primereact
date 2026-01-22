/**
 *
 * Collapsible is a container component that organizes content into expandable and collapsible sections.
 *
 * [Live Demo](https://www.primereact.org/collapsible/)
 *
 * @module collapseroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import { MotionOptions } from '@primeuix/motion';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useCollapsibleExposes, useCollapsibleProps, useCollapsibleState } from './useCollapsible.types';

/**
 * Defines passthrough(pt) options type in Collapsible component.
 */
export type CollapsibleRootPassThroughType<E> = PassThroughType<CollapsibleRootInstance, E>;

/**
 * Defines passthrough(pt) options of Collapsible component.
 */
export interface CollapsibleRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CollapsibleRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    trigger?: CollapsibleRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: CollapsibleRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Collapsible component.
 */
export interface CollapsibleRootProps extends BaseComponentProps<CollapsibleRootInstance, useCollapsibleProps, CollapsibleRootPassThrough> {
    /**
     * When enabled, hidden content are not rendered at all. Defaults to false that hides content with css.
     * @default false
     */
    lazy?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     * @default 0
     */
    tabIndex?: number | undefined;
    /**
     * When disabled, the component cannot be interacted with.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Used to configure the motion of the collapsible content.
     */
    motionProps?: MotionOptions | undefined;
}

/**
 * Defines valid state in CollapsibleRoot component.
 * @extends useCollapsibleState
 */
export interface CollapsibleRootState extends useCollapsibleState {}

/**
 * Defines the methods and properties exposed by Collapsible component.
 * @extends useCollapsibleExposes
 */
export interface CollapsibleRootExposes extends useCollapsibleExposes {}

/**
 * Instance of CollapsibleRoot component.
 */
export type CollapsibleRootInstance = ComponentInstance<CollapsibleRootProps, CollapsibleRootState, CollapsibleRootExposes>;
