import React = require("react");

interface TooltipProps {
    for?: any;
    title?: string;
    tooltipPosition?: string;
    tooltipEvent?: string;
    appendTo?: string | HTMLElement;
    positionStyle?: object;
    tooltipClassName?: string;
    tooltipDisabled?: boolean;
    escape?: boolean;
    hideDelay?: number;
    showDelay?: number;
    onBeforeShow?(e: Event): void;
}

export class Tooltip extends React.Component<TooltipProps,any> {}