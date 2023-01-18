/**
 *
 * Panel is a grouping component providing with content toggle feature.
 *
 * [Live Demo](https://www.primefaces.org/primereact/panel/)
 *
 * @module panel
 *
 */
import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { IconType } from '../utils';

/**
 * @todo Write the documantation
 */
interface PanelHeaderTemplateOptions {
    /**
     * @todo Write the documantation
     */
    className: string;
    /**
     * @todo Write the documantation
     */
    titleClssName: string;
    /**
     * @todo Write the documantation
     */
    iconsClassName: string;
    /**
     * @todo Write the documantation
     */
    togglerClassName: string;
    /**
     * @todo Write the documantation
     */
    togglerIconClassName: string;
    /**
     * @todo Write the documantation
     */
    onTogglerClick(event: React.MouseEvent<HTMLElement>): void;
    /**
     * @todo Write the documantation
     */
    titleElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    iconsElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    togglerElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    element: JSX.Element;
    /**
     * @todo Write the documantation
     */
    props: PanelProps;
    /**
     * @todo Write the documantation
     */
    collapsed: boolean;
}

/**
 * Custom toggle event.
 * @see {@link PanelProps.onToggle}
 * @event
 */
interface PanelToggleEvent {
    /**
     * Browser event.
     */
    originalEvent: React.MouseEvent<HTMLElement>;
    /**
     * Collapsed state as a boolean.
     */
    value: boolean;
}

/**
 * Defines valid properties in Panel component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface PanelProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * Custom header template of the panel.
     */
    header?: React.ReactNode | undefined;
    /**
     * Header template of the panel to customize more.
     * @param {PanelHeaderTemplateOptions} options - Options to customize the header template.
     */
    headerTemplate?: React.ReactNode | ((options: PanelHeaderTemplateOptions) => React.ReactNode);
    /**
     * Defines if content of panel can be expanded and collapsed.
     * @defaultValue false
     */
    toggleable?: boolean | undefined;
    /**
     * Defines the initial state of panel content, supports one or two-way binding as well.
     * @defaultValue false
     */
    collapsed?: boolean | undefined;
    /**
     * @todo Write the documentation
     */
    expandIcon?: IconType<PanelProps> | undefined;
    /**
     * @todo Write the documentation
     */
    collapseIcon?: IconType<PanelProps> | undefined;
    /**
     * Custom icons template for the header.
     */
    icons?: React.ReactNode | ((props: PanelProps) => React.ReactNode);
    /**
     * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
     * @type {CSSTransitionProps}
     */
    transitionOptions?: CSSTransitionProps | undefined;
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {React.SyntheticEvent} event - Browser event.
     */
    onExpand?(event: React.SyntheticEvent): void;
    /**
     * Callback to invoke when an active tab is collapsed by clicking on the header.
     * @param {React.SyntheticEvent} event - Browser event.
     */
    onCollapse?(event: React.SyntheticEvent): void;
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {PanelToggleEvent} event - Custom toggle event.
     */
    onToggle?(event: PanelToggleEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class Panel extends React.Component<PanelProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
    /**
     * Used to get content of the panel.
     * @return {HTMLDivElement} Content element
     */
    public getContent(): HTMLDivElement;
}
