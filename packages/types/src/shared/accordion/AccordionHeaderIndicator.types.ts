/**
 *
 * AccordionHeaderIndicator is a component that displays an indicator of content.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * @module accordionheaderindicator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AccordionInstance } from './Accordion.types';
import { AccordionPanelInstance } from './AccordionPanel.types';

/**
 * Defines passthrough(pt) options type in AccordionHeaderIndicator component.
 */
export type AccordionHeaderIndicatorPassThroughType<E> = PassThroughType<AccordionHeaderIndicatorInstance, E>;

/**
 * Defines passthrough(pt) options of AccordionHeaderIndicator component.
 */
export interface AccordionHeaderIndicatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionHeaderIndicatorPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in AccordionHeaderIndicator component.
 */
export interface AccordionHeaderIndicatorProps extends BaseComponentProps<AccordionHeaderIndicatorInstance, unknown, AccordionHeaderIndicatorPassThrough> {}

/**
 * Defines valid state in AccordionHeaderIndicator component.
 */
export interface AccordionHeaderIndicatorState {}

/**
 * Defines the methods and properties exposed by AccordionHeaderIndicator component.
 */
export interface AccordionHeaderIndicatorExposes {
    /**
     * The Accordion component instance.
     */
    accordion: AccordionInstance | undefined | null;
    /**
     * The AccordionPanel component instance.
     */
    accordionpanel: AccordionPanelInstance | undefined | null;
}

/**
 * Instance of AccordionHeaderIndicator component.
 */
export type AccordionHeaderIndicatorInstance = ComponentInstance<AccordionHeaderIndicatorProps, AccordionHeaderIndicatorState, AccordionHeaderIndicatorExposes>;
