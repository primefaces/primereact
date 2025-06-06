/**
 *
 * AccordionHeader is a component that displays a header of content.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * @module accordionheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AccordionInstance } from './Accordion.types';
import { AccordionPanelInstance } from './AccordionPanel.types';

/**
 * Defines passthrough(pt) options type in AccordionHeader component.
 */
export type AccordionHeaderPassThroughType<E> = PassThroughType<AccordionHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of AccordionHeader component.
 */
export interface AccordionHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionHeaderPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in AccordionHeader component.
 */
export interface AccordionHeaderProps extends BaseComponentProps<AccordionHeaderInstance> {
    /**
     * Callback function that is called when the header is focused.
     */
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}

/**
 * Defines valid state in AccordionHeader component.
 */
export interface AccordionHeaderState {}

/**
 * Defines the methods and properties exposed by AccordionHeader component.
 */
export interface AccordionHeaderExposes {
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
 * Instance of AccordionHeader component.
 */
export type AccordionHeaderInstance = ComponentInstance<AccordionHeaderProps, AccordionHeaderState, AccordionHeaderExposes, AccordionHeaderPassThrough>;
