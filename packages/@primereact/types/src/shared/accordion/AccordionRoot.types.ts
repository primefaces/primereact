/**
 *
 * Accordion groups a collection of contents in panels.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * @module accordionroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useAccordionExposes, useAccordionProps, useAccordionState } from './useAccordion.types';

/**
 * Defines passthrough(pt) options type in Accordion component.
 */
export type AccordionRootPassThroughType<E> = PassThroughType<AccordionRootInstance, E>;

/**
 * Defines passthrough(pt) options of Accordion component.
 */
export interface AccordionRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: AccordionRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: AccordionRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the content's DOM element.
     */
    content?: AccordionRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header indicator's DOM element.
     */
    headerindicator?: AccordionRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Accordion component.
 */
export interface AccordionRootProps extends BaseComponentProps<AccordionRootInstance, useAccordionProps, AccordionRootPassThrough> {
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @default false
     */
    lazy?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     * @default 0
     */
    tabIndex?: number | undefined;
}

/**
 * Defines valid state in AccordionRoot component.
 * @extends useAccordionState
 */
export interface AccordionRootState extends useAccordionState {}

/**
 * Defines the methods and properties exposed by Accordion component.
 * @extends useAccordionExposes
 */
export interface AccordionRootExposes extends useAccordionExposes {}

/**
 * Instance of AccordionRoot component.
 */
export type AccordionRootInstance = ComponentInstance<AccordionRootProps, AccordionRootState, AccordionRootExposes>;
