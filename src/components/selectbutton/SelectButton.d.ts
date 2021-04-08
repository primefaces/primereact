import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: any;
}

interface OnChangeParams {
    originalEvent: Event;
    value: any;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface SelectButtonProps {
    id?: string;
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: string;
    tabIndex?: number;
    multiple?: boolean;
    disabled?: boolean;
    style?: object;
    className?: string;
    dataKey?: string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    itemTemplate?(option: any): React.ReactNode;
    onChange?(e: OnChangeParams): void;
}

export class SelectButton extends React.Component<SelectButtonProps, any> { }
