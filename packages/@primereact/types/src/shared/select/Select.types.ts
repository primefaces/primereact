/**
 *
 * Select is a dropdown component for selecting a single value from a list.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module select
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Select component.
 */
export const SelectClassNames = {
    /**
     * Class name of the root element.
     */
    root: 'p-select',
    /**
     * Class name of the dropdown element.
     */
    dropdown: 'p-select-dropdown',
    /**
     * Class name of the label element.
     */
    label: 'p-select-label',
    /**
     * Class name of the clear icon element.
     */
    clearIcon: 'p-select-clear-icon',
    /**
     * Class name of the panel element.
     */
    panel: 'p-select-list-container',
    /**
     * Class name of the filter element.
     */
    filter: 'p-select-filter',
    /**
     * Class name of the list element.
     */
    list: 'p-select-list',
    /**
     * Class name of the options element.
     */
    options: 'p-select-options',
    /**
     * Class name of the option element.
     */
    option: 'p-select-option',
    /**
     * Class name of the selection element.
     */
    selection: 'p-select-selection',
    /**
     * Class name of the empty message element.
     */
    empty: 'p-select-empty-message'
} as const;

/**
 * Type representing the CSS class names used in the Select component.
 */
export type SelectClassNamesType = (typeof SelectClassNames)[keyof typeof SelectClassNames];
