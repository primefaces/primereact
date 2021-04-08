import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

type OptionGroupTemplateType = string | JSX.Element | ((option: any, index: number) => JSX.Element);

type ValueTemplateType = string | JSX.Element | ((option: any, props: DropdownProps) => JSX.Element);

type ItemTemplateType = string | JSX.Element | ((option: any) => JSX.Element);

type EmptyFilterMessageType = string | JSX.Element | ((props: DropdownProps) => JSX.Element);

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: string | undefined | null;
}

interface OnChangeParams {
    originalEvent: Event;
    value: string | undefined | null;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface DropdownProps {
    id?: string;
    inputRef?: React.Ref<HTMLSelectElement>;
    name?: string;
    value?: any;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    optionDisabled?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    optionGroupTemplate?: OptionGroupTemplateType;
    valueTemplate?: ValueTemplateType;
    itemTemplate?: ItemTemplateType;
    style?: object;
    className?: string;
    scrollHeight?: string;
    filter?: boolean;
    filterBy?: string;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    emptyFilterMessage?: EmptyFilterMessageType;
    editable?: boolean;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    appendTo?: HTMLElement;
    tabIndex?: number;
    autoFocus?: boolean;
    filterInputAutoFocus?: boolean;
    resetFilterOnHide?: boolean;
    showFilterClear?: boolean;
    lazy?: boolean;
    panelClassName?: string;
    panelStyle?: object;
    dataKey?: string;
    inputId?: string;
    showClear?: boolean;
    maxLength?: number;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    onChange?(e: OnChangeParams): void;
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;
    onMouseDown?(event: React.MouseEvent<HTMLElement>): void;
    onContextMenu?(event: React.MouseEvent<HTMLElement>): void;
}

export class Dropdown extends React.Component<DropdownProps, any> { }
