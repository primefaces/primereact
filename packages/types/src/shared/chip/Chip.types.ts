/**
 *
 * Chip represents entities using icons, labels and images.
 *
 * [Live Demo](https://www.primereact.org/chip/)
 *
 * @module chip
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Chip component.
 */
export const ChipClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-chip',
    /**
     * Class name of the image element
     */
    image: 'p-chip-image',
    /**
     * Class name of the icon element
     */
    icon: 'p-chip-icon',
    /**
     * Class name of the label element
     */
    label: 'p-chip-label',
    /**
     * Class name of the remove icon element
     */
    removeIcon: 'p-chip-remove-icon'
} as const;

/**
 * Type representing the CSS class names used in the Chip component.
 */
export type ChipClassNamesType = (typeof ChipClassNames)[keyof typeof ChipClassNames];
