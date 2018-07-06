import React = require("react");

export interface GrowlMessage {
    severity: 'success' | 'info' | 'warn' | 'error',
    summary: Element | string;
    detail: Element | string;
    closable: boolean;
    sticky: boolean;
    life: number;
}

interface GrowlProps {
    id?: string;
    className?: string;
    style?: object;
    baseZIndex?: number;
    position?: string;
    onClick?(message: GrowlMessage): void;
    onClose?(message: GrowlMessage): void;
}

export class Growl extends React.Component<GrowlProps,any> {}