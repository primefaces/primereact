import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface OnCompleteParams {
    originalEvent: Event;
    value: string | undefined | null;
}

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: string;
}

interface OnChangeParams {
    originalEvent: Event;
    value: string;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface InputMaskProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    value?: string;
    type?: string;
    mask?: string;
    slotChar?: string;
    autoClear?: boolean;
    unmask?: boolean;
    style?: object;
    className?: string;
    placeholder?: string;
    size?: number;
    maxlength?: number;
    tabIndex?: number;
    disabled?: boolean;
    readOnly?: boolean;
    name?: string;
    required?: boolean;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    onComplete?(e: OnCompleteParams): void;
    onChange?(e: OnChangeParams): void;
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;
}

export class InputMask extends React.Component<InputMaskProps, any> { }
