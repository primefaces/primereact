/**
 *
 * Switch component is used to select a boolean value.
 *
 * [Live Demo](https://www.primereact.org/switch/)
 *
 * @module switch
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Switch component.
 */
export const SwitchClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-toggleswitch',
    /**
     * Class name of the input element
     */
    input: 'p-toggleswitch-input',
    /**
     * Class name of the control element
     */
    control: 'p-toggleswitch-slider',
    /**
     * Class name of the handle element
     */
    thumb: 'p-toggleswitch-handle'
} as const;

/**
 * Type representing the CSS class names used in the Switch component.
 */
export type SwitchClassNamesType = (typeof SwitchClassNames)[keyof typeof SwitchClassNames];
