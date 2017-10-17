import React = require("react");

interface OverlayPanelProps {
    id?: string;
    dismissable?: boolean;
    showCloseIcon?: boolean;
    style?: object;
    className?: string;
    appendTo?: any;
}

export class OverlayPanel extends React.Component<OverlayPanelProps,any> {}