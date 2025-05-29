import { BaseComponentProps } from '..';
import { useAccordionProps } from './useAccordion.types';

/**
 * Accordion component props.
 */
export interface AccordionProps extends BaseComponentProps<useAccordionProps, 'div'> {
    /**
     * The type of the component.
     */
    readonly __TYPE?: 'Accordion';
}
