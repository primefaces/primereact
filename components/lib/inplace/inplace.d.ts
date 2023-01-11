/**
 *
 * Inplace represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primefaces.org/primereact/inplace)
 *
 *  * Helper Components:
 *
 * - {@link InplaceDisplay}
 *
 * - {@link InplaceContent}
 *
 * @module inplace
 *
 */
import * as React from 'react';

/**
 * Custom toggle event.
 * @see {@link InplaceProps.onToggle}
 * @event
 */
interface InplaceToggleEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * @todo Write the documentation.
     */
    value: boolean;
}

/**
 * Defines valid properties in Inplace component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface InplaceProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * Whether the content is displayed or not.
     * @defaultValue false
     */
    active?: boolean | undefined;
    /**
     * Displays a button to switch back to display mode.
     * @defaultValue false
     */
    closable?: boolean | undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * @todo Write the documentation.
     */
    ariaLabel?: string | undefined;
    /**
     * Callback to invoke when inplace is opened.
     * @param {React.MouseEvent}  event - Browser event.
     */
    onOpen?(event: React.MouseEvent<HTMLElement>): void;
    /**
     * Callback to invoke when inplace is closed.
     * @param {React.MouseEvent}  event - Browser event.
     */
    onClose?(event: React.MouseEvent<HTMLElement>): void;
    /**
     * Callback to invoke when inplace is opened or closed.
     * @param {InplaceToggleEvent}  event - Custom toggle event.
     */
    onToggle?(event: InplaceToggleEvent): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class Inplace extends React.Component<InplaceProps, any> {
    /**
     * Used to get container element.
     * @return {HTMLDivElement} Container element
     */
    public getElement(): HTMLDivElement;
}

/**
 * InplaceDisplay is a helper component for Inplace.
 * @group Component
 */
// tslint:disable-next-line:max-classes-per-file
export declare class InplaceDisplay extends React.Component {
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * InplaceContent is a helper component for Inplace.
 * @group Component
 */
// tslint:disable-next-line:max-classes-per-file
export declare class InplaceContent extends React.Component {
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}
