import * as React from 'react';

export interface GrowlMessage {
    severity?: 'success' | 'info' | 'warn' | 'error',
    summary?: React.ReactNode;
    detail?: React.ReactNode;
    closable?: boolean;
    sticky?: boolean;
    life?: number;
}

interface GrowlProps {
    id?: string;
    className?: string;
    style?: object;
    baseZIndex?: number;
    position?: string;
    onClick?(message: GrowlMessage): void;
    onClose?(message: GrowlMessage): void;
    onRemove?(message: GrowlMessage): void;
}

export class Growl extends React.Component<GrowlProps, any> {
    public show(message: GrowlMessage | GrowlMessage[]): void;
    public clear():void;
}
