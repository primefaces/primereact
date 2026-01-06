/**
 *
 * CommandMenu represents a command menu component.
 *
 * [Live Demo](https://www.primereact.org/commandmenu/)
 *
 * @module commandmenu
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the CommandMenu component.
 */
export const CommandMenuClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-commandmenu',
    /**
     * Class name of the list element
     */
    list: 'p-commandmenu-list',
    /**
     * Class name of the group element
     */
    group: 'p-commandmenu-group',
    /**
     * Class name of the group heading element
     */
    groupHeading: 'p-commandmenu-group-heading',
    /**
     * Class name of the item element
     */
    item: 'p-commandmenu-item',
    /**
     * Class name of the empty element
     */
    empty: 'p-commandmenu-empty',
    /**
     * Class name of the input element
     */
    input: 'p-commandmenu-input'
} as const;

/**
 * Type representing the CSS class names used in the CommandMenu component.
 */
export type CommandMenuClassNamesType = (typeof CommandMenuClassNames)[keyof typeof CommandMenuClassNames];
