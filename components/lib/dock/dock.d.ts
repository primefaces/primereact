/**
 *
 * Dock is a navigation component consisting of menuitems.
 *
 * [Live Demo](https://www.primefaces.org/primereact/dock/)
 *
 * @module dock
 *
 */
import * as React from 'react';
import { MenuItem } from '../menuitem';

/**
 * @todo Write the documentation
 */
interface DockHeaderTemplateOptions {
    /**
     * @todo Check if this description is correct.
     * Options of the custom header template.
     * @param {DockProps} props Properties of Dock component.
     */
    props: DockProps;
}

/**
 * @todo Write the documentation
 * @extends {DockHeaderTemplateOptions}
 */
interface DockFooterTemplateOptions extends DockHeaderTemplateOptions {}

/**
 * Defines valid properties in Dock component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface DockProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * MenuModel instance to define the action items.
     */
    model?: MenuItem[] | undefined;
    /**
     * Position of element. Valid values are 'bottom', 'top', 'left' and 'right'.
     * @defaultValue bottom
     */
    position?: 'top' | 'bottom' | 'left' | 'right' | undefined;
    /**
     * Whether to allow scale animation.
     */
    magnification?: boolean | undefined;
    /**
     * Template of header element.
     */
    header?: React.ReactNode | ((options: DockHeaderTemplateOptions) => React.ReactNode);
    /**
     * Template of footer element.
     */
    footer?: React.ReactNode | ((options: DockFooterTemplateOptions) => React.ReactNode);
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class Dock extends React.Component<DockProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
