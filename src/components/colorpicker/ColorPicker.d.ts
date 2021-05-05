import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

type ColorPickerAppendToType = 'self' | HTMLElement | undefined | null;

interface ColorPickerChangeTargetOptions {
    name: string;
    id: string;
    value: string;
}

interface ColorPickerChangeParams {
    value: string;
    stopPropagation(): void;
    preventDefault(): void;
    target: ColorPickerChangeTargetOptions;
}

export interface ColorPickerProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
    inputRef?: React.Ref<HTMLInputElement>;
    defaultColor?: string;
    inline?: boolean;
    format?: string;
    appendTo?: ColorPickerAppendToType;
    inputId?: string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    transitionOptions?: object;
    onChange?(e: ColorPickerChangeParams): void;
    onShow?(): void;
    onHide?(): void;
}

export declare class ColorPicker extends React.Component<ColorPickerProps, any> { }
