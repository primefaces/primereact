import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface SpinnerProps {
    id?: string;
    value?: number;
    name?: string;
    step?: number;
    min?: number;
    max?: number;
    formatInput?: boolean;
    decimalSeparator?: string;
    thousandSeparator?: string;
    disabled?: boolean;
    required?: boolean;
    tabIndex?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    maxlength?: number;
    size?: number;
    style?: object;
    className?: string;
    inputId?: string;
    inputStyle?: object;
    inputClassName?: string;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    onChange?(e: {value: number}): void;
    onBlur?(e: Event): void;
}

export class Spinner extends React.Component<SpinnerProps,any> {}
