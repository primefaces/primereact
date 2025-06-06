/**
 *
 * AccordionPanel is a component that displays a panel of content.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * @module accordionpanel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { AccordionInstance } from './Accordion.types';

/**
 * Defines passthrough(pt) options type in AccordionPanel component.
 */
export type AccordionPanelPassThroughType<E> = PassThroughType<AccordionPanelInstance, E>;

/**
 * Defines passthrough(pt) options of AccordionPanel component.
 */
export interface AccordionPanelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AccordionPanelPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in AccordionPanel component.
 */
export interface AccordionPanelProps extends BaseComponentProps<AccordionPanelInstance> {
    /**
     * Unique value of item.
     * @default null
     */
    value?: null | string | number | undefined;
    /**
     * Whether the item is disabled.
     * @default false
     */
    disabled?: boolean | undefined;
}

/**
 * Defines valid state in AccordionPanel component.
 */
export interface AccordionPanelState {}

/**
 * Defines the methods and properties exposed by AccordionPanel component.
 */
export interface AccordionPanelExposes {
    /**
     * The Accordion component instance.
     */
    accordion: AccordionInstance | undefined | null;
    /**
     * Whether the item is active.
     */
    active: boolean;
}

/**
 * Instance of AccordionPanel component.
 */
export type AccordionPanelInstance = ComponentInstance<AccordionPanelProps, AccordionPanelState, AccordionPanelExposes, AccordionPanelPassThrough>;
