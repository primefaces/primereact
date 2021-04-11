import * as React from 'react';

type SeverityType = 'success' | 'info' | 'warn' | 'error';

type PositionType = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface ToastMessage {
    severity?: SeverityType;
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
    onClick?(message: ToastMessage): void;
    onRemove?(message: ToastMessage): void;
}

export declare class Toast extends React.Component<ToastProps, any> {
    public show(message: ToastMessage | ToastMessage[]): void;
    public clear(): void;
}
