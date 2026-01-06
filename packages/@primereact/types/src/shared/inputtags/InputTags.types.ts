/**
 *
 * InputTags groups a collection of contents in items.
 *
 * [Live Demo](https://www.primereact.org/inputtags/)
 *
 * @module inputtags
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the InputTags component.
 */
export const InputTagsClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-inputtags',
    /**
     * Class name of the item element
     */
    item: 'p-inputtags-item',
    /**
     * Class name of the input element
     */
    input: 'p-inputtags-input'
} as const;

/**
 * Type representing the CSS class names used in the InputTags component.
 */
export type InputTagsClassNamesType = (typeof InputTagsClassNames)[keyof typeof InputTagsClassNames];
