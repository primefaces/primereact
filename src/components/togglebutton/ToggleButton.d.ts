import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface ToggleButtonProps {
    id?: string;
    onIcon?: string;
    offIcon?: string;
    onLabel?: string;
    offLabel?: string;
    style?: object;
    className?: string;
    checked?: boolean;
    tabIndex?: number;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?:string;
    onChange?(e: {originalEvent: Event, value: boolean}): void;
}

export class ToggleButton extends React.Component<ToggleButtonProps,any> {}
