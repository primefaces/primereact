import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

type OptionGroupTemplateType = string | JSX.Element | ((option: any, index: number) => JSX.Element);

type ItemTemplateType = string | JSX.Element | ((option: any) => JSX.Element);

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: any;
}

interface OnChangeParams {
    originalEvent: Event;
    value: any;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface OnFilterValueChangeParams {
    originalEvent: Event;
    value: any;
}

interface ListBoxProps {
    id?: string;
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    optionGroupTemplate?: OptionGroupTemplateType;
    itemTemplate?: ItemTemplateType;
    style?: object;
    listStyle?: object;
    listClassName?: string;
    className?: string;
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
    tabIndex?: number;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    onChange?(e: OnChangeParams): void;
    onFilterValueChange(e: OnFilterValueChangeParams): void;
}

export class ListBox extends React.Component<ListBoxProps, any> { }
