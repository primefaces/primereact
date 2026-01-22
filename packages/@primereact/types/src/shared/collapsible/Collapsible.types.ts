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

/**
 * Defines the CSS class names used in the Accordion component.
 */
export const AccordionClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-accordion',
    /**
     * Class name of the content element
     */
    content: 'p-accordioncontent',
    /**
     * Class name of the header element
     */
    header: 'p-accordionheader',
    /**
     * Class name of the panel element
     */
    panel: 'p-accordionpanel',
    /**
     * Class name of the toggle icon element
     */
    toggleicon: 'p-accordionheader-toggle-icon'
} as const;

/**
 * Type representing the CSS class names used in the Accordion component.
 */
export type AccordionClassNamesType = (typeof AccordionClassNames)[keyof typeof AccordionClassNames];
