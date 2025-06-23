/**
 *
 * AccordionContent is a component that displays a content of a panel.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * @module accordioncontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AccordionInstance } from './Accordion.types';

/**
 * Defines passthrough(pt) options type in AccordionContent component.
 */
export type AccordionContentPassThroughType<E> = PassThroughType<AccordionContentInstance, E>;

/**
 * Defines passthrough(pt) options of AccordionContent component.
 */
export interface AccordionContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionContentPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in AccordionContent component.
 */
export interface AccordionContentProps extends BaseComponentProps<AccordionContentInstance, unknown, AccordionContentPassThrough> {}

/**
 * Defines valid state in AccordionContent component.
 */
export interface AccordionContentState {}

/**
 * Defines the methods and properties exposed by AccordionContent component.
 */
export interface AccordionContentExposes {
    /**
     * The Accordion component instance.
     */
    accordion: AccordionInstance | undefined | null;
}

/**
 * Instance of AccordionContent component.
 */
export type AccordionContentInstance = ComponentInstance<AccordionContentProps, AccordionContentState, AccordionContentExposes>;
