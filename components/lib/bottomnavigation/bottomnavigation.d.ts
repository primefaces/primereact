/**
 *
 * BottomNavigation is a compact navigation component designed for switching between primary application destinations.
 *
 * [Live Demo](https://www.primereact.org/bottomnavigationmenu/)
 *
 * @module bottomnavigation
 *
 */
import * as React from 'react';
import { ComponentHooks } from '../componentbase/componentbase';
import { MenuItem } from '../menuitem';
import { PassThroughOptions } from '../passthrough';
import { PassThroughType } from '../utils/utils';

export declare type BottomNavigationPassThroughType<T> = PassThroughType<T, BottomNavigationPassThroughMethodOptions>;

/**
 * Custom passthrough(pt) option method.
 */
export interface BottomNavigationPassThroughMethodOptions {
    props: BottomNavigationProps;
    state: BottomNavigationState;
    context: BottomNavigationContext;
}

/**
 * Defines current options in BottomNavigation component.
 */
export interface BottomNavigationContext {
    /**
     * Current menuitem.
     */
    item: any;
    /**
     * Index of the menuitem.
     */
    index: number;
    /**
     * Whether the item is active.
     */
    active: boolean;
    /**
     * Whether the item is disabled.
     */
    disabled: boolean;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link BottomNavigationProps.pt}
 */
export interface BottomNavigationPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: BottomNavigationPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Uses to pass attributes to the list's DOM element.
     */
    menu?: BottomNavigationPassThroughType<React.HTMLAttributes<HTMLUListElement>>;
    /**
     * Uses to pass attributes to the list item's DOM element.
     */
    menuitem?: BottomNavigationPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Uses to pass attributes to the action's DOM element.
     */
    action?: BottomNavigationPassThroughType<React.HTMLAttributes<HTMLAnchorElement>>;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: BottomNavigationPassThroughType<React.SVGProps<SVGSVGElement> | React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Uses to pass attributes to the label's DOM element.
     */
    label?: BottomNavigationPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Uses to pass attributes to the active indicator's DOM element.
     */
    indicator?: BottomNavigationPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Defines current inline state in BottomNavigation component.
 */
export interface BottomNavigationState {
    /**
     * Current active index state as a number.
     * @defaultValue 0
     */
    activeIndex: number;
}

/**
 * Custom change event.
 * @see {@link BottomNavigationProps.onChange}
 * @event
 */
interface BottomNavigationChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Selected menuitem.
     */
    value: MenuItem;
    /**
     * Index of the selected item.
     */
    index: number;
}

/**
 * Defines valid properties in BottomNavigation component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface BottomNavigationProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref' | 'onChange'> {
    /**
     * An array of menuitems.
     */
    model?: MenuItem[] | undefined;
    /**
     * Active index of menuitem.
     * @defaultValue 0
     */
    activeIndex?: number | undefined;
    /**
     * Display style of the active item.
     * @defaultValue raised
     */
    activeItemDisplay?: 'plain' | 'highlight' | 'raised' | undefined;
    /**
     * Type of active item indicator.
     * @defaultValue none
     */
    indicator?: 'none' | 'dot' | 'bar' | undefined;
    /**
     * Whether to display item labels.
     * @defaultValue true
     */
    showLabels?: boolean | undefined;
    /**
     * Used to define a string that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledBy?: string | undefined;
    /**
     * Callback to invoke when active item changes.
     * @param {BottomNavigationChangeEvent} event - Custom change event.
     */
    onChange?(event: BottomNavigationChangeEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {BottomNavigationPassThroughOptions}
     */
    pt?: BottomNavigationPassThroughOptions;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * **PrimeReact - BottomNavigation**
 *
 * _BottomNavigation is a compact navigation component designed for switching between primary application destinations._
 *
 * [Live Demo](https://www.primereact.org/bottomnavigationmenu/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
 * @group Component
 */
export declare class BottomNavigation extends React.Component<BottomNavigationProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLDivElement | null} Container element
     */
    public getElement(): HTMLDivElement | null;
}
