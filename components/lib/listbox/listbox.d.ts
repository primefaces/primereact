import * as React from 'react';
import { SelectItemOptionsType } from '../selectitem/selectitem';
import TooltipOptions from '../tooltip/tooltipoptions';
import { VirtualScrollerProps, VirtualScroller } from '../virtualscroller';

type ListBoxOptionGroupTemplateType<TOption> = React.ReactNode | ((option: TOption, index: number) => React.ReactNode);

type ListBoxItemTemplateType<TOption> = React.ReactNode | ((option: TOption) => React.ReactNode);

type ListBoxFilterTemplateType = React.ReactNode | ((options: ListBoxFilterOptions) => React.ReactNode);

type ListBoxOptionDisabledType<TOption> = string | ((option: TOption) => boolean);

type ListBoxValueType<TOption, TValue, TMultiple, TGroupLabel, TGroupChildren> = TMultiple extends undefined
    ? TGroupLabel extends undefined
        ? TValue extends undefined
            ? TOption extends { value: any }
                ? TOption['value']
                : TOption
            : TValue extends keyof TOption
            ? TOption[TValue]
            : any
        : TGroupChildren extends keyof TOption
        ? TValue extends undefined
            ? TOption[TGroupChildren] extends { value: any }[]
                ? TOption[TGroupChildren][0]['value']
                : TOption[TGroupChildren] extends any[]
                ? TOption[TGroupChildren][0]
                : any
            : TOption[TGroupChildren] extends any[]
            ? TValue extends keyof TOption[TGroupChildren][0]
                ? TOption[TGroupChildren][0][TValue]
                : any
            : any
        : any
    : TGroupLabel extends undefined
    ? TValue extends undefined
        ? TOption extends { value: any }
            ? TOption['value'][]
            : TOption[]
        : TValue extends keyof TOption
        ? TOption[TValue][]
        : any[]
    : TGroupChildren extends keyof TOption
    ? TValue extends undefined
        ? TOption[TGroupChildren] extends { value: any }[]
            ? TOption[TGroupChildren][0]['value'][]
            : TOption[TGroupChildren] extends any[]
            ? TOption[TGroupChildren][0]
            : any[]
        : TOption[TGroupChildren] extends any[]
        ? TValue extends keyof TOption[TGroupChildren][0]
            ? TOption[TGroupChildren][0][TValue][]
            : any[]
        : any[]
    : any[];

interface ListBoxChangeTargetOptions<TOption> {
    name: string;
    id: string;
    value: TOption;
}

interface ListBoxChangeParams<TOption, TValue, TMultiple, TGroupLabel, TGroupChildren> {
    originalEvent: React.SyntheticEvent;
    value: ListBoxValueType<TOption, TValue, TMultiple, TGroupLabel, TGroupChildren>;
    stopPropagation(): void;
    preventDefault(): void;
    target: ListBoxChangeTargetOptions<TOption>;
}

interface ListBoxFilterValueChangeParams<TOption> {
    originalEvent: React.SyntheticEvent;
    value: TOption;
}

interface ListBoxFilterOptions {
    filter?: (event?: KeyboardEvent) => void;
    reset?: () => void;
}
type NestedKeyOf<ObjectType> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}` : `${Key}`;
}[keyof ObjectType & (string | number)];
export interface ListBoxProps<TOption, TValue = undefined, TMultiple = undefined, TGroupLabel = undefined, TGroupChildren = undefined>
    extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'multiple' | 'value' | 'onChange' | 'ref'> {
    value?: ListBoxValueType<TOption, TValue, TMultiple, TGroupLabel, TGroupChildren>;
    options?: SelectItemOptionsType<TOption>;
    optionLabel?: NestedKeyOf<TOption> | Omit<NestedKeyOf<TOption>, string>;
    optionValue?: TValue | Omit<TValue, string>;
    optionDisabled?: ListBoxOptionDisabledType<TOption>;
    optionGroupLabel?: TGroupLabel | Omit<NestedKeyOf<TGroupLabel>, string>;
    optionGroupChildren?: TGroupChildren | Omit<NestedKeyOf<TGroupChildren>, string>;
    optionGroupTemplate?: ListBoxOptionGroupTemplateType<TOption>;
    itemTemplate?: ListBoxItemTemplateType<TOption>;
    filterTemplate?: ListBoxFilterTemplateType;
    listStyle?: object;
    listClassName?: string;
    virtualScrollerOptions?: VirtualScrollerProps;
    disabled?: boolean;
    dataKey?: NestedKeyOf<TOption> | Omit<NestedKeyOf<TOption>, string>;
    multiple?: TMultiple;
    metaKeySelection?: boolean;
    filter?: boolean;
    filterBy?: string;
    filterValue?: string;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    filterInputProps?: any;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    onChange?(e: ListBoxChangeParams<TOption, TValue, TMultiple, TGroupLabel, TGroupChildren>): void;
    onFilterValueChange?(e: ListBoxFilterValueChangeParams<TOption>): void;
    children?: React.ReactNode;
}

export declare class ListBox<
    TOption,
    TValue extends NestedKeyOf<TOption> | undefined = undefined,
    TMultiple = undefined,
    TGroupLabel extends NestedKeyOf<TOption> | undefined = undefined,
    TGroupChildren extends NestedKeyOf<TOption> | undefined = undefined
> extends React.Component<ListBoxProps<TOption, TValue, TMultiple, TGroupLabel, TGroupChildren>, any> {
    public getElement(): HTMLDivElement;
    public getVirtualScroller(): VirtualScroller;
}
