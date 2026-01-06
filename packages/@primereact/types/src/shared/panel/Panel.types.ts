/**
 *
 * Panel is a grouping component providing with content toggle feature.
 *
 * [Live Demo](https://www.primereact.org/panel/)
 *
 * @module panel
 * @group components
 *
 */

/**
 * Defines the CSS class names used in the Panel component.
 */
export const PanelClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-panel',
    /**
     * Class name of the header element
     */
    header: 'p-panel-header',
    /**
     * Class name of the title element
     */
    title: 'p-panel-title',
    /**
     * Class name of the header actions element
     */
    headerActions: 'p-panel-header-actions',
    /**
     * Class name of the toggle button element
     */
    collapse: 'p-panel-toggle-button',
    /**
     * Class name of the content element
     */
    content: 'p-panel-content'
} as const;

/**
 * Type representing the CSS class names used in the Panel component.
 */
export type PanelClassNamesType = (typeof PanelClassNames)[keyof typeof PanelClassNames];
