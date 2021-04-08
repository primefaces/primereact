import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

type OptionGroupTemplateType = string | JSX.Element | ((suggestion: any, index: number) => JSX.Element);

type ItemTemplateType = string | JSX.Element | ((suggestion: any, index: number) => JSX.Element);

type SelectedItemTemplateType = string | JSX.Element | ((value: any) => JSX.Element);

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

interface OnSelectParams {
    originalEvent: Event;
    value: any;
}

interface OnUnSelectParams extends OnSelectParams { }

interface OnDropdownClickParams {
    originalEvent: Event;
    query: string;
}

interface CompleteMethodParams {
    originalEvent: Event;
    query: string;
}

interface AutoCompleteProps {
    id?: string;
    inputRef?: string;
    value?: any;
    name?: string;
    type?: string;
    suggestions?: any[];
    field?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string;
    optionGroupTemplate?: OptionGroupTemplateType;
    forceSelection?: boolean;
    autoHighlight?: boolean;
    scrollHeight?: string;
    dropdown?: boolean;
    dropdownMode?: string;
    multiple?: boolean;
    minLength?: number;
    delay?: number;
    style?: object;
    className?: string;
    inputId?: string;
    inputStyle?: object;
    inputClassName?: string;
    panelClassName?: string;
    panelStyle?: object;
    placeholder?: string;
    readOnly?: boolean;
    disabled?: boolean;
    maxlength?: number;
    size?: number;
    appendTo?: HTMLElement;
    tabIndex?: number;
    autoFocus?: boolean;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    completeMethod?(e: CompleteMethodParams): void;
    itemTemplate?: ItemTemplateType;
    selectedItemTemplate?: SelectedItemTemplateType;
    onChange?(e: OnChangeParams): void;
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;
    onSelect?(e: OnSelectParams): void;
    onUnselect?(e: OnUnSelectParams): void;
    onDropdownClick?(e: OnDropdownClickParams): void;
    onClick?(event: React.MouseEvent<HTMLElement>): void;
    onDblClick?(event: React.MouseEvent<HTMLElement>): void;
    onMouseDown?(event: React.MouseEvent<HTMLElement>): void;
    onKeyUp?(event: React.KeyboardEvent<HTMLInputElement>): void;
    onKeyPress?(event: React.KeyboardEvent<HTMLInputElement>): void;
    onContextMenu?(event: React.MouseEvent<HTMLElement>): void;
    onClear?(event: Event): void;
}

export class AutoComplete extends React.Component<AutoCompleteProps, any> { }
