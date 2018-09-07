import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface InputSwitchProps {
    id?: string;
    offLabel?: string;
    onLabel?: string;
    style?: object;
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    onChange?(e: {originalEvent: Event, value: boolean}): void;
    onFocus?(event: Event): void;
    onBlur?(event: Event): void;
}

export class InputSwitch extends React.Component<InputSwitchProps,any> {}