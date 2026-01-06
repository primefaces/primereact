/**
 *
 * Drawer is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://www.primereact.org/drawer/)
 *
 * @module drawer
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Drawer component.
 */
export const DrawerClassNames = {
    /**
     * Class name of the mask element
     */
    mask: 'p-drawer-mask',
    /**
     * Class name of the root element
     */
    root: 'p-drawer',
    /**
     * Class name of the trigger button element
     */
    trigger: 'p-drawer-trigger-button',
    /**
     * Class name of the header element
     */
    header: 'p-drawer-header',
    /**
     * Class name of the title element
     */
    title: 'p-drawer-title',
    /**
     * Class name of the close button element
     */
    close: 'p-drawer-close-button',
    /**
     * Class name of the content element
     */
    content: 'p-drawer-content',
    /**
     * Class name of the footer element
     */
    footer: 'p-drawer-footer'
} as const;

/**
 * Type representing the CSS class names used in the Drawer component.
 */
export type DrawerClassNamesType = (typeof DrawerClassNames)[keyof typeof DrawerClassNames];
