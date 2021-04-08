import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: boolean;
}

interface OnChangeParams {
    originalEvent: Event;
    value: boolean;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface InputSwitchProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    style?: object;
    className?: string;
    inputId?: string;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    onChange?(e: OnChangeParams): void;
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;
}

export class InputSwitch extends React.Component<InputSwitchProps, any> { }
