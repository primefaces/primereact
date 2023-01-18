/**
 *
 * ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag.
 *
 * [Live Demo](https://www.primefaces.org/primereact/confirmdialog)
 *
 * @module confirmdialog
 *
 */
import * as React from 'react';
import { DialogProps } from '../dialog';
import { IconType } from '../utils';

/**
 * @todo Write the documantation
 */
interface ConfirmDialogOptions {
    /**
     * @todo Write the documentation.
     */
    accept(): void;
    /**
     * @todo Write the documentation.
     */
    reject(): void;
    /**
     * @todo Write the documentation.
     */
    acceptClassName: string;
    /**
     * @todo Write the documentation.
     */
    rejectClassName: string;
    /**
     * @todo Write the documentation.
     */
    acceptLabel: string;
    /**
     * @todo Write the documentation.
     */
    rejectLabel: string;
    /**
     * @todo Write the documentation.
     */
    element: React.ReactNode;
    /**
     * @todo Write the documentation.
     */
    props: ConfirmDialogProps;
    /**
     * @todo Write the documentation.
     */
    [key: string]: any;
}

/**
 * Defines valid properties in ConfirmDialog component. In addition to these, all properties of {@link dialog} can be used in this component.
 * @group Properties
 */
export interface ConfirmDialogProps extends Omit<DialogProps, 'onHide' | 'footer'> {
    /**
     * @todo Write the documentation.
     */
    tagKey?: string | undefined;
    /**
     * Specifies the visibility of the confirm dialog.
     * @defaultValue false
     */
    visible?: boolean | undefined;
    /**
     * Message of the confirmation.
     */
    message?: React.ReactNode | ((options: ConfirmDialogOptions) => React.ReactNode);
    /**
     * Label of the reject button.
     * @defaultValue No
     */
    rejectLabel?: string | undefined;
    /**
     * Label of the accept button.
     * @defaultValue Yes
     */
    acceptLabel?: string | undefined;
    /**
     * Icon to display next to the message.
     */
    icon?: IconType<ConfirmDialogProps> | undefined;
    /**
     * Icon of the reject button.
     */
    rejectIcon?: IconType<ConfirmDialogProps> | undefined;
    /**
     * Icon of the accept button.
     */
    acceptIcon?: IconType<ConfirmDialogProps> | undefined;
    /**
     * Style class of the reject button.
     */
    rejectClassName?: string | undefined;
    /**
     * Style class of the accept button.
     */
    acceptClassName?: string | undefined;
    /**
     * @todo Write the documentation.
     */
    appendTo?: 'self' | HTMLElement | undefined | null | undefined;
    /**
     * Style class of the element.
     */
    className?: string | undefined;
    /**
     * Footer content of the confirm dialog.
     */
    footer?: React.ReactNode | ((options: ConfirmDialogOptions) => React.ReactNode);
    /**
     * Callback to invoke when confirm dialog is hidden.
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
interface ConfirmDialogReturn {
    /**
     * Used to show the dialog.
     */
    show(): void;
    /**
     * Used to hide the dialog.
     */
    hide(): void;
}

/**
 * @group Component
 */
export declare class ConfirmDialog extends React.Component<ConfirmDialogProps, any> {
    /**
     * @todo Write the documentation.
     * @param {ConfirmDialogProps} props
     */
    public confirm(props?: ConfirmDialogProps): void;
}

export declare function confirmDialog(props: ConfirmDialogProps): ConfirmDialogReturn;
