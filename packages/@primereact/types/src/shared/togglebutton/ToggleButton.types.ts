/**
 *
 * ToggleButton is an extension to standard ToggleButton element with theming.
 *
 * [Live Demo](https://www.primereact.org/togglebutton/)
 *
 * @module togglebutton
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the ToggleButton component.
 */
export const ToggleButtonClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-togglebutton',
    /**
     * Class name of the content element
     */
    indicator: 'p-togglebutton-content'
} as const;

/**
 * Type representing the CSS class names used in the ToggleButton component.
 */
export type ToggleButtonClassNamesType = (typeof ToggleButtonClassNames)[keyof typeof ToggleButtonClassNames];
