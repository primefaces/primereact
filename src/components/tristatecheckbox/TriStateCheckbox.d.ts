import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: boolean | undefined | null;
}

interface OnChangeParams {
    originalEvent: Event;
    value: boolean | undefined | null;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface TriStateCheckboxProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    inputId?: string;
    value?: boolean | undefined | null;
    name?: string;
    style?: object;
    className?: string;
    disabled?: boolean;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    onChange?(e: OnChangeParams): void;
}

export class TriStateCheckbox extends React.Component<TriStateCheckboxProps, any> { }
