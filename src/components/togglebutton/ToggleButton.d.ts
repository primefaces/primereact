import React = require("react");

interface ToggleButtonProps {
    id?: string;
    onIcon?: string;
    offIcon?: string;
    onLabel?: string;
    offLabel?: string;
    style?: object;
    className?: string;
    checked?: boolean;
    onChange?(e: {originalEvent: Event, value: boolean}): void;
}

export class ToggleButton extends React.Component<ToggleButtonProps,any> {}