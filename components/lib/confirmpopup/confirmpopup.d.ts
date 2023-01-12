/**
 *
 * ConfirmPopup displays a confirmation overlay displayed relatively to its target.
 *
 * [Live Demo](https://www.primefaces.org/primereact/confirmpopup)
 *
 * @module confirmpopup
 *<
 */
import * as React from 'react';
import { CSSTransitionProps } from '../csstransition';
import { IconType } from '../utils';

/**
 * @todo Write the documantation
 */
interface ConfirmPopupOptions {
    /**
     * @todo Write the documantation
     */
    accept(): void;
    /**
     * @todo Write the documantation
     */
    reject(): void;
    /**
     * @todo Write the documantation
     */
    className: string;
    /**
     * @todo Write the documantation
     */
    acceptClassName: string;
    /**
     * @todo Write the documantation
     */
    rejectClassName: string;
    /**
     * @todo Write the documantation
     */
    acceptLabel: string;
    /**
     * @todo Write the documantation
     */
    rejectLabel: string;
    /**
     * @todo Write the documantation
     */
    element: React.ReactNode;
    /**
     * @todo Write the documantation
     */
    props: ConfirmPopupProps;
    /**
     * @todo Write the documantation
     */
    [key: string]: any;
}

/**
 * Defines valid properties in ConfirmPopup component.
 * @group Properties
 */
export interface ConfirmPopupProps {
    /**
     * @todo Write the documantation
     */
    tagKey?: string;
    /**
     * @todo Write the documantation
     */
    target?: HTMLElement;
    /**
     * Specifies the visibility of the confirm popup.
     * @defaultValue false
     */
    visible?: boolean;
    /**
     * Message of the confirmation.
     */
    message?: React.ReactNode | ((options: ConfirmPopupOptions) => React.ReactNode);
    /**
     * Label of the reject button.
     * @defaultValue No
     */
    rejectLabel?: string;
    /**
     * Label of the accept button.
     * @defaultValue Yes
     */
    acceptLabel?: string;
    /**
     * Icon to display next to the message.
     */
    icon?: IconType<ConfirmPopupProps>;
    /**
     * Icon of the reject button.
     */
    rejectIcon?: IconType<ConfirmPopupProps>;
    /**
     * Icon of the accept button.
     */
    acceptIcon?: IconType<ConfirmPopupProps>;
    /**
     * Style class of the reject button.
     */
    rejectClassName?: string;
    /**
     * Style class of the accept button.
     */
    acceptClassName?: string;
    /**
     * Style class of the element.
     */
    className?: string;
    /**
     * Inline style of the element.
     */
    style?: React.CSSProperties;
    /**
     * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
     * @defaultValue document.body
     */
    appendTo?: 'self' | HTMLElement | undefined | null;
    /**
     * Enables to hide the popup when outside is clicked.
     * @defaultValue true
     */
    dismissable?: boolean;
    /**
     * Footer content of the confirm popup.
     */
    footer?: React.ReactNode | ((options: ConfirmPopupOptions) => React.ReactNode);
    /**
     * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
     */
    transitionOptions?: CSSTransitionProps;
    /**
     * Callback to invoke when overlay panel becomes visible.
     */
    onShow?(): void;
    /**
     * Callback to invoke when confirm popup is hidden.
     */
    onHide?(result: string): void;
    /**
     * Callback to execute when action is confirmed.
     */
    accept?(): void;
    /**
     * Callback to execute when action is rejected.
     */
    reject?(): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @todo Write the documentation.
 */
interface ConfirmPopupReturn {
    /**
     * Used to show the popup.
     */
    show(): void;
    /**
     * Used to hide the popup.
     */
    hide(): void;
}

/**
 * @group Component
 */
export declare class ConfirmPopup extends React.Component<ConfirmPopupProps, any> {
    /**
     * @todo Write the documentation.
     * @param {ConfirmPopupProps} props
     */
    public confirm(props?: ConfirmPopupProps): void;
}

export declare function confirmPopup(props: ConfirmPopupProps): ConfirmPopupReturn;
