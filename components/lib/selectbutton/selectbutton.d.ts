import * as React from 'react';
import { SelectItemOptionsType } from '../selectitem/selectitem';
import TooltipOptions from '../tooltip/tooltipoptions';

type SelectButtonOptionDisabledType<TOption> = string | ((option: TOption) => boolean);

interface SelectButtonChangeTargetOptions<TOption> {
    name: string;
    id: string;
    value: TOption;
}

type SelectButtonValue<TOption, TValue, TMultiple> = TMultiple extends undefined
    ? TValue extends undefined
        ? TOption extends { value: any }
            ? TOption['value']
            : TOption
        : TValue extends keyof TOption
        ? TOption[TValue]
        : any
    : TValue extends undefined
    ? TOption extends { value: any }
        ? TOption['value'][]
        : TOption[]
    : TValue extends keyof TOption
    ? TOption[TValue][]
    : any[];

interface SelectButtonChangeParams<TOption, TValue, TMultiple> {
    originalEvent: React.SyntheticEvent;
    value: SelectButtonValue<TOption, TValue, TMultiple>;
    stopPropagation(): void;
    preventDefault(): void;
    target: SelectButtonChangeTargetOptions<TOption>;
}

type NestedKeyOf<ObjectType> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}` : `${Key}`;
}[keyof ObjectType & (string | number)];

export interface SelectButtonProps<TOption, TValue = undefined, TMultiple = undefined> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'value' | 'multiple' | 'unselectable' | 'onChange' | 'ref'> {
    value?: string | number | ReadonlyArray<string> | ReadonlyArray<number> | SelectButtonValue<TOption, TValue, TMultiple> | ReadonlyArray<TOption> | undefined;
    options?: SelectItemOptionsType<TOption>;
    optionLabel?: NestedKeyOf<TOption> | Omit<NestedKeyOf<TOption>, string>;
    optionValue?: TValue | Omit<TValue, string>;
    optionDisabled?: SelectButtonOptionDisabledType<TOption>;
    tabIndex?: number;
    multiple?: TMultiple;
    unselectable?: boolean;
    disabled?: boolean;
    dataKey?: NestedKeyOf<TOption> | Omit<NestedKeyOf<TOption>, string>;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    itemTemplate?(option: TOption): React.ReactNode;
    onChange?(e: SelectButtonChangeParams<TOption, TValue, TMultiple>): void;
    children?: React.ReactNode;
}

export declare class SelectButton<TOption, TValue extends NestedKeyOf<TOption> | undefined = undefined, TMultiple = undefined> extends React.Component<SelectButtonProps<TOption, TValue, TMultiple>, any> {
    public getElement(): HTMLDivElement;
}
