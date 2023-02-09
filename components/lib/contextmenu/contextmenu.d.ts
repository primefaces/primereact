/**
 *
 * ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the components having a special integration.
 *
 * [Live Demo](https://www.primefaces.org/primereact/contextmenu/)
 *
 * @module contextmenu
 *
 */
import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { MenuItem } from '../menuitem';

/**
 * Defines valid properties in ContextMenu component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface ContextMenuProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Attaches the menu to document instead of a particular item.
     * @defaultValue false
     */
    global?: boolean | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
     * @defaultValue document.body
     */
    appendTo?: 'self' | HTMLElement | undefined | null;
    /**
     * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
     */
    transitionOptions?: CSSTransitionProps | undefined;
    /**
     * Callback to invoke when a popup menu is shown.
     * @param {React.SyntheticEvent} event - Browser event.
     */
    onShow?(event: React.SyntheticEvent): void;
    /**
     * Callback to invoke when a popup menu is hidden.
     * @param {React.SyntheticEvent} event - Browser event.
     */
    onHide?(event: React.SyntheticEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * **PrimeReact - ContextMenu**
 *
 * _ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the components having a special integration._
 *
 * [Live Demo](https://www.primefaces.org/primereact/contextmenu/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
 * @group Component
 */
export declare class ContextMenu extends React.Component<ContextMenuProps, any> {
    /**
     * Displays the popup menu.
     * @param {React.SyntheticEvent} event - Browser event
     */
    public show(event: React.SyntheticEvent): void;
    /**
     * Hides the popup menu.
     * @param {React.SyntheticEvent} event - Browser event
     */
    public hide(event: React.SyntheticEvent): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
