import * as React from 'react';
import { SelectItemOptionsType } from '../selectitem/selectitem';
import TooltipOptions from '../tooltip/tooltipoptions';
import { VirtualScrollerProps, VirtualScroller } from '../virtualscroller';

type ListBoxOptionGroupTemplateType<TOption> = React.ReactNode | ((option: TOption, index: number) => React.ReactNode);

type ListBoxItemTemplateType<TOption> = React.ReactNode | ((option: TOption) => React.ReactNode);

type ListBoxFilterTemplateType = React.ReactNode | ((options: ListBoxFilterOptions) => React.ReactNode);

type ListBoxOptionDisabledType<TOption> = string | ((option: TOption) => boolean);

interface ListBoxChangeTargetOptions<TOption> {
    name: string;
    id: string;
    value: TOption;
}

interface ListBoxChangeParams<TOption> {
    originalEvent: React.SyntheticEvent;
    value: TOption;
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

export interface ListBoxProps<TOption> extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange' | 'ref'> {
    value?: any;
    options?: SelectItemOptionsType<TOption>;
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: ListBoxOptionDisabledType<TOption>;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    optionGroupTemplate?: ListBoxOptionGroupTemplateType<TOption>;
    itemTemplate?: ListBoxItemTemplateType<TOption>;
    filterTemplate?: ListBoxFilterTemplateType;
    listStyle?: object;
    listClassName?: string;
    virtualScrollerOptions?: VirtualScrollerProps;
    disabled?: boolean;
    dataKey?: string;
    multiple?: boolean;
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
    onChange?(e: ListBoxChangeParams<TOption>): void;
    onFilterValueChange?(e: ListBoxFilterValueChangeParams<TOption>): void;
    children?: React.ReactNode;
}

export declare class ListBox<TOption> extends React.Component<ListBoxProps<TOption>, any> {
    public getElement(): HTMLDivElement;
    public getVirtualScroller(): VirtualScroller;
}
