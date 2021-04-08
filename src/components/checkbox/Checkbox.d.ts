import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface OnChangeTargetOptions {
    type: 'checkbox';
    name: string;
    id: string;
    value: any;
    checked: boolean;
}

interface OnChangeParams {
    originalEvent: Event;
    value: any;
    checked: boolean;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface CheckboxProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    inputId?: string;
    value?: any;
    name?: string;
    checked?: boolean;
    style?: object;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    tabIndex?: number;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    onChange?(e: OnChangeParams): void;
    onMouseDown?(event: React.MouseEvent<HTMLElement>): void;
    onContextMenu?(event: React.MouseEvent<HTMLElement>): void;
}

export class Checkbox extends React.Component<CheckboxProps, any> { }
