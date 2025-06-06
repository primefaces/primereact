/**
 *
 * Accordion groups a collection of contents in panels.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * @module accordion
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useAccordionExposes, useAccordionProps, useAccordionState } from './useAccordion.types';

/**
 * Defines passthrough(pt) options type in Accordion component.
 */
export type AccordionPassThroughType<E> = PassThroughType<AccordionInstance, E>;

/**
 * Defines passthrough(pt) options of Accordion component.
 */
export interface AccordionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: AccordionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: AccordionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: AccordionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Accordion component.
 */
export interface AccordionProps extends BaseComponentProps<AccordionInstance, useAccordionProps> {
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @default false
     */
    lazy?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     * @default 0
     */
    tabindex?: number | undefined;
    /**
     * When enabled, the focused tab is activated.
     * @default false
     */
    selectOnFocus?: boolean | undefined;
}

/**
 * Defines valid state in Avatar component.
 * @extends useAvatarState
 */
export interface AccordionState extends useAccordionState {}

/**
 * Defines the methods and properties exposed by Avatar component.
 * @extends useAvatarExposes
 */
export interface AccordionExposes extends useAccordionExposes {}

/**
 * Defines the CSS class names used in the Avatar component.
 */
export const AccordionClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-avatar',
    /**
     * Class name of the box element
     */
    label: 'p-avatar-label',
    /**
     * Class name of the input element
     */
    icon: 'p-avatar-icon'
} as const;

/**
 * Type representing the CSS class names used in the Avatar component.
 */
export type AccordionClassNamesType = (typeof AccordionClassNames)[keyof typeof AccordionClassNames];

/**
 * Instance of Avatar component.
 */
export type AccordionInstance = ComponentInstance<AccordionProps, AccordionState, AccordionExposes, AccordionPassThrough>;
