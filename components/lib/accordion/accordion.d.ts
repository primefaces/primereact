/**
 *
 * Accordion groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 *
 * Helper Components:
 *
 * - {@link AccordionTab}
 *
 * @module accordion
 *
 */
import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { IconType } from '../utils';

/**
 * Defines valid properties in AccordionTab component.
 * @group Properties
 */
interface AccordionTabProps {
    /**
     * Style class of the tab header and content.
     */
    className?: string | undefined;
    /**
     * Style class of the tab content.
     */
    contentClassName?: string | undefined;
    /**
     * Inline style of the tab content.
     */
    contentStyle?: React.CSSProperties | undefined;
    /**
     * Whether the tab is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Used to define the header of the tab.
     */
    header?: React.ReactNode | undefined;
    /**
     * Style class of the tab header.
     */
    headerClassName?: string | undefined;
    /**
     * Inline style of the tab header.
     */
    headerStyle?: React.CSSProperties | undefined;
    /**
     * Custom header template of the tab.
     */
    headerTemplate?: React.ReactNode | ((props: AccordionTabProps) => React.ReactNode);
    /**
     * Inline style of the tab header and content.
     */
    style?: React.CSSProperties | undefined;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
     */
    tabIndex?: number | undefined;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * AccordionTab is a helper component for Accordion.
 * @group Component
 */
export declare class AccordionTab extends React.Component<AccordionTabProps, any> {}

/**
 * Custom tab open event.
 * @see {@link AccordionProps.onTabOpen}
 * @event
 */
export interface AccordionTabOpenEvent {
    /**
     * Browser mouse event.
     */
    originalEvent: React.MouseEvent<HTMLElement>;
    /**
     * Opened tab index.
     */
    index: number;
}

/**
 * Custom tab close event.
 * @see {@link AccordionProps.onTabClose}
 * @extends {AccordionTabOpenEvent}
 * @event
 */
export interface AccordionTabCloseEvent extends AccordionTabOpenEvent {}

/**
 * Custom tab change event.
 * @see {@link AccordionProps.onTabChange}
 * @event
 */
export interface AccordionTabChangeEvent {
    /**
     * Browser mouse event.
     */
    originalEvent: React.MouseEvent<HTMLElement>;
    /**
     * Opened tab index.
     */
    index: number | number[];
}

/**
 * Defines valid properties in Accordion component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface AccordionProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * Active index or indexes of the element. Use an array of numbers for multiple indexes.
     * The {@link multiple} prop must be set to true in order to specify multiple indexes.
     */
    activeIndex?: number | number[] | null | undefined;
    /**
     * When enabled, multiple tabs can be activated at the same time.
     * @defaultValue false
     */
    multiple?: boolean | undefined;
    /**
     * Icon of a collapsed tab.
     */
    expandIcon?: IconType<AccordionProps> | undefined;
    /**
     * Icon of an expanded tab.
     */
    collapseIcon?: IconType<AccordionProps> | undefined;
    /**
     * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
     * @type {CSSTransitionProps}
     */
    transitionOptions?: CSSTransitionProps | undefined;
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {AccordionTabOpenEvent} event - Custom tab open event.
     */
    onTabOpen?(event: AccordionTabOpenEvent): void;
    /**
     * Callback to invoke when an active tab is collapsed by clicking on the header.
     * @param {AccordionTabCloseEvent} event - Custom tab close event.
     */
    onTabClose?(event: AccordionTabCloseEvent): void;
    /**
     * Callback to invoke when state of the accordion changes.
     * @param {AccordionTabChangeEvent} event - Custom tab close event.
     */
    onTabChange?(event: AccordionTabChangeEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * **PrimeReact - Accordion**
 *
 * _Accordion groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
 * @group Component
 */
// tslint:disable-next-line:max-classes-per-file
export declare class Accordion extends React.Component<AccordionProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
