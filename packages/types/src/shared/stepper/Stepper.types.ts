/**
 *
 * Stepper is utilized to separate and resize panels.
 *
 * [Live Demo](https://www.primereact.org/stepper/)
 *
 * @module stepper
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Stepper component.
 */
export const StepperClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-stepper',
    /**
     * Class name of the separator element
     */
    separator: 'p-stepper-separator',
    /**
     * Class name of the panels element
     */
    panels: 'p-steppanels',
    /**
     * Class name of the panel element
     */
    panel: 'p-steppanel',
    /**
     * Class name of the content element
     */
    content: 'p-steppanel-content',
    /**
     * Class name of the list element
     */
    list: 'p-steplist',
    /**
     * Class name of the item element
     */
    item: 'p-stepitem',
    /**
     * Class name of the header element
     */
    header: 'p-step-header',
    /**
     * Class name of the number element
     */
    number: 'p-step-number',
    /**
     * Class name of the title element
     */
    title: 'p-step-title'
} as const;

/**
 * Type representing the CSS class names used in the Stepper component.
 */
export type StepperClassNamesType = (typeof StepperClassNames)[keyof typeof StepperClassNames];
