import React = require("react");

export interface GrowlMessage {
    severity: 'success' | 'info' | 'warn' | 'error',
    summary: string;
    detail: string;
}

interface GrowlProps {
    id?: string;
    value?: GrowlMessage[];
    closable?: boolean;
    className?: string;
    style?: object;
    baseZIndex?: number;
    onClick?(originalEvent: Event, message: GrowlMessage): void;
    onClose?(originalEvent: Event, message: GrowlMessage): void;
}

export class Growl extends React.Component<GrowlProps,any> {}