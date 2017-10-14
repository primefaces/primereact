import React = require("react");

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    label?: string;
    icon?: string;
    iconPos?: string;
    cornerStyleClass?: string;
    [key: string]: any;
}

export class Button extends React.Component<ButtonProps,any> {}