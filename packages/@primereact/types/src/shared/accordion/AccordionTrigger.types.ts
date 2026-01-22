/**
 *
 * AccordionTrigger is a component that displays a trigger of content.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * @module accordiontrigger
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AccordionPanelInstance } from './AccordionPanel.types';
import type { AccordionRootInstance } from './AccordionRoot.types';

/**
 * Defines passthrough(pt) options type in AccordionTrigger component.
 */
export type AccordionTriggerPassThroughType<E> = PassThroughType<AccordionTriggerInstance, E>;

/**
 * Defines passthrough(pt) options of AccordionTrigger component.
 */
export interface AccordionTriggerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionTriggerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in AccordionTrigger component.
 */
export interface AccordionTriggerProps extends BaseComponentProps<AccordionTriggerInstance, unknown, AccordionTriggerPassThrough> {}

/**
 * Defines valid state in AccordionTrigger component.
 */
export interface AccordionTriggerState {}

/**
 * Defines the methods and properties exposed by AccordionTrigger component.
 */
export interface AccordionTriggerExposes {
    /**
     * The Accordion component instance.
     */
    accordion: AccordionRootInstance | undefined | null;
    /**
     * The AccordionPanel component instance.
     */
    accordionpanel: AccordionPanelInstance | undefined | null;
}

/**
 * Instance of AccordionTrigger component.
 */
export type AccordionTriggerInstance = ComponentInstance<AccordionTriggerProps, AccordionTriggerState, AccordionTriggerExposes>;
