import * as React from 'react';
import { DialogProps } from '../dialog/Dialog';

type TemplateType = React.ReactNode | ((props: ConfirmDialogProps) => React.ReactNode);

interface Breakpoints {
    [key: string]: string;
}

interface ConfirmDialogProps extends Omit<DialogProps, 'onHide'> {
    visible?: boolean;
    message?: TemplateType;
    rejectLabel?: string;
    acceptLabel?: string;
    icon?: string;
    rejectIcon?: string;
    acceptIcon?: string;
    rejectClassName?: string;
    acceptClassName?: string;
    appendTo?: HTMLElement;
    className?: string;
    footer?: TemplateType;
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

export declare function confirmDialog(props: ConfirmDialogProps): ConfirmDialogReturn;
