import React = require("react");

interface SpinnerProps {
    id?: string,
    value?: number,
    step?: number,
    min?: number,
    max?: number,
    disabled?: boolean,
    readonly?: boolean,
    maxlength?: number,
    size?: number,
    decimalSeparator?: string,
    thousandSeparator?: string,
    style?: string,
    className?: string,
    onChange?(e: {value: number}): void
}

export class Spinner extends React.Component<SpinnerProps,any> {}