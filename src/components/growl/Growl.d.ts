import React = require("react");

interface GrowlProps {
    id?: string;
    closable?: boolean;
    className?: string;
    style?: object;
    baseZIndex?: number;
    onClick?(originalEvent: Event, message:any): void;
    onClose?(originalEvent: Event, message:any): void;
}

export class Growl extends React.Component<GrowlProps,any> {}