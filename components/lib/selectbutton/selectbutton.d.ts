import * as React from 'react';
import TooltipOptions from '../tooltip/tooltipoptions';
import { SelectItemOptionsType } from '../selectitem/selectitem';

type SelectButtonOptionDisabledType<TOption> = string | ((option: TOption) => boolean);

interface SelectButtonChangeTargetOptions<TOption> {
    name: string;
    id: string;
    value: TOption;
}

interface SelectButtonChangeParams<TOption> {
    originalEvent: React.SyntheticEvent;
    value: any;
    stopPropagation(): void;
    preventDefault(): void;
    target: SelectButtonChangeTargetOptions<TOption>;
}

export interface SelectButtonProps<TOption> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'unselectable' | 'onChange' | 'ref'> {
    value?: any;
    options?: SelectItemOptionsType<TOption>;
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: SelectButtonOptionDisabledType<TOption>;
    tabIndex?: number;
    multiple?: boolean;
    unselectable?: boolean;
    disabled?: boolean;
    dataKey?: string;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    itemTemplate?(option: TOption): React.ReactNode;
    onChange?(e: SelectButtonChangeParams<TOption>): void;
    children?: React.ReactNode;
}

export declare class SelectButton<TOption> extends React.Component<SelectButtonProps<TOption>, any> {
    public getElement(): HTMLDivElement;
}
