import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

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
    style?: object;
    className?: string;
    inputId?: string;
    inputStyle?: object;
    inputClassName?: string;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    onChange?(e: {value: number}): void;
}

export class Spinner extends React.Component<SpinnerProps,any> {}