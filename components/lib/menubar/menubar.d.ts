/**
 *
 * Manubar is an input component that provides real-time suggestions when being typed.
 *
 * [Live Demo](https://www.primefaces.org/primereact/menubar/)
 *
 * @module menubar
 *
 */
import * as React from 'react';
import { MenuItem } from '../menuitem';

/**
 * Defines valid properties in Menubar component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface MenubarProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * The template of starting element.
     */
    start?: React.ReactNode | ((props: MenubarProps) => React.ReactNode);
    /**
     * The template of trailing element.
     */
    end?: React.ReactNode | ((props: MenubarProps) => React.ReactNode);
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class Menubar extends React.Component<MenubarProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
    /**
     * @todo Write the documentation
     * @return {HTMLElement} Root menu element
     */
    public getRootMenu(): HTMLElement;
    /**
     * @todo Write the documentation
     * @return {HTMLElement} Menu button element
     */
    public getMenuButton(): HTMLElement;
}
