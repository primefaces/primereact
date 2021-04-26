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

export interface ColorPickerProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    value?: string;
    style?: object;
    className?: string;
    defaultColor?: string;
    inline?: boolean;
    format?: string;
    appendTo?: ColorPickerAppendToType;
    disabled?: boolean;
    tabIndex?: number;
    inputId?: string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    transitionOptions?: object;
    onChange?(e: ColorPickerChangeParams): void;
    onShow?(): void;
    onHide?(): void;
}

export declare class ColorPicker extends React.Component<ColorPickerProps, any> { }
