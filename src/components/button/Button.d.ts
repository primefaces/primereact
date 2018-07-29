import React = require("react");
import {Omit} from "../util";

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
    label?: string;
    icon?: string;
    iconPos?: string;
    cornerStyleClass?: string;
    [key: string]: any;
}

export class Button extends React.Component<ButtonProps,any> {}
