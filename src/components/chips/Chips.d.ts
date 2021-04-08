import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface OnAddParams {
    originalEvent: Event;
    value: any;
}

interface OnRemoveParams extends OnAddParams { }

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: any[];
}

interface OnChangeParams {
    originalEvent: Event;
    value: any[];
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface ChipsProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    name?: string;
    placeholder?: string;
    value?: any[];
    max?: number;
    disabled?: boolean;
    style?: object;
    className?: string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    separator?: string;
    allowDuplicate?: boolean;
    itemTemplate?(item: any): React.ReactNode;
    onAdd?(e: OnAddParams): void;
    onRemove?(e: OnRemoveParams): void;
    onChange?(e: OnChangeParams): void;
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;
}

export class Chips extends React.Component<ChipsProps, any> { }
