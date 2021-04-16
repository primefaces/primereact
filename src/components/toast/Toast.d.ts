import * as React from 'react';
import { MessageSeverity } from '../api';

declare namespace Toast {

    type MessageType = ToastMessage | ToastMessage[];

    type PositionType = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

    export interface ToastMessage {
        severity?: MessageSeverity;
        summary?: React.ReactNode;
        detail?: React.ReactNode;
        content?: React.ReactNode;
        closable?: boolean;
        sticky?: boolean;
        life?: number;
    }

    interface ToastProps {
        id?: string;
        className?: string;
        style?: object;
        baseZIndex?: number;
        position?: PositionType;
        transitionOptions?: object;
        onClick?(message: ToastMessage): void;
        onRemove?(message: ToastMessage): void;
        onShow?(): void;
        onHide?(): void;
    }
}

export declare class Toast extends React.Component<Toast.ToastProps, any> {
    public show(message: Toast.MessageType): void;
    public clear(): void;
}
