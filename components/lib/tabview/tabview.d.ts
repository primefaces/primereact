/**
 *
 * TabView is a container component to group content with tabs.
 *
 * [Live Demo](https://www.primefaces.org/primereact/tabview/)
 *
 * Helper Components:
 *
 * - {@link TabPanel}
 *
 * @module tabview
 *
 */
import * as React from 'react';

/**
 * @todo Write the documantation
 */
interface TabPanelHeaderTemplateOptions {
    /**
     * @todo Write the documantation
     */
    className: string;
    /**
     * @todo Write the documantation
     */
    titleClassName: string;
    /**
     * @todo Write the documantation
     */
    onClick(event: React.MouseEvent<HTMLElement>): void;
    /**
     * @todo Write the documantation
     */
    onKeyDown(event: React.KeyboardEvent<HTMLElement>): void;
    /**
     * @todo Write the documantation
     */
    leftIconElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    titleElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    rightIconElement: JSX.Element;
    /**
     * @todo Write the documantation
     */
    element: JSX.Element;
    /**
     * @todo Write the documantation
     */
    props: TabPanelProps;
    /**
     * @todo Write the documantation
     */
    index: number;
    /**
     * @todo Write the documantation
     */
    selected: boolean;
    /**
     * @todo Write the documantation
     */
    ariaControls: string;
}

/**
 * Defines valid properties in TabPanel component.
 * @group Properties
 */
export interface TabPanelProps {
    /**
     * Orientation of tab headers.
     */
    header?: React.ReactNode | undefined;
    /**
     * Header template of the tab to customize more.
     */
    headerTemplate?: React.ReactNode | ((options: TabPanelHeaderTemplateOptions) => React.ReactNode);
    /**
     * Icons can be placed at left of a header.
     */
    leftIcon?: string | undefined;
    /**
     * Icons can be placed at right of a header.
     */
    rightIcon?: string | undefined;
    /**
     * Whether the tab is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Defines if tab can be removed.
     * @defaultValue false
     */
    closable?: boolean | undefined;
    /**
     * Inline style of the tab header and content.
     */
    style?: React.CSSProperties | undefined;
    /**
     * Style class of the tab header and content.
     */
    className?: string | undefined;
    /**
     * Inline style of the tab header.
     */
    headerStyle?: React.CSSProperties | undefined;
    /**
     * Style class of the tab header.
     */
    headerClassName?: string | undefined;
    /**
     * Inline style of the tab content.
     */
    contentStyle?: React.CSSProperties | undefined;
    /**
     * Style class of the tab content.
     */
    contentClassName?: string | undefined;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * TabPanel is a helper component for TabView.
 * @group Component
 */
export declare class TabPanel extends React.Component<TabPanelProps, any> {}

/**
 * Custom change event.
 * @see {@link TabViewProps.onTabChange}
 * @event
 */
interface TabViewTabChangeEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Index of the selected tab
     */
    index: number;
}

/**
 * Custom close event.
 * @see {@link TabViewProps.onTabClose}
 * @event
 */
interface TabViewTabCloseEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Index of the selected tab
     */
    index: number;
}

/**
 * Defines valid properties in TabView component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface TabViewProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * Active index of the TabView.
     * @defaultValue 0
     */
    activeIndex?: number | undefined;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * Style class of the panels container of the tabview.
     */
    panelContainerClassName?: string | undefined;
    /**
     * Inline style of the panels container of the tabview.
     */
    panelContainerStyle?: React.CSSProperties | undefined;
    /**
     * Whether to render the contents of the selected tab or all tabs.
     * @defaultValue true
     */
    renderActiveOnly?: boolean | undefined;
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     * @defaultValue false
     */
    scrollable?: boolean | undefined;
    /**
     * Callback to invoke before an active tab is changed. Return false to prevent tab from changing.
     * @param {TabViewTabChangeEvent} event - Custom tab change event.
     */
    onBeforeTabChange?(event: TabViewTabChangeEvent): void;
    /**
     * Callback to invoke before an active tab is close. Return false to prevent tab from closing.
     * @param {TabViewTabCloseEvent} event - Custom tab close event.
     */
    onBeforeTabClose?(event: TabViewTabCloseEvent): void;
    /**
     * Callback to invoke when an active tab is changed.
     * @param {TabViewTabChangeEvent} event -  Custom tab change event.
     */
    onTabChange?(event: TabViewTabChangeEvent): void;
    /**
     * Callback to invoke when an active tab is closed.
     * @param {TabViewTabCloseEvent} event - Custom tab close event.
     */
    onTabClose?(event: TabViewTabCloseEvent): void;
}

/**
 * @group Component
 */
// tslint:disable-next-line:max-classes-per-file
export declare class TabView extends React.Component<TabViewProps, any> {
    /**
     * Resets all states.
     */
    public reset(): void;
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}
