import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: string;
}

interface OnChangeParams {
    value: string;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface ColorPickerProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    value?: string;
    style?: object;
    className?: string;
    defaultColor?: string;
    inline?: boolean;
    format?: string;
    appendTo?: HTMLElement;
    disabled?: boolean;
    tabIndex?: number;
    inputId?: string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    onChange?(e: OnChangeParams): void;
}

export class ColorPicker extends React.Component<ColorPickerProps, any> { }
