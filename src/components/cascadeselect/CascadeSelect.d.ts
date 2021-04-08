import * as React from 'react';

type ItemTemplateType = string | JSX.Element | ((option: any) => JSX.Element);

interface OnChangeParams {
    originalEvent: Event;
    value: any;
}

interface OnGroupChangeParams extends OnChangeParams { }

interface CascadeSelectProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    style?: object;
    className?: string;
    value?: any;
    name?: string;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    optionGroupLabel?: string;
    optionGroupChildren?: string[];
    placeholder?: string;
    itemTemplate?: ItemTemplateType;
    disabled?: boolean;
    dataKey?: string;
    inputId?: string;
    tabIndex?: number;
    ariaLabelledBy?: string;
    appendTo?: React.HTMLElement;
    onChange?(e: OnChangeParams): void;
    onGroupChange?(e: OnGroupChangeParams): void;
    onBeforeShow?(): void;
    onBeforeHide?(): void;
    onShow?(): void;
    onHide?(): void;
}

export class CascadeSelect extends React.Component<CascadeSelectProps, any> { }
