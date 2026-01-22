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
    input: 'p-inputtags-input',
    /**
     * Class name of the panel element
     */
    panel: 'p-inputtags-panel',
    /**
     * Class name of the list element
     */
    list: 'p-inputtags-list',
    /**
     * Class name of the options container
     */
    options: 'p-inputtags-options',
    /**
     * Class name of the option element
     */
    option: 'p-inputtags-option'
} as const;

/**
 * Type representing the CSS class names used in the InputTags component.
 */
export type InputTagsClassNamesType = (typeof InputTagsClassNames)[keyof typeof InputTagsClassNames];
