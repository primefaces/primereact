import * as React from 'react';
import { DialogProps } from '../dialog/Dialog';

type MessageTemplateType = React.ReactNode | ((props: ConfirmDialogProps) => React.ReactNode);

type FooterTemplateType = React.ReactNode | ((props: ConfirmDialogProps) => React.ReactNode);

interface Breakpoints {
    [key: string]: string
}

interface ConfirmDialogProps extends Omit<DialogProps, 'onHide'> {
    visible?: boolean;
    message?: MessageTemplateType;
    rejectLabel?: string;
    acceptLabel?: string;
    icon?: string;
    rejectIcon?: string;
    acceptIcon?: string;
    rejectClassName?: string;
    acceptClassName?: string;
    appendTo?: HTMLElement;
    className?: string;
    footer?: FooterTemplateType;
    breakpoints?: Breakpoints;
    onHide?(result: string): void;
    accept?(): void;
    reject?(): void;
}

export class ConfirmDialog extends React.Component<ConfirmDialogProps, any> { }

interface ConfirmDialogReturn {
    show(): void;
    hide(): void;
}

export function confirmDialog(props: ConfirmDialogProps): ConfirmDialogReturn;
