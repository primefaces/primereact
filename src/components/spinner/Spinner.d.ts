import React = require("react");

interface SpinnerProps {
    id?: string;
    value?: number;
    name?: string;
    step?: number;
    min?: number;
    max?: number;
    disabled?: boolean;
    readonly?: boolean;
    maxlength?: number;
    size?: number;
    decimalSeparator?: string;
    thousandSeparator?: string;
    style?: object;
    className?: string;
    inputId?: string;
    inputStyle?: object;
    inputClassName?: string;
    onChange?(e: {value: number}): void;
}

export class Spinner extends React.Component<SpinnerProps,any> {}