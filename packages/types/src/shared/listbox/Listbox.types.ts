/**
 *
 * ListBox is used to select one or more values from a list of items.
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 *
 * @module listbox
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Listbox component.
 */
export const ListboxClassNames = {
    /**
     * Class name of the root element.
     */
    root: 'p-listbox',
    /**
     * Class name of the header element.
     */
    header: 'p-listbox-header',
    /**
     * Class name of the footer element.
     */
    footer: 'p-listbox-footer',
    /**
     * Class name of the filter element.
     */
    pcFilter: 'p-listbox-filter',
    /**
     * Class name of the list element.
     */
    list: 'p-listbox-list',
    /**
     * Class name of the option group element.
     */
    optionGroup: 'p-listbox-option-group',
    /**
     * Class name of the option element.
     */
    option: 'p-listbox-option',
    /**
     * Class name of the selection element.
     */
    selection: 'p-listbox-selection',
    /**
     * Class name of the option check icon element.
     */
    optionCheckIcon: 'p-listbox-option-check-icon',
    /**
     * Class name of the option blank icon element.
     */
    optionBlankIcon: 'p-listbox-option-blank-icon',
    /**
     * Class name of the empty message element.
     */
    empty: 'p-listbox-empty-message'
} as const;

/**
 * Type representing the CSS class names used in the Listbox component.
 */
export type ListboxClassNamesType = (typeof ListboxClassNames)[keyof typeof ListboxClassNames];
