import * as React from 'react';
import { DialogProps } from '../dialog/Dialog.d.ts';

interface ConfirmDialogProps extends DialogProps {
    visible?: boolean;
    message?: any;
    rejectLabel?: string;
    acceptLabel?: string;
    icon?: string;
    rejectIcon?: string;
    acceptIcon?: string;
    rejectClassName?: string;
    acceptClassName?: string;
    appendTo?: any;
    className?: string;
    footer?: any;
    onHide?(result: string): void;
}

export class ConfirmDialog extends React.Component<ConfirmDialogProps,any> {}
