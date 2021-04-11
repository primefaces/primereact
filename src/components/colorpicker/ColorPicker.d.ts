import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface ChangeTargetOptions {
    name: string;
    id: string;
    value: string;
}

interface ChangeParams {
    value: string;
    stopPropagation(): void;
    preventDefault(): void;
    target: ChangeTargetOptions;
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
    onChange?(e: ChangeParams): void;
}

export class ColorPicker extends React.Component<ColorPickerProps, any> { }
