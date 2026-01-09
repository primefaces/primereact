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

import type { PassThroughType } from '..';
import type { AutoCompleteRootInstance } from './AutoCompleteRoot.types';

/**
 * Defines passthrough(pt) options type in AutoComplete component.
 */
export type AutoCompletePassThroughType<E> = PassThroughType<AutoCompleteRootInstance, E>;

/**
 * Defines passthrough(pt) options of AutoComplete component.
 */
export interface AutoCompletePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the pcInputText's DOM element.
     */
    pcInputText?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the pcListbox's DOM element.
     */
    pcListbox?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the option's DOM element.
     */
    option?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the button's DOM element.
     */
    button?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the clearIcon's DOM element.
     */
    clearIcon?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the selection's DOM element.
     */
    selection?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the empty's DOM element.
     */
    empty?: AutoCompletePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

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
