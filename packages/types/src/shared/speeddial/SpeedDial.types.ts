/**
 *
 * SpeedDial is a grouping component for buttons and other content.
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 *
 * @module speeddial
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the SpeedDial component.
 */
export const SpeedDialClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-speeddial',
    /**
     * Class name of the button element
     */
    button: 'p-speeddial-button',
    /**
     * Class name of the list element
     */
    list: 'p-speeddial-list',
    /**
     * Class name of the item element
     */
    item: 'p-speeddial-item',
    /**
     * Class name of the action element
     */
    action: 'p-speeddial-action',
    /**
     * Class name of the mask element
     */
    mask: 'p-speeddial-mask'
} as const;

/**
 * Type representing the CSS class names used in the SpeedDial component.
 */
export type SpeedDialClassNamesType = (typeof SpeedDialClassNames)[keyof typeof SpeedDialClassNames];
