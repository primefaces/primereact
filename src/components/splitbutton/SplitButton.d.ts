import React = require("react");

interface SplitButtonProps {
    id?: string;
    label?: string;
    icon?: string;
    model?: Array<any>;
    disabled?: boolean;
    style?: object;
    className?: string;
    menuStyle?: object;
    menuClassName?: string;
    tabIndex?: string;
    appendTo?: HTMLElement;
    onClick?(event: Event): void;
}

export class SplitButton extends React.Component<SplitButtonProps,any> {}