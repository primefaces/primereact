import * as React from 'react';
import TooltipOptions from '../tooltip/tooltipoptions';
import { IconType } from '../utils';

type ToggleButtonIconPositionType = 'left' | 'right';

interface ToggleButtonChangeTargetOptions {
    name: string;
    id: string;
    value: boolean;
}

interface ToggleButtonChangeParams {
    originalEvent: React.SyntheticEvent;
    value: boolean;
    stopPropagation(): void;
    preventDefault(): void;
    target: ToggleButtonChangeTargetOptions;
}

export interface ToggleButtonProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'ref'> {
    checked?: boolean;
    children?: React.ReactNode;
    iconPos?: ToggleButtonIconPositionType;
    offIcon?: IconType<ToggleButtonProps>;
    offLabel?: string;
    onIcon?: IconType<ToggleButtonProps>;
    onLabel?: string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    onBlur?(event: React.FocusEvent<HTMLElement>): void;
    onChange?(e: ToggleButtonChangeParams): void;
    onFocus?(event: React.FocusEvent<HTMLElement>): void;
}

export declare class ToggleButton extends React.Component<ToggleButtonProps, any> {
    public focus(): void;
    public getElement(): HTMLDivElement;
}
