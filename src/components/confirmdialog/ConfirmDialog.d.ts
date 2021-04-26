import * as React from 'react';
import { DialogProps } from '../dialog/Dialog';

type ConfirmDialogTemplateType = React.ReactNode | ((props: ConfirmDialogProps) => React.ReactNode);

type ConfirmDialogAppendToType = 'self' | HTMLElement | undefined | null;

interface ConfirmDialogBreakpoints {
    [key: string]: string;
}

export interface ConfirmDialogProps extends Omit<DialogProps, 'onHide'> {
    visible?: boolean;
    message?: ConfirmDialogTemplateType;
    rejectLabel?: string;
    acceptLabel?: string;
    icon?: string;
    rejectIcon?: string;
    acceptIcon?: string;
    rejectClassName?: string;
    acceptClassName?: string;
    appendTo?: ConfirmDialogAppendToType;
    className?: string;
    footer?: ConfirmDialogTemplateType;
    breakpoints?: ConfirmDialogBreakpoints;
    onHide?(result: string): void;
    accept?(): void;
    reject?(): void;
}

interface ConfirmDialogReturn {
    show(): void;
    hide(): void;
}

export declare class ConfirmDialog extends React.Component<ConfirmDialogProps, any> { }

export declare function confirmDialog(props: ConfirmDialogProps): ConfirmDialogReturn;
