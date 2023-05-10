/**
 *
 * SplitButton groups a set of commands in an overlay with a default command.
 *
 * [Live Demo](https://www.primereact.org/splitbutton/)
 *
 * @module splitbutton
 *
 */
import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { MenuItem } from '../menuitem';
import { TooltipOptions } from '../tooltip/tooltipoptions';
import { IconType, PassThroughType, TemplateType } from '../utils';
import { ButtonPassThroughOptions } from '../button/button';

export declare type SplitButtonPassThroughType<T> = PassThroughType<T, SplitButtonPassThroughMethodOptions>;

/**
 * Custom passthrough(pt) option method.
 */
export interface SplitButtonPassThroughMethodOptions {
    props: SplitButtonProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link SplitButtonProps.pt}
 */
export interface SplitButtonPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: SplitButtonPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Uses to pass attributes to the button's DOM element.
     */
    button?: SplitButtonPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Uses to pass attributes to the icon's DOM element.
     */
    icon?: SplitButtonPassThroughType<React.SVGProps<SVGSVGElement> | React.HTMLAttributes<HTMLSpanElement | SVGSVGElement>>;
    /**
     * Uses to pass attributes to the Button component.
     * @see {@link ButtonPassThroughOptions}
     */
    menuButton?: ButtonPassThroughOptions;
    // /**
    //  * Uses to pass attributes to the TieredMenu component.
    //  * @see {@link TieredMenuPassThroughOptions}
    //  */
    //  menu?: TieredMenuPassThroughOptions; @TODO
}

/**
 * Defines valid properties in SplitButton component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface SplitButtonProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * Text of the button.
     */
    label?: string | undefined;
    /**
     * Name of the icon.
     */
    icon?: IconType<SplitButtonProps> | undefined;
    /**
     * Add a textual class to the button without a background initially.
     * @defaultValue false
     */
    text?: boolean | undefined;
    /**
     * Add a circular border radius to the button.
     * @defaultValue false
     */
    rounded?: boolean | undefined;
    /**
     * Add a shadow to indicate elevation.
     * @defaultValue false
     */
    raised?: boolean | undefined;
    /**
     * Add a border class without a background initially.
     * @defaultValue false
     */
    outlined?: boolean | undefined;
    /**
     * Defines the style of the button, valid values are "secondary", "success", "info", "warning", "danger".
     */
    severity?: 'secondary' | 'success' | 'info' | 'warning' | 'danger' | undefined;
    /**
     * Defines the size of the button, valid values are "small" and "large".
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Display loading icon of the button
     * @defaultValue false
     */
    loading?: boolean | undefined;
    /**
     * Name of the loading icon or JSX.Element for loading icon.
     */
    loadingIcon?: IconType<SplitButtonProps> | undefined;
    /**
     * MenuModel instance to define the overlay items.
     */
    model?: MenuItem[] | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the element should be visible.
     * @defaultValue true
     */
    visible?: boolean | undefined;
    /**
     * ClassName of the button.
     */
    buttonClassName?: string | undefined;
    /**
     * Inline style of the overlay menu.
     */
    menuStyle?: React.CSSProperties | undefined;
    /**
     * ClassName class of the overlay menu.
     */
    menuClassName?: string | undefined;
    /**
     * ClassName of the menu dropdown button.
     */
    menuButtonClassName?: string | undefined;
    /**
     * Props for the main button, any prop is passed implicity to the button element.
     */
    buttonProps?: any | undefined;
    /**
     * Props for the dropdown button, any prop is passed implicity to the dropdown button element.
     */
    menuButtonProps?: any | undefined;
    /**
     * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
     * @defaultValue document.body
     */
    appendTo?: 'self' | HTMLElement | null | undefined;
    /**
     * Content of the tooltip.
     */
    tooltip?: string | undefined;
    /**
     * Configuration of the tooltip, refer to the tooltip documentation for more information.
     */
    tooltipOptions?: TooltipOptions | undefined;
    /**
     * Template of the default button.
     */
    buttonTemplate?: TemplateType<SplitButtonProps> | undefined;
    /**
     * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
     */
    transitionOptions?: CSSTransitionProps | undefined;
    /**
     * Name of the dropdown icon or JSX.Element for dropdown icon.
     */
    dropdownIcon?: IconType<SplitButtonProps> | undefined;
    /**
     * Callback to invoke when main button is clicked.
     * @param {React.MouseEvent<HTMLElement>} event - Browser event
     */
    onClick?(event: React.MouseEvent<HTMLElement>): void;
    /**
     * Callback to invoke when overlay panel becomes visible.
     */
    onShow?(): void;
    /**
     * Callback to invoke when overlay panel becomes hidden.
     */
    onHide?(): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * **PrimeReact - SplitButton**
 *
 * _SplitButton groups a set of commands in an overlay with a default command._
 *
 * [Live Demo](https://www.primereact.org/splitbutton/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
 * @group Component
 */
export declare class SplitButton extends React.Component<SplitButtonProps, any> {
    /**
     * Used to show the popup.
     */
    public show(): void;
    /**
     * Used to hide the popup.
     */
    public hide(): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
