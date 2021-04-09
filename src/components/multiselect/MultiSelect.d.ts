import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

type OptionGroupTemplateType = string | JSX.Element | ((option: any, index: number) => JSX.Element);

type ItemTemplateType = string | JSX.Element | ((option: any) => JSX.Element);

type SelectedItemTemplateType = string | JSX.Element | ((value: any) => JSX.Element);

type EmptyFilterMessageType = string | JSX.Element | ((props: MultiSelectProps) => JSX.Element);

interface PanelHeaderTemplateParams {
    className: string;
    checkboxElement: HTMLElement;
    checked: boolean;
    onChange(e: { originalEvent: Event, checked: boolean }): void;
    filterElement: JSX.Element;
    closeElement: JSX.Element;
    closeElementClassName: string;
    closeIconClassName: string;
    onCloseClick(event: React.MouseEvent<HTMLElement>): void;
    element: JSX.Element;
    props: MultiSelectProps;
}

type PanelHeaderTemplateType = string | JSX.Element | ((e: PanelHeaderTemplateParams) => JSX.Element);

type PanelFooterTemplateType = string | JSX.Element | ((props: MultiSelectProps) => JSX.Element);

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

interface MultiSelectProps {
    id?: string;
    inputRef?: React.Ref<HTMLSelectElement>;
    name?: string;
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: boolean;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    optionGroupTemplate?: OptionGroupTemplateType;
    display?: string;
    style?: object;
    className?: string;
    panelClassName?: string;
    panelStyle?: object;
    scrollHeight?: string;
    placeholder?: string;
    fixedPlaceholder?: boolean;
    disabled?: boolean;
    showClear?: boolean;
    filter?: boolean;
    filterBy?: string;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    emptyFilterMessage?: EmptyFilterMessageType;
    resetFilterOnHide?: boolean;
    tabIndex?: number;
    dataKey?: string;
    inputId?: string;
    required?: boolean;
    appendTo?: HTMLElement;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    maxSelectedLabels?: number;
    selectionLimit?: number;
    selectedItemsLabel?: string;
    ariaLabelledBy?: string;
    itemTemplate?: ItemTemplateType;
    selectedItemTemplate?: SelectedItemTemplateType;
    panelHeaderTemplate?: PanelHeaderTemplateType;
    panelFooterTemplate?: PanelFooterTemplateType;
    onChange?(e: OnChangeParams): void;
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;
}

export class MultiSelect extends React.Component<MultiSelectProps, any> { }
