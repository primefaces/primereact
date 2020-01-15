import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface SelectButtonProps {
    id?: string;
    value?: any;
    options?: any[];
    optionLabel?: string;
    tabIndex?: string;
    multiple?: boolean;
    disabled?: boolean;
    style?: object;
    className?: string;
    dataKey?: string;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class SelectButton extends React.Component<SelectButtonProps,any> {}
