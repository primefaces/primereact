/**
 *
 * AutoComplete is an input component that provides real-time suggestions when being typed.
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 *
 * @module autocomplete
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the AutoComplete component.
 */
export const AutoCompleteClassNames = {
    /**
     * Class name of the root element.
     */
    root: 'p-autocomplete',
    /**
     * Class name of the input element.
     */
    input: 'p-autocomplete-input',
    /**
     * Class name of the clear icon element.
     */
    clearIcon: 'p-autocomplete-clear-icon',
    /**
     * Class name of the button element.
     */
    button: 'p-autocomplete-dropdown',
    /**
     * Class name of the panel element.
     */
    panel: 'p-autocomplete-list-container',
    /**
     * Class name of the list element.
     */
    list: 'p-autocomplete-list',
    /**
     * Class name of the options element.
     */
    options: 'p-autocomplete-options',
    /**
     * Class name of the option element.
     */
    option: 'p-autocomplete-option',
    /**
     * Class name of the empty message element.
     */
    empty: 'p-autocomplete-empty-message'
} as const;

/**
 * Type representing the CSS class names used in the AutoComplete component.
 */
export type AutoCompleteClassNamesType = (typeof AutoCompleteClassNames)[keyof typeof AutoCompleteClassNames];
