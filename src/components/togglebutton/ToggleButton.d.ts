import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

type IconPositionType = 'left' | 'right';

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

interface ToggleButtonProps {
    id?: string;
    onIcon?: string;
    offIcon?: string;
    onLabel?: string;
    offLabel?: string;
    iconPos?: IconPositionType;
    style?: object;
    className?: string;
    checked?: boolean;
    tabIndex?: number;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    onChange?(e: OnChangeParams): void;
    onFocus?(event: React.FormEvent<HTMLElement>): void;
    onBlur?(event: React.FormEvent<HTMLElement>): void;
}

export class ToggleButton extends React.Component<ToggleButtonProps, any> { }
